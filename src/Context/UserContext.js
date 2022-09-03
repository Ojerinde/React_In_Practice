import React, { createContext } from "react";

const UserContext = createContext({
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email',
});

export default UserContext

export const UserContextProvider = (props) => {
  const user = JSON.parse(localStorage.getItem('user'))
  
  return (
    <UserContext.Provider
      value={[{
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      }]}
    >
      {props.children}
    </UserContext.Provider>
  );
};
