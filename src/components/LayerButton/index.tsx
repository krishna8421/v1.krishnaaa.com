import classnames from "classnames";
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface Props {
  text: string;
  onClick?: any;
  bgColor?: string;
  textColor?: string;
  buttonColor?: string;
  bgClass?: string;
  buttonClass?: string;
  type?: "submit" | "reset" | "button" | undefined;
}

export const LayerButton = ({
  onClick,
  text,
  bgColor,
  buttonColor,
  bgClass,
  buttonClass,
  type,
}: Props) => {
  const classNameBackground = classnames("relative w-fit", bgColor ?? "bg-custom-green", bgClass);
  const classNameButton = classnames(
    "bg-custom-purple hover:translate-x-1 hover:translate-y-1 transition-all duration-300",
    buttonColor ?? "bg-custom-purple",
    buttonClass,
  );
  return (
    <div className={classNameBackground}>
      <button className={classNameButton} onClick={onClick} type={type ? type : "button"}>
        {text}
      </button>
    </div>
  );
};
