import React, { useState } from 'react'
import ProjectForm from './ProjectForm'

const RenameProject = ({project, setShowModal}) => {
  const [newProjectName, setNewProjectName] = useState(project.name)
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <ProjectForm handleSubmit={handleSubmit} heading="  Edit project name" buttonText="Confirm" value={newProjectName} setValue={setNewProjectName} setShowModal={setShowModal} />
    </div>
  )
}

export default RenameProject