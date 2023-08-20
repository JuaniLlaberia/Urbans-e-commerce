import Modal from '../../components/Modal';
import Button from '../../components/Button';
import DiscountForm from './DiscountForm';

export const AddDiscount = () => {
  return (
    <Modal>
      <Modal.Open>
        <Button variation='regular' aria-label='open'>
          New discount
        </Button>
      </Modal.Open>
      <Modal.Window>
        <DiscountForm />
      </Modal.Window>
    </Modal>
  );
};
