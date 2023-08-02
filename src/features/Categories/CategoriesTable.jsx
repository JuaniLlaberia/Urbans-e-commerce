import Spinner from '../../components/Spinner';
import Table from '../../components/Table';
import Pagination from '../../components/Pagination';
import CategoriesRow from './CategoriesRow';
import { useGetCategories } from './useGetCategories';

const CategoriesTable = () => {
  const { categories, isLoading, count } = useGetCategories();

  if (isLoading) return <Spinner />;

  return (
    <Table columns='3fr 1fr 1fr 0.5fr'>
      <Table.Header>
        <div>Category</div>
        <div>Type</div>
        <div>Family</div>
        <div></div>
      </Table.Header>
      <Table.Body
        data={categories}
        render={category => (
          <CategoriesRow key={category.id} category={category} />
        )}
      />
      <Table.Footer>
        <Pagination count={count} />
      </Table.Footer>
    </Table>
  );
};

export default CategoriesTable;
