import Modal from '../../components/Modal';
import Button from '../../components/Button';
import NewCategoryForm from './NewCategoryForm';

const AddCategory = () => {
  return (
    <Modal>
      <Modal.Open>
        <Button type='regular'>New category</Button>
      </Modal.Open>
      <Modal.Window>
        <NewCategoryForm />
      </Modal.Window>
    </Modal>
  );
};

export default AddCategory;
