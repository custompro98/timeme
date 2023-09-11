import layout from "../layouts/main";

const root = () => {
  return (
    <div>
      <button hx-on="click: alert('hello')">Say hello</button>
    </div>
  );
};

export default {
  component: root,
  layout: layout,
};
