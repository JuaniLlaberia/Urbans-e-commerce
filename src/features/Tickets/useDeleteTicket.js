import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteTicket as deleteTicketApi } from '../../apiServices/ticketsServices';
import { toast } from 'react-hot-toast';

export const useDeleteTicket = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteTicket, isLoading: isDeleting } = useMutation({
    mutationFn: id => deleteTicketApi(id),
    onSuccess: () => {
      toast.success('Ticket removed successfully');
      queryClient.invalidateQueries({ queryKey: ['complain-tickets'] });
    },
    onError: () => toast.error('Failed to remove'),
  });

  return { deleteTicket, isDeleting };
};
