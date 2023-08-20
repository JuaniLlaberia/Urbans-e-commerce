import { styled } from 'styled-components';
import { formatCurrency } from '../../utils/formatCurrency';
import Title from '../../components/Title';
import { Link } from 'react-router-dom';
import SaveBtn from '../StoreProducts/SaveBtn';

const StyledItem = styled.li`
  background-color: var(--color-white-1);
  box-shadow: var(--shadow-light);
  width: 14vw;

  @media (max-width: 970px) {
    width: 25vw;
  }
  @media (max-width: 670px) {
    width: 40vw;
  }
  @media (max-width: 490px) {
    width: 75vw;
  }

  cursor: pointer;
  position: relative;
`;

const Img = styled.img`
  width: 14vw;
  height: 40vh;
  object-fit: cover;

  border-bottom: var(--border-sm);
  @media (max-width: 970px) {
    width: 25vw;
  }
  @media (max-width: 670px) {
    width: 40vw;
  }
  @media (max-width: 490px) {
    width: 75vw;
  }
`;

const Data = styled.div`
  padding: 0.2rem 0.3rem;
`;

const Color = styled.p`
  font-size: 0.8rem;
  color: var(--color-white-5);
  opacity: 0.8;
`;

const Price = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: var(--color-white-6);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const BtnContainer = styled.div`
  position: absolute;
  top: 1%;
  right: 2%;
`;

const HorizontalProductItem = ({ product }) => {
  return (
    <StyledItem>
      <BtnContainer>
        <SaveBtn
          id={product.id}
          img={product.img}
          name={product.name}
          color={product.mainColor}
          price={product.price}
          SKU={product.SKU}
        />
      </BtnContainer>
      <StyledLink to={`/product/details/${product.SKU}`}>
        <picture>
          <source type='image/webp' />
          <Img src={product.img} alt={product.name} />
        </picture>
        <Data>
          <Title as='h5'>{product.name}</Title>
          <Color>{product.mainColor}</Color>
          <Price>{formatCurrency(product.price)}</Price>
        </Data>
      </StyledLink>
    </StyledItem>
  );
};

export default HorizontalProductItem;
