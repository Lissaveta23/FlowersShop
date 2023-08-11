import { ComponentProps, FC } from "react";
import "./Checkbox.scss";

type CheckboxProps = {
  className?: string;
  title: string;
} & ComponentProps<"input">;

const Checkbox: FC<CheckboxProps> = (props) => {
  const { title } = props;
  return (
    <label className="checkbox">
      <input type="checkbox" {...props} />
      {title}
    </label>
  );
};

export default Checkbox;
