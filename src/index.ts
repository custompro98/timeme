import { Elysia } from "elysia";
import html from "@elysiajs/html";

const app = new Elysia()
  .use(html)
  .get("/", async ({ html }) =>
    html(await Bun.file("src/pages/root.tsx").text())
  );

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
