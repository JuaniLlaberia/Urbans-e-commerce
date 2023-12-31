import { createContext, useContext } from 'react';
import { styled } from 'styled-components';

const StyledTable = styled.div`
  font-size: 1rem;
  border-radius: var(--raidius-md);
  overflow: hidden;
  background-color: var(--color-white-1);
  border: var(--border-sm);
  margin-top: 10px;
  width: 100%;
`;

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${props => props.columns};
  column-gap: 1.8rem;
  align-items: center;
  transition: none;

  @media (max-width: 800px) {
    column-gap: 1rem;
  }
  @media (max-width: 4500px) {
    column-gap: 0.75rem;
  }
`;

const StyledHeader = styled(CommonRow)`
  padding: 0.7rem 2.2rem;
  background-color: var(--color-white-2);
  border-bottom: var(--border-sm);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-white-5);
  font-size: 0.85rem;
  @media (max-width: 450px) {
    font-size: 0.6rem;
    padding: 0.7rem 1rem;
  }
`;

const StyledRow = styled(CommonRow)`
  padding: 0.7rem 2rem;
  background-color: var(--color-white-1);

  &:not(:last-child) {
    border-bottom: var(--border-sm);
  }

  @media (max-width: 450px) {
    padding: 0.7rem 1rem;
    font-size: 0.6rem;
  }
`;

const StyledBody = styled.section`
  margin: 0.4rem 0;
  /* min-height: 250px; */
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 0.5rem 1.2rem;
  background-color: var(--color-white-2);
  border-top: var(--border-sm);
  min-height: 30px;
`;

const Empty = styled.p`
  font-size: 1rem;
  color: var(--color-white-5);
  opacity: 0.7;
  font-weight: 500;
  text-align: center;
  margin: 2.4rem;
`;

const TableContext = createContext();

const Table = ({ children, columns }) => {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable role='table'>{children}</StyledTable>
    </TableContext.Provider>
  );
};

const Header = ({ children }) => {
  const { columns } = useContext(TableContext);

  return (
    <StyledHeader role='row' columns={columns} as='header'>
      {children}
    </StyledHeader>
  );
};
const Row = ({ children }) => {
  const { columns } = useContext(TableContext);

  return (
    <StyledRow role='row' columns={columns}>
      {children}
    </StyledRow>
  );
};

const Body = ({ data, render }) => {
  if (!data.length) return <Empty>No data to show at the momment</Empty>;
  return <StyledBody>{data.map(render)}</StyledBody>;
};

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;

export default Table;
