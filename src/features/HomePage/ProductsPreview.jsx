import { styled } from 'styled-components';
import { HorizontalCatalog } from './HorizontalCatalog';
import Title from '../../components/Title';
import Row from '../../components/Row';
import Spinner from '../../components/Spinner';
import { Link } from 'react-router-dom';
import { useGetMainCategories } from '../Categories/useGetMainCategories';

const StyledPage = styled.section`
  padding-top: 2.5rem;
  margin-top: 500px;
`;

const ProductsPreview = () => {
  const { mainCategories, isLoading } = useGetMainCategories();

  if (isLoading) return <Spinner />;

  const categoriesToPreview = [mainCategories[0].name, mainCategories[1].name];

  return (
    <StyledPage>
      {categoriesToPreview.map(category => (
        <div key={category}>
          <Row space='separate'>
            <Title as='h3'>{category} Collection</Title>
            <Link
              to={`/products/${category}`}
              style={{ color: 'var(--color-white-6)', fontWeight: '600' }}
            >
              See all
            </Link>
          </Row>
          <HorizontalCatalog category={category} />
          <br />
        </div>
      ))}
    </StyledPage>
  );
};

export default ProductsPreview;
