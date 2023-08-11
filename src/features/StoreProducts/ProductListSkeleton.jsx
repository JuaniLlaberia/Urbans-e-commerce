import { styled } from 'styled-components';

const SkeletonList = styled.ul`
  margin-top: 25px;
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: repeat(6, 1fr);
  list-style: none;
  place-items: center;
  row-gap: 1rem;
  @media (max-width: 1350px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width: 1170px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 970px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 670px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 490px) {
    grid-template-columns: repeat(1, 1fr);
  }
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

const ProductListSkeleton = () => {
  return (
    <SkeletonList>
      <SkeletonListItem />
      <SkeletonListItem />
      <SkeletonListItem />
      <SkeletonListItem />
      <SkeletonListItem />
      <SkeletonListItem />
    </SkeletonList>
  );
};

export default ProductListSkeleton;
