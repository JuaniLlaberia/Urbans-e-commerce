import supabase from './supabase';

export const createOrder = async (newOrder, orderProducts) => {
  //We create the new order in the Database
  const { data: order, error: errorOrder } = await supabase
    .from('orders')
    .insert(newOrder)
    .select()
    .single();

  if (errorOrder) {
    throw new Error('Could not create order');
  }

  //We add the order ID to the products
  const products = orderProducts.map(product => {
    return {
      orderId: order?.id,
      quantity: product.quantity,
      product: product.productId,
      size: product.stockId,
    };
  });

  //We create the products
  const { error } = await supabase
    .from('order-items')
    .insert(products)
    .select();

  if (error) {
    await supabase.from('orders').delete().eq('id', order.id).single();
    throw new Error('Could not items so order was deleted');
  }

  //Decrease the STOCK ???
  //   for (const product of orderProducts) {
  //     const { data: stockProduct } = await supabase
  //       .from('products-size-stock')
  //       .select('quantity')
  //       .eq('productId', product.productId)
  //       .eq('size', product.stockId);

  //     const currentQuantity = stockProduct.quantity;
  //     const newQuantity = currentQuantity - product.quantity;

  //     const { error: errorTest } = await supabase
  //       .from('products-size-stock')
  //       .update({ quantity: newQuantity })
  //       .eq('productId', product.productId)
  //       .eq('size', product.stockId);

  //     if (errorTest) console.log(errorTest);
  //   }

  return order;
};
