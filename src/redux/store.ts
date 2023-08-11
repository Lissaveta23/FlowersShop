import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Card, CardOrder } from "../models/Card";

type CardsState = {
  order: CardOrder[];
};

const initialState: CardsState = {
  order: [],
};

const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCard(state, action: PayloadAction<Card>) {
      const cardOrder = state.order.find(
        (item) => item.id === action.payload.id
      );

      if (cardOrder) {
        cardOrder.count++;
      } else {
        state.order.push({
          ...action.payload,
          count: 1,
        });
      }
    },
    removeCard(state, action: PayloadAction<number>) {
      state.order = state.order.filter((card) => card.id !== action.payload);
    },
    addCount(state, action: PayloadAction<number>) {
      const cardOrder = state.order.find((item) => item.id === action.payload);
      cardOrder && cardOrder.count++;
    },
    removeCount(state, action: PayloadAction<number>) {
      const cardOrder = state.order.find((item) => item.id === action.payload);
      if (cardOrder && cardOrder.count > 1) {
        cardOrder.count--;
      } else
        state.order = state.order.filter((card) => card.id !== action.payload);
    },
  },
});

export const { addCard, removeCard, addCount, removeCount } =
  cardsSlice.actions;

export default cardsSlice.reducer;
