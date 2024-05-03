
import SideBar from "pages/SidebarLayout";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex w-full items-center justify-between gap-5 bg-blue_gray-50 pr-[77px] shadow-xs md:flex-col md:pr-5">
        <SideBar/>
      <div className="flex w-[66%] flex-col items-center gap-[67px] md:w-full sm:gap-[33px]">
        {children}
      </div>
    </div>
  );
};

export default Layout;
