import { styled } from 'styled-components';
import { HiCheckCircle } from 'react-icons/hi2';

const SyledProgressbar = styled.progress`
  width: 100%;
  height: 10px;
  appearance: none;

  &::-webkit-progress-bar {
    background-color: var(--color-white-1);
    border-radius: 50px;
    box-shadow: var(--shadow-light);
  }

  &::-webkit-progress-value {
    transition: all 0.6s ease;
    background-color: var(--icons-color);
    border-radius: 50px;
  }
`;

const MSG = styled.p`
  color: var(--color-white-5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0 0.6rem 0;
  font-size: 0.9rem;
`;

const FreeShippingBar = ({ price, max }) => {
  return (
    <div style={{ paddingBottom: '1.25rem', borderBottom: 'var(--border-sm)' }}>
      {price >= max ? (
        <MSG>
          <span
            style={{
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '.3rem',
            }}
          >
            <HiCheckCircle style={{ color: 'green', fontSize: '1.25rem' }} />
            Free Regular Shipping
          </span>
        </MSG>
      ) : (
        <MSG>
          <span>Spend ${max} or over for</span>
          <span style={{ fontWeight: 600 }}>Free Regular Shipping</span>
        </MSG>
      )}
      <SyledProgressbar value={price} max={max} />
    </div>
  );
};

export default FreeShippingBar;
