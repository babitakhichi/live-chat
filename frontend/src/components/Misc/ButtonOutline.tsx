"use client";
import React, { ReactNode, MouseEvent, FormEvent } from "react";

interface ButtonOutlineProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  onSubmit?: (event: FormEvent<HTMLButtonElement>) => void;
}

const ButtonOutline: React.FC<ButtonOutlineProps> = ({
  children,
  onClick,
  onSubmit,
}) => {
  return (
    <button
      className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-orange-500 hover:text-white-500 transition-all hover:shadow-orange "
      onClick={onClick}
      onSubmit={onSubmit}
    >
      {children}
    </button>
  );
};

export default ButtonOutline;
