import React, { createContext, useContext, useState, useEffect } from 'react';

// Define initial state variables to initialize the context:
const initialState = {
  page: '',
  changePage: (newPage) => {return newPage;},
  sidebarOpen: true,
  toggleSidebar: () => {},
  modalOpen: false,
  toggleModal: () => {}
}

// Define context using createContext hook (this requires a default value always):
const AppContext = createContext(initialState);

// AppProvider is needed for accessing application state
const AppProvider = ({ children }) => {
  const [page, setPage] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  // These functions will be called by the application in order to update the state:
  const changePage = (newPage) => {
    setPage(newPage);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const contextValue = {
    page,
    changePage,
    sidebarOpen,
    toggleSidebar,
    modalOpen,
    toggleModal
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

/**
 * Custom hook to access the state from the AppContext
 *
 * @returns An object containing the state.
 */
const useAppContext = () => {
  return useContext(AppContext);
}

export { AppProvider, useAppContext };