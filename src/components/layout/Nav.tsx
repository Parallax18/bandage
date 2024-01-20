"use client";

import { Box, IconButton, Link, Typography } from "@mui/material";
import React from "react";
import UserIcon from "../svgs/UserIcon";
import SearchIcon from "../svgs/SearchIcon";
import CartIcon from "../svgs/CartIcon";
import HeartIcon from "../svgs/HeartIcon";

const routes = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Shop",
    children: [],
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Blog",
    path: "/blog",
  },
  {
    label: "Contact",
    path: "/contact",
  },
  {
    label: "Pages",
    path: "/pages",
  },
];

const Nav = () => {
  return (
    <Box
      paddingX={"2.38rem"}
      height={"3.625rem"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      bgcolor={"secondary.contrastText"}
    >
      <Box display={"flex"} alignItems={"center"} gap={"2.5rem"}>
        <Typography
          variant="h3"
          color={"text.primary"}
          paddingRight={"4.94rem"}
        >
          Bandage
        </Typography>
        <Box display={"flex"} alignItems={"center"} gap={"0.94rem"}>
          {routes.map((item) => (
            <Link href={item?.path} key={item.label} color={"text.secondary"}>
              {item.label}
            </Link>
            // !todo: add shop   {/* {!!item.children && <ChevronIcon fontSize="small" />} */}
          ))}
        </Box>
      </Box>
      <Box display={"flex"} alignItems={"center"}>
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={"0.31rem"}
          padding={"0.94rem"}
        >
          {/* !todo: change icon size */}
          <UserIcon fontSize="small" />
          <Link href={"/login"} color={"primary.main"}>
            Login / Register
          </Link>
        </Box>
        <Box display={"flex"} alignItems={"center"}>
          <Box padding={"0.94rem"} display={"flex"} alignItems={"center"}>
            <SearchIcon fontSize="small" />
          </Box>
          {/* todo: show number of cart items */}
          <Box
            display={"flex"}
            alignItems={"center"}
            padding={"0.94rem"}
            gap={"0.31rem"}
            height={"2.875rem"}
            width={"3.5rem"}
          >
            <CartIcon fontSize="small" />
            <Typography variant="small" color={"primary.main"}>
              1
            </Typography>
          </Box>

          {/* todo: show number of wishlist items */}
          <Box
            display={"flex"}
            alignItems={"center"}
            padding={"0.94rem"}
            gap={"0.31rem"}
          >
            <HeartIcon fontSize="small" />
            <Typography variant="small" color={"primary.main"}>
              1
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Nav;
