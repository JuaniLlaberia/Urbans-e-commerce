import Title from '../../components/Title';
import Box from '../../components/Box';
import Top from '../../components/Top';
import StatusTag from './StatusTag';
import {
  HiOutlineArchiveBox,
  HiOutlineEnvelope,
  HiOutlineUser,
} from 'react-icons/hi2';
import { styled } from 'styled-components';
import TicketBtns from './TicketBtns';

const StyledTicketDetails = styled.div`
  width: 35vw;
  min-width: 250px;
  padding: 2.5rem 0.7rem 0.7rem 0.7rem;
`;

const Text = styled.div`
  overflow-y: scroll;
  max-height: 300px;
  min-height: 100px;
  color: var(--color-white-6);
`;

const TicketDetailsModal = ({ ticket, onCloseModal, id }) => {
  return (
    <StyledTicketDetails>
      <Top>
        <Title as='h3'>Ticket #{String(ticket.id).padStart(4, '0')}</Title>
        <StatusTag type={ticket.status}>{ticket.status}</StatusTag>
      </Top>
      <Box>
        <Box.Body>
          <Box.Item>
            <HiOutlineArchiveBox />
            {ticket.orderNum}
          </Box.Item>
          <Box.Item>
            <HiOutlineUser />
            {ticket.fullName}
          </Box.Item>
          <Box.Item>
            <HiOutlineEnvelope />
            {ticket.email}
          </Box.Item>
        </Box.Body>
        <Box.Body>
          <Text>
            <p>{ticket.complain}</p>
          </Text>
        </Box.Body>
      </Box>
      <TicketBtns onCloseModal={onCloseModal} status={ticket.status} id={id} />
    </StyledTicketDetails>
  );
};

export default TicketDetailsModal;
