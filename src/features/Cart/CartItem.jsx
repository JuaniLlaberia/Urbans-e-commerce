import { styled } from 'styled-components';
import { formatCurrency } from '../../utils/formatCurrency';
import { HiOutlineTrash } from 'react-icons/hi2';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { editQuantity, removeItem } from './cartSlice';
import Select from '../../components/Select';
import Option from '../../components/Option';

const StyledCartItem = styled.li`
  background-color: var(--color-white-1);
  padding: 0.8rem 1rem;
  margin-bottom: 10px;
  border-radius: var(--raidius-sm);
  box-shadow: var(--shadow-light);
  position: relative;
`;

const Img = styled.img`
  width: 7vw;
  min-width: 80px;
  min-height: 120px;
  max-width: 110px;
  object-fit: cover;
  object-position: center;
`;

const QTY = styled.p`
  position: absolute;
  bottom: 7.5%;
  right: 4%;
  font-size: 0.8rem;
  color: var(--color-white-5);
  opacity: 0.8;
  & span {
    color: var(--color-white-6);
    font-weight: 500;
    font-size: 1rem;
  }
`;

const InfoText = styled.p`
  font-size: 0.9rem;
  font-weight: 600;

  & span {
    opacity: 0.6;
    font-weight: 400;
  }
`;

const Title = styled(Link)`
  font-size: 1rem;
  font-weight: 400;
  color: var(--color-white-5);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const DeleteBtn = styled.button`
  position: absolute;
  top: 7.5%;
  right: 4%;
  font-size: 1.2rem;
  background: transparent;
  border: none;
  color: var(--color-white-5);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: red;
  }
`;

const InfoBox = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const qtyArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  const { img, name, price, SKU, quantity, size, stockId, productId, color } =
    product;

  return (
    <StyledCartItem>
      <InfoBox>
        <Img src={img} draggable={false} alt={`Product ${name}`} />
        <div>
          <Title to={`/product/details/${SKU}`}>{name}</Title>
          <InfoText>{formatCurrency(price)}</InfoText>
          <InfoText>
            <span>{color}</span> - <span>{size === '-' ? 'Unique' : size}</span>
          </InfoText>
        </div>
      </InfoBox>
      <QTY>
        QTY:{' '}
        <Select
          defaultValue={quantity}
          onChange={e =>
            dispatch(editQuantity({ SKU, size, quantity: e.target.value }))
          }
        >
          {qtyArr.map(item => (
            <Option key={item} value={item}>
              {item}
            </Option>
          ))}
        </Select>
      </QTY>
      <DeleteBtn onClick={() => dispatch(removeItem(stockId))}>
        <HiOutlineTrash />
      </DeleteBtn>
    </StyledCartItem>
  );
};

export default CartItem;
