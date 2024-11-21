import ChildComponent from "./ChildComponent";
import ParentComponent, { ItemsMenuProps } from "./ParentComponent";

export const RenderProps2 = () => {
  const role = "user"; // "user"
  const renderChild = (itemsMenu: ItemsMenuProps[]) => {
    return <ChildComponent itemsMenu={itemsMenu.filter(item => item.role === role)} />;
  }
  return (
    <div>
        <ParentComponent render={renderChild}/>
    </div>
  );
};
