import Layout from "../../components/Layout";
import { Todo } from "../../components/todo";
import { GetStaticProps } from "next";

type TodoType = {
  id: number;
  name: string;
  deadline: string;
};

export default function Home({ todos }: { todos: TodoType[] }) {
  //Layoutコンポーネントにタイトルを渡し、{children}にはページの内容を渡す
  return (
    <Layout title="Home">
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} name={todo.name} deadline={todo.deadline} />
        ))}
      </ul>
    </Layout>
  )
}

//getStaticPropsでtodoのデータを取得する
export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://gp92tnzloe.execute-api.ap-northeast-1.amazonaws.com/dev/todo', {
      method: 'GET',
      headers: {
        'x-api-key': 'bjZwZSUX0c8jUxzB5cSef1L7P4XXf6w66cShZtuN',
      },
  });

  const data = await response.json();

    return {
      props: {
        todos: data.todos,
      },
      revalidate: 60, // ISR: 60秒ごとに再生成
    };
}