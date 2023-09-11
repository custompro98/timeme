import layout from "../../layouts/main";

interface Props {}

const newTimecard = () => {
  const now = new Date();

  return (
    <main>
      <h1>Timecard</h1>
      <form action="/timecard" method="POST">
        <input type="hidden" name="start" value={now.toISOString()} />
        <input type="submit" value="Clock out"/>
      </form>
    </main>
  );
};

export default {
  component: newTimecard,
  layout: layout,
};
