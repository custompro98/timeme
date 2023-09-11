import Head from "./head";

interface Props {
  title: string;
  children: any;
}

const layout = ({ title, children }: Props) => {
  return (
    <html>
      <Head title={title} />
      <body>{children}</body>
    </html>
  );
};

export default layout;
