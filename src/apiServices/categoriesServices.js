import supabase from './supabase';

export const getCategories = async () => {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('type', 'asc');

  if (error) throw new Error('Could not get categories from the API');

  return data;
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
