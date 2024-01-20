import { IconProps, SvgIcon } from "@mui/material";
import React from "react";

const ChevronIcon = (props: IconProps) => {
  const customSizing = {
    small: "16px",
    large: "74px",
  };
  return (
    <SvgIcon
      style={{
        fontSize: customSizing[props.fontSize as keyof typeof customSizing],
      }}
    >
      <svg
        width="10"
        height="7"
        viewBox="0 0 10 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.42857 0.5L5 4.07143L8.57143 0.5L10 1.21429L5 6.21429L-3.12224e-08 1.21429L1.42857 0.5Z"
          fill="#252B42"
        />
      </svg>
    </SvgIcon>
  );
};

export default ChevronIcon;
