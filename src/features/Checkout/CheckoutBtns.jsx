import Button from '../../components/Button';
import Row from '../../components/Row';

const CheckoutBtns = () => {
  return (
    <Row>
      <Button variation='outline'>Keep shopping</Button>
      <Button variation='regular'>Go to payment</Button>
    </Row>
  );
};

export default CheckoutBtns;
