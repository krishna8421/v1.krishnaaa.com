import classnames from "classnames";
import React from "react";

interface Props {
  text: string;
  onClick?: () => void;
  bgColor?: string;
  textColor?: string;
  buttonColor?: string;
  bgClass?: string;
  buttonClass?: string;
}

export const LayerButton = ({
  onClick,
  text,
  bgColor,
  buttonColor,
  bgClass,
  buttonClass,
}: Props) => {
  const classNameBackground = classnames("relative", bgColor ?? "bg-custom-green", bgClass);
  const classNameButton = classnames(
    "bg-custom-purple hover:translate-x-1 hover:translate-y-1 transition-all duration-300",
    buttonColor ?? "bg-custom-purple",
    buttonClass,
  );
  return (
    <div className={classNameBackground}>
      <button className={classNameButton} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};
