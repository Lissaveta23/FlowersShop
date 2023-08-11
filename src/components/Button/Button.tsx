import React, { ComponentProps, FC } from "react";
import "./Button.scss";
import cn from "classnames";

type ButtonProps = {
  text: string;
  variant?: "primary" | "outlined" | "text";
  className?: string;
} & ComponentProps<"button">;

const Button: FC<ButtonProps> = (props) => {
  const { text, className, variant = "primary" } = props;

  return (
    <button {...props} className={cn("button", variant, className)}>
      {text}
    </button>
  );
};

export default Button;
