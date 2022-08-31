import React, { useState, ReactElement } from "react";
import ArrowRight from "../../assets/icons/arrow-right.svg";
import ArrowDown from "../../assets/icons/arrow-down.svg";

type CollapsibleProps = React.PropsWithChildren<{
  children: ReactElement;
}>;

const Collapsible = ({ children }: CollapsibleProps): ReactElement => {
  const height = 24;
  const width = 24;
  const Open = () => <ArrowDown width={height} height={width}></ArrowDown>;
  const Closed = () => <ArrowRight width={height} height={width}></ArrowRight>;
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <div onClick={() => toggle()}>
      {open ? <Open /> : <Closed />}
      {open && <div className="toggle">{children}</div>}
    </div>
  );
};

export default Collapsible;
