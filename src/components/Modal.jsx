import { cloneElement, createContext, useContext, useState } from 'react';
import { HiOutlineXMark, HiXMark } from 'react-icons/hi2';
import { createPortal } from 'react-dom';
import { css, styled } from 'styled-components';

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
`;

const ModalContext = createContext();

const Modal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);

  return (
    <ModalContext.Provider value={{ isOpen, close, open }}>
      {children}
    </ModalContext.Provider>
  );
};

const Open = ({ children }) => {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: open });
};

const Window = ({ children }) => {
  const { isOpen, close } = useContext(ModalContext);

  if (!isOpen) return null;

  return createPortal(
    <Overlay>
      <StyledWindow>
        <button className='close-btn' onClick={close}>
          <HiXMark />
        </button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </StyledWindow>
    </Overlay>,
    document.body
  );
};

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
