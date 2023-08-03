import { css, styled } from 'styled-components';

const StatusTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  padding: 0.25rem 0.8rem;
  border-radius: var(--raidius-lg);

  & span {
    font-weight: 600;
  }

  ${props =>
    props.type === 'Cancel' &&
    css`
      background-color: #fd8b8b49;
      color: #ff1313;
    `}
  ${props =>
    (props.type === 'Pending' || props.type === 'Regular') &&
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
    (props.type === 'Delivered' || props.type === 'Express') &&
    css`
      background-color: #92faa031;
      color: #74f354c8;
    `};
`;

export default StatusTag;
