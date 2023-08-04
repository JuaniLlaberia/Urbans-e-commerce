import Row from '../../components/Row';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import { RemoveText } from '../../components/RemoveText';
import { useNavigate } from 'react-router-dom';
import ShipOrderForm from './ShipOrderForm';
import { useDeleteOrder } from './useDeleteOrder';

const DetailsBtns = ({ id, status }) => {
  const navigate = useNavigate();
  const { deleteOrder, isDeleting } = useDeleteOrder();

  return (
    <Row>
      <Button type='outline' onClick={() => navigate('/orders')}>
        Back
      </Button>
      {(status === 'Cancel' || status === 'Delivered') && (
        <Modal>
          <Modal.Open opens='removeShip'>
            <Button type='alert'>Remove #{String(id).padStart(4, '0')}</Button>
          </Modal.Open>
          <Modal.Window windowName='removeShip'>
            <RemoveText
              onConfirm={() => deleteOrder(id)}
              resource={`Order #${String(id).padStart(4, '0')}`}
              isDeleting={isDeleting}
            />
          </Modal.Window>
        </Modal>
      )}
      {status === 'Pending' && (
        <Modal>
          <Modal.Open opens='shipModal'>
            <Button type='regular'>
              Ship order #{String(id).padStart(4, '0')}
            </Button>
          </Modal.Open>
          <Modal.Window windowName='shipModal'>
            <ShipOrderForm id={id} />
          </Modal.Window>
        </Modal>
      )}
      {status === 'Shipped' && <Button type='regular'>Track order</Button>}
    </Row>
  );
};

export default DetailsBtns;
