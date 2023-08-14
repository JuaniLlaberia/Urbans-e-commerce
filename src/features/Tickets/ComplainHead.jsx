import { styled } from 'styled-components';
import Title from '../../components/Title';

const StyledHead = styled.header`
  margin-top: 25px;
  width: 60vw;
  min-width: 325px;
  margin-bottom: 25px;
`;

const StyledText = styled.p`
  margin-top: 5px;
  text-align: justify;
  color: var(--color-white-5);
  opacity: 0.85;
`;

const ComplainHead = () => {
  return (
    <StyledHead>
      <Title as='h3'>Having any issues with you order?</Title>
      <StyledText>
        If you are having problems with an order or your order has arrived but
        there is something wrong, please write a complain here. Our support team
        will get back as soon as possible.
      </StyledText>
    </StyledHead>
  );
};

export default ComplainHead;
