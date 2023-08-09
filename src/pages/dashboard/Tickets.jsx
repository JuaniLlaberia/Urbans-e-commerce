import TicketsTable from '../../features/Tickets/TicketsTable';
import Title from '../../components/Title';
import Row from '../../components/Row';
import Filter from '../../components/Filter';
import { filtersTickets } from '../../utils/filterConsts';

const Tickets = () => {
  return (
    <>
      <Title as='h2'>Complain tickets</Title>
      <Row>
        <Filter options={filtersTickets} />
      </Row>
      <TicketsTable />
    </>
  );
};

export default Tickets;
