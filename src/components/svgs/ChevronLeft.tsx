import { IconProps, SvgIcon } from "@mui/material";
import React from "react";

interface ICustomIconProps extends IconProps {
  fill?: string;
}

const ChevronLeft = (props: ICustomIconProps) => {
  return (
    <SvgIcon>
      <svg
        width="24"
        height="45"
        viewBox="0 0 24 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_541_596)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23.4992 44.3019C23.3409 44.4597 23.1528 44.585 22.9457 44.6704C22.7386 44.7558 22.5166 44.7998 22.2924 44.7998C22.0682 44.7998 21.8462 44.7558 21.6391 44.6704C21.432 44.5849 21.2439 44.4597 21.0856 44.3019L0.631046 23.9647C0.472307 23.8073 0.346367 23.6203 0.260435 23.4144C0.174505 23.2085 0.130272 22.9878 0.130272 22.7649C0.130272 22.5419 0.174505 22.3212 0.260435 22.1153C0.346367 21.9094 0.472307 21.7224 0.631046 21.565L21.0856 1.2278C21.4057 0.909569 21.8398 0.730789 22.2924 0.730789C22.7451 0.730789 23.1792 0.909569 23.4992 1.2278C23.8193 1.54603 23.9991 1.97765 23.9991 2.42769C23.9991 2.87774 23.8193 3.30935 23.4992 3.62759L4.24809 22.7649L23.4992 41.9021C23.658 42.0595 23.7839 42.2466 23.8698 42.4525C23.9558 42.6584 24 42.8791 24 43.102C24 43.3249 23.9558 43.5457 23.8698 43.7516C23.7839 43.9575 23.658 44.1445 23.4992 44.3019Z"
            fill={props?.fill || "white"}
          />
        </g>
        <defs>
          <clipPath id="clip0_541_596">
            <rect
              width="24"
              height="44.4706"
              fill={props?.fill || "white"}
              transform="translate(24 45) rotate(-180)"
            />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};

export default ChevronLeft;
