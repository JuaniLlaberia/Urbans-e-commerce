import { css, styled } from 'styled-components';

const StyledBox = styled.div`
  background-color: var(--color-white-2);
  border-radius: var(--raidius-md);
`;

const BoxBody = styled.div`
  padding: 0.6rem 1.25rem;
`;

const BoxItem = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 5px;

  color: var(--color-white-6);

  & span {
    color: var(--color-white-5);
  }

  & svg {
    color: var(--icons-color);
  }

  ${props =>
    props.space === 'between' &&
    css`
      justify-content: space-between;
    `}
`;

const BoxHead = styled.h4`
  background-color: var(--icons-color);
  border-top-right-radius: var(--raidius-md);
  border-top-left-radius: var(--raidius-md);
  padding: 0.6rem 1.25rem;
`;

const Box = ({ children }) => {
  return <StyledBox>{children}</StyledBox>;
};

const Head = ({ children }) => {
  return <BoxHead>{children}</BoxHead>;
};

const Body = ({ children }) => {
  return <BoxBody>{children}</BoxBody>;
};

const Item = ({ children, space }) => {
  return <BoxItem space={space}>{children}</BoxItem>;
};

Box.Head = Head;
Box.Body = Body;
Box.Item = Item;

export default Box;
