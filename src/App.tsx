import { createContext, FC } from "react";
import ParentComponent from "./components/ParentComponent/ParentComponent";
import { Store1 } from "./store1";
import { Store2 } from "./store2";

export interface IGroceriesStoreContext {
  itemsInStock: string[];
  cart: string[];
  addToCart: (item: string) => void;
}

export interface IBugsStoreContext {
  bugsList: string[];
  selectedBugs: string[];
  selectBug: (item: string) => void;
}

export interface IRootStoreContext {
  groceriesStore: IGroceriesStoreContext;
  bugsStore: IBugsStoreContext;
}

export const StoreContext = createContext<IRootStoreContext>(
  {} as IRootStoreContext
);

export interface StoreProviderProps {
  children: any;
}

const StoreProvider: FC<StoreProviderProps> = ({ children }) => {
  const groceriesStore = new Store1();
  const bugsStore = new Store2();

  const rootStore = {
    groceriesStore,
    bugsStore,
  };

  return (
    <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
  );
};

const App = () => {
  return (
    <StoreProvider>
      <ParentComponent />
    </StoreProvider>
  );
};

export default App;
