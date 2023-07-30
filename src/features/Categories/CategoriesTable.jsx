import Spinner from '../../components/Spinner';
import Table from '../../components/Table';
import CategoriesRow from './CategoriesRow';
import { useGetCategories } from './useGetCategories';

const CategoriesTable = () => {
  const { categories, isLoading } = useGetCategories();

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
    </Table>
  );
};

export default CategoriesTable;
