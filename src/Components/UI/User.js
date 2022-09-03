import React, { useContext, useEffect, useState } from "react";
import classes from "./User.module.css";
import img from "../../Assets/img.jpg";

const User = (props) => {
  return (
    <div className={classes.user_box}>
      <figure className={classes.img_box}>
        <img className={classes.img} alt="User" src={img} />
      </figure>
      <div className={classes.details_box}>
        <p> Hi, {props.user.firstName}</p>
        <p> Hi, {props.user.lastName}</p>
        <p> Hi, {props.user.email}</p>
      </div>
    </div>
  );
};
export default User;

// import UserContext from "../../Context/UserContext";
// // Using useContext()
// const User = () => {
//     const user = useContext(UserContext)
//     console.log(user)
//   return (
//     <div className={classes.user_box} >
//       <figure className={classes.img_box}>
//         <img className={classes.img} alt="User" src={img} />
//       </figure>
//       <div className={classes.details_box}>
//         <p> Hi, {user.firstName}</p>
//         <p> Hi, {user.lastName}</p>
//         <p> Hi, {user.email}</p>
//       </div>
//     </div>
//   );
// };
// export default User;
