import Title from '../../components/Title';
import AddCategory from './AddCategory';
import CategoriesTable from '../../features/Categories/CategoriesTable';
import Row from '../../components/Row';

const Categories = () => {
  return (
    <>
      <Title as='h2'>Categories</Title>
      <Row>
        <AddCategory />
      </Row>
      <CategoriesTable />
    </>
  );
};

export default Categories;
