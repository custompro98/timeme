const layout = ({ title, children }: { title?: string; children: any }) => {
  const normalizedTitle = title ? `timeme - ${title}` : "timeme";

  return (
    <html>
      <head>
        <title>{normalizedTitle}</title>
      </head>
      <body>{children}</body>
    </html>
  );
};

export default layout;
