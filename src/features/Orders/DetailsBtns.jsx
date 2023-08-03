import Row from '../../components/Row';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import { useNavigate } from 'react-router-dom';

const DetailsBtns = ({ id }) => {
  const navigate = useNavigate();

  return (
    <Row>
      <Button type='outline' onClick={() => navigate('/orders')}>
        Back
      </Button>
      <Modal>
        <Modal.Open opens='shipModal'>
          <Button type='regular'>
            Ship order #{String(id).padStart(4, '0')}
          </Button>
        </Modal.Open>
        <Modal.Window windowName='shipModal'>
          <p>Ship order modal</p>
        </Modal.Window>
      </Modal>
    </Row>
  );
};

export default DetailsBtns;
