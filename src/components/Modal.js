import React, { useRef } from "react";

const Modal = ({ children, showModal, setShowModal }) => {
  const modalRef = useRef();
  const closeModal = (event) => {
    if (event.target === modalRef.current) {
      setShowModal(false);
    }
  };
  return (
    showModal && (
      <div
        onClick={closeModal}
        ref={modalRef}
        className="fixed top-0 left-0 w-screen h-screen bg-black opacity-75"
      >
        <div className=" bg-white absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/4">{children}</div>
      </div>
    )
  );
};

export default Modal;
