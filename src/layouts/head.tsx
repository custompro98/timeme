interface Props {
  title: string;
}

const headLayout = ({ title }: Props) => {
  const normalizedTitle = title ? `timeme - ${title}` : "timeme";

  return (
    <head>
      <title>{normalizedTitle}</title>
    </head>
  );
};

export default headLayout;
