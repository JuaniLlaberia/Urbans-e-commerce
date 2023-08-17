import { styled } from 'styled-components';

const StyledBox = styled.div`
  border-radius: var(--raidius-sm);
  box-shadow: var(--shadow-light);
`;

const StyleHeader = styled.li`
  background-color: var(--color-white-2);
  color: var(--color-white-5);
  padding: 0.6rem 0.8rem;

  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
  border-bottom: var(--border-sm);

  & span {
    font-size: 1.5rem;
  }
`;

const StyledBody = styled.ul`
  background-color: var(--color-white-3);
  list-style: none;
`;

const StyleItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0.4rem 0.6rem;
  background-color: var(--color-white-1);
  border-bottom: var(--border-sm);
  font-size: 0.95rem;

  & span {
    font-weight: 600;
  }
`;

const EmptyText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-white-5);
  opacity: 0.5;
  height: 50px;
`;

const StatBoxTable = ({ icon, color, label, data }) => {
  return (
    <StyledBox>
      <StyleHeader>
        <span
          style={{
            color: '#f8f5f576',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: color,
            padding: '.4rem',
            borderRadius: '100px',
          }}
        >
          {icon}
        </span>
        <p style={{ fontSize: '.8rem', opacity: '.6' }}>
          {label?.toUpperCase()}
        </p>
      </StyleHeader>
      <StyledBody>
        {data.length < 1 ? (
          <EmptyText>No data available</EmptyText>
        ) : (
          data.map(item => (
            <StyleItem
              key={item.data.id}
              style={item.qty === 0 ? { backgroundColor: '#ff9696' } : {}}
            >
              <p>
                {item.data.name}
                <span style={{ fontSize: '.7rem' }}>
                  ({item.data.SKU}
                  {item.data.size !== '-' ? ` - ${item.data.size}` : null})
                </span>
              </p>
              <span>{item.qty === 0 ? 'Sold Out' : `${item.qty}u`}</span>
            </StyleItem>
          ))
        )}
      </StyledBody>
    </StyledBox>
  );
};

export default StatBoxTable;
