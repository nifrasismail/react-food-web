import React from "react";
import ReactDOM from "react-dom";

import classes from './Modal.module.css';

const Backdroop = props => {
    return <div className={classes.backdrop} />
}

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div>
            {props.children}
        </div>
    </div>
}

const portalElement = document.getElementById('overlays');

const Modal = props => {
    return <>
        {ReactDOM.createPortal(<Backdroop />, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
}

export default Modal;