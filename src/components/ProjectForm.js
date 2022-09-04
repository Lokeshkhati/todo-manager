import React from 'react'

const ProjectForm = ({ hanldeSubmit, heading, buttonText, value, setValue, setShowModal }) => {
    return (
        <form className='w-72  p-2' onSubmit={hanldeSubmit}>
            <div>
                <h2 className='font-bold text-lg'>{heading}</h2>
                <input type='text' value={value} onChange={(e) => setValue(e.target.value)} placeholder='project name...' className='w-full border-2 outline-none  border-gray-400 rounded pl-2 pb-1 mt-5 focus:border-blue-500 ' autoFocus />
            </div>
            <div className=' flex justify-between mt-4 w-full'>
                <button onClick={() => setShowModal(false)} className="  w-1/2 bg-gray-600 text-white px-4 py-1 cursor-pointer">Cancel</button>

                <button className=' w-1/2  bg-blue-600 text-white px-2.5 py-1 cursor-pointer '>{buttonText}</button>
            </div>
        </form>
    )
}

export default ProjectForm