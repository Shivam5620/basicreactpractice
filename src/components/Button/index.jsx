import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-lg",
};
const variants = {
  fill: {
    deep_orange_200: "bg-deep_orange-200 shadow-bs text-gray-900_01",
    white_A700: "bg-white-A700 shadow-sm",
    teal_300: "bg-teal-300 shadow-xs text-white-A700",
    teal_A100: "bg-teal-A100 shadow-bs text-gray-900_01",
  },
};
const sizes = {
  xs: "h-[43px] pl-[25px] pr-[34px] text-base",
  sm: "h-[46px] px-[35px] text-xl",
  lg: "h-[58px] px-[35px] text-xl",
  md: "h-[49px] px-[13px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "md",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "lg", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["deep_orange_200", "white_A700", "teal_300", "teal_A100"]),
};

export { Button };
