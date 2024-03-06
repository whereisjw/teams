import Image from "next/image";
import React, { Children, ReactNode } from "react";
import Logo from "../../../public/logo.png";
import Link from "next/link";
interface Props {
  children: ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <div>
      <nav className="w-full border border-slate-400 shadow-sm h-16 flex items-center justify-between">
        <Link href={'/home'} className="ml-3 flex justify-start items-center w-[33%]">
          <Image src={Logo} alt="logo" className="w-40" />
        </Link>
        <div className="w-[33%] flex items-center justify-center">
          <input
            className="border rounded-sm border-slate-400"
            type="text"
            placeholder="검색"
          />
        </div>
        <div className=" w-[33%]  mr-3 flex items-center justify-end">
          <div className="w-12 h-12 border border-red-500 rounded-full"></div>
        </div>
      </nav>
      {children}
    </div>
  );
};

export default layout;
