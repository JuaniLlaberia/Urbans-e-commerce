import { pageSize } from '../utils/constants';
import supabase from './supabase';

export const getProducts = async ({ page, sku, order }) => {
  let query = supabase
    .from('products')
    .select('*, mainCategory(name, id), subCategory(name, id)', {
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

  if (error) throw new Error('Could not get products from the API');

  return { data, count };
};

export const getProduct = async id => {
  const { data, error } = await supabase
    .from('products')
    .select('*, mainCategory(name), subCategory(name)')
    .eq('id', id)
    .single();

  if (error) throw new Error('Could not get the product from the API');

  return data;
};

export const getVariantsByName = async ({ productName, page, order }) => {
  let query = supabase
    .from('products')
    .select('*, mainCategory(name), subCategory(name)', { count: 'exact' })
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
    .upload(imgName, newProduct.img[0]);

  //If image failed => Delete product
  if (errorImg) {
    await supabase.from('products').delete().eq('id', data.id);
    throw new Error(
      'The image could not be uploaded, so the product was not created'
    );
  }

  return data;
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
