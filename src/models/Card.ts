export interface Card {
  id: number;
  name: string;
  price: number;
  img: string;
  color: string;
  size: string;
  structure: string[];
}

export interface CardOrder extends Card {
  count: number;
}
