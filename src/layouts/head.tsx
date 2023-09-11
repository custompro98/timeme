interface Props {
  title: string;
}

const headLayout = ({ title }: Props) => {
  const normalizedTitle = title
    ? `beth-stack-starter - ${title}`
    : "beth-stack-starter";

  return (
    <head>
      <title>{normalizedTitle}</title>
      <script src="https://unpkg.com/htmx.org@1.9.5"></script>
    </head>
  );
};

export default headLayout;
