import { styled } from 'styled-components';

const StyledHorizontalCatalog = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  padding: 1rem 0 0.5rem 0;
  overflow-x: scroll;
`;

const SkeletonListItem = styled.li`
  background-color: #9c9797;
  box-shadow: var(--shadow-light);
  width: 14vw;
  min-width: 180px;
  height: 400px;

  animation: skeleton-loading 1s linear infinite alternate;

  @media (max-width: 970px) {
    width: 25vw;
  }
  @media (max-width: 670px) {
    width: 40vw;
  }
  @media (max-width: 490px) {
    width: 75vw;
  }

  position: relative;

  @keyframes skeleton-loading {
    0% {
      background-color: #e0e0e0;
    }
    100% {
      background-color: hsl(0, 0%, 72.54901960784314%);
    }
  }
`;

const ProductListSkeletonHorizontal = () => {
  return (
    <StyledHorizontalCatalog>
      <SkeletonListItem />
      <SkeletonListItem />
      <SkeletonListItem />
      <SkeletonListItem />
      <SkeletonListItem />
      <SkeletonListItem />
    </StyledHorizontalCatalog>
  );
};

export default ProductListSkeletonHorizontal;
