import Button from '../../components/Button';
import Row from '../../components/Row';
import SpinnerBtn from '../../components/SpinnerBtn';
import { useDeleteTicket } from './useDeleteTicket';
import { useUpdateTicket } from './useUpdateTicket';

const TicketBtns = ({ onCloseModal, status, id }) => {
  const { deleteTicket, isDeleting } = useDeleteTicket();
  const { changeTicketStatus, isUpdating } = useUpdateTicket();

  return (
    <Row>
      <Button variation='outline' onClick={onCloseModal}>
        Cancel
      </Button>
      {status === 'New' && (
        <Button
          variation='regular'
          onClick={() => changeTicketStatus({ id, newStatus: 'Open' })}
          disabled={isUpdating}
        >
          {isUpdating ? <SpinnerBtn /> : 'Open ticket'}
        </Button>
      )}
      {status === 'Open' && (
        <Button
          disabled={isUpdating}
          variation='regular'
          onClick={() => changeTicketStatus({ id, newStatus: 'Closed' })}
        >
          {isUpdating ? <SpinnerBtn /> : 'Close ticket'}
        </Button>
      )}
      {status === 'Closed' && (
        <Button
          variation='alert'
          onClick={() => deleteTicket(id)}
          disabled={isDeleting}
        >
          {isDeleting ? <SpinnerBtn /> : 'Delete ticket'}
        </Button>
      )}
    </Row>
  );
};

export default TicketBtns;
