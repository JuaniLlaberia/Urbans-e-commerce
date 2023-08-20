import { styled } from 'styled-components';
import CartList from './CartList';
import CartSummary from './CartSummary';
import Button from '../../components/Button';
import Empty from '../../components/EmptyMsg';
import { useSelector } from 'react-redux';
import { getCartLength } from './cartSlice';
import { useNavigate } from 'react-router-dom';

const Cart = styled.section`
  display: flex;
  gap: 2rem;
  margin-top: 20px;

  @media (max-width: 650px) {
    flex-direction: column-reverse;
  }
`;

const StyledCart = () => {
  const cartLength = useSelector(getCartLength);
  const navigate = useNavigate();

  return (
    <>
      {cartLength ? (
        <Cart>
          <CartList />
          <div>
            <CartSummary />
            <br />
            <Button
              aria-label='navigate'
              variation='big'
              width='full-lg'
              onClick={() => navigate('/checkout')}
            >
              CHECKOUT
            </Button>
          </div>
        </Cart>
      ) : (
        <Empty>
          <h5>Your CART is empty</h5>
          <p>There are no products in you cart</p>
        </Empty>
      )}
    </>
  );
};

export default StyledCart;
