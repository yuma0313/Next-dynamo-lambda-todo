import { useState } from "react";
import { createTodo } from "@/libs/todo";

type FormProps = {
  onTaskAdded: () => void;
};

const Form: React.FC<FormProps> = ({ onTaskAdded }) => {
  const [name, setName] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTodo(name, deadline)
    setName("");
    setDeadline("");

    onTaskAdded();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="タスクを入力"
        className="border-none p-3 text-gray-600 mr-1 bg-white shadow-md"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="date"
        placeholder="期限"
        className="border-none p-3 text-gray-600 bg-white shadow-md"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <button type="submit" className="text-white hover:bg-gray-800 bg-gray-600 font-medium rounded-lg text-sm px-5 py-2.5 ml-1 mb-2">追加</button>
    </form>
  )
}

export default Form;