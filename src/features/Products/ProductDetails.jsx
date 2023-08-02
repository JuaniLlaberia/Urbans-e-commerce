import Spinner from '../../components/Spinner';
import Title from '../../components/Title';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetVariants } from './useGetVariants';
import Table from '../../components/Table';
import ProductRow from './ProductRow';
import Pagination from '../../components/Pagination';
// import Form from '../../components/Form';
// import Input from '../../components/Input';
// import ButtonIcon from '../../components/ButtonIcon';
// import { useState } from 'react';

const ProductDetails = () => {
  // const navigate = useNavigate();
  const { productName } = useParams();
  // const [query, setQuery] = useState(productName);
  const { variants, isLoading } = useGetVariants();

  if (isLoading) return <Spinner />;

  return (
    <>
      <div>
        <Title as='h3'>All '{productName}' items</Title>
        {/* <Form>
          <Input value={query} onChange={e => setQuery(e.target.value)} />
          <ButtonIcon onClick={() => navigate(`/products/variants/${query}`)}>
            Search
          </ButtonIcon>
        </Form> */}
      </div>
      <br />
      <Table columns='1.3fr .9fr .9fr 1.3fr .5fr  0.4fr'>
        <Table.Header>
          <div>SKU</div>
          <div>Price</div>
          <div>Color</div>
          <div>Category</div>
          <div>Qty</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={variants}
          render={variant => <ProductRow key={variant.id} product={variant} />}
        />
        <Table.Footer>
          <Pagination />
        </Table.Footer>
      </Table>
    </>
  );
};

export default ProductDetails;
