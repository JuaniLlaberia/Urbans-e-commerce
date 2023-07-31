import supabase from './supabase';

export const getProducts = async () => {
  const { data, error } = await supabase
    .from('products')
    .select('*, mainCategory(name), subCategory(name)')
    .order('created_at', 'desc');

  if (error) throw new Error('Could not get products from the API');

  return data;
};

export const createProduct = async newProduct => {
  //Create image path
  const imgName = `${Math.random()}-${newProduct.img[0].name}`.replace('/', '');
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

export const deleteProduct = async (id, imgToRemove) => {
  //1. Remove all variant  from the inventory
  const { error: errorInventory } = await supabase
    .from('inventory')
    .delete()
    .eq('productId', id);

  if (errorInventory) throw new Error('Could not remove the inventory');

  //2. Remove the product itself
  const { error: errorProduct } = await supabase
    .from('products')
    .delete()
    .eq('id', id);

  if (errorProduct) throw new Error('Could not remove the product');

  //3. Remove image from storage
  const { error } = await supabase.storage
    .from('products-img')
    .remove([imgToRemove]);

  if (error) throw new Error('Could not remove the image');

  return null;
};
