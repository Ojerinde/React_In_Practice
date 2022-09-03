import React, { useContext, useEffect, useState } from "react";
import Card from "../Card/Card";
import User from "./User";
import classes from "./Users.module.css";
import { ImSpinner9 } from "react-icons/im";

const USER_PER_PAGE = 1;

const Users = (props) => {
    const [start, setStart] = useState(0);
  const end = start + USER_PER_PAGE;

  const prevHandler = () => {
    if (start === 0) return alert("I am the first on the list");
    setStart((prev) => prev - USER_PER_PAGE);
  };

    const nextHandler = () => {
      if (end === props.users.length)
        return alert("You have gotten to the end of the list");
      setStart((prev) => prev + USER_PER_PAGE);
    };

    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setLoading(props.users.length < 1);
    }, [props]);

    return (
    <Card className={classes.box}>
      {loading ? (
          <div className={classes.spinner_box}>
          <ImSpinner9 className={classes.spinner} />
        </div>
      ) : (
        props.users.slice(start, end).map((user, index) => {
          return <User user={user} key={index} />;
        })
      )}
      <div className={classes.btn_box}>
        <button onClick={prevHandler} className={classes.btn}>
          Prev
        </button>
        <button onClick={nextHandler} className={classes.btn}>
          Next
        </button>
      </div>
    </Card>
  );
};
export default Users;



// import UserContext from "../../Context/UserContext";
// const Users = () => {
//   const [start, setStart] = useState(0);
//   const end = start + USER_PER_PAGE;

//   const prevHandler = () => {
//     if (start === 0) return alert("I am the first on the list");
//     setStart((prev) => prev - USER_PER_PAGE);
//   };

//   const user = useContext(UserContext);
//   console.log(user);
//   const nextHandler = () => {
//     if (end === user.length)
//       return alert("You have gotten to the end of the list");
//     setStart((prev) => prev + USER_PER_PAGE);
//   };

//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(user.length < 1);
//   }, [user]);

//   return (
//     <Card className={classes.box}>
//       {loading ? (
//         <div className={classes.spinner_box}>
//           <ImSpinner9 className={classes.spinner} />
//         </div>
//       ) : (
//         user.slice(start, end).map((user, index) => {
//           return <User user={user} key={index} />;
//         })
//       )}
//       <div className={classes.btn_box}>
//         <button onClick={prevHandler} className={classes.btn}>
//           Prev
//         </button>
//         <button onClick={nextHandler} className={classes.btn}>
//           Next
//         </button>
//       </div>
//     </Card>
//   );
// };
// export default Users;
