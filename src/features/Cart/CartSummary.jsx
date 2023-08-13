import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { getCartLength, getTotalCartPrice } from './cartSlice';
import Title from '../../components/Title';
import { formatCurrency } from '../../utils/formatCurrency';

const StyledCartSummary = styled.aside`
  background-color: var(--color-white-2);
  width: 30vw;
  border-radius: var(--raidius-sm);
  box-shadow: var(--shadow-light);
  padding: 1rem 0.8rem;

  @media (max-width: 650px) {
    width: 100%;
    margin-top: 25px;
  }
`;

const SummaryDiv = styled.div`
  display: flex;
  justify-content: space-between;

  &:last-child {
    margin-top: 20px;
    border-top: var(--border-sm);
  }
`;

const CartSummary = () => {
  const price = useSelector(getTotalCartPrice);
  const length = useSelector(getCartLength);

  return (
    <StyledCartSummary>
      <Title as='h4'>SUMMARY</Title>
      <SummaryDiv>
        <p>{length} products</p>
        <p>{formatCurrency(price)}</p>
      </SummaryDiv>
      <SummaryDiv>
        <p>Subtotal</p>
        <p>{formatCurrency(price)}</p>
      </SummaryDiv>
    </StyledCartSummary>
  );
};

export default CartSummary;
