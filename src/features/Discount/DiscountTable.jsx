import Table from '../../components/Table';
import Spinner from '../../components/Spinner';
import { useGetDiscounts } from './useGetDiscounts';
import DiscountRow from './DiscountRow';

const DiscountTable = () => {
  const { discounts, isLoading } = useGetDiscounts();

  if (isLoading) return <Spinner />;

  return (
    <Table columns='3fr 1fr 1fr 1fr'>
      <Table.Header>
        <div>Code</div>
        <div>Amount</div>
        <div>Expires</div>
        <div></div>
      </Table.Header>
      <Table.Body
        data={discounts}
        render={discount => (
          <DiscountRow key={discount.id} discount={discount} />
        )}
      />
      <Table.Footer></Table.Footer>
    </Table>
  );
};

export default DiscountTable;
