import Title from '../../components/Title';
import { useParams, useSearchParams } from 'react-router-dom';

const Products = () => {
  const { mainCategory } = useParams();

  const [searchParams] = useSearchParams();
  const subCategory = searchParams.get('subCat');

  return (
    <>
      <Title as='h2'>
        {subCategory ? `${mainCategory}/${subCategory}` : `All ${mainCategory}`}
        <span> (160 products)</span>
      </Title>
      <p>Products</p>
    </>
  );
};

export default Products;
