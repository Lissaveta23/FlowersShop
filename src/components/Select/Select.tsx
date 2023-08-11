import { ComponentProps, forwardRef } from "react";
import "./Select.scss";

type SelectOptions = {
  value: number;
  title: string;
};

type SelectProps = {
  className?: string;
  options: SelectOptions[];
} & ComponentProps<"select">;

const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const { options } = props;

  return (
    <select className="select" ref={ref} {...props}>
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.title}
        </option>
      ))}
    </select>
  );
});

export default Select;
