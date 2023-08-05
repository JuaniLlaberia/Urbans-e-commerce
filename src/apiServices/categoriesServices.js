import { pageSize } from '../utils/constants';
import supabase from './supabase';

export const getCategories = async ({ page, filter }) => {
  let query = supabase.from('categories').select('*', { count: 'exact' });

  if (filter && filter !== 'All') {
    query.eq('type', filter);
  }

  if (page) {
    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;
    query.range(from, to);
  }

  const { data, count, error } = await query.order('type', 'asc');

  if (error) {
    console.log(error);
    throw new Error('Could not get categories from the API');
  }
  console.log(data);
  return { data, count };
};

export const getMainCategories = async () => {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .eq('type', 'Main');

  if (error) throw new Error('Could not get categories from the API');

  return data;
};

export const createCategory = async newCategory => {
  const { data, error } = await supabase
    .from('categories')
    .insert([newCategory]);

  if (error) throw new Error('Could not create category');

  return data;
};

export const deleteCategory = async id => {
  const { data, error } = await supabase
    .from('categories')
    .delete()
    .single()
    .eq('id', id);

  if (error) throw new Error('Could delete category from the API');

  return data;
};
