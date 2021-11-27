import { makeAutoObservable } from "mobx";

export class Store1 {
  itemsInStock: string[] = ["item1", "item2", "item3"];
  cart: string[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  public addToCart = (item: string) => {
    this.cart.push(item);
  };
}
