import { styled } from 'styled-components';
import CheckoutInfo from './CheckoutInfo';

const StyledCheckout = styled.section`
  box-shadow: var(--shadow-light);
  margin-top: 10px;
  border-radius: var(--raidius-sm);
  width: 60vw;
  min-width: 300px;
  max-width: 700px;
`;

export const CheckoutForm = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        paddingBottom: '2.5rem',
      }}
    >
      <StyledCheckout>
        <CheckoutInfo />
      </StyledCheckout>
    </div>
  );
};
