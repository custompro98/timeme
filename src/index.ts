import { Elysia } from "elysia";
import html from "@elysiajs/html";
import root from "./pages/root";
import newTimecard from "./pages/timecard/new";

const timeSubmissions = [
  { startedAt: "2023-09-09 12:00:00.000Z", durationSeconds: 3_600 },
  { startedAt: "2023-09-09 12:00:00.000Z", durationSeconds: 5_400 },
  { startedAt: "2023-09-09 12:00:00.000Z", durationSeconds: 5_401 },
  { startedAt: "2023-09-09 16:00:00.000Z", durationSeconds: 56 },
  { startedAt: "2023-09-10 12:00:00.000Z", durationSeconds: 172_800 },
  { startedAt: "2023-09-10 12:00:00.000Z", durationSeconds: 176_800 },
  { startedAt: "2023-09-10 12:00:00.000Z", durationSeconds: 1_620 },
];

const app = new Elysia()
  .use(html)
  .get("/", () => {
    return root.layout({
      title: "Home",
      children: root.component({ timeSubmissions }),
    });
  })
  .post("/timecard", async ({ request, set }) => {
    const now = new Date();

    const input = await request.formData();
    const startInput = input.get("start") as string;
    const start = startInput ? new Date(startInput) : new Date();

    const durationMs = now.getTime() - start.getTime();

    timeSubmissions.push({
      startedAt: start.toISOString(),
      durationSeconds: durationMs / 1000,
    });

    set.redirect = "/";
  })
  .get("/timecard/new", () => {
    return newTimecard.layout({
      title: "Clock in",
      children: newTimecard.component(),
    });
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
