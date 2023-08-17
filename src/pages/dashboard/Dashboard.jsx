import Title from '../../components/Title';
import SalesChart from '../../features/Dashboard/SalesChart';
import Statistics from '../../features/Dashboard/Statistics';
import StatisticsExtra from '../../features/Dashboard/StatisticsExtra';

const Dashboard = () => {
  return (
    <>
      <Title as='h2'>Admin Panel</Title>
      <Statistics />
      <SalesChart />
      <br />
      <Title as='h3'>Extra information</Title>
      <StatisticsExtra />
    </>
  );
};

export default Dashboard;
