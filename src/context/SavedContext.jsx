import { createContext, useContext, useEffect, useState } from 'react';

const SavedContext = createContext();

export const SavedContextProvider = ({ children }) => {
  const [savedProducts, setSavedProducts] = useState(() => {
    const saved = JSON.parse(localStorage.getItem('SAVED_PRODUCTS')) || [];
    return saved;
  });

  useEffect(() => {
    localStorage.setItem('SAVED_PRODUCTS', JSON.stringify(savedProducts));
  }, [savedProducts]);

  const handleSave = (id, img, name, color, price) => {
    console.log(img);
    setSavedProducts(prev => [
      ...prev,
      {
        id,
        img,
        name,
        color,
        price,
      },
    ]);
  };

  const handleUnSave = (id, img, name, color, price) => {
    const arrCopy = [...savedProducts];
    const productToRemove = arrCopy.findIndex(item => item.id === id);
    arrCopy.splice(productToRemove, 1);

    setSavedProducts(arrCopy);
  };

  return (
    <SavedContext.Provider value={{ savedProducts, handleSave, handleUnSave }}>
      {children}
    </SavedContext.Provider>
  );
};

export const useSavedContext = () => useContext(SavedContext);
