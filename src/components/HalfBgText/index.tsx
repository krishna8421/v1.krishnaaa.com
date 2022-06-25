import { ReactNode } from "react";
interface Props {
  children: ReactNode;
}

export const HalfBgText = ({ children }: Props) => {
  return (
    <div className="relative w-fit">
      <span>{children}</span>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 -rotate-1 bg-custom-purple"> </div>
    </div>
  );
};
