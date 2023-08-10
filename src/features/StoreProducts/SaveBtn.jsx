import { HiHeart, HiOutlineHeart } from 'react-icons/hi2';
import { styled } from 'styled-components';
import { useSavedContext } from '../../context/SavedContext';
import { useEffect } from 'react';

const StyledSaveBtn = styled.button`
  background: transparent;
  border: none;
  font-size: 1.6rem;
  color: #746f6fd1;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const SaveBtn = ({ id, img, name, color, price, SKU }) => {
  const { handleSave, handleUnSave, savedProducts } = useSavedContext();
  let isSaved = savedProducts?.some(el => el.id === id);

  if (isSaved)
    return (
      <StyledSaveBtn onClick={() => handleUnSave(id)}>
        <HiHeart style={{ color: '#f54444' }} />
      </StyledSaveBtn>
    );
  return (
    <StyledSaveBtn onClick={() => handleSave(id, img, name, color, price, SKU)}>
      <HiOutlineHeart />
    </StyledSaveBtn>
  );
};

export default SaveBtn;
