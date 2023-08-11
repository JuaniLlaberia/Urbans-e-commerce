import { styled } from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--color-overlay);
  backdrop-filter: blur(2px);
  transition: all 0.5s;
  z-index: 1;
`;

export default Overlay;
