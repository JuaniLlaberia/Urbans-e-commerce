import Table from '../../components/Table';
import Modal from '../../components/Modal';
import { formatCurrency } from '../../utils/formatCurrency';
import {
  HiOutlineClipboard,
  HiOutlinePencil,
  HiOutlineServerStack,
  HiOutlineShoppingCart,
  HiOutlineTrash,
} from 'react-icons/hi2';
import { useDeleteProduct } from './useDeleteProduct';
import { RemoveText } from '../../components/RemoveText';
import RowText from '../../components/RowText';
import NewProductForm from './NewProductForm';
import { useNavigate } from 'react-router-dom';
import DropDownMenu from '../../components/DropDownMenu';

const ProductRow = ({ product, variant }) => {
  const { price, SKU, mainCategory, subCategory, id, img, mainColor, name } =
    product;

  const { deleteProduct, isLoading } = useDeleteProduct();
  const navigate = useNavigate();

  return (
    <Modal>
      <Table.Row>
        <RowText>{SKU}</RowText>
        <RowText>{formatCurrency(price)}</RowText>
        <RowText>{mainColor}</RowText>
        <RowText>
          {mainCategory}/{subCategory}
        </RowText>
        <DropDownMenu>
          <DropDownMenu.Opener id={id} />
          <DropDownMenu.Menu id={id}>
            <DropDownMenu.Item
              onClick={() => navigate(`/product/details/${SKU}`)}
            >
              <HiOutlineShoppingCart />
            </DropDownMenu.Item>
            {variant ? null : (
              <DropDownMenu.Item onClick={() => navigate(`variants/${name}`)}>
                <HiOutlineClipboard />
              </DropDownMenu.Item>
            )}
            <DropDownMenu.Item
              onClick={() => navigate(`/admin/stock?productId=${id}`)}
            >
              <HiOutlineServerStack />
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
