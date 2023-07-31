import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

const AddProduct = () => {
  const navigate = useNavigate();
  return (
    <Button type='regular' onClick={() => navigate('/products/new')}>
      New product
    </Button>
  );
};

export default AddProduct;
