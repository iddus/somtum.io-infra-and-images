import React, { Fragment } from "react";
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

const Backdrop = ({ toggle }) => {
  return <div className={classes.backdrop} onClick={toggle}></div>;
};

const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlay-root");

const Modal = ({ toggle, children }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop toggle={toggle}></Backdrop>,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;

// refs:
// what is props.children? They're like Vue slots, will render wtv JSX you nest within component opening and closing tags - https://reactjs.org/docs/composition-vs-inheritance.html#containment
