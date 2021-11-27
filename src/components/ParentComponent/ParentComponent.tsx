import BugComponent from "../BugComponent/BugComponent";
import GroceriesComponent from "../GroceriesComponent/GroceriesComponent";

const ParentComponent = () => {
  return (
    <div>
      <GroceriesComponent />
      <BugComponent />
    </div>
  );
};

export default ParentComponent;
