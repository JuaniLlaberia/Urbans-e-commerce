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
