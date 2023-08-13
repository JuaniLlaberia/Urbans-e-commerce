import supabase from './supabase';

export const getDiscounts = async () => {
  const { data, error } = await supabase
    .from('discounts')
    .select('*')
    .order('validUntil', 'asc');

  if (error) throw new Error('Error fetching discounts from API.');

  return data;
};

export const createDiscount = async newDiscountObj => {
  const { data, error } = await supabase
    .from('discounts')
    .insert([newDiscountObj]);

  if (error) throw new Error('Error creating new discount. Try again!');

  return data;
};

//Edit discount
export const editDiscount = async (id, editedDiscount) => {
  const { data, error } = await supabase
    .from('discounts')
    .update(editedDiscount)
    .eq('id', id)
    .single()
    .select();

  if (error) throw new Error('Error when updating discount. Try again!');

  return data;
};

//Delete discount
export const deleteDiscount = async id => {
  const { data, error } = await supabase
    .from('discounts')
    .delete()
    .eq('id', id)
    .single();

  if (error) throw new Error('Error deleting discount. Try again!');

  return data;
};

export const getValidDiscounts = async () => {
  const { data, error } = await supabase
    .from('discounts')
    .select('*')
    .gte('validUntil', new Date().toISOString());

  if (error) throw new Error('Error fetching discounts from API.');

  return data;
};
