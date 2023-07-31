import RowText from '../../components/RowText';
import Table from '../../components/Table';
import ButtonIcon from '../../components/ButtonIcon';
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi2';
import { styled } from 'styled-components';
import { useDeleteDiscount } from './useDeleteDiscount';
import Modal from '../../components/Modal';
import { RemoveText } from '../../components/RemoveText';
import DiscountForm from './DiscountForm';

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.4rem;
`;

const Expired = styled.span`
  background-color: #f74c4c;
  color: white;
  padding: 0.2rem;
  border-radius: var(--raidius-lg);
`;

const DiscountRow = ({ discount }) => {
  const { deleteDiscount, isDeleting } = useDeleteDiscount();
  const { code, amount, validUntil, id } = discount;
  const expires = new Date(validUntil).toLocaleDateString();

  const hasExpired = new Date(validUntil) < new Date();

  return (
    <Modal>
      <Table.Row>
        <RowText type='main'>{code}</RowText>
        <RowText>{amount} %</RowText>
        <RowText>{!hasExpired ? expires : <Expired>Expired</Expired>}</RowText>
        <Buttons>
          <Modal.Open opens='editModal'>
            <ButtonIcon size='sm' disabled={isDeleting}>
              <HiOutlinePencil />
            </ButtonIcon>
          </Modal.Open>
          <Modal.Open opens='removeModal'>
            <ButtonIcon size='sm' disabled={isDeleting}>
              <HiOutlineTrash />
            </ButtonIcon>
          </Modal.Open>
        </Buttons>
      </Table.Row>
      <Modal.Window windowName='removeModal'>
        <RemoveText
          resource={code}
          onConfirm={() => deleteDiscount(id)}
          isDeleting={isDeleting}
        />
      </Modal.Window>
      <Modal.Window windowName='editModal'>
        <DiscountForm discountToEdit={discount} />
      </Modal.Window>
    </Modal>
  );
};

export default DiscountRow;
