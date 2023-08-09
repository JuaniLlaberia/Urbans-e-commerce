import { HiOutlinePhoto } from 'react-icons/hi2';
import { styled } from 'styled-components';

const StyledBox = styled.div`
  border: 2px solid var(--color-white-4);
  border-style: dashed;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0.25rem;
  margin-top: 10px;
  gap: 0.4rem;
  font-size: 0.9rem;
  color: var(--color-white-5);

  & svg {
    color: var(--icons-color);
  }
`;

export const ImgInputStyle = () => {
  return (
    <StyledBox>
      <HiOutlinePhoto />
      <span>Image</span>
    </StyledBox>
  );
};
