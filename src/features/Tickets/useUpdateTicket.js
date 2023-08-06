import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateTicket } from '../../apiServices/ticketsServices';
import { toast } from 'react-hot-toast';

export const useUpdateTicket = () => {
  const queryClient = useQueryClient();
  const { mutate: changeTicketStatus, isLoading: isUpdating } = useMutation({
    mutationFn: ({ id, newStatus }) => updateTicket(id, newStatus),
    onSuccess: () => {
      toast.success('Updated successfully');
      queryClient.invalidateQueries({ queryKey: ['complain-tickets'] });
    },
    onError: () => toast.error('Could not update ticket'),
  });

  return { changeTicketStatus, isUpdating };
};
