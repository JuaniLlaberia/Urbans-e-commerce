import { useMutation, useQueryClient } from '@tanstack/react-query';
import { removeCourrier as remvoeCourrierApi } from '../../apiServices/settingsServices';
import { toast } from 'react-hot-toast';

export const useRemoveCourrier = () => {
  const queryClient = useQueryClient();
  const {
    mutate: removeCourrier,
    isLoading: isRemoving,
    error,
  } = useMutation({
    mutationFn: id => remvoeCourrierApi(id),
    onSuccess: () => {
      toast.success('Removed successfully');
      queryClient.invalidateQueries({ queryKey: ['courriers'] });
    },
    onError: () => toast.error('Failed to remove'),
  });

  return { removeCourrier, isRemoving, error };
};
