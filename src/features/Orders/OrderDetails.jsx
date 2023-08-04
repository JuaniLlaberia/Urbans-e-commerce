import { useParams } from 'react-router-dom';
import OrderProductsTable from './OrderProductsTable';
import DetailsBox from './DetailsBox';

const OrderDetails = () => {
  const { orderId } = useParams();

  return (
    <>
      <DetailsBox id={orderId}>
        <OrderProductsTable id={orderId} />
      </DetailsBox>
    </>
  );
};

export default OrderDetails;
