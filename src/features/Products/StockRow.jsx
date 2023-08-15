import Table from '../../components/Table';
import Modal from '../../components/Modal';
import {
  HiOutlinePencil,
  HiOutlineShoppingCart,
  HiOutlineTrash,
} from 'react-icons/hi2';
import { RemoveText } from '../../components/RemoveText';
import RowText from '../../components/RowText';
import NewVariantForm from './NewVariantForm';
import { useNavigate } from 'react-router-dom';
import DropDownMenu from '../../components/DropDownMenu';
import { useDeleteStockItem } from './useDeleteStockItem';

const StockRow = ({ product }) => {
  const { id, size, quantity, productId } = product;

  const { deleteStockItem, isDeleting } = useDeleteStockItem();
  const navigate = useNavigate();

  return (
    <Modal>
      <Table.Row>
        <RowText>{productId?.SKU}</RowText>
        <RowText>{size}</RowText>
        <RowText>{quantity}</RowText>
        <RowText>{productId?.name}</RowText>

        <DropDownMenu>
          <DropDownMenu.Opener id={id} />
          <DropDownMenu.Menu id={id}>
            <DropDownMenu.Item
              onClick={() => navigate(`/product/details/${productId.SKU}`)}
            >
              <HiOutlineShoppingCart />
            </DropDownMenu.Item>
            <Modal.Open opens='editModal'>
              <DropDownMenu.Item>
                <HiOutlinePencil />
              </DropDownMenu.Item>
            </Modal.Open>
            <Modal.Open opens='deleteModal'>
              <DropDownMenu.Item>
                <HiOutlineTrash />
              </DropDownMenu.Item>
            </Modal.Open>
          </DropDownMenu.Menu>
        </DropDownMenu>
      </Table.Row>

      <Modal.Window windowName='deleteModal'>
        <RemoveText
          onConfirm={() => deleteStockItem(id)}
          resource={`${productId?.SKU} Size:${size}`}
          isDeleting={isDeleting}
        />
      </Modal.Window>
      <Modal.Window windowName='editModal'>
        <NewVariantForm
          variantToEdit={{ ...product, productId: product?.productId?.id }}
        />
      </Modal.Window>
    </Modal>
  );
};

export default StockRow;
