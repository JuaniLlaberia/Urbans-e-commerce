import { useParams } from 'react-router-dom';
import Title from '../../components/Title';
import OrderProductsTable from './OrderProductsTable';
import DetailsBox from './DetailsBox';
import DetailsBtns from './DetailsBtns';

const OrderDetails = () => {
  const { orderId } = useParams();

  return (
    <>
      <DetailsBox id={orderId} />
      <OrderProductsTable id={orderId} />
      <DetailsBtns id={orderId} />
    </>
  );
};

export default OrderDetails;
