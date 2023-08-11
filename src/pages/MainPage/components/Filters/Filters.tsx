import "./Filters.scss";
import Button from "../../../../components/Button/Button";
import Checkbox from "../../../../components/Checkbox/Checkbox";
import { useMain } from "../../MainProvider";

const Filters = () => {
  const { onClickSort, onClickReset, onClickCheckbox } = useMain();

  return (
    <section className="filters">
      <h4>Фильтры</h4>
      <Button
        data-type="name"
        variant="text"
        text="По Названию"
        onClick={onClickSort}
      />
      <Button
        data-type="price"
        variant="text"
        text="По цене"
        onClick={onClickSort}
      />
      <hr />
      <p>По цвету</p>
      <Checkbox
        className="check"
        title="Розовый"
        value="Розовый"
        onChange={onClickCheckbox}
      />
      <Checkbox
        className="check"
        title="Красный"
        value="Красный"
        onChange={onClickCheckbox}
      />
      <Checkbox
        className="check"
        title="Бежевый"
        value="Бежевый"
        onChange={onClickCheckbox}
      />
      <Button
        className="filters__button_reset"
        text="Сбросить фильтьтры"
        onClick={onClickReset}
      />
    </section>
  );
};

export default Filters;
