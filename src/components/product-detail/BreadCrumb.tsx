import { Link, Stack } from "@mui/material";
import React from "react";
import { ChevronRightIcon } from "../svgs";

const BreadCrumb = () => {
  return (
    <Stack
      py={"1.5rem"}
      direction={"row"}
      spacing={"0.94rem"}
      justifyContent={{ xs: "center", md: "flex-start" }}
    >
      <Link href={"/"} color={"text.primary"}>
        Home
      </Link>
      <ChevronRightIcon fontSize="small" fill={"#BDBDBD"} />
      <Link color={"text.muted"}>Shop</Link>
    </Stack>
  );
};

export default BreadCrumb;
