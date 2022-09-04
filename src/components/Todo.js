import React from "react";
import { useState } from "react";
import { CheckCircleFill, Circle, ArrowClockwise, Trash } from 'react-bootstrap-icons';

const Todo = ({ todo }) => {
  const [hover, setHover] = useState(false)
  return (
    <div className="">
      <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className="flex items-center mt-2 ">
        <div>
          {
            todo.checked ?
              <span className="cursor-pointer">
                <CheckCircleFill size='20px' color="#bebebe" />
              </span>
              : <span className="cursor-pointer">
                <Circle color={todo.color} size='20px' />
              </span>
          }
        </div>
        <div className="relative flex-1 cursor-pointer text-md ml-4 ">
          <p className={`  ${todo.checked ? 'text-gray-500 ' : "text-gray-800"}`}>
            {todo.text}

          </p>
          <span className="text-sm text-gray-500" > {todo.time} - {todo.project} </span>
          <div className={`${todo.checked ? 'bg-gray-500 w-full h-px absolute  top-3 line-through' : null}`}></div>

        </div>




        <div className="mr-2 ml-2">
          {todo.checked &&
            <span className="cursor-pointer">
              <ArrowClockwise size='18px' />
            </span>
          }
        </div>
        <div className="mr-2">
          {(hover || todo.checked) &&
            <span className="cursor-pointer">
              <Trash size='20px' />
            </span>
          }
        </div>
      </div>
    </div >
  )
};

export default Todo;
