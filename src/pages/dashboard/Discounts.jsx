import Title from '../../components/Title';
import Row from '../../components/Row';
import { AddDiscount } from '../../features/Discount/AddDiscount';
import DiscountTable from '../../features/Discount/DiscountTable';

const Discounts = () => {
  return (
    <>
      <Title as='h2'>Discounts</Title>
      <Row>
        <div></div>
        <AddDiscount />
      </Row>
      <DiscountTable />
    </>
  );
};

export default Discounts;
