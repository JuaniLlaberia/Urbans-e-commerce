import { pageSize } from '../utils/constants';
import supabase from './supabase';

export const getProducts = async ({ page, sku, order }) => {
  let query = supabase.from('products').select('*', {
    count: 'exact',
  });

  if (sku) {
    query.textSearch('SKU', sku);
  }

  if (page) {
    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;
    query.range(from, to);
  }

  if (order) {
    query.order(order.order, {
      ascending: order.direction === 'asc',
    });
  }

  const { data, error, count } = await query;

  if (error) {
    console.log(error);
    throw new Error('Could not get products from the API');
  }

  return { data, count };
};

export const getProduct = async id => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw new Error('Could not get the product from the API');

  return data;
};

export const getProductBySKU = async productSKU => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('SKU', productSKU)
    .single();

  if (error) {
    console.log(error);
    throw new Error('Could not get the product from the API');
  }

  return data;
};

export const editStock = async (id, newData) => {
  const { data, error } = await supabase
    .from('products-size-stock')
    .update(newData)
    .eq('id', id);

  if (error) {
    console.log(error);
    throw new Error('Could not update');
  }

  return data;
};

export const getStock = async ({ page, order, productId }) => {
  let query = supabase
    .from('products-size-stock')
    .select('*, productId!inner(SKU, name, id)', { count: 'exact' });

  if (productId) {
    query.eq('productId.id', productId);
  }

  if (page) {
    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;
    query.range(from, to);
  }

  if (order) {
    query.order(order.order, {
      ascending: order.direction === 'asc',
    });
  }

  const { data, count, error } = await query;

  if (error) {
    console.log(error);
    throw new Error('Could not get the products from the API');
  }

  return { data, count };
};

export const getStockFromId = async id => {
  if (!id) return [];

  const { data, error } = await supabase
    .from('products-size-stock')
    .select('*, productId!inner(*)')
    .eq('productId.id', id);
  // .order('size', { ascending: false });

  if (error) {
    console.log(error);
    throw new Error('Failed to fetch stock with given ID');
  }

  return data;
};

export const deleteStockItem = async id => {
  const { error } = await supabase
    .from('products-size-stock')
    .delete()
    .eq('id', id)
    .single();

  if (error) throw new Error('Could not remove the item');
};

export const getVariantsByName = async ({ productName, page, order }) => {
  let query = supabase
    .from('products')
    .select('*', { count: 'exact' })
    .eq('name', productName);

  if (page) {
    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;
    query.range(from, to);
  }

  if (order) {
    query.order(order.order, {
      ascending: order.direction === 'asc',
    });
  }

  const { data, count, error } = await query;

  if (error) throw new Error('Could not get the products from the API');

  return { data, count };
};

export const createProduct = async newProduct => {
  //Create image path
  const imgName = `${Math.random()}-${newProduct.img.name}`.replace('/', '');
  const imgPath = `https://geuzjkdzkblmryfdmtpi.supabase.co/storage/v1/object/public/products-img/${imgName}`;

  //Create product with the image path and uload product
  const product = { ...newProduct, img: imgPath };

  const { data, error } = await supabase.from('products').insert([product]);

  if (error) throw new Error('Could not create new product. Api failed');

  //Upload image to the storage
  const { error: errorImg } = supabase.storage
    .from('products-img')
    .upload(imgName, newProduct.img);

  //If image failed => Delete product
  if (errorImg) {
    await supabase.from('products').delete().eq('id', data.id);
    throw new Error(
      'The image could not be uploaded, so the product was not created'
    );
  }

  return data;
};

export const createVariant = async (productId, newVariant) => {
  //Check if that variant already exist
  const variantExist = await supabase
    .from('products-size-stock')
    .select('*')
    .eq('productId', productId)
    .eq('size', newVariant.size)
    .single();

  if (variantExist.data) {
    //If it already exist we update it
    const { data, error } = await supabase
      .from('products-size-stock')
      .update(newVariant)
      .eq('id', variantExist.data.id);

    if (error) console.log(error);

    return data;
  } else {
    // If it doesnt exist we create a new one
    const { data, error } = await supabase
      .from('products-size-stock')
      .insert([{ ...newVariant, productId }]);

    if (error) console.log(error);

    return data;
  }
};

export const editProduct = async (id, editedProduct, oldImg) => {
  //1. Check if there is new or old img
  const hasOldImg = Boolean(oldImg);
  let newImgName;
  let newImgPath;

  if (hasOldImg) {
    newImgName = `${Math.random()}-${editedProduct.img.name}`;
    newImgPath = `https://geuzjkdzkblmryfdmtpi.supabase.co/storage/v1/object/public/products-img/${newImgName}`;
  }

  const productToUpload = hasOldImg
    ? { ...editedProduct, img: newImgPath }
    : editedProduct;

  // 2. Update product information in supabase
  const { data, error } = await supabase
    .from('products')
    .update(productToUpload)
    .eq('id', id)
    .single();

  if (error) throw new Error('Could not update product');

  if (!hasOldImg) return data;

  //3. Upload new image
  const { error: errorImg } = await supabase.storage
    .from('products-img')
    .upload(newImgName, editedProduct.img);

  //3.1 If image failed, put again the old one and return.
  if (errorImg) {
    console.log(errorImg);
    const { data } = await supabase
      .from('products')
      .update({ ...productToUpload, img: oldImg })
      .eq('id', id)
      .single();

    return data;
  }
  //4. Delete old image
  const { error: errorRemove } = await supabase.storage
    .from('products-img')
    .remove(oldImg);

  if (errorRemove) throw new Error('Failed to remove old image');

  return data;
};

export const deleteProduct = async (id, imgToRemove) => {
  //1. Remove the product itself
  const { error: errorProduct } = await supabase
    .from('products')
    .delete()
    .eq('id', id);

  if (errorProduct) throw new Error('Could not remove the product');

  //2. Remove image from storage
  const { error } = await supabase.storage
    .from('products-img')
    .remove([imgToRemove]);

  if (error) throw new Error('Could not remove the image');

  return null;
};

export const getProductsByCategory = async (
  mainCat,
  subCat,
  filterColor,
  filterPrice,
  sorting,
  page
) => {
  let query = supabase
    .from('products')
    .select('*', { count: 'exact' })
    .eq('mainCategory', mainCat);

  if (subCat) {
    query = query.eq('subCategory', subCat);
  }

  if (filterColor && filterColor !== 'All') {
    console.log(filterColor);
    query.eq('mainColor', filterColor);
  }

  if (filterPrice && filterPrice !== 'All') {
    const [from, to] = filterPrice.split('-');
    if (from && to) {
      query.gte('price', from).lte('price', to);
    } else {
      query.gte('price', from);
    }
  }

  if (sorting) {
    const [value, direction] = sorting.split('-');
    query.order(value, { ascending: direction === 'asc' });
  }

  if (page) {
    const from = (page - 1) * 12;
    const to = from + 12 - 1;
    query.range(from, to);
  }

  const { data: products, error, count } = await query;

  if (error) {
    console.log(error);
    throw new Error('Could not retrieve products');
  }

  return {
    data: products,
    count,
  };
};
