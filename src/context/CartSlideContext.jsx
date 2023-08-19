import { createContext, useContext, useState } from 'react';

const CartSlideContext = createContext();

export const CartSlideProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openOnClick = () => setIsOpen(true);
  const closeOnClick = () => setIsOpen(false);

  return (
    <CartSlideContext.Provider value={{ isOpen, openOnClick, closeOnClick }}>
      {children}
    </CartSlideContext.Provider>
  );
};

export const useCartSlideContext = () => useContext(CartSlideContext);
