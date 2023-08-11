import React, { FC } from "react";
import "./CardProduct.scss";
import Button from "../Button/Button";
import { useAppDispatch, useAppSelector } from "../../redux";
import { addCard } from "../../redux/store";
import { Card } from "../../models/Card";

interface CardProductProps {
  item: Card;
}

const CardProduct: FC<CardProductProps> = ({ item }) => {
  const { img, name, price } = item;

  const order = useAppSelector((state) => state.cards.order);
  const dispatch = useAppDispatch();

  const inBasket = order.find((card) => card.id === item.id);

  const onClick = () => dispatch(addCard(item));

  return (
    <div className="card">
      <img className="card__img" src={img} />
      <div className="card__text">
        <p className="card__text_name">{name}</p>
        <p className="card__text_price">{`${price} руб.`}</p>
      </div>
      <Button
        text={inBasket ? "В корзине" : "Заказать"}
        variant={inBasket && "outlined"}
        disabled={!!inBasket}
        onClick={onClick}
      />
    </div>
  );
};

export default CardProduct;
