import Button from '../../components/Button';
import Row from '../../components/Row';
import SpinnerBtn from '../../components/SpinnerBtn';
import { useDeleteTicket } from './useDeleteTicket';

const TicketBtns = ({ onCloseModal, status, id }) => {
  const { deleteTicket, isDeleting } = useDeleteTicket();

  return (
    <Row>
      <Button variation='outline' onClick={onCloseModal}>
        Cancel
      </Button>
      {(status === 'New' || status === 'Open') && (
        <Button variation='regular'>
          {status === 'New'
            ? 'Open ticket'
            : status === 'Open'
            ? 'Close ticket'
            : null}
        </Button>
      )}
      {status === 'Closed' && (
        <Button variation='alert' onClick={() => deleteTicket(id)}>
          {isDeleting ? <SpinnerBtn /> : 'Delete ticket'}
        </Button>
      )}
    </Row>
  );
};

export default TicketBtns;
