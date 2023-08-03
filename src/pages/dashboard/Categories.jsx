import Title from '../../components/Title';
import CategoriesTable from '../../features/Categories/CategoriesTable';
import Row from '../../components/Row';
import AddCategory from '../../features/Categories/AddCategory';
import Filter from '../../components/Filter';
import Top from '../../components/Top';
import { filtersCategories } from '../../utils/filterConsts';

const Categories = () => {
  return (
    <>
      <Top>
        <Title as='h2'>Categories</Title>
      </Top>
      <Row>
        <Filter options={filtersCategories} />
        <AddCategory />
      </Row>
      <CategoriesTable />
    </>
  );
};

export default Categories;
