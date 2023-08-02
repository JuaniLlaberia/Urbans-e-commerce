import { css, styled } from 'styled-components';
import { HiOutlineTrash } from 'react-icons/hi2';
import Table from '../../components/Table';
import Modal from '../../components/Modal';
import { RemoveText } from '../../components/RemoveText';
import DropDownMenu from '../../components/DropDownMenu';
import RowText from '../../components/RowText';
import { useDeleteCategory } from './useDeleteCategory';

const Tag = styled.p`
  & span {
    padding: 0.1rem 1rem;
    border-radius: var(--raidius-lg);
    width: 3.5vw;
    min-width: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
  }

  ${props =>
    props.type === 'Main' &&
    css`
      & span {
        background-color: #ffeaa3a2;
        color: #ffbb00;
      }
    `}
  ${props =>
    props.type === 'Sub' &&
    css`
      & span {
        background-color: #92b4fa89;
        color: #4a86ffca;
      }
    `};
`;

const CategoriesRow = ({ category }) => {
  const { deleteCategory, isDeleting } = useDeleteCategory();
  const { name, type, family, id } = category;

  return (
    <Modal>
      <Table.Row>
        <RowText>{name}</RowText>
        <Tag type={type}>
          <span>{type}</span>
        </Tag>
        <RowText>{!family ? <span>&mdash;</span> : family}</RowText>
        <DropDownMenu>
          <DropDownMenu.Opener id={id} />
          <DropDownMenu.Menu id={id}>
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
          onConfirm={() => deleteCategory(id)}
          resource={name}
          isDeleting={isDeleting}
        />
      </Modal.Window>
    </Modal>
  );
};

export default CategoriesRow;
