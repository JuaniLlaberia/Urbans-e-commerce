import Button from '../../components/Button';
import Modal from '../../components/Modal';
import NewVariantForm from './NewVariantForm';

const AddProduct = () => {
  return (
    <Modal>
      <Modal.Open opens='newProduct'>
        <Button variation='regular' aria-label='open'>
          New stock item
        </Button>
      </Modal.Open>
      <Modal.Window windowName='newProduct'>
        <NewVariantForm />
      </Modal.Window>
    </Modal>
  );
};

export default AddProduct;
