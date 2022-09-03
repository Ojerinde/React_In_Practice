import React from "react";
import classes from "./Modal.module.css";
import { ImCross } from "react-icons/im"

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClick}></div>;
};

const Overlay = props => {
    return <div className={classes.modal}>
        <p>Submitted</p>
        <ImCross className={classes.done} onClick={props.onClick}/>
    </div>
}

const Modal = (props) => {
    return (
        <React.Fragment>
            <Backdrop onClick={props.onClick} />
            <Overlay onClick={props.onClick}/>
        </React.Fragment>
    )
};
export default Modal;
