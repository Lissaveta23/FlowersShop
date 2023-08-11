import React, { ComponentProps, FC, forwardRef } from "react";
import "./Input.scss";

type InputProps = {
  valid?: boolean;
} & ComponentProps<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { valid } = props;
  return <input className="input" ref={ref} data-valid={valid} {...props} />;
});

export default Input;
