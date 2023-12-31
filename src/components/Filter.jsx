// import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { styled } from 'styled-components';

const StyledFilter = styled.div`
  background-color: var(--color-white-2);
  box-shadow: var(--shadow-light);
  display: flex;
  align-items: center;
  gap: 0.4rem;
  border-radius: var(--raidius-sm);
  justify-content: center;

  padding: 0.2rem 0.6rem;

  @media (max-width: 450px) {
    &:only-child {
      width: 100%;
    }
  }
`;

const FilterButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0.4rem 0.8rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-white-6);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--icons-color);
    border-radius: var(--raidius-sm);
    color: var(--color-white-2);
  }

  &.active {
    background-color: var(--icons-color);
    border-radius: var(--raidius-sm);
    cursor: not-allowed;
    color: var(--color-white-2);
  }
`;

const Filter = ({ options }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get('filter') || options[0]?.value;

  const handleFilter = value => {
    searchParams.set('filter', value);
    searchParams.set('page', 1);
    setSearchParams(searchParams);
  };

  return (
    <StyledFilter>
      {options?.map(option => (
        <FilterButton
          aria-label='filter'
          className={filter === option.value ? 'active' : ''}
          key={option.value}
          onClick={() => handleFilter(option.value)}
        >
          {option.label}
        </FilterButton>
      ))}
    </StyledFilter>
  );
};

export default Filter;
