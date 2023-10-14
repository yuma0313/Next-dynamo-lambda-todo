import Layout from "../../components/Layout";

export default function Home() {
  //Layoutコンポーネントにタイトルを渡し、{children}にはページの内容を渡す
  return (
    <Layout title="Home">
      <p className="text-xl text-gray-600">Welcome to Nextjs</p>
    </Layout>
  )
}