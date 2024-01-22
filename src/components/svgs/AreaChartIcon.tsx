import { IconProps, SvgIcon } from "@mui/material";
import React from "react";

const AreaChartIcon = (props: IconProps) => {
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
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_5450_46)">
          <path
            d="M16.3333 13.8334H2V0.833415C2 0.741748 1.925 0.666748 1.83333 0.666748H0.666667C0.575 0.666748 0.5 0.741748 0.5 0.833415V15.1667C0.5 15.2584 0.575 15.3334 0.666667 15.3334H16.3333C16.425 15.3334 16.5 15.2584 16.5 15.1667V14.0001C16.5 13.9084 16.425 13.8334 16.3333 13.8334ZM3.5 12.5001H14.6667C14.7583 12.5001 14.8333 12.4251 14.8333 12.3334V3.25008C14.8333 3.10008 14.6521 3.02716 14.5479 3.13133L10.1667 7.51258L7.55417 4.92925C7.52284 4.89823 7.48054 4.88083 7.43646 4.88083C7.39238 4.88083 7.35007 4.89823 7.31875 4.92925L3.38125 8.87925C3.36596 8.89457 3.35385 8.91277 3.34562 8.93279C3.3374 8.95281 3.33322 8.97427 3.33333 8.99591V12.3334C3.33333 12.4251 3.40833 12.5001 3.5 12.5001Z"
            fill="#23856D"
          />
        </g>
        <defs>
          <clipPath id="clip0_5450_46">
            <rect
              width="16"
              height="14.6667"
              fill="white"
              transform="translate(0.5 0.666748)"
            />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};

export default AreaChartIcon;
