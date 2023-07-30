import { createContext, useContext } from 'react';
import { styled } from 'styled-components';

const StyledTable = styled.div`
  font-size: 1rem;
  border-radius: var(--raidius-md);
  overflow: hidden;
  background-color: var(--color-white-1);
  border: var(--border-sm);
  margin-top: 10px;
`;

const CommonRow = styled.div`
  display: grid;
  grid-template-columns: ${props => props.columns};
  column-gap: 1.8rem;
  align-items: center;
  transition: none;
`;

const StyledHeader = styled(CommonRow)`
  padding: 0.7rem 2rem;
  background-color: var(--color-white-2);
  border-bottom: var(--border-sm);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-white-5);
  font-size: 0.85rem;
`;

const StyledRow = styled(CommonRow)`
  padding: 0.9rem 2.4rem;
  background-color: var(--color-white-1);

  &:not(:last-child) {
    border-bottom: var(--border-sm);
  }
`;

const StyledBody = styled.section`
  margin: 0.4rem 0;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
  &:not(:has(*)) {
    display: none;
  }
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

//NEED to pass the data and the render
const Body = ({ data, render }) => {
  if (!data.length) return <Empty>No data to show at the momment</Empty>;
  return <StyledBody>{data.map(render)}</StyledBody>;
};

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.Footer = Footer;

export default Table;
