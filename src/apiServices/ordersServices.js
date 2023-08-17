import { pageSize } from '../utils/constants';
import supabase from './supabase';

export const getOrders = async ({ page, filter, orderNum }) => {
  let query = supabase.from('orders').select('*', { count: 'exact' });

  if (orderNum) query.eq('id', orderNum);

  if (filter) query.eq('status', filter);

  if (page) {
    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;
    query.range(from, to);
  }

  const { data, error, count } = await query.order('created_at', {
    ascending: true,
  });

  if (error) {
    console.log(error);
    throw new Error('Could not retrieve orders from API');
  }

  return { data, count };
};

export const getOrder = async id => {
  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .eq('id', id)
    .single();

  if (error) throw new Error('Could not retrieve order from API');

  return data;
};

export const getOrderProducts = async id => {
  const { data, error } = await supabase
    .from('order-items')
    .select('*, product(img, SKU, price), size(size)')
    .eq('orderId', id);

  if (error) {
    console.log(error);
    throw new Error('Could not fetch products for this order');
  }

  return data;
};

export const deleteOrder = async id => {
  const { data: items, error: errorItems } = await supabase
    .from('order-items')
    .delete()
    .eq('orderId', id);

  if (errorItems) {
    console.log(errorItems);
    throw new Error('Could not remove items linked to this order');
  }

  const { data, error } = await supabase
    .from('orders')
    .delete()
    .eq('id', id)
    .single();

  if (error) throw new Error('Could not remove order');

  return { items, data };
};

export const shipOrder = async (id, courrier) => {
  const { data: shippedOrder, error } = await supabase
    .from('orders')
    .update({ ...courrier, status: 'Shipped', isPaid: true })
    .eq('id', id)
    .single();

  if (error) {
    console.log(error);
    throw new Error('Failed to update order');
  }

  return shippedOrder;
};

export const getAllItems = async () => {
  const { data, error } = await supabase
    .from('order-items')
    .select('*, product(*), size(*)');

  if (error) console.log(error);

  return data;
};
