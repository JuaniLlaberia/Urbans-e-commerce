import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getTickets } from '../../apiServices/ticketsServices';
import { useSearchParams } from 'react-router-dom';
import { pageSize } from '../../utils/constants';

export const useGetTickets = () => {
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));
  const filter = searchParams.get('filter') || 'All';

  const { data: { data: tickets, count } = {}, isLoading } = useQuery({
    queryFn: () => getTickets(page, filter),
    queryKey: ['complain-tickets', page, filter],
  });

  const pageCount = Math.ceil(count / pageSize);

  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryFn: () => getTickets(page + 1, filter),
      queryKey: ['complain-tickets', page + 1, filter],
    });
  }

  if (page > 1) {
    queryClient.prefetchQuery({
      queryFn: () => getTickets(page - 1, filter),
      queryKey: ['complain-tickets', page - 1, filter],
    });
  }

  return { tickets, isLoading, count };
};
