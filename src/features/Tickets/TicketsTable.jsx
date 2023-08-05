import Table from '../../components/Table';
import Pagination from '../../components/Pagination';
import Spinner from '../../components/Spinner';
import { useGetTickets } from './useGetTickets';
import TicketsRow from './TicketsRow';

const TicketsTable = () => {
  const { tickets, isLoading, count } = useGetTickets();

  if (isLoading) return <Spinner />;

  return (
    <Table columns='.5fr 1.2fr .5fr .5fr .1fr'>
      <Table.Header>
        <div>Ticket #</div>
        <div>Email</div>
        <div>Order #</div>
        <div>Status</div>
        <div></div>
      </Table.Header>
      <Table.Body
        data={tickets}
        render={ticket => <TicketsRow key={ticket.id} ticket={ticket} />}
      />
      <Table.Footer>
        <Pagination count={count} />
      </Table.Footer>
    </Table>
  );
};

export default TicketsTable;
