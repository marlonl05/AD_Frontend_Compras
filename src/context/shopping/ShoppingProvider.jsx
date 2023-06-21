/* eslint-disable react/prop-types */
import { createContext } from 'react';

export const ShoppingContext = createContext();

export const ShoppingProvider = ({ children }) => {
	return <ShoppingContext.Provider value={{}}></ShoppingContext.Provider>;
};
