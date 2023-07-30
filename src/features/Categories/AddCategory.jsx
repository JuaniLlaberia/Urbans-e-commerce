import Modal from '../../components/Modal';
import Button from '../../components/Button';
import NewCategoryForm from './NewCategoryForm';

const AddCategory = () => {
  return (
    <Modal>
      <Modal.Open>
        <Button type='regular'>Add category</Button>
      </Modal.Open>
      <Modal.Window>
        <NewCategoryForm />
      </Modal.Window>
    </Modal>
  );
};

export default AddCategory;
