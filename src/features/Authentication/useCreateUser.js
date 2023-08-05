import { useMutation } from '@tanstack/react-query';
import { newAccount } from '../../apiServices/authenticationServices';
import { toast } from 'react-hot-toast';

export const useCreateUser = () => {
  const { mutate: signUp, isLoading } = useMutation({
    mutationFn: newUser => newAccount(newUser),
    onSuccess: () => {
      toast.success('Verify email to finish process');
    },
  });

  return { signUp, isLoading };
};
