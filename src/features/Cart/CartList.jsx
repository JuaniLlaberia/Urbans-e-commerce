import { css, styled } from 'styled-components';
import { useSelector } from 'react-redux';
import { getCart } from './cartSlice';
import CartItem from './CartItem';

const StyledCartList = styled.ul`
  width: 60vw;
  padding: 0.5rem 0.4rem;
  list-style: none;
  ${props =>
    props.width === 'slide' &&
    css`
      width: auto;
      height: 60vh;
      @media (max-width: 450px) {
        max-height: 500px;
      }
    `}

  margin-bottom: 20px;
  overflow-y: scroll;
  height: 82.5vh;
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-white-3);
    border-radius: 1000px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-white-4);
  }

  @media (max-width: 650px) {
    width: 100%;
  }
`;

const CartList = ({ width }) => {
  const cartItems = useSelector(getCart);

  return (
    <StyledCartList width={width}>
      {cartItems.map(item => (
        <CartItem product={item} key={item.stockId} />
      ))}
    </StyledCartList>
  );
};

export default CartList;
