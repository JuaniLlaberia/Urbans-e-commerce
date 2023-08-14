import { styled } from 'styled-components';
import { useGetContactInfo } from '../features/Settings/useGetContactInfo';
import Accordion from './AccordionText';
import Spinner from './Spinner';

const StyledContactInfo = styled.p`
  display: flex;
  justify-content: space-around;
  opacity: 0.85;
`;

const ContactInfo = () => {
  const { contactInfo, isLoading } = useGetContactInfo();

  if (isLoading) return <Spinner />;

  return (
    <Accordion>
      <Accordion.Opener title='Contact Info' opens='contact' />
      <Accordion.Body id='contact'>
        <StyledContactInfo>
          <span>{contactInfo.email}</span>
          <span>{contactInfo.phoneNumber}</span>
        </StyledContactInfo>
      </Accordion.Body>
    </Accordion>
  );
};

export default ContactInfo;
