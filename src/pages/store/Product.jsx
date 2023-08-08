import { styled } from 'styled-components';
import Spinner from '../../components/Spinner';
import Title from '../../components/Title';
import Row from '../../components/Row';
import Button from '../../components/Button';
import Select from '../../components/Select';
import Option from '../../components/Option';
import { useGetProduct } from '../../features/Products/useGetProduct';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/formatCurrency';
import { useGetVariants } from '../../features/Products/useGetVariants';
import { HiOutlineShoppingCart } from 'react-icons/hi2';
import SaveBtn from '../../features/StoreProducts/SaveBtn';
import { useState } from 'react';

const StyledTop = styled.section`
  padding: 1rem 8rem;
  color: var(--color-white-5);
  @media (max-width: 1000px) {
    padding: 0.8rem 3rem;
  }
  @media (max-width: 550px) {
    padding: 1rem 1rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-white-5);
  font-weight: 500;
`;

const StyledProduct = styled.div`
  display: grid;
  padding: 0.5rem 8rem;
  grid-template-columns: 1fr 2fr;
  column-gap: 1.5rem;

  @media (max-width: 1300px) {
    padding: 0.5rem 4rem;
  }
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    padding: 0.5rem 3rem;
    row-gap: 1.5rem;
  }
  @media (max-width: 550px) {
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    width: 80vw;
  }
`;

const Description = styled.p`
  padding: 0.5rem;
  border: var(--border-sm);
  border-radius: var(--raidius-md);
  margin-top: 25px;
`;

const Code = styled.p`
  color: var(--color-white-5);
  opacity: 0.85;
  font-size: 0.8rem;
  margin-bottom: 20px;
`;

const Price = styled.p`
  font-size: 1.25rem;
  font-weight: 500;
  /* margin-top: 40px; */
`;

const Img = styled.img`
  width: 22vw;
  @media (max-width: 1300px) {
    width: 28vw;
  }
  @media (max-width: 1000px) {
    width: 70vw;
  }
`;

const ImgContainer = styled.div`
  display: 'flex';
  justify-content: center;
  width: 25vw;
  @media (max-width: 1300px) {
    width: 30vw;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  width: 40vw;
  flex-direction: column;
  /* min-width: 300px; */
  @media (max-width: 1000px) {
    width: 70vw;
  }
`;

const VariationList = styled.ul`
  display: flex;
  gap: 0.6rem;
  list-style: none;
  margin-bottom: 10px;
`;

const VariationItem = styled(Link)`
  background-color: #e9e9e9b3;
  padding: 0.4rem 1.2rem;
  border-radius: var(--raidius-sm);
  border: var(--border-sm);
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  color: var(--color-white-5);

  &:hover,
  &.active {
    background-color: #222020;
    color: #f7f2f2;
  }
  @media (max-width: 1000px) {
    padding: 0.6rem 1.5rem;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.4rem;

  @media (max-width: 1000px) {
    margin-top: 10px;
    margin-bottom: 20px;
  }
  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

const qtyArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Product = () => {
  const { product, isLoading } = useGetProduct();

  const { variants, isLoading: isLoading2 } = useGetVariants(product?.name);
  const [selectedSize, setSelectedSize] = useState('');

  if (isLoading || isLoading2) return <Spinner />;

  const sizes = variants.filter(
    variant => variant.mainColor === product.mainColor
  );
  const colors = variants.filter(variant => variant.size === product.size);

  return (
    <>
      <StyledTop>
        <p>
          <StyledLink to={`/products/${product.mainCategory}`}>
            {product.mainCategory}
          </StyledLink>
          /
          <StyledLink
            to={`/products/${product.mainCategory}?subCat=${product.subCategory}`}
          >
            {product.subCategory}
          </StyledLink>
          /{product.name}
        </p>
      </StyledTop>
      <StyledProduct>
        <ImgContainer>
          <Img src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Row space='separate'>
            <Title as='h2'>{product.name}</Title>
            <Price>{formatCurrency(product.price)}</Price>
          </Row>
          <Code>{product.SKU}</Code>
          <Title as='h5'>Select color</Title>
          <VariationList>
            {colors.map(color => (
              <VariationItem
                to={`/product/details/${color.id}`}
                className={
                  color.mainColor === product.mainColor ? 'active' : ''
                }
                key={color.id}
              >
                {color.mainColor}
              </VariationItem>
            ))}
          </VariationList>
          <Title as='h5'>Select size</Title>
          <VariationList>
            {sizes.map(size => (
              <VariationItem
                onClick={() => setSelectedSize(size.size)}
                className={size.size === selectedSize ? 'active' : ''}
                key={size.id}
              >
                {size.size}
              </VariationItem>
            ))}
          </VariationList>
          <BtnContainer>
            <Select height='full'>
              {qtyArr.map(el => (
                <Option key={el} value={el}>
                  {el}
                </Option>
              ))}
            </Select>
            <Button width='full' variation='big'>
              <HiOutlineShoppingCart /> Add to cart
            </Button>
            <SaveBtn
              id={product.id}
              name={product.name}
              img={product.img}
              price={product.price}
              color={product.mainColor}
            />
          </BtnContainer>
          <Description style={{ width: '100%' }}>
            <Title as='h5'>Description</Title>
            {product.description}
          </Description>
        </InfoContainer>
      </StyledProduct>
      {/* <p>RECOMMENDATIONS or MORE PRODUCTS OF THIS CATEGORY</p> */}
    </>
  );
};

export default Product;
