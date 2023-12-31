import { styled } from 'styled-components';
import Title from '../../components/Title';
import Row from '../../components/Row';
import Button from '../../components/Button';
import Select from '../../components/Select';
import Option from '../../components/Option';
import { Link, useSearchParams } from 'react-router-dom';
import { formatCurrency } from '../../utils/formatCurrency';
import { useGetVariants } from '../../features/Products/useGetVariants';
import { HiOutlineShoppingCart } from 'react-icons/hi2';
import SaveBtn from '../../features/StoreProducts/SaveBtn';
import { useGetProductBySku } from '../../features/Products/useGetProductBySku';
import { useGetStockFromId } from '../../features/Products/useGetStockFromId';
import { useRef, useState } from 'react';
import ProductLoadingSkeleton from '../../components/ProductLoadingSkeleton';
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/Cart/cartSlice';
import { useCartSlideContext } from '../../context/CartSlideContext';

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
  place-items: center;

  @media (max-width: 1300px) {
    padding: 0.5rem 4rem;
  }
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    padding: 0.5rem 3rem;
    row-gap: 1.5rem;
  }
  @media (max-width: 550px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const Description = styled.p`
  padding: 0.5rem;
  margin-top: 50px;
  color: var(--color-white-5);
  text-align: justify;
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
`;

const Img = styled.img`
  width: 22vw;
  min-height: 400px;
  object-fit: cover;
  object-position: center;
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
  @media (max-width: 1000px) {
    width: 70vw;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  width: 40vw;
  flex-direction: column;
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

const VariationItem = styled.button`
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
  &.out-stock {
    cursor: not-allowed;
    background-color: #adacac;
    color: #cac7c7;
    text-decoration: line-through;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.4rem;
  margin-top: 20px;

  @media (max-width: 1000px) {
    margin-top: 10px;
    margin-bottom: 20px;
  }
  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

const StockMsg = styled.p`
  color: #f84747;
`;

const qtyArr = [1, 2, 3, 4, 5];

const Product = () => {
  const { openOnClick } = useCartSlideContext();
  const [stockMsg, setStockMsg] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  //Getting product by SKU code
  const { product, isLoading: isLoadingProducts } = useGetProductBySku();

  //Getting all variants (different colors)
  const { variants, isLoading: isLoadingVariants } = useGetVariants(
    product?.name
  );

  const { stock, isLoading: isLoadingStock } = useGetStockFromId(product?.id);

  const qtyRef = useRef();

  if (isLoadingProducts || isLoadingVariants || isLoadingStock)
    return <ProductLoadingSkeleton />;

  const handleSize = size => {
    setStockMsg('');
    searchParams.set('size', size);
    setSearchParams(searchParams);
  };

  const selectedSize = searchParams.get('size');

  const addCart = () => {
    //Checking that there is a selected size
    if (!selectedSize) {
      setStockMsg('Must select a size');
      return;
    }

    const size = stock.find(s => s.size === searchParams.get('size'));
    const quantity = Number(qtyRef.current.value);

    //Checking that the quantity requested is not higher than the available stock
    if (quantity > size.quantity) {
      setStockMsg('Not enough stock');
      return;
    }

    //Add to cart
    const orderItem = {
      img: product.img,
      name: product.name,
      price: product.price,
      SKU: product.SKU,
      color: product.mainColor,
      productId: product.id,
      quantity,
      size: size.size,
      stockId: size.id,
    };

    dispatch(addItem(orderItem));

    //Open cart slide
    openOnClick();
  };

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
          <Img src={product.img} alt={`Product ${product.name}`} />
        </ImgContainer>
        <InfoContainer>
          <Row space='separate'>
            <Title as='h2'>{product.name}</Title>
            <Price>{formatCurrency(product.price)}</Price>
          </Row>
          <Code>{product.SKU}</Code>
          <Title as='h5'>Select color</Title>
          <VariationList>
            {variants.map(variant => (
              <VariationItem
                as={Link}
                to={`/product/details/${variant.SKU}`}
                className={variant.id === product.id ? 'active' : ''}
                key={variant.id}
              >
                {variant.mainColor}
              </VariationItem>
            ))}
          </VariationList>
          <Title as='h5'>Select size</Title>
          <VariationList>
            {stock.map(s => (
              <VariationItem
                disabled={s.quantity === 0}
                onClick={() => handleSize(s.size)}
                key={s.id}
                className={`
                 ${s.size === searchParams.get('size') ? 'active' : ''}
                 ${s.quantity === 0 ? 'out-stock' : ''}
                `}
              >
                {s.size}
              </VariationItem>
            ))}
          </VariationList>
          <StockMsg>{stockMsg}</StockMsg>
          <BtnContainer>
            <Select height='full' ref={qtyRef}>
              {qtyArr.map(el => (
                <Option key={el} value={el}>
                  {el}
                </Option>
              ))}
            </Select>
            <Button width='full' variation='big' onClick={addCart}>
              <HiOutlineShoppingCart /> Add to cart
            </Button>
            <SaveBtn
              id={product.id}
              name={product.name}
              img={product.img}
              price={product.price}
              color={product.mainColor}
              SKU={product.SKU}
            />
          </BtnContainer>
          <Description style={{ width: '100%' }}>
            {product.description}
          </Description>
        </InfoContainer>
      </StyledProduct>
    </>
  );
};

export default Product;
