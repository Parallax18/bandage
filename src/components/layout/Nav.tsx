"use client";

import { Box, IconButton, Link, Stack, Typography } from "@mui/material";
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
    >
      <Box display={"flex"} alignItems={"center"} gap={"2.5rem"}>
        <Typography
          fontWeight={"bold"}
          lineHeight={"1.5rem"}
          letterSpacing={"0.0125rem"}
          fontSize={"1.5rem"}
          fontStyle={"normal"}
          color={"text.primary"}
          paddingRight={"4.94rem"}
        >
          Bandage
        </Typography>
        <Box display={"flex"} alignItems={"center"} gap={"0.94rem"}>
          {routes.map((item) => (
            <Box
              key={item.label}
              display={"flex"}
              alignItems={"center"}
              gap={"0.56rem"}
            >
              <Typography
                fontWeight={!!item.children ? "medium" : "bold"}
                lineHeight={"1.5rem"}
                letterSpacing={"0.0125rem"}
                fontSize={"0.875rem"}
                fontStyle={"normal"}
                color={!!item.children ? "text.primary" : "text.secondary"}
              >
                {item.label}
              </Typography>
              {/* {!!item.children && <ChevronIcon fontSize="small" />} */}
            </Box>
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
          <UserIcon fontSize="small" />
          <Typography
            fontWeight={"bold"}
            lineHeight={"1.5rem"}
            letterSpacing={"0.0125rem"}
            fontSize={"0.875rem"}
            fontStyle={"normal"}
            color={"primary.main"}
          >
            Login / Register
          </Typography>
        </Box>
        <Box display={"flex"} alignItems={"center"}>
          <Box padding={"0.94rem"} display={"flex"} alignItems={"center"}>
            <SearchIcon fontSize="small" />
          </Box>
          {/* todo: show number of cart items */}
          {/* <Box
            display={"flex"}
            alignItems={"center"}
            padding={"0.94rem"}
            gap={"0.31rem"}
          > */}

          <IconButton
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "0.94rem",
              gap: "0.31rem",
              height: "2.875rem",
              width: "3.5rem",
            }}
          >
            <CartIcon fontSize="small" />
            <Typography
              fontSize={"0.75rem"}
              lineHeight={"1rem"}
              letterSpacing={"0.0125rem"}
              color={"primary.main"}
              fontWeight={"regular"}
            >
              1
            </Typography>
          </IconButton>
          {/* </Box> */}

          {/* todo: show number of wishlist items */}
          <Box
            display={"flex"}
            alignItems={"center"}
            padding={"0.94rem"}
            gap={"0.31rem"}
          >
            <HeartIcon fontSize="small" />
            <Typography
              fontSize={"0.75rem"}
              lineHeight={"1rem"}
              letterSpacing={"0.0125rem"}
              color={"primary.main"}
              fontWeight={"regular"}
            >
              1
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Nav;
