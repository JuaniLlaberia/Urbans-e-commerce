import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';

import { useGetOrders } from '../Orders/useGetOrders';
import { eachDayOfInterval, format, isSameDay, subDays } from 'date-fns';
import Spinner from '../../components/Spinner';
import Title from '../../components/Title';
import { styled } from 'styled-components';

const StyledChart = styled.div`
  background-color: var(--color-white-2);
  padding: 0.8rem 0.2rem;
  border-radius: var(--raidius-sm);
  box-shadow: var(--shadow-light);
`;

const SalesChart = () => {
  const { orders, isLoading } = useGetOrders();
  const numDays = 10;

  if (isLoading) return <Spinner />;

  const allDates = eachDayOfInterval({
    start: subDays(new Date(), numDays - 1),
    end: new Date(),
  });

  const data = allDates.map(date => {
    return {
      label: format(date, 'MMM dd'),
      totalSales: orders
        .filter(order => isSameDay(date, new Date(order.created_at)))
        .reduce((acc, crr) => acc + crr.totalPrice, 0),
    };
  });

  return (
    <StyledChart>
      <Title as='h3'>Total Sales (last {numDays} days)</Title>
      {/* ADD A DATE FILTERS */}
      <br />
      <ResponsiveContainer width='100%' height={300}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='label' />
          <YAxis unit='$' />
          <Tooltip />
          <Legend />
          <Area
            type='monotone'
            dataKey='totalSales'
            stroke='var(--icons-color)'
            fill='var(--icons-color)'
            unit='$'
            strokeWidth={2}
            name='Total Sales'
          />
        </AreaChart>
      </ResponsiveContainer>
    </StyledChart>
  );
};

export default SalesChart;
