import { Elysia } from "elysia";
import { db } from "./database";

const app = new Elysia().get("/", () => "Hello Elysia").listen(3000);

db;

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
