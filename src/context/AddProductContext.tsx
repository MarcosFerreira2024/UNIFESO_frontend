import React, { createContext } from 'react';

type ContextProviderProps = {
  children: React.ReactNode;
};

type ContextType = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  IsModalOpen: boolean
};

// eslint-disable-next-line react-refresh/only-export-components
export const AddProductContext = createContext({} as ContextType);

export const AddProductProvider = ({ children }: ContextProviderProps) => {

  const [IsModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <AddProductContext.Provider
      value={{
        IsModalOpen,
        setIsModalOpen
        
      }}  
    >
      {children}
    </AddProductContext.Provider>
  );
};

export default AddProductProvider