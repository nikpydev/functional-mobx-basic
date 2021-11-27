import { createContext, FC, useState } from "react";
import ParentComponent from "./components/ParentComponent/ParentComponent";
import { useLocalStore } from "mobx-react";

export interface IStoreContext {
  itemsInStock: string[];
  cart: string[];
  addToCart: (item: string) => void;
}

export const StoreContext = createContext<IStoreContext>({
  itemsInStock: [],
  cart: [],
  addToCart: Function,
});

export interface StoreProviderProps {
  children: any;
}

const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  const store: IStoreContext = useLocalStore(() => ({
    itemsInStock: ["item1", "item2", "item3"],
    cart: [],
    addToCart: (item: string) => {
      store.cart.push(item);
    },
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

const App = () => {
  return (
    <StoreProvider>
      <h1>App</h1>
      <ParentComponent />
    </StoreProvider>
  );
};

export default App;
