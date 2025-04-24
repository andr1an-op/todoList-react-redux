import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import UpcomingTodos from "./components/UpcomingTodos";

const App = () => {
  return (
    <div className="min-h-screen px-6 py-10 max-w-3xl mx-auto text-black">
      <AddTodoForm />
      <TodoList />
      <UpcomingTodos />
    </div>
  );
};

export default App;
