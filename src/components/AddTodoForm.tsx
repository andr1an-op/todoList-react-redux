import { useState } from "react";
import { useAppDispatch } from "../hooks";
import { addTodo } from "../features/todos/todoSlice";
import { PlusCircle, Calendar, Clock } from "lucide-react";

const AddTodoForm = () => {
  const dispatch = useAppDispatch();
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleAdd = () => {
    if (text.trim() && date && time) {
      dispatch(addTodo({ text, date, time }));
      setText("");
      setDate("");
      setTime("");
    }
  };

  return (
    <div className="bg-white/10 p-4 rounded-2xl shadow-lg backdrop-blur-md space-y-3">
      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="What's your task?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="bg-transparent border-b border-white/20 text-black w-full p-2 placeholder:text-black/40 focus:outline-none"
        />
        <button
          onClick={handleAdd}
          className="text-green-400 hover:text-green-300 transition-all"
          title="Add task"
        >
          <PlusCircle size={28} />
        </button>
      </div>
      <div className="flex gap-3 text-black/80">
        <label className="flex items-center gap-2">
          <Calendar size={18} />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="bg-transparent focus:outline-none"
          />
        </label>
        <label className="flex items-center gap-2">
          <Clock size={18} />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="bg-transparent focus:outline-none"
          />
        </label>
      </div>
    </div>
  );
};

export default AddTodoForm;
