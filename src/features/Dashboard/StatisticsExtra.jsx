import { styled } from 'styled-components';
import {
  HiMiniArrowTrendingDown,
  HiMiniArrowTrendingUp,
  HiOutlineExclamationTriangle,
} from 'react-icons/hi2';
import Spinner from '../../components/Spinner';
import { useGetItems } from '../Orders/useGetItems';
import { useGetStock } from '../Products/useGetStock';
import { calculateTopSells } from '../../utils/calculateTopSells';
import StatBoxTable from './StatBoxTable';
import { getLowStockProducts } from '../../utils/getLowStockProducts';

const StyledStatistics = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1rem;
  row-gap: 1rem;
  margin: 20px 0 40px 0;
  @media (max-width: 1700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 1360px) {
    grid-template-columns: 1fr;
  }
`;

const StatisticsExtra = () => {
  const { stock, isLoading: isLoadingStock } = useGetStock(true);
  const { items, isLoading: isLoadingItems } = useGetItems();

  if (isLoadingItems || isLoadingStock) return <Spinner />;

  //Top 5 most sold
  const mostSold = calculateTopSells(items, true, 5);
  //Top 5 least sold
  const leastSold = calculateTopSells(items, false, 5);
  //Top items with low stock (< 10)
  const lowStockItems = getLowStockProducts(stock);

  return (
    <StyledStatistics>
      <StatBoxTable
        icon={<HiMiniArrowTrendingUp />}
        color='#5c8bf1'
        data={mostSold}
        label='TOP 5 - Most Sold'
      />
      <StatBoxTable
        icon={<HiMiniArrowTrendingDown />}
        color='#ffc628'
        label='TOP 5 -  Least sold'
        data={leastSold}
      />
      <StatBoxTable
        color='#ff6246'
        icon={<HiOutlineExclamationTriangle />}
        data={lowStockItems}
        label='TOP 5 - Low stock'
      />
    </StyledStatistics>
  );
};

export default StatisticsExtra;
