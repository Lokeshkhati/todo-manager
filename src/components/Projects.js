import React, { useState } from "react";
import AddNewProject from "./AddNewProject";
import Project from "./Project";
import { CaretUp, Palette, PencilFill } from 'react-bootstrap-icons'
import { calendarItems } from '../constants'
const Projects = () => {

  const [showMenu, setShowMenu] = useState(true)
  const [edit, setEdit] = useState(false)
  const pencilColor = edit ? 'green' : 'black'

  const projects = [
    { id: 1, name: "personal", numOfTodos: 0 },
    { id: 1, name: "work", numOfTodos: 1 },
    { id: 1, name: "other", numOfTodos: 2 }
  ]

  return (
    <div className=" border-b  border-gray-300 p-4">
      <div className='flex items-center justify-between '>
        <div className='flex items-center flex-1'>
          <Palette size='18' />
          <p className='ml-1.5 text-lg font-bold '>Projects</p>
        </div>
        <div className='flex  items-center' >
          {showMenu && projects.length > 0 && <span onClick={() => setEdit(!edit)} className="rounded-full w-6 h-6 flex items-center justify-center cursor-pointer hover:bg-gray-200">
            <PencilFill size='15' color={pencilColor} />
          </span>}
          <AddNewProject /> 
          <span className="rounded-full w-6 h-6 flex items-center justify-center cursor-pointer hover:bg-gray-200">
            <CaretUp size='20' />
          </span>
        </div>
      </div>

      <div className="p-1">
        {projects.map((project) => (
          <Project project={project} edit={edit} key={project.id} />
        ))}
      </div>

    </div >
  )
}

export default Projects
