import { styled } from 'styled-components';
import Table from '../../components/Table';
import Title from '../../components/Title';
import { formatCurrency } from '../../utils/formatCurrency';

const ProductRow = ({ product }) => {
  const { name, price, discount, img, mainCategory, subCategory } = product;

  return (
    <Table.Row>
      {/* {img ? <Img src={img} /> : <span>&mdash;</span>} */}
      <Title as='p'>{name}</Title>
      <Title as='p'>{formatCurrency(price)}</Title>
      {discount === 0 ? (
        <span>&mdash;</span>
      ) : (
        <Title as='p'>{formatCurrency(discount)}</Title>
      )}
      <Title as='p'>{mainCategory.name}</Title>
      <Title as='p'>{subCategory.name}</Title>
    </Table.Row>
  );
};

export default ProductRow;
