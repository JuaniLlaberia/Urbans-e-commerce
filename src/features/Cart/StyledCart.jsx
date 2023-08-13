import { styled } from 'styled-components';
import CartList from './CartList';
import CartSummary from './CartSummary';
import Button from '../../components/Button';
import Empty from '../../components/EmptyMsg';
import { useSelector } from 'react-redux';
import { getCartLength } from './cartSlice';
import DiscountBox from './DiscountBox';

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
  return (
    <>
      {cartLength ? (
        <Cart>
          <CartList />
          <div>
            {/* <DiscountBox /> */}
            <CartSummary />
            <br />
            <Button variation='big' width='full-lg'>
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
