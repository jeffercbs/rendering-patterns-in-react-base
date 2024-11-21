import react from "react"

type ChildComponentProps = {
  render: (name: string) => JSX.Element
}

export const ChildComponent: react.FC<ChildComponentProps> = ({render}) => {
  const name = "Jeffercbs"
  
  return (
    <>
      {render(name)}
    </>
  );
};

export const ParentComponent = () => {
  const renderChild = (name: string) => <h1>Hello, {name}</h1>
  
  return (
    <>
    <ChildComponent render={renderChild} />
    </>
  );
};
