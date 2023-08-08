import { styled } from 'styled-components';
import { formatCurrency } from '../../utils/formatCurrency';
import Title from '../../components/Title';
import { Link } from 'react-router-dom';
import SaveBtn from './SaveBtn';

const StyledItem = styled.li`
  background-color: var(--color-white-2);
  box-shadow: var(--shadow-light);
  width: 13vw;
  min-width: 180px;
  @media (max-width: 670px) {
    width: 35vw;
  }
  @media (max-width: 490px) {
    width: 70vw;
  }

  cursor: pointer;
  position: relative;
`;

const Img = styled.img`
  width: 13vw;
  min-width: 180px;
  min-height: 225px;
  border-bottom: var(--border-sm);

  @media (max-width: 670px) {
    width: 35vw;
  }
  @media (max-width: 490px) {
    width: 70vw;
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
  font-weight: 500;
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

const ProductItem = ({ product }) => {
  return (
    <StyledItem>
      <BtnContainer>
        <SaveBtn
          id={product.id}
          img={product.img}
          name={product.name}
          color={product.mainColor}
          price={product.price}
        />
      </BtnContainer>
      <StyledLink to={`/product/details/${product.id}`}>
        <Img src={product.img} />
        <Data>
          <Title as='h5'>{product.name}</Title>
          <Color>{product.mainColor}</Color>
          <Price>{formatCurrency(product.price)}</Price>
        </Data>
      </StyledLink>
    </StyledItem>
  );
};

export default ProductItem;
