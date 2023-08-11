import Header from "../MainPage/components/Header/Header";
import "./OrderPage.scss";
import Footer from "../MainPage/components/Footer/Footer";
import OrderForm from "./components/OprderForm";

const OrderPage = () => {
  return (
    <section className="order">
      <div className="order__nav">
        <Header />
      </div>
      <h4 className="order_title">Оформление заказа</h4>
      <form>
        <OrderForm />
      </form>
      <Footer />
    </section>
  );
};

export default OrderPage;
