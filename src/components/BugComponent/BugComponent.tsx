import { SyntheticEvent, useContext } from "react";
import { StoreContext } from "../../App";
import { useObserver } from "mobx-react";

const BugComponent = () => {
  const store = useContext(StoreContext);
  const { bugsStore } = store;
  const { bugsList, selectedBugs, selectBug } = bugsStore;

  const handleAddToCart = (e: SyntheticEvent) => {
    const item = (e.target as HTMLElement).innerHTML;
    selectBug(item);
  };

  const renderUIItems = () => {
    return (
      <div>
        <h1>Child Component</h1>
        <div>Store</div>
        {bugsList.map((bug) => {
          return (
            <ul
              style={{ cursor: "pointer" }}
              key={bug}
              onClick={handleAddToCart}
            >
              {bug}
            </ul>
          );
        })}
        <div>Cart Section</div>
        {selectedBugs.map((selectedBug) => {
          return <ul key={selectedBug}>{selectedBug}</ul>;
        })}
      </div>
    );
  };

  return useObserver(() => renderUIItems());
};

export default BugComponent;
