import { useParams } from 'react-router-dom';
import OrderProductsTable from './OrderProductsTable';
import DetailsBox from './DetailsBox';

const OrderDetails = ({ isCustomer }) => {
  const { orderId } = useParams();

  return (
    <>
      <DetailsBox id={orderId} isCustomer={isCustomer}>
        <OrderProductsTable id={orderId} />
      </DetailsBox>
    </>
  );
};

export default OrderDetails;
