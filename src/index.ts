import { Elysia } from "elysia";
import html from "@elysiajs/html";
import root from "./pages/root";

const app = new Elysia()
  .use(html)
  .get("/", () => root.layout({ title: 'Home', children: root.component() }))
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
