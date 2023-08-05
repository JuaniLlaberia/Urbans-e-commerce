import Row from '../../components/Row';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import { RemoveText } from '../../components/RemoveText';
import { useNavigate } from 'react-router-dom';
import ShipOrderForm from './ShipOrderForm';
import { useDeleteOrder } from './useDeleteOrder';
import { useGetOrder } from './useGetOrder';
import Spinner from '../../components/Spinner';
import { styled } from 'styled-components';

const StyledLink = styled.a`
  background-color: var(--icons-color);
  color: #fff;
  font-weight: 600;
  border-radius: var(--raidius-sm);
  border: none;
  transition: all 0.15s ease-in;
  cursor: pointer;
  font-size: 0.9rem;
  text-decoration: none;

  &:hover {
    background-color: var(--icons-color-hover);
  }

  padding: 0.5rem 1.25rem;
  min-width: 8rem;
`;

const DetailsBtns = ({ id, status }) => {
  const navigate = useNavigate();
  const { order, isLoading } = useGetOrder(id);
  const { deleteOrder, isDeleting } = useDeleteOrder();

  if (isLoading) return <Spinner />;

  return (
    <Row>
      <Button type='outline' onClick={() => navigate('/admin/orders')}>
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
      {status === 'Shipped' && (
        <StyledLink href={order?.trackingNum} target='blank'>
          Track order
        </StyledLink>
      )}
    </Row>
  );
};

export default DetailsBtns;
