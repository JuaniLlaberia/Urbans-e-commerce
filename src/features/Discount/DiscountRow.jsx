import RowText from '../../components/RowText';
import Table from '../../components/Table';
import ButtonIcon from '../../components/ButtonIcon';
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi2';
import { styled } from 'styled-components';
import { useDeleteDiscount } from './useDeleteDiscount';
import Modal from '../../components/Modal';
import { RemoveText } from '../../components/RemoveText';
import DiscountForm from './DiscountForm';
import DropDownMenu from '../../components/DropDownMenu';

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Expired = styled.span`
  background-color: #fd8b8bc1;
  font-weight: 500;
  color: #ff1313;
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
        <DropDownMenu>
          <DropDownMenu.Opener id={id} />
          <DropDownMenu.Menu id={id}>
            <Modal.Open opens='editModal'>
              <DropDownMenu.Item>
                <HiOutlinePencil />
              </DropDownMenu.Item>
            </Modal.Open>
            <Modal.Open opens='removeModal'>
              <DropDownMenu.Item>
                <HiOutlineTrash />
              </DropDownMenu.Item>
            </Modal.Open>
          </DropDownMenu.Menu>
        </DropDownMenu>
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
