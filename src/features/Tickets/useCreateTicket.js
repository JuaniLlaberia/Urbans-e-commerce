import { useMutation } from '@tanstack/react-query';
import { createTicket } from '../../apiServices/ticketsServices';
import { toast } from 'react-hot-toast';

export const useCreateTicket = () => {
  const { mutate: generateTicket, isLoading: isCreating } = useMutation({
    mutationFn: newTicket => createTicket(newTicket),
    onSuccess: () => {
      toast.success('Ticket submitted');
    },
    onError: () => toast.error('Failed to submit. Try again'),
  });

  return { generateTicket, isCreating };
};
