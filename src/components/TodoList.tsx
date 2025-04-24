import { useAppDispatch, useAppSelector } from "../hooks";
import { deleteTodo, toggleTodo } from "../features/todos/todoSlice";
import { Trash2, CheckCircle, Circle } from "lucide-react";

const TodoList = () => {
  const todos = useAppSelector((state) => state.todos.list);
  const dispatch = useAppDispatch();

  const today = new Date().toISOString().split("T")[0];

  const filteredTodos = todos.filter(todo => todo.date === today);

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-semibold">Today</h2>
      {filteredTodos.length === 0 ? (
        <p className="text-gray-400 italic">You're all done for today! 🎉</p>
      ) : (
        <ul className="space-y-3">
          {filteredTodos.map((todo) => (
            <li
              key={todo.id}
              className="bg-white/10 p-4 text-black rounded-lg flex items-center justify-between shadow-md"
            >
              <div
                className={`flex items-center gap-3 flex-1 cursor-pointer ${
                  todo.completed ? "line-through text-gray-400" : ""
                }`}
                onClick={() => dispatch(toggleTodo(todo.id))}
              >
                {todo.completed ? (
                  <CheckCircle size={20} className="text-green-400" />
                ) : (
                  <Circle size={20} className="text-black/40" />
                )}
                <span>{todo.text}</span>
              </div>
              <div className="text-sm text-black/50 mr-4">
                {todo.time}
              </div>
              <button
                onClick={() => dispatch(deleteTodo(todo.id))}
                className="text-red-400 hover:text-red-300"
              >
                <Trash2 size={20} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
