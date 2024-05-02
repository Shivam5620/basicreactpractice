import React from "react";

const sizes = {
  s: "text-xl font-bold",
  md: "text-[28px] font-bold md:text-[26px] sm:text-2xl",
  xs: "text-base font-bold",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-900 font-roboto ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
