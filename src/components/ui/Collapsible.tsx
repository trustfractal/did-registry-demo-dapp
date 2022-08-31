import React, { useState, ReactElement } from "react";
import ArrowRight from "../../assets/icons/arrow-right.svg";
import ArrowDown from "../../assets/icons/arrow-down.svg";

const Collapsible = ({
  height,
  width,
  children,
}: {
  height?: number;
  width?: number;
  children: ReactElement;
}): ReactElement => {
  const Open = () => <ArrowDown width={height} height={width}></ArrowDown>;
  const Closed = () => <ArrowRight width={height} height={width}></ArrowRight>;
  const [open, setOpen] = useState(false);
  const [icon, setIcon] = useState(<Closed />);
  const toggle = () => {
    !open ? setIcon(<Open />) : setIcon(<Closed />);
    setOpen(!open);
  };

  return (
    <div onClick={() => toggle()}>
      {icon}
      {open && <div className="toggle">{children}</div>}
    </div>
  );
};

Collapsible.defaultProps = {
  height: 24,
  weight: 24,
};

export default Collapsible;
