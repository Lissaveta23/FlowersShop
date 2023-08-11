import { useState } from "react";
import "../OrderPage.scss";
import { useAppSelector } from "../../../redux";
import Input from "../../../components/Input/Input";
import { YMaps } from "@pbe/react-yandex-maps";
import Button from "../../../components/Button/Button";
import Select from "../../../components/Select/Select";
import Map from "./Map/Map";
import { key, monthOptions, yearOptions } from "../constants";
import { useForm } from "react-hook-form";
import Popup from "../../../components/Popup/Popup";

const OrderForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    getValues,
    formState: { errors },
  } = useForm();

  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const order = useAppSelector((state) => state.cards.order);

  const summa = order.reduce(
    (accum, item) => accum + item.price * item.count,
    0
  );

  const changeAdress = (adress: string) => {
    setValue("adress", adress);
    trigger("adress");
  };

  const onSubmit = (data: any) => {
    console.log(data);
    togglePopup();
  };

  const nameCustomer = getValues("firstName");

  return (
    <div className="order__container">
      <div className="order__container_form">
        <div className="order__form">
          <h3>Контактные данные</h3>
          <Input
            placeholder="Имя"
            valid={!errors["firstName"]}
            {...register("firstName", {
              required: true,
              pattern: /^[А-Яа-я]+$/i,
            })}
          />
          <Input
            placeholder="Фамилия"
            valid={!errors["lastName"]}
            {...register("lastName", {
              required: true,
              pattern: /^[А-Яа-я]+$/i,
            })}
          />
          <Input
            type="email"
            placeholder="Email"
            valid={!errors["email"]}
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
            })}
          />
          <Input
            type="tel"
            valid={!errors["phone"]}
            placeholder="Номер телефона"
            {...register("phone", {
              required: true,
              pattern: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
            })}
          />
        </div>

        <div className="order__form">
          <h3>Оплата</h3>
          <Input
            type="number"
            placeholder="Номер карты"
            valid={!errors["number_card"]}
            {...register("number_card", {
              required: true,
              maxLength: 16,
              minLength: 16,
            })}
          />
          <Input
            type="text"
            placeholder="Фамилия"
            valid={!errors["surname_card"]}
            {...register("surname_card", {
              required: true,
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          <div className="order__form_card">
            <Select
              options={monthOptions}
              {...register("month", { required: true })}
            />
            <Select
              options={yearOptions}
              {...register("year", { required: true })}
            />
            <Input
              type="number"
              placeholder="CVC"
              valid={!errors["cvc"]}
              {...register("cvc", {
                required: true,
                maxLength: 3,
                minLength: 3,
              })}
            />
          </div>
        </div>
        <div className="order__form">
          <h3>Адрес доставки</h3>
          <Input
            placeholder="Улица, дом"
            valid={!errors["adress"]}
            {...register("adress", { required: true })}
          />
          <Input
            type="number"
            placeholder="Квартира"
            valid={!errors["flat"]}
            {...register("flat", { required: true })}
          />
          <div className="maps">
            <p>Выберите на карте</p>
            <YMaps query={{ apikey: key }}>
              <Map changeAdress={changeAdress} />
            </YMaps>
          </div>
        </div>
      </div>

      <div className="order__container_form">
        <div className="order__form_summa">
          <div>
            <h3>Ваш заказ</h3>
            <p>Стоимость: {summa} руб.</p>
            <p>Доставка: Бесплатно</p>
            <hr className="order__form_summa_separator" />
          </div>
          <Button text="Заказать" onClick={handleSubmit(onSubmit)} />
        </div>
        <div className="order__form">
          <h3>Дата доставки</h3>
          <Input
            type="date"
            valid={!errors["date"]}
            {...register("date", { required: true })}
          />
        </div>
      </div>
      {isOpen && (
        <Popup handleClose={togglePopup}>
          <div className="popup_container">
            <h3>{nameCustomer}, Ваш заказ принят!</h3>
            <p>Сумма заказа: {summa} руб.</p>
            <p>В ближайшее время оператор свяжится с вами для подтверждения</p>
          </div>
        </Popup>
      )}
    </div>
  );
};

export default OrderForm;
