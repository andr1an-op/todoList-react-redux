import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import UpcomingTodos from "./components/UpcomingTodos";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <div className="min-h-screen px-7 py-10 max-w-3xl mx-auto text-black ">
      <Navbar />
      <AddTodoForm />
      <TodoList />
      <UpcomingTodos />
    </div>
  );
};

export default App;
