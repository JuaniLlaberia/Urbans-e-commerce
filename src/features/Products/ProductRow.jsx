import Table from '../../components/Table';
import Modal from '../../components/Modal';
import ButtonIcon from '../../components/ButtonIcon';
import { formatCurrency } from '../../utils/formatCurrency';
import {
  HiOutlineClipboard,
  HiOutlinePencil,
  HiOutlineTrash,
} from 'react-icons/hi2';
import { useDeleteProduct } from './useDeleteProduct';
import { RemoveText } from '../../components/RemoveText';
import RowText from '../../components/RowText';
import NewProductForm from './NewProductForm';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

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
        <div>
          <ButtonIcon
            size='sm'
            onClick={() => navigate(`/products/details/${id}`)}
          >
            <HiOutlineClipboard />
          </ButtonIcon>
          <Modal.Open opens='deleteModal'>
            <ButtonIcon size='sm'>
              <HiOutlineTrash />
            </ButtonIcon>
          </Modal.Open>
          <Modal.Open opens='editModal'>
            <ButtonIcon size='sm'>
              <HiOutlinePencil />
            </ButtonIcon>
          </Modal.Open>
        </div>
      </Table.Row>

      <Modal.Window windowName='deleteModal'>
        <RemoveText
          onConfirm={() =>
            deleteProduct({ id, imgToRemove: img.split('/').at(-1) })
          }
          resource={`${SKU} (No order can exist with this product to perform this operation)`}
          isDeleting={isLoading}
        />
      </Modal.Window>
      <Modal.Window windowName='editModal'>
        <NewProductForm productToEdit={product} />
      </Modal.Window>
    </Modal>
  );
};

export default ProductRow;
