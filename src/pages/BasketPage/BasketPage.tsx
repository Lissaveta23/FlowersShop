import React from "react";
import Header from "../MainPage/components/Header/Header";
import "./BasketPage.scss";
import { useAppSelector } from "../../redux";
import CardBasket from "../../components/CardBasket/CardBasket";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../MainPage/components/Footer/Footer";
import Button from "../../components/Button/Button";

const BasketPage = () => {
  const navigate = useNavigate();

  const order = useAppSelector((state) => state.cards.order);

  const summa = order.reduce(
    (accum, item) => accum + item.price * item.count,
    0
  );

  const onClickOrder = () => navigate("/order");

  return (
    <section className="basket">
      <div className="basket__nav">
        <Header />
      </div>
      {!!order.length ? (
        <div className="basket_form">
          <h2>Корзина</h2>
          <div className="basket_form__cards">
            {order.map((card) => (
              <CardBasket item={card} />
            ))}
          </div>
          <h4>Сумма: {summa} руб.</h4>
          <Button text="Оформить заказ" onClick={onClickOrder} />
        </div>
      ) : (
        <div className="basket_emty">
          <h4>В корзине пусто</h4>
          <Link to="/">Перейти к каталогу</Link>
        </div>
      )}
      <Footer />
    </section>
  );
};

export default BasketPage;
