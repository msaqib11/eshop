import { ReactNode } from "react";

interface IClassName {
    className: string;
    children: ReactNode;
  }
const Wrapper :React.FC<IClassName> = ({className,children}) => {
  return (
    <div className={`w-full max-w-7xl px-8 md:px-16 mx-auto ${className || ""}`}>{children}</div>
  )
}

export default Wrapper