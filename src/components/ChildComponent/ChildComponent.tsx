import React, { SyntheticEvent, useContext } from "react";
import { StoreContext } from "../../App";
import { useObserver } from "mobx-react";

const ChildComponent = () => {
  const store = useContext(StoreContext);
  const { itemsInStock, cart, addToCart } = store;

  const handleAddToCart = (e: SyntheticEvent) => {
    addToCart((e.target as HTMLElement).innerHTML);
  };

  const renderUIItems = () => {
    return (
      <div>
        <h1>Child Component</h1>
        <div>Store</div>
        {itemsInStock.map((product) => {
          return (
            <ul
              style={{ cursor: "pointer" }}
              key={product}
              onClick={handleAddToCart}
            >
              {product}
            </ul>
          );
        })}
        <div>Cart Section</div>
        {cart.map((itemInCart) => {
          return <ul key={itemInCart}>{itemInCart}</ul>;
        })}
      </div>
    );
  };

  return useObserver(() => renderUIItems());
};

export default ChildComponent;
