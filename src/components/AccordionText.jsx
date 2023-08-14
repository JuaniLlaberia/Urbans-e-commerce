import { createContext, useContext, useState } from 'react';
import { styled } from 'styled-components';

const StyledAccordion = styled.div`
  width: 100%;
`;

const StyledOpener = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 1.5rem;
  color: var(--color-white-5);
  border-bottom: var(--border-sm);
  cursor: pointer;
  & h6 {
    font-size: 0.9rem;
    font-weight: 400;
  }
`;

const StyledBody = styled.div`
  height: 0;
  overflow: hidden;
  color: var(--color-white-5);

  transition: all 0.4s ease;
  &.open {
    padding: 0.3rem 1.5rem;
    border-bottom: var(--border-sm);
    height: auto;
  }
`;

const AccordionContext = createContext();

const Accordion = ({ children }) => {
  const [open, setOpen] = useState('');
  const openAccordion = id => setOpen(id);
  const closeAccordion = () => setOpen('');

  return (
    <AccordionContext.Provider value={{ open, openAccordion, closeAccordion }}>
      <StyledAccordion>{children}</StyledAccordion>
    </AccordionContext.Provider>
  );
};

const Opener = ({ title, opens }) => {
  const { openAccordion, open, closeAccordion } = useContext(AccordionContext);
  return (
    <>
      {open ? (
        <StyledOpener onClick={closeAccordion}>
          <h6>{title}</h6>
          <p>-</p>
        </StyledOpener>
      ) : (
        <StyledOpener onClick={() => openAccordion(opens)}>
          <h6>{title}</h6>
          <p>+</p>
        </StyledOpener>
      )}
    </>
  );
};

const Body = ({ children, id }) => {
  const { open } = useContext(AccordionContext);

  return (
    <StyledBody className={open === id ? 'open' : ''}>{children}</StyledBody>
  );
};

Accordion.Opener = Opener;
Accordion.Body = Body;

export default Accordion;
