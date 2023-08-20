import Button from '../../components/Button';
import Row from '../../components/Row';

const CheckoutBtns = () => {
  return (
    <Row>
      <Button variation='regular' aria-label='navigate'>
        Go to payment
      </Button>
    </Row>
  );
};

export default CheckoutBtns;
