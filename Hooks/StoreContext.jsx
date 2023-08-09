
import React, { createContext, useState } from "react";

export const UserContext = createContext();

const ContextProvider = ({ children }) => {
  const [Isloggedin, setIsloggedin] = useState(false);
  return (<UserContext.Provider value="HElo" >
      {children}
    </UserContext.Provider>
  );
};

export default ContextProvider;