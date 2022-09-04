import React from "react";
import Next7Days from "./Next7Days";
import Todo from "./Todo";

const Todos = () => {
  const selectedProject = "today"

  const todos = [{
    id: 1,
    text: 'Go for run',
    time: '10:00 AM',
    date: "06/03/2001",
    day: '6',
    checked: false,
    color: '#00ff00',
    project: "personal"

  },
  {
    id: 2,
    text: 'Go to Gym',
    time: '11:00 AM',
    date: "18/03/2001",
    day: '1',
    checked: true,
    color: '#00ff00',
    project: "work"

  }

  ]
  return (
    <div className="w-96 h-3/4 bg-white m-10 rounded ">
      <div className = "capitalize m-4 p-2 font-bold text-lg border-b ">
        {selectedProject}
      </div>
      <div className="capitalize m-4 pl-2 ">
        {
          selectedProject === "next 7 days" ?
            <Next7Days todos={todos} />
            :
            todos.map((todo) =>
              <Todo todo={todo} key={todo.id} />
            )
        }
      </div>
    </div>
  );
};

export default Todos;
