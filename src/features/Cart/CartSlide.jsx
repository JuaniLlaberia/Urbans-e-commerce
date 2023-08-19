import { styled } from 'styled-components';
import Overlay from '../../components/Overlay';
import CartList from './CartList';
import Title from '../../components/Title';
import FilterButton from '../StoreProducts/FilterBtn';
import { useNavigate } from 'react-router-dom';
import { useCartSlideContext } from '../../context/CartSlideContext';
import { HiOutlineXMark } from 'react-icons/hi2';

const StyledCartSlide = styled.aside`
  background-color: var(--color-white-2);
  padding: 1rem 0.5rem;
  border-left: var(--border-sm);

  transform: translateX(350px);
  position: fixed;
  height: 100vh;
  top: 0;
  right: 0;
  width: 350px;
  transition: all 0.3s ease-in-out;

  &.open {
    transform: translateX(0);
  }

  z-index: 2;
`;

const StyledX = styled.button`
  font-size: 1.25rem;
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const CartSlide = () => {
  const navigate = useNavigate();
  const { isOpen, closeOnClick } = useCartSlideContext();

  return (
    <>
      <StyledCartSlide className={isOpen ? 'open' : ''}>
        <div style={{ position: 'absolute', right: '2.5%' }}>
          <StyledX onClick={closeOnClick}>
            <HiOutlineXMark />
          </StyledX>
        </div>
        <Title as='h4'>My Cart</Title>
        <CartList width='slide' />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
          <FilterButton
            width='full'
            type='second'
            onClick={() => {
              closeOnClick();
              navigate('/cart');
            }}
          >
            GO TO CART
          </FilterButton>
          <FilterButton
            width='full'
            onClick={() => {
              closeOnClick();
              navigate('/checkout');
            }}
          >
            CHECKOUT
          </FilterButton>
        </div>
      </StyledCartSlide>
      {isOpen && <Overlay onClick={closeOnClick} />}
    </>
  );
};
