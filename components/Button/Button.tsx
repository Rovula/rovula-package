import { forwardRef } from "react";
import { clsx } from "clsx";


interface ButtonOptions {}

type Ref = HTMLButtonElement;

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  ButtonOptions;

const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
  const { type = "button", className, children, ...rest } = props;

  const merged = clsx(
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
    className
  );

  return (
    <button ref={ref} className={merged} {...rest}>
      {children}
    </button>
  );
});

Button.displayName = "Button";
export default Button;
