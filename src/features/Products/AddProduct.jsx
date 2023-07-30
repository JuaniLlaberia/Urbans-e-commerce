import Button from '../../components/Button';
import Modal from '../../components/Modal';
import NewProductForm from './NewProductForm';

const AddProduct = () => {
  return (
    <Modal>
      <Modal.Open>
        <Button type='regular'>New product</Button>
      </Modal.Open>
      <Modal.Window>
        <NewProductForm />
      </Modal.Window>
    </Modal>
  );
};

export default AddProduct;
