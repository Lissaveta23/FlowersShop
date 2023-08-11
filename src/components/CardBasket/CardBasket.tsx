import React, { FC, MouseEventHandler } from "react";
import "./CardBasket.scss";
import { useAppDispatch } from "../../redux";
import { addCard, addCount, removeCard, removeCount } from "../../redux/store";
import { CardOrder } from "../../models/Card";
import { ReactComponent as RemoveIcon } from "../../icons/close.svg";
import { ReactComponent as MinusIcon } from "../../icons/minus.svg";
import { ReactComponent as PlusIcon } from "../../icons/plus.svg";
import { useNavigate } from "react-router-dom";

interface CardBasketProps {
  item: CardOrder;
}

const CardBasket: FC<CardBasketProps> = ({ item }) => {
  const { img, name, price, count, id } = item;

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const onClickRemove: MouseEventHandler<SVGSVGElement> = (e) => {
    dispatch(removeCard(id));
    e.stopPropagation();
  };
  const onClickAddCount: MouseEventHandler<SVGSVGElement> = (e) => {
    dispatch(addCount(id));
    e.stopPropagation();
  };
  const onClickRemoveCount: MouseEventHandler<SVGSVGElement> = (e) => {
    dispatch(removeCount(id));
    e.stopPropagation();
  };

  const onClickCard = () => navigate(`/cart/${id}`);

  return (
    <div className="card_basket" onClick={onClickCard}>
      <img className="card_basket__img" src={img} />
      <div className="card_basket__info">
        <p className="card_basket__info_name">{name}</p>
        <div className="card_basket__count">
          <MinusIcon
            className="card_basket__button_remove"
            onClick={onClickRemoveCount}
          />
          <p>{count}</p>
          <PlusIcon
            className="card_basket__button_remove"
            onClick={onClickAddCount}
          />
        </div>
        <p>{`${price} руб.`}</p>
      </div>
      <RemoveIcon
        className="card_basket__button_remove"
        onClick={onClickRemove}
      />
    </div>
  );
};

export default CardBasket;
