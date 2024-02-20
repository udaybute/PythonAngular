import React, { createContext, useContext, useState } from 'react'
export const UserContext = createContext();
const UserProvider = ({children}) => {
  const [usersDetails, setUsersDetails] = useState([]);
  const handleUserSubmit = (userData) =>{
        setUsersDetails(...usersDetails,userData);
  };
  return (
       <UserContext.Provider value={{usersDetails,handleUserSubmit}} >
          {children}
       </UserContext.Provider>
  )
};

export default UserProvider