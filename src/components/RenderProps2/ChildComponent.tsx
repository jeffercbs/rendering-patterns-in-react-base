import React from "react";
import { ItemsMenuProps } from "./ParentComponent";

interface ChildComponentProps {
  itemsMenu: ItemsMenuProps[];
}
const ChildComponent: React.FC<ChildComponentProps> = ({itemsMenu}) => {
  return (
    itemsMenu.map((item, index) => (
      <div key={index}>
        <a href={item.href}>{item.name}</a>
        <span>{item.role}</span>
      </div>
    ))
  );
};

export default ChildComponent;
