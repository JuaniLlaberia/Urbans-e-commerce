import { pageSize } from '../utils/constants';
import supabase from './supabase';

export const getTickets = async (page, filter) => {
  let query = supabase.from('complain-tickets').select('*', { count: 'exact' });

  if (filter && filter !== 'All') {
    query.eq('status', filter);
  }

  if (page) {
    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;

    query.range(from, to);
  }

  const { data, error, count } = await query.order('created_at', {
    ascending: true,
  });

  if (error) throw new Error('Could not retrieve complain tickets');
  return { data, count };
};

export const deleteTicket = async id => {
  const { error } = await supabase
    .from('complain-tickets')
    .delete()
    .eq('id', id)
    .single();

  if (error) throw new Error('Could not delete ticket');
};

export const updateTicket = async (id, newStatus) => {
  const { data, error } = await supabase
    .from('complain-tickets')
    .update({ status: newStatus })
    .eq('id', id)
    .single();

  if (error) throw new Error('Could not update the ticket');

  return data;
};

export const createTicket = async newTicket => {
  const { data, error } = await supabase
    .from('complain-tickets')
    .insert([newTicket]);

  if (error) {
    console.log(error);
    throw new Error('Could not create ticket');
  }

  return data;
};
