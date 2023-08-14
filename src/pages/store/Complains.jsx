import { styled } from 'styled-components';
import NewTicketForm from '../../features/Tickets/NewTicketForm';
import ComplainHead from '../../features/Tickets/ComplainHead';

const StyledComplainPage = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1rem;
  align-items: center;
`;

const Complains = () => {
  return (
    <StyledComplainPage>
      <ComplainHead />
      <NewTicketForm />
    </StyledComplainPage>
  );
};

export default Complains;
