import Table from '../../components/Table';
import DropDownMenu from '../../components/DropDownMenu';
import RowText from '../../components/RowText';
import Modal from '../../components/Modal';
import ButtonIcon from '../../components/ButtonIcon';
import { HiOutlineClipboard, HiOutlineTrash } from 'react-icons/hi2';
import { RemoveText } from '../../components/RemoveText';
import { useDeleteTicket } from './useDeleteTicket';
import StatusTag from './StatusTag';
import TicketDetailsModal from './TicketDetailsModal';

const TicketsRow = ({ ticket }) => {
  const { deleteTicket, isDeleting } = useDeleteTicket();
  const { id, email, orderNum, status } = ticket;

  return (
    <Modal>
      <Table.Row>
        <RowText>#{String(id).padStart(4, '0')}</RowText>
        <RowText>{email}</RowText>
        <RowText>#{orderNum}</RowText>
        <RowText>
          <StatusTag type={status}>{status}</StatusTag>
        </RowText>
        <DropDownMenu>
          <DropDownMenu.Opener id='ticketsRowMenu' />
          <DropDownMenu.Menu id='ticketsRowMenu'>
            <DropDownMenu.Item>
              <Modal.Open opens='detailsModal'>
                <ButtonIcon size='sm' aria-label='open'>
                  <HiOutlineClipboard />
                </ButtonIcon>
              </Modal.Open>
            </DropDownMenu.Item>
            {status === 'Closed' && (
              <DropDownMenu.Item>
                <Modal.Open opens='deleteModal'>
                  <ButtonIcon size='sm' aria-label='open'>
                    <HiOutlineTrash />
                  </ButtonIcon>
                </Modal.Open>
              </DropDownMenu.Item>
            )}
          </DropDownMenu.Menu>
        </DropDownMenu>
      </Table.Row>
      <Modal.Window windowName='detailsModal'>
        <TicketDetailsModal ticket={ticket} id={id} />
      </Modal.Window>
      <Modal.Window windowName='deleteModal'>
        <RemoveText
          resource={`Ticket #${String(id).padStart(4, '0')}`}
          onConfirm={() => deleteTicket(id)}
          isDeleting={isDeleting}
        />
      </Modal.Window>
    </Modal>
  );
};

export default TicketsRow;
