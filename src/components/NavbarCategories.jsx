import { useGetMainCategories } from '../features/Categories/useGetMainCategories';
import SpinnerBtn from '../components/SpinnerBtn';
import { styled } from 'styled-components';
import { HiOutlineXMark } from 'react-icons/hi2';
import DropDownOptions from './DropDownOptions';

const CategoriesList = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 850px) {
    flex-direction: column;
    position: fixed;
    background-color: var(--color-white-2);
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
    padding: 3rem 2rem;
    z-index: 10;

    transform: translateX(-850px);
    transition: all 0.4s ease;

    &.open {
      transform: translateX(0);
    }
  }
`;

const XContainer = styled.div`
  position: absolute;
  top: 2%;
  right: 2.5%;

  & svg {
    font-size: 1.5rem;
    color: var(--color-white-5);
  }
  @media (min-width: 850px) {
    display: none;
  }
`;

const NavbarCategories = ({ isOpen, closeNav }) => {
  const { isLoading, mainCategories } = useGetMainCategories();

  if (isLoading) return <SpinnerBtn />;

  return (
    <CategoriesList className={isOpen && 'open'}>
      {mainCategories?.map(category => (
        <DropDownOptions
          key={category.id}
          onClick={closeNav}
          mainCategory={category.name}
        />
      ))}
      <XContainer>
        <HiOutlineXMark onClick={closeNav} />
      </XContainer>
    </CategoriesList>
  );
};

export default NavbarCategories;
