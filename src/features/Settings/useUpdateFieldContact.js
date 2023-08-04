import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateFieldContact } from '../../apiServices/settingsServices';
import { toast } from 'react-hot-toast';

export const useUpdateFieldContact = (queryKey, tableName) => {
  const queryClient = useQueryClient();
  const { mutate: updateField, isLoading: isUpdating } = useMutation({
    mutationFn: newField => updateFieldContact(newField, tableName),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey] });
      toast.success('Successfully updated');
    },
    onError: () => toast.error('Failed to update'),
  });

  return { updateField, isUpdating };
};
