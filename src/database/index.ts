import Database from "bun:sqlite";

export const db = new Database("beth-stack-starter.sqlite3", { create: true });

const handleClose = (code: string) => {
  console.log("closing...");
  db.close();

  console.log(`exiting (${code})...`);
  process.exit(parseInt(code, 10));
};

process.on("SIGINT", handleClose);
process.on("SIGTERM", handleClose);
process.on("SIGKILL", handleClose);
