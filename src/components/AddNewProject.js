import React, { useState } from 'react'
import { Plus } from "react-bootstrap-icons"
import ProjectForm from './ProjectForm'
import Modal from "./Modal"

const AddNewProject = () => {
  const [showModal, setShowModal] = useState(false)
  const [projectName, setProjectName] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div>
      <div>
        <span onClick={()=>setShowModal(true)} className='rounded-full w-6 h-6 flex items-center justify-center cursor-pointer hover:bg-gray-200'>
          <Plus size='20' />
        </span>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <ProjectForm handleSubmit={handleSubmit} heading="New Project" buttonText="Add Project" value={projectName} setValue={setProjectName} setShowModal={setShowModal} />
      </Modal>
    </div>
  )
}

export default AddNewProject