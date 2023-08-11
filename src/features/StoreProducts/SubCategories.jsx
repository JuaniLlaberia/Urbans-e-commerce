import { useParams, useSearchParams } from 'react-router-dom';
import { useGetSubCategories } from '../Categories/useGetSubCategories';
import { styled } from 'styled-components';

const StyledSubCatList = styled.ul`
  display: flex;
  gap: 1rem;
  overflow-x: scroll;
  width: 60vw;
  min-width: 300px;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-white-3);
    border-radius: 1000px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--color-white-4);
  }

  padding: 0.6rem 0.8rem;
  list-style: none;
`;

const SubCatItem = styled.li`
  background-color: var(--color-white-2);
  padding: 0.2rem 1.2rem;
  box-shadow: var(--shadow-light);
  border-radius: 100px;
  color: var(--color-white-5);
  cursor: pointer;

  display: flex;
  gap: 0.4rem;
  &.active {
    background-color: var(--color-white-6);
    color: var(--color-white-2);
  }

  @media (max-width: 450px) {
    font-size: 0.8rem;
    padding: 0.2rem 0.6rem;
  }
`;

export const SubCategories = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { mainCategory } = useParams();
  const { subCategories, isLoading } = useGetSubCategories();

  if (isLoading) return <p>Loading</p>;

  const crrSubCategories = subCategories.filter(
    cat => cat.family === mainCategory
  );

  //we check if there is an active sub category
  const crrSub = searchParams.get('subCat');

  const handleClick = category => {
    searchParams.set('subCat', category);
    searchParams.set('page', 1);
    setSearchParams(searchParams);
  };

  const removeSubCat = () => {
    searchParams.set('subCat', '');
    searchParams.set('page', 1);
    setSearchParams(searchParams);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <StyledSubCatList>
        {/* In case we have a sub category, we place it at the beggining, and we allow to remove it */}
        {crrSub && (
          <SubCatItem className='active'>
            {crrSub} <span onClick={removeSubCat}>X</span>
          </SubCatItem>
        )}
        {crrSubCategories?.map(cat => (
          <SubCatItem key={cat.id} onClick={() => handleClick(cat.name)}>
            {cat.name}
          </SubCatItem>
        ))}
      </StyledSubCatList>
    </div>
  );
};
