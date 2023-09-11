import layout from "../layouts/main";
import Button from "../components/button";

const root = () => {
  return (
    <div>
      <Button buttonProps={{ "hx-on": "click: alert('hello')"}}>Say hello</Button>
    </div>
  );
};

export default {
  component: root,
  layout: layout,
};
