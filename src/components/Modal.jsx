

const Modal = ({ children, isOpen, modalClose }) => {

    const handleClickContentModal = (e) => {
        e.stopPropagation();
    }

    return(
        <article className={isOpen ? "container-modal is-open" : "container-modal"} onClick={modalClose}>
            <div className="modal-content" onClick={handleClickContentModal}>
                {children}
                <button onClick={modalClose}>Aceptar</button>
            </div>
        </article>
    );
}

export default Modal;