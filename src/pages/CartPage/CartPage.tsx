import React from "react";
import Header from "../MainPage/components/Header/Header";
import "./CartPage.scss";
import { useAppSelector } from "../../redux";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../MainPage/components/Footer/Footer";
import Button from "../../components/Button/Button";

const CartPage = () => {
  const navigate = useNavigate();

  const params = useParams();

  const order = useAppSelector((state) => state.cards.order);
  const selectedItem = order.find((item) => item.id === Number(params.id));

  const onClickOrder = () => navigate("/order");
  return (
    <section className="cart">
      <div className="cart__nav">
        <Header />
      </div>
      <h2 className="cart__name">{selectedItem?.name}</h2>
      <div className="cart__container">
        {selectedItem && <img className="cart__img" src={selectedItem?.img} />}
        <div>
          <div className="cart__info">
            <p className="cart__title">Размер букета:</p>
            <p>{selectedItem?.size}</p>
          </div>
          <p className="cart__title">Состав:</p>
          {selectedItem?.structure.map((item) => (
            <p>{item}</p>
          ))}
          <div className="cart__info">
            <p className="cart__title">Доставка:</p>
            <p>Бесплатно</p>
          </div>
          <Button text="Купить в один клик" onClick={onClickOrder} />
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default CartPage;
