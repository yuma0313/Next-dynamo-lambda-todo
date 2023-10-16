import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [deadline, setDeadline] = useState("");
  const id: number = 8

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch("https://gp92tnzloe.execute-api.ap-northeast-1.amazonaws.com/dev/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "bjZwZSUX0c8jUxzB5cSef1L7P4XXf6w66cShZtuN",
      },
      body: JSON.stringify({ id, name, deadline }),
    });
    setName("");
    setDeadline("");
  }

  return (
    // index.tsxのtailwindに合わせていい感じにフォームを作ってみてください。
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="タスクを入力"
        className="border-none p-2 text-gray-600 mr-1 bg-white"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="date"
        placeholder="期限"
        className="border-none p-2 text-gray-600 bg-white"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add
      </button>
    </form>
  )
}

export default Form;