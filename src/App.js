import "./App.css";
import {
  AddNewTodo,
  Calendar,
  EditTodo,
  Sidebar,
  Main,
  Projects,
  Todos,
  User,
} from "./components/index";

function App() {
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <Sidebar >
        <User />
        <AddNewTodo />
        <Calendar />
        <Projects />
      </Sidebar>
      <Main>
        <Todos />
        <EditTodo />
      </Main>
    </div>
  );
}

export default App;
