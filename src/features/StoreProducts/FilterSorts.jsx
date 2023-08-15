import { useState } from 'react';
import { styled } from 'styled-components';
import FilterSortForm from './FilterSortForm';
import FilterButton from './FilterBtn';
import Overlay from '../../components/Overlay';

const StyledFilter = styled.aside`
  background-color: var(--color-white-2);
  padding: 2.5rem 0rem;
  border-right: var(--border-sm);

  transform: translateX(-300px);
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  width: 300px;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-white-4);
    border-radius: 1000px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-white-4);
  }

  transition: all 0.3s ease-in-out;

  &.open {
    transform: translateX(0);
  }

  z-index: 2;
`;

export const FilterSorts = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openOnClick = () => setIsOpen(true);
  const closeOnClick = () => setIsOpen(false);

  return (
    <>
      <FilterButton onClick={openOnClick}>FILTER & SORT</FilterButton>
      <StyledFilter className={isOpen ? 'open' : ''}>
        <FilterSortForm close={closeOnClick} />
      </StyledFilter>
      {isOpen && <Overlay onClick={closeOnClick} />}
    </>
  );
};
