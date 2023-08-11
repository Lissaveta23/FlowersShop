import "./Main.scss";
import CardProduct from "../../components/CardProduct/CardProduct";
import Header from "./components/Header/Header";
import Button from "../../components/Button/Button";
import Footer from "./components/Footer/Footer";
import { useMain } from "./MainProvider";
import Filters from "./components/Filters/Filters";
import { useNavigate } from "react-router-dom";

export const Main = () => {
  const { dataFlowers } = useMain();

  const navigate = useNavigate();
  const onClickOrder = () => navigate("/basket");

  return (
    <main className="main">
      <div className="main_img">
        <Header />
        <div className="main_text">
          <h1>FLOWER HOUSE</h1>
          <div>
            <h3>ДОСТАВКА ЦВЕТОВ В САМАРЕ</h3>
            <p>
              Бесплатная доставка по городу за 24 часа
              <br />
              Каждый 5 букет в подарок
            </p>
          </div>
          <Button
            text="Заказать"
            className="main_text__button"
            onClick={onClickOrder}
          />
        </div>
      </div>
      <div className="main_container">
        <section className="bouquets">
          <h2>Наши букеты</h2>
          <div className="bouquets__cards">
            {dataFlowers?.map((item) => (
              <CardProduct key={item.id} item={item} />
            ))}
          </div>
        </section>
        <Filters />
      </div>
      <Footer />
    </main>
  );
};

export default Main;
