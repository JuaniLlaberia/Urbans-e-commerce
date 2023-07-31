import { css, styled } from 'styled-components';
import { HiOutlineTrash } from 'react-icons/hi2';
import Table from '../../components/Table';
import ButtonIcon from '../../components/ButtonIcon';
import { useDeleteCategory } from './useDeleteCategory';

const Category = styled.p`
  font-size: 1rem;
  color: var(--color-white-6);
`;
const Tag = styled.p`
  & span {
    padding: 0.1rem 1rem;
    border-radius: var(--raidius-lg);
  }

  ${props =>
    props.type === 'Main' &&
    css`
      & span {
        background-color: #ffe1809d;
      }
    `}
  ${props =>
    props.type === 'Sub' &&
    css`
      & span {
        background-color: #75a3ff9d;
      }
    `};
`;

const CategoriesRow = ({ category }) => {
  const { deleteCategory, isDeleting } = useDeleteCategory();
  const { name, type, family, id } = category;

  return (
    <Table.Row>
      <Category>{name}</Category>
      <Tag type={type}>
        <span>{type}</span>
      </Tag>
      <p>{!family ? <span>&mdash;</span> : family}</p>
      {/* ADD POP UP OR CONFIRMATION */}
      <ButtonIcon
        size='sm'
        onClick={() => deleteCategory(id)}
        disabled={isDeleting}
      >
        <HiOutlineTrash />
      </ButtonIcon>
    </Table.Row>
  );
};

export default CategoriesRow;
