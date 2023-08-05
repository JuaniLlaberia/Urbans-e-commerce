import { css, styled } from 'styled-components';

const StatusTag = styled.span`
  padding: 0.1rem 1rem;
  border-radius: var(--raidius-lg);
  font-weight: 500;

  ${props =>
    props.type === 'Closed' &&
    css`
      background-color: #fd8b8b49;
      color: #ff1313;
    `}
  ${props =>
    props.type === 'New' &&
    css`
      background-color: #a2fd8b48;
      color: #13ff3ab7;
    `}
  ${props =>
    props.type === 'Open' &&
    css`
      background-color: #fff27a47;
      color: #ffc116da;
    `}
`;

export default StatusTag;
