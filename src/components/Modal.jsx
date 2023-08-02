import { cloneElement, createContext, useContext, useState } from 'react';
import { HiXMark } from 'react-icons/hi2';
import { createPortal } from 'react-dom';
import { styled } from 'styled-components';

const StyledWindow = styled.div`
  position: fixed;
  background-color: var(--color-white-3);
  border-radius: var(--raidius-md);
  padding: 0.5rem 1.5rem;
  box-shadow: var(--shadow-strong);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.5s;
  max-height: 80vh;

  @media (max-width: 500px) {
    overflow-y: scroll;
    overflow-x: hidden;
  }

  & .close-btn {
    background-color: transparent;
    border: none;
    position: absolute;
    top: 5%;
    right: 5%;
    font-size: 1.25rem;
    color: var(--color-white-5);
    cursor: pointer;
  }

  z-index: 3;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: #ffffff34;
  backdrop-filter: blur(4px);
  transition: all 0.5s;
  cursor: pointer;
  z-index: 2;
`;

const ModalContext = createContext();

const Modal = ({ children }) => {
  const [isOpen, setIsOpen] = useState('');

  const close = () => setIsOpen('');
  const open = windowName => setIsOpen(windowName);

  return (
    <ModalContext.Provider value={{ isOpen, close, open }}>
      {children}
    </ModalContext.Provider>
  );
};

const Open = ({ children, opens }) => {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(opens) });
};

const Window = ({ children, windowName }) => {
  const { isOpen, close } = useContext(ModalContext);

  if (isOpen !== windowName) return null;
  return createPortal(
    <>
      <StyledWindow>
        <button className='close-btn' onClick={close}>
          <HiXMark />
        </button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </StyledWindow>
      <Overlay onClick={close} />
    </>,
    document.body
  );
};

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
