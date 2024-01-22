import { IconProps, SvgIcon } from "@mui/material";
import React from "react";

const ClockIcon = (props: IconProps) => {
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
        <path
          d="M8.49933 14.6667C5.20378 14.6232 2.54277 11.9622 2.49933 8.66668C2.54277 5.37113 5.20378 2.71011 8.49933 2.66668C11.7949 2.71011 14.4559 5.37113 14.4993 8.66668C14.4559 11.9622 11.7949 14.6232 8.49933 14.6667ZM8.49933 4.00001C5.93611 4.03376 3.86641 6.10346 3.83266 8.66668C3.86641 11.2299 5.93611 13.2996 8.49933 13.3333C11.0625 13.2996 13.1322 11.2299 13.166 8.66668C13.1322 6.10346 11.0625 4.03376 8.49933 4.00001ZM11.8327 9.33334H7.83266V5.33334H9.16599V8.00001H11.8327V9.33334ZM14.0273 4.47201L12.0213 2.47201L12.9607 1.52734L14.9673 3.52734L14.0273 4.47134V4.47201ZM2.97066 4.47201L2.02733 3.52734L4.02133 1.52734L4.96466 2.47201L2.972 4.47201H2.97066Z"
          fill="#23A6F0"
        />
      </svg>
    </SvgIcon>
  );
};

export default ClockIcon;
