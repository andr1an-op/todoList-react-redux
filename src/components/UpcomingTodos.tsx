import { useAppSelector } from "../hooks";
import { CalendarDays } from "lucide-react";

const UpcomingTodos = () => {
  const todos = useAppSelector((state) => state.todos.list);

  const now = new Date();

  const upcoming = todos.filter((todo) => {
    const todoDate = new Date(`${todo.date}T${todo.time}`);
    return todoDate > now;
  });

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl text-black font-semibold flex items-center gap-2">
        <CalendarDays size={24} />
        Upcoming
      </h2>
      {upcoming.length === 0 ? (
        <p className="text-gray-400 italic">No upcoming tasks 🎯</p>
      ) : (
        <ul className="space-y-3">
          {upcoming.map((todo) => (
            <li
              key={todo.id}
              className="bg-white/5 p-4 rounded-lg flex flex-col shadow-sm border text-black border-black/20"
            >
              <span className="text-lg">{todo.text}</span>
              <span className="text-xs text-gray-400">
                {todo.date} at {todo.time}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UpcomingTodos;
