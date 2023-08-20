import { styled } from 'styled-components';

const StyledButton = styled.button`
  & {
    width: 50px;
    height: 30px;
    position: relative;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.5s ease-in-out;
    -moz-transition: 0.5s ease-in-out;
    -o-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    cursor: pointer;
    background-color: transparent;
    border: none;
  }

  & span {
    display: block;
    position: absolute;
    height: 3px;
    width: 70%;
    background: var(--icons-color);
    border-radius: 9px;
    opacity: 1;
    left: 7.5px;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;
  }

  & span:nth-child(1) {
    top: 2px;
  }
  & span:nth-child(2) {
    top: 10px;
  }

  & span:nth-child(3) {
    top: 18px;
  }

  &.open span:nth-child(1) {
    top: 9px;
    -webkit-transform: rotate(135deg);
    -moz-transform: rotate(135deg);
    -o-transform: rotate(135deg);
    transform: rotate(135deg);
  }

  &.open span:nth-child(2) {
    opacity: 0;
    left: -60px;
  }

  &.open span:nth-child(3) {
    top: 9px;
    -webkit-transform: rotate(-135deg);
    -moz-transform: rotate(-135deg);
    -o-transform: rotate(-135deg);
    transform: rotate(-135deg);
  }
`;

const AnimatedOpenBtn = ({ isOpen, onClick }) => {
  return (
    <StyledButton
      aria-label=''
      className={isOpen ? 'open' : ''}
      onClick={onClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </StyledButton>
  );
};

export default AnimatedOpenBtn;
