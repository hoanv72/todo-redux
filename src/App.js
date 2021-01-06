import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./style/main.scss";
function App() {
  return (
    <div className="App">
      <TaskForm />
      <div className="task-list">
        <TaskList />
      </div>
    </div>
  );
}

export default App;
