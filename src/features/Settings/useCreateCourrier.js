import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createCourrier as createCourrierApi } from '../../apiServices/settingsServices';
import { toast } from 'react-hot-toast';

export const useCreateCourrier = () => {
  const queryClient = useQueryClient();
  const {
    mutate: createCourrier,
    isLoading: isCreating,
    error,
  } = useMutation({
    mutationFn: newCourrier => createCourrierApi(newCourrier),
    onSuccess: () => {
      toast.success('Created successfully');
      queryClient.invalidateQueries({ queryKey: ['courriers'] });
    },
    onError: () => toast.error('Failed to create'),
  });

  return { createCourrier, isCreating, error };
};
