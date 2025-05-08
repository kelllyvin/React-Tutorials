import { createContext } from "react";

export const AppContext = createContext();

// soundring our context to disburse to order gcomponets d proovider allows it to share values
// for all valures we have d children all have acces to it

const AppProvider = ({ children }) => {
  const value1 = " My name john Doe";
  const value2 = 20;
  return (
    <AppContext.Provider value={{ value1, value2 }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
