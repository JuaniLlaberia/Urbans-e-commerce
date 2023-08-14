import { styled } from 'styled-components';
import Title from '../../components/Title';
import { formatCurrency } from '../../utils/formatCurrency';
import RowText from '../../components/RowText';

const StyledItem = styled.li`
  background-color: var(--color-white-2);
  border-radius: var(--raidius-md);
  padding: 0.7rem 1.25rem;
  box-shadow: var(--shadow-light);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  & p {
    color: var(--color-white-5);
  }

  & p span {
    color: var(--color-white-5);
  }
`;

const Img = styled.img`
  width: 5rem;
  min-width: 60px;
  max-width: 110px;
  border-radius: var(--raidius-sm);
`;

const ProductItem = ({ product }) => {
  const { product: productInfo, quantity, size } = product;

  return (
    <StyledItem>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Img src={productInfo.img} />
        <StyledContent>
          <Title as='h5'>{productInfo.SKU}</Title>
          <p>
            Size: <span>{size.size}</span>
          </p>
          <p>
            QTY: <span>{quantity}</span>
          </p>
        </StyledContent>
      </div>
      <p style={{ color: 'var(--color-white-5)' }}>
        {formatCurrency(productInfo.price * quantity)}
      </p>
    </StyledItem>
  );
};

export default ProductItem;
