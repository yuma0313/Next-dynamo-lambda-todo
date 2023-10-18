import Head from "next/head";

type LayoutProps = {
  //ReactNodeはreactの要素(JSX)を表し、コンポーネントが子要素を受け取ることを表す
  children: React.ReactNode;
  title: string;
};

const Layout: React.FC<LayoutProps> = ({
  children,
  title = "Default title",
}) => {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-white font-mono bg-gray-100">
      <Head>
        <title>{title}</title>
      </Head>
      <main className="flex flex-1 justify-center items-center w-screen flex-col">
        {children}
      </main>
    </div>
  );
};

export default Layout;