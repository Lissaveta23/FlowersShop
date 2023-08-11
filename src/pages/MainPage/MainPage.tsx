import { Card } from "../../models/Card";
import Main from "./Main";
import { MainProvider } from "./MainProvider";

const data: Card[] = [
  {
    id: 1,
    name: "Поцелуй лета",
    price: 1200,
    img: require("./content/imgs/card-one.jpg"),
    color: "Красный",
    size: "18 × 30 см",
    structure: ["Хризантемы, Розы, Тульпаны"],
  },
  {
    id: 2,
    name: "Крем-карамель",
    price: 2400,
    img: require("./content/imgs/card-two.jpg"),
    color: "Бежевый",
    size: "30 × 40 см",
    structure: ["Розы, Хризантемы, Сухоцвет"],
  },
  {
    id: 3,
    name: "Нимфа",
    price: 1500,
    img: require("./content/imgs/card-three.jpg"),
    color: "Красный",
    size: "18 × 40 см",
    structure: ["Розы, Пионы, Эвкалипт"],
  },
  {
    id: 4,
    name: "Амур",
    price: 2700,
    img: require("./content/imgs/card-four.jpg"),
    color: "Розовый",
    size: "40 × 60 см",
    structure: ["Розы, Пионы, Эвкалипт"],
  },
  {
    id: 5,
    name: "Сахарная пудра",
    price: 2300,
    img: require("./content/imgs/card-five.jpg"),
    color: "Розовый",
    size: "30 × 70 см",
    structure: ["Розы, Сухоцвет"],
  },
  {
    id: 6,
    name: "Притяжение",
    price: 1580,
    img: require("./content/imgs/card-six.jpg"),
    color: "Розовый",
    size: "18 × 40 см",
    structure: ["Розы, Пионы, Хризантемы"],
  },
];

const MainPage = () => {
  return (
    <MainProvider data={data}>
      <Main />
    </MainProvider>
  );
};

export default MainPage;
