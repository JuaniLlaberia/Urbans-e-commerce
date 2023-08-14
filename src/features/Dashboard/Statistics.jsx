import { styled } from 'styled-components';
import StatBox from './StatBox';
import {
  HiOutlineBanknotes,
  HiOutlineShoppingBag,
  HiOutlineTruck,
} from 'react-icons/hi2';
import { formatCurrency } from '../../utils/formatCurrency';
import { useGetOrders } from '../Orders/useGetOrders';
import Spinner from '../../components/Spinner';
import { useGetItems } from '../Orders/useGetItems';

const StyledStatistics = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1rem;
  row-gap: 1rem;
  margin: 20px 0 40px 0;
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;

const Statistics = () => {
  const { orders, isLoading, count } = useGetOrders(true);
  const { items, isLoading: isLoadingItems } = useGetItems();

  if (isLoading || isLoadingItems) return <Spinner />;

  const totalProductsSold = items.reduce((acc, crr) => acc + crr.quantity, 0);
  const totalSales = orders.reduce((acc, crr) => acc + crr.totalPrice, 0);

  return (
    <StyledStatistics>
      <StatBox
        icon={<HiOutlineTruck />}
        color='#f79f57'
        value={`${count}`}
        label='total orders'
      />
      <StatBox
        icon={<HiOutlineBanknotes />}
        color='#52b37d'
        label='total sales'
        value={formatCurrency(totalSales)}
      />
      <StatBox
        icon={<HiOutlineShoppingBag />}
        color='#e74488'
        value={totalProductsSold}
        label='Products sold'
      />
    </StyledStatistics>
  );
};

export default Statistics;
