import Title from '../../components/Title';
import SalesChart from '../../features/Dashboard/SalesChart';
import Statistics from '../../features/Dashboard/Statistics';

const Dashboard = () => {
  return (
    <>
      <Title as='h2'>Admin Panel</Title>
      <Statistics />
      <SalesChart />
    </>
  );
};

export default Dashboard;
