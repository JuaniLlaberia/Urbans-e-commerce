import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '../../apiServices/authenticationServices';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading: isLogging } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: user => {
      queryClient.setQueryData(['user'], user.user);
      toast.success('Logged correctly');
      navigate('/admin/dashboard', { replace: true });
    },
    onError: error => {
      console.log(error);
      toast.error('Email or password are incorrect');
    },
  });

  return { login, isLogging };
};
