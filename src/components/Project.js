import React from "react";
import RenameProject from "./RenameProject";
import { Pencil, XCircle } from "react-bootstrap-icons"
import Modal from "./Modal"
import { useState } from "react";
const Project = ({ project, edit }) => {
  const [showModal, setShowModal] = useState(false)
  return (
    <div className="flex items-center justify-between">
      <div className="p-.5 m-1.5 text-lg cursor-pointer">
        {project.name}
      </div>
      <div className="flex items-center">
        {edit ? (<div className='flex '>
          <span onClick={() => setShowModal(true)} className="rounded-full w-6 h-6 flex items-center justify-center cursor-pointer hover:bg-green-300">
            <Pencil size='13' />
          </span>
          <span className="rounded-full w-6 h-6 flex items-center justify-center cursor-pointer hover:bg-rose-300">
            <XCircle size='13' />
          </span>
        </div>) : project.numOfTodos === 0 ? " " : (<div className='rounded-full w-6 h-6 flex items-center justify-center cursor-pointer hover:bg-gray-200'> {project.numOfTodos} </div>)}

      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <RenameProject setShowModal={setShowModal} project={project} />
      </Modal>
    </div>
  );
};

export default Project;
