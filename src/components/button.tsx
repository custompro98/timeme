interface Props {
  buttonProps?: Record<string, any>;
  children?: any;
}

const Button = ({ buttonProps, children }: Props) => {
  return <button {...buttonProps}>{children}</button>;
};

export default Button;
