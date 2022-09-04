import React, { useState } from "react";
import Modal from "./Modal";
import { Bell, CalendarDay, Clock, Palette, X } from "react-bootstrap-icons";


//  TO DO : add datepicker and timepicker

const AddNewTodo = () => {
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState("");
  const [day, setDay] = useState(new Date());
  const [time, setTime] = useState(new Date());

  return (

    <div className="border-b  border-gray-300 p-4">
      <button
        onClick={() => setShowModal(true)}
        className="w-full bg-blue-600 text-white p-2  cursor-pointer"
      >
        + New Todo
      </button>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        {/* <LocalizationProvider dateAdapter={AdapterDateFns}> */}
        <form className='p-6 w-96  bg-white-600 relative' >
          <div>
            <h3 className="text-xl font-bold">Add New Todo</h3>
            <input className="text-xl outline-none  py-1 mt-2 w-full focus:border-b-2  border-solid border-blue-600"
              type="text"
              value={text}
              onChange={(event) => setText(event.target.value)}
              placeholder="To do..."
              autoFocus
            />
          </div>
          <div className="flex items-center mt-4">
            <Bell />
            <p className="ml-4">Remind me!</p>
          </div>
          <div className="mt-4 ml-6">
            <div className="flex items-center">
              <CalendarDay />
              <p className="ml-4">Choose a day</p>
            </div>
            {/* <DatePicker value={day} onChange={(day) => setDay(day)} /> */}
          </div>
          <div className="mt-4 ml-6">
            <div className="flex items-center">
              <Clock />
              <p className="ml-4">Choose a time</p>
            </div>
            {/* <TimePicker value={time} onChange={(time) => setTime(time)} /> */}
          </div>
          <div className="mt-4">
            <div className="flex items-center">
              <Palette />
              <p className="ml-4">Choose a project</p>
            </div>
            <div className="flex items-center flex-wrap gap-1.5 mt-4 ml-4">
              <div className="border-2 px-2.5 py-1 border-blue-600 rounded  mx-2 cursor-pointer hover:bg-blue-800 hover:text-white">Personal</div>
              <div className="border-2 px-2.5 border-blue-600 rounded  mx-2 cursor-pointer py-1 ">Work</div>
              <div className="border-2 px-2.5 border-blue-600 rounded  mx-2  cursor-pointer py-1">Other</div>
            </div>
          </div>

          <div className="absolute top-0 right-0 cursor-pointer " onClick={() => setShowModal(false)}><X size='40' /></div>
          <div className="confirm">
            <button className="w-full bg-blue-600 text-white p-2 cursor-pointer mt-6" > +Add todo</button>
          </div>
        </form>
        {/* </LocalizationProvider > */}
      </Modal>

    </div>

  );
};

export default AddNewTodo;
