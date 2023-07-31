import Form from '../../components/Form';
import Title from '../../components/Title';

const AddInventoryForm = () => {
  return (
    <Form>
      <Title as='h3'>Add sotck to the product</Title>
      <div>
        <input />
        <input />
        <button>+</button>
      </div>
      <ul>
        <li>S - 19</li>
        <li>M - 19</li>
        <li>L - 19</li>
      </ul>
    </Form>
  );
};

export default AddInventoryForm;
