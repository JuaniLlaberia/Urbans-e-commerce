import supabase from './supabase';

export const getContactInfo = async () => {
  const { data, error } = await supabase
    .from('contact-info')
    .select('*')
    .single();

  if (error) {
    console.log(error);
    throw new Error('Could not retrieve contact information from the api');
  }

  return data;
};

export const getShippingCosts = async () => {
  const { data, error } = await supabase
    .from('shipping-costs')
    .select('*')
    .single();

  if (error) {
    console.log(error);
    throw new Error(
      'Could not retrieve shipping cost information from the api'
    );
  }

  return data;
};

export const updateFieldContact = async (newField, tableName) => {
  const { data, error } = await supabase
    .from(tableName)
    .update(newField)
    .eq('id', 2)
    .single();

  if (error) console.log(error);

  return data;
};

export const getCourriers = async () => {
  const { data, error } = await supabase.from('courriers').select('*');
  if (error) console.log(error);
  return data;
};

export const createCourrier = async newCourrier => {
  const { data, error } = await supabase
    .from('courriers')
    .insert(newCourrier)
    .select()
    .single();

  if (error) {
    console.log(error);
    throw new Error('Failed to create new courrier');
  }

  return data;
};

export const removeCourrier = async id => {
  const { data, error } = await supabase
    .from('courriers')
    .delete()
    .eq('id', id)
    .single();

  if (error) {
    console.log(error);
    throw new Error('Failed to remove courrier');
  }

  return data;
};
