import React from "react";

interface ParentComponentProps {
    render: (itemsMenu: ItemsMenuProps[]) => JSX.Element;
}

export interface ItemsMenuProps {
    name: string;
    href: string;
    role: "admin" | "user";
}

const ParentComponent: React.FC<ParentComponentProps> = ({render}) => {
    const itemsMenu: ItemsMenuProps[] = [{
        name: "Home",
        href: "/home",
        role: "admin"
    }, {
        name: "About",
        href: "/about",
        role: "user"
    }, {
        name: "Contact",
        href: "/contact",
        role: "admin"
    }]

    return (
        <>
            {render(itemsMenu)}
        </>
    );
};

export default ParentComponent;
