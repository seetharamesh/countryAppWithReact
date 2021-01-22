import { Component } from 'react'
import ReactDOM from 'react-dom'
import './Modal.css';

/*please refer to:https://www.digitalocean.com/community/tutorials/react-modal-component*/
/* Modal.js declare a stateless functional Modal component with three arguments, handleClose, show, and children.
The argument show represents the show property on your state. The return() statement passes the argument children, represented
as props.children, is a reference to the functionality of opening and closing the modal. The modal also contains
a button with a the React JSX onClick attribute that accepts the hideModal() method,
here represented as the argument handleClose, passed as props into your App component.
The variable showHideClassName assigns its value a conditional to check if the value of the show property in your state is true.
If so, the modal will appear. Else, the modal will hide. The properties display-block and display-none to
show and hide the modal are handled through the modal.css file imported into your Modal component.*/
const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <input type="button" onClick={handleClose} value=' Close '
        />
      </section>
    </div>
  );
};
export default Modal;
