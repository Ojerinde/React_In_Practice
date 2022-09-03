// import {UserContextProvider} from './Context/UserContext'
import React, { useState } from "react";
import Form from "./Components/UI/Form";
import Users from "./Components/UI/Users";
import classes from "./App.module.css";

const App = () => {
  const [userLists, setUsersLists] = useState([]);
  const newNumber = 2

  const getDatas = (datas) => {
    setUsersLists((prev) => {
      return [...prev, datas];
    });
  };

  return (
    <section className={classes.form_section}>
      <Form addUser={getDatas} />
      <Users users={userLists} />
    </section>
  );
};
export default App;

// import { UserContextProvider } from "./Context/UserContext";
// Using useContext
// const App = () => {

//   return (
//     <UserContextProvider>
//       <section className={classes.form_section}>
//         <Form />
//         <Users  />
//       </section>
//     </UserContextProvider>
//   );
// };
// export default App;
