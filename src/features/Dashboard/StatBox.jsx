import { styled } from 'styled-components';

const StyledStatBox = styled.li`
  background-color: var(--color-white-2);
  color: var(--color-white-5);
  padding: 0.6rem 0.8rem;
  border-radius: var(--raidius-sm);
  box-shadow: var(--shadow-light);
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.2rem;
  font-weight: 600;

  & span {
    font-size: 1.5rem;
  }
`;

const StatBox = ({ icon, value, color, label }) => {
  return (
    <StyledStatBox>
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
      <div>
        <p style={{ fontSize: '.8rem', opacity: '.6' }}>
          {label?.toUpperCase()}
        </p>
        {value}
      </div>
    </StyledStatBox>
  );
};

export default StatBox;
