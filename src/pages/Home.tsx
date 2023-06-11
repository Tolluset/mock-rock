export default function Home() {
  return (
    <Layout>
      <textarea className="resize-none border-solid border w-full h-full rounded text-[1.8rem] px-[0.4rem]" />
    </Layout>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return <div className="p-[1.6rem] h-[100svh]">{children}</div>;
}
