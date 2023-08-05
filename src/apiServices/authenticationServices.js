import supabase from './supabase';

export const newAccount = async newUser => {
  const { data, error } = await supabase.auth.signUp(newUser);

  if (error) throw new Error('Could not create new account');

  return data;
};

export const login = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error('Failed to login');

  return data;
};

export const logout = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error('Failed to log out');
};

export const getUser = async () => {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
};
