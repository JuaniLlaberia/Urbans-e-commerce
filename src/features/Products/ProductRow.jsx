import Table from '../../components/Table';
import Modal from '../../components/Modal';
import ButtonIcon from '../../components/ButtonIcon';
import { formatCurrency } from '../../utils/formatCurrency';
import { HiOutlineTrash } from 'react-icons/hi2';
import { useDeleteProduct } from './useDeleteProduct';
import { RemoveText } from '../../components/RemoveText';
import RowText from '../../components/RowText';

const ProductRow = ({ product }) => {
  const {
    price,
    SKU,
    mainCategory,
    subCategory,
    id,
    img,
    mainColor,
    quantity,
  } = product;

  const { deleteProduct, isLoading } = useDeleteProduct();

  return (
    <Modal>
      <Table.Row>
        <RowText>{SKU}</RowText>
        <RowText>{formatCurrency(price)}</RowText>
        <RowText>{mainColor}</RowText>
        <RowText>
          {mainCategory.name}/{subCategory.name}
        </RowText>
        <RowText>{quantity}</RowText>
        <Modal.Open>
          <ButtonIcon size='sm'>
            <HiOutlineTrash />
          </ButtonIcon>
        </Modal.Open>
      </Table.Row>

      <Modal.Window>
        <RemoveText
          onConfirm={() =>
            deleteProduct({ id, imgToRemove: img.split('/').at(-1) })
          }
          resource={`${SKU} (No order can exist with this product to perform this operation)`}
          isDeleting={isLoading}
        />
      </Modal.Window>
    </Modal>
  );
};

export default ProductRow;
