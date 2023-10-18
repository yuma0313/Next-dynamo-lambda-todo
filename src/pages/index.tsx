import Layout from "../components/Layout";
import { Todo } from "../components/Todo";
import Form from "../components/Form";
import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import { deleteTask } from "../components/Todo";
import { getTodos } from "@/libs/todo";

type TodoType = {
  id: string;
  name: string;
  deadline: string;
};

export default function Home({ todos }: { todos: TodoType[] }) {
  const [todo, setTodo] = useState<TodoType[]>(todos);

  const fetchTodos = async () => {
    const data = await getTodos();
    setTodo(data.todos);
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteTask(id);
    fetchTodos();
  }

  const handleAdd = async () => {
    fetchTodos();
  }

  return (
    <Layout title="Home">
      <div className="">
        <Form onTaskAdded={handleAdd}/>
        <ul>
          {todo.map((t) => (
            <Todo key={t.id} id={t.id} name={t.name} deadline={t.deadline} onDelete={handleDelete} />
          ))}
        </ul>
      </div>
    </Layout>
  )
}

//getStaticPropsでtodoのデータを取得する
export const getStaticProps: GetStaticProps = async () => {
  const data = await getTodos();

  return {
    props: {
      todos: data.todos,
    },
    revalidate: 60, // ISR: 60秒ごとに再生成
  };
}