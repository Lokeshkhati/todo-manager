import React from 'react'
import { CalendarDate, CaretUp } from 'react-bootstrap-icons'
import { calendarItems } from '../constants'
const Calendar = () => {

  return (
    <div className=" border-b  border-gray-300 p-4">
      <div className='flex items-center '>
        <div className='flex items-center flex-1'>
          <CalendarDate size='18' />
          <p className='ml-1.5 text-lg font-bold '>Calendar</p>
        </div>
        <div >
          <span className="rounded-full w-6 h-6 flex items-center justify-center cursor-pointer hover:bg-gray-200">
            <CaretUp size='20' />
          </span>
        </div>

      </div>

      <div className="p-1">
        {calendarItems.map((item) => (
          <div className="p-.5 m-1.5 text-lg cursor-pointer" key={item}>{item} </div>
        ))}
      </div>

    </div>
  )
}

export default Calendar