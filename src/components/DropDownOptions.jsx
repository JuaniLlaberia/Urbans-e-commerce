import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { useGetSubCategories } from '../features/Categories/useGetSubCategories';
import SpinnerBtn from './SpinnerBtn';

const StyledDropDown = styled.div`
  display: inline-block;
  padding: 0 0.8rem;

  &:hover {
    text-decoration: underline;
  }

  & ul.dropdown-content {
    display: none;
    position: absolute;
    z-index: 100;
    left: 0;
  }
  &:hover ul.dropdown-content {
    width: 100vw;
    max-width: 100%;
    place-items: center;
    list-style: none;
    padding: 1rem 6rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    background-color: var(--color-white-2);
    border-bottom: var(--border-lg);

    @media (max-width: 850px) {
      display: none;
    }
  }

  & ul a {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
  }

  & ul a:hover {
    text-decoration: underline;
  }
`;

const CategoryItem = styled(Link)`
  text-decoration: none;
  color: var(--color-white-6);
  font-weight: 400;
  @media (max-width: 850px) {
    font-size: 2rem;
    font-weight: 600;
  }
`;

const DropDownOptions = ({ mainCategory, onClick }) => {
  const { subCategories, isLoading } = useGetSubCategories();

  if (isLoading) return <SpinnerBtn />;

  const crrSubCategories = subCategories.filter(
    cat => cat.family === mainCategory
  );

  return (
    <StyledDropDown onClick={onClick}>
      <CategoryItem to={`/products/${mainCategory}`}>
        {mainCategory}
      </CategoryItem>
      <ul className='dropdown-content'>
        {crrSubCategories.map(category => (
          <CategoryItem
            key={category.id}
            to={`/products/Mens?subCat=${category.name}`}
          >
            {category.name}
          </CategoryItem>
        ))}
      </ul>
    </StyledDropDown>
  );
};

export default DropDownOptions;
