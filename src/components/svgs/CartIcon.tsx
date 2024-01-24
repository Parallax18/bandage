import { IconProps, SvgIcon } from "@mui/material";
import React from "react";

interface ICustomIconProps extends IconProps {
  fill?: string;
}

const CartIcon = (props: ICustomIconProps) => {
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
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_540_809)">
          <path
            d="M0.000305176 1.5C0.000305176 1.36739 0.0529836 1.24021 0.146752 1.14645C0.24052 1.05268 0.367697 1 0.500305 1H2.00031C2.11184 1.00003 2.22016 1.03735 2.30804 1.10602C2.39592 1.1747 2.45831 1.27078 2.48531 1.379L2.89031 3H14.5003C14.5737 3.00007 14.6462 3.0163 14.7127 3.04755C14.7791 3.0788 14.8378 3.12429 14.8847 3.1808C14.9316 3.23731 14.9654 3.30345 14.9838 3.37452C15.0023 3.44558 15.0048 3.51984 14.9913 3.592L13.4913 11.592C13.4699 11.7066 13.409 11.8101 13.3194 11.8846C13.2297 11.9591 13.1169 11.9999 13.0003 12H4.00031C3.88374 11.9999 3.77087 11.9591 3.68122 11.8846C3.59156 11.8101 3.53075 11.7066 3.50931 11.592L2.01031 3.607L1.61031 2H0.500305C0.367697 2 0.24052 1.94732 0.146752 1.85355C0.0529836 1.75979 0.000305176 1.63261 0.000305176 1.5ZM3.10231 4L4.41531 11H12.5853L13.8983 4H3.10231ZM5.00031 12C4.46987 12 3.96116 12.2107 3.58609 12.5858C3.21102 12.9609 3.00031 13.4696 3.00031 14C3.00031 14.5304 3.21102 15.0391 3.58609 15.4142C3.96116 15.7893 4.46987 16 5.00031 16C5.53074 16 6.03945 15.7893 6.41452 15.4142C6.78959 15.0391 7.00031 14.5304 7.00031 14C7.00031 13.4696 6.78959 12.9609 6.41452 12.5858C6.03945 12.2107 5.53074 12 5.00031 12ZM12.0003 12C11.4699 12 10.9612 12.2107 10.5861 12.5858C10.211 12.9609 10.0003 13.4696 10.0003 14C10.0003 14.5304 10.211 15.0391 10.5861 15.4142C10.9612 15.7893 11.4699 16 12.0003 16C12.5307 16 13.0394 15.7893 13.4145 15.4142C13.7896 15.0391 14.0003 14.5304 14.0003 14C14.0003 13.4696 13.7896 12.9609 13.4145 12.5858C13.0394 12.2107 12.5307 12 12.0003 12ZM5.00031 13C5.26552 13 5.51988 13.1054 5.70741 13.2929C5.89495 13.4804 6.00031 13.7348 6.00031 14C6.00031 14.2652 5.89495 14.5196 5.70741 14.7071C5.51988 14.8946 5.26552 15 5.00031 15C4.73509 15 4.48073 14.8946 4.2932 14.7071C4.10566 14.5196 4.00031 14.2652 4.00031 14C4.00031 13.7348 4.10566 13.4804 4.2932 13.2929C4.48073 13.1054 4.73509 13 5.00031 13ZM12.0003 13C12.2655 13 12.5199 13.1054 12.7074 13.2929C12.8949 13.4804 13.0003 13.7348 13.0003 14C13.0003 14.2652 12.8949 14.5196 12.7074 14.7071C12.5199 14.8946 12.2655 15 12.0003 15C11.7351 15 11.4807 14.8946 11.2932 14.7071C11.1057 14.5196 11.0003 14.2652 11.0003 14C11.0003 13.7348 11.1057 13.4804 11.2932 13.2929C11.4807 13.1054 11.7351 13 12.0003 13Z"
            fill={props?.fill || "#23A6F0"}
          />
        </g>
        <defs>
          <clipPath id="clip0_540_809">
            <rect
              width="16"
              height="16"
              fill="white"
              transform="translate(0.000305176)"
            />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};

export default CartIcon;
