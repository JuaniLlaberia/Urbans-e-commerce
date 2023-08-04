import { useQuery } from '@tanstack/react-query';
import { getContactInfo } from '../../apiServices/settingsServices';

export const useGetContactInfo = () => {
  const {
    data: contactInfo,
    isLoading,
    error,
  } = useQuery({
    queryFn: getContactInfo,
    queryKey: ['contact-info'],
  });

  return { contactInfo, isLoading, error };
};
