import head from "./head";

interface Props {
  title: string;
  children: any;
}

const layout = ({ title, children }: Props) => {
  return (
    <html>
      {head({ title })}
      <body>{children}</body>
    </html>
  );
};

export default layout;
