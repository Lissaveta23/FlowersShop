import React, {
  useState,
  useEffect,
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  MouseEventHandler,
  useCallback,
} from "react";
import { Card } from "../../models/Card";

export type Props = {
  data: Card[];
};
export type ContextValue = {
  dataFlowers: Card[];
  onClickReset: () => void;
  onClickSort: MouseEventHandler<HTMLButtonElement>;
  onClickCheckbox: () => void;
};

const MainContext = createContext<Partial<ContextValue>>({});

const sortedData = (array: Card[], key: keyof Card) => [
  ...array.sort((a, b) => (a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0)),
];

const MainProvider: FC<PropsWithChildren<Props>> = ({ children, data }) => {
  const [dataFlowers, setDataFlowers] = useState(data);

  const onClickSort: MouseEventHandler<HTMLButtonElement> = useCallback((e) => {
    const key = e.currentTarget.getAttribute("data-type") as keyof Card;

    if (!!key) {
      const sortedDataFlowers = sortedData(dataFlowers, key);
      setDataFlowers(sortedDataFlowers);
    }
  }, []);

  const onClickReset = useCallback(() => {
    setDataFlowers(data);
    (
      Array.from(document.querySelectorAll(".check")) as HTMLInputElement[]
    ).forEach((element) => (element.checked = false));
  }, []);

  const onClickCheckbox = useCallback(() => {
    const colorsChecked = (
      Array.from(document.querySelectorAll(".check")) as HTMLInputElement[]
    )
      .filter((item) => item.checked)
      .map((item) => item.value);

    if (!!colorsChecked.length) {
      const sortedDataFlowers = data.filter((elem) =>
        colorsChecked.includes(elem.color)
      );
      setDataFlowers(sortedDataFlowers);
    } else setDataFlowers(data);
  }, []);

  return (
    <MainContext.Provider
      value={{
        dataFlowers,
        onClickSort,
        onClickReset,
        onClickCheckbox,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

const useMain = () => useContext(MainContext);

export { MainContext, MainProvider, useMain };
