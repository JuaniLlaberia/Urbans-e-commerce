import { HiOutlineTruck } from 'react-icons/hi2';
import { styled } from 'styled-components';

const StyledShippingBanner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 40px;
  width: 100vw;
  background-color: var(--color-white-3);
  border-bottom: var(--border-sm);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StlyedText = styled.p`
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--color-white-5);
  opacity: 0.85;
  & svg {
    font-size: 1.2rem;
  }
`;

const ShippingBanner = () => {
  return (
    <StyledShippingBanner>
      <StlyedText>
        <span>
          <HiOutlineTruck />
        </span>
        Free regular shipping over $95
      </StlyedText>
    </StyledShippingBanner>
  );
};

export default ShippingBanner;
