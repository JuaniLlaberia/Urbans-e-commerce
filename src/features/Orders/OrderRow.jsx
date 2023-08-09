import React from 'react';
import Table from '../../components/Table';
import RowText from '../../components/RowText';
import Modal from '../../components/Modal';
import DropDownMenu from '../../components/DropDownMenu';
import { RemoveText } from '../../components/RemoveText';
import { HiOutlineClipboard, HiOutlineTrash } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';
import { css, styled } from 'styled-components';
import { useDeleteOrder } from './useDeleteOrder';

const ShipmentTag = styled.span`
  padding: 0.1rem 2rem;
  border-radius: var(--raidius-lg);
  width: 3.5vw;
  min-width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;

  ${props =>
    props.type === 'Regular' &&
    css`
      background-color: #ffeaa344;
      color: #ffbb00;
    `}
  ${props =>
    props.type === 'Express' &&
    css`
      background-color: #92faa031;
      color: #74f354c8;
    `};
`;

const StatusTag = styled.span`
  padding: 0.1rem 1rem;
  border-radius: var(--raidius-lg);
  width: 15vw;
  min-width: 80px;
  max-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;

  ${props =>
    props.type === 'Cancel' &&
    css`
      background-color: #fd8b8b49;
      color: #ff1313;
    `}
  ${props =>
    props.type === 'Pending' &&
    css`
      background-color: #ffeaa344;
      color: #ffbb00;
    `};
  ${props =>
    props.type === 'Shipped' &&
    css`
      background-color: #92b5fa32;
      color: #4a86ffca;
    `};
  ${props =>
    props.type === 'Delivered' &&
    css`
      background-color: #92faa031;
      color: #74f354c8;
    `};
`;

export const OrderRow = ({ order }) => {
  const navigate = useNavigate();
  const { id, shipmentAddress, shipmentType, status } = order;
  const { isDeleting, deleteOrder } = useDeleteOrder();

  return (
    <Modal>
      <Table.Row>
        <RowText>#{String(id).padStart(4, '0')}</RowText>
        <RowText>{shipmentAddress}</RowText>
        <RowText>
          <ShipmentTag type={shipmentType}>{shipmentType}</ShipmentTag>
        </RowText>
        <RowText>
          <StatusTag type={status}>{status}</StatusTag>
        </RowText>
        <DropDownMenu>
          <DropDownMenu.Opener id={id} />
          <DropDownMenu.Menu id={id}>
            <DropDownMenu.Item
              onClick={() => navigate(`/admin/order/details/${id}`)}
            >
              <HiOutlineClipboard />
            </DropDownMenu.Item>
            <DropDownMenu.Item>
              <Modal.Open opens='deleteModal'>
                <HiOutlineTrash />
              </Modal.Open>
            </DropDownMenu.Item>
          </DropDownMenu.Menu>
        </DropDownMenu>
      </Table.Row>
      <Modal.Window windowName='deleteModal'>
        <RemoveText
          resource={`Order #${String(id).padStart(4, '0')}`}
          isDeleting={isDeleting}
          onConfirm={() => deleteOrder(id)}
        />
      </Modal.Window>
    </Modal>
  );
};
