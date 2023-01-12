

const Modal = ({ children, isOpen, modalClose }) => {
    return(
        <article className={isOpen ? "container-modal is-open" : "container-modal"}>
            <div className="modal-content">
                {children}
                <button onClick={modalClose}>Aceptar</button>
            </div>
        </article>
    );
}

export default Modal;