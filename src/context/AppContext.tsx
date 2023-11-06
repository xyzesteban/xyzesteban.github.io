// AppContext.js
import React, { createContext, useContext, useReducer } from 'react';

// Create a placeholder initial state
const initialAppState = {
//   user: null,
//   theme: 'light',
//   cart: [],
};

const AppContext = createContext(initialAppState);

const appReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };
    // Handle other actions here
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialAppState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export { AppProvider, useApp };
