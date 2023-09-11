interface Props {
  title: string;
}

const Head = ({ title }: Props) => {
  const normalizedTitle = title
    ? `timeme - ${title}`
    : "timeme";

  return (
    <head>
      <title>{normalizedTitle}</title>
      <script src="https://unpkg.com/htmx.org@1.9.5"></script>
    </head>
  );
};

export default Head;
