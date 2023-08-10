import { css, styled } from 'styled-components';

const StyledLoadingSkeleton = styled.div`
  display: grid;
  padding: 2.4rem 10rem;
  grid-template-columns: 1fr 2fr;
  column-gap: 5rem;
  @media (max-width: 1100px) {
    padding: 2rem 5rem;
  }
  @media (max-width: 1000px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const SkeletonItem = styled.div`
  border-radius: var(--raidius-md);
  background-color: #9c9797;
  margin-bottom: 10px;
  height: 20px;

  animation: skeleton-loading 1s linear infinite alternate;

  ${props =>
    props.width === 'sm' &&
    css`
      width: 12vw;
      @media (max-width: 1000px) {
        width: 50vw;
      }
    `}
  ${props =>
    props.width === 'md' &&
    css`
      width: 16vw;
      @media (max-width: 1000px) {
        width: 60vw;
      }
    `}
  ${props =>
    props.width === 'lg' &&
    css`
      width: 30vw;
      @media (max-width: 1000px) {
        width: 70vw;
      }
    `}
   ${props =>
    props.type === 'img' &&
    css`
      width: 20vw;
      height: 500px;
      border-radius: var(--raidius-md);
      background-color: #fafafa;

      @media (max-width: 1000px) {
        height: 450px;
        width: 70vw;
      }
    `} 

    @keyframes skeleton-loading {
    0% {
      background-color: #e0e0e0;
    }
    100% {
      background-color: hsl(0, 0%, 72.54901960784314%);
    }
  }
`;

const ProductLoadingSkeleton = () => {
  return (
    <StyledLoadingSkeleton>
      <SkeletonItem type='img'></SkeletonItem>
      <div>
        <br />
        <SkeletonItem width='md'></SkeletonItem>
        <SkeletonItem width='sm'></SkeletonItem>
        <br />
        <SkeletonItem width='lg'></SkeletonItem>
        <SkeletonItem width='lg'></SkeletonItem>
        <SkeletonItem width='lg'></SkeletonItem>
        <SkeletonItem width='md'></SkeletonItem>
      </div>
    </StyledLoadingSkeleton>
  );
};

export default ProductLoadingSkeleton;
