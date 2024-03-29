"use client";

import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  CartIcon,
  HamburgerIcon,
  HeartIcon,
  SearchIcon,
  UserIcon,
} from "../svgs";
import { Link, Stack } from "@mui/material";
import Banner from "./Banner";
import CartDrawer from "../cart/CartDrawer";
import { useDisclosure } from "@/utils/use-disclosure";
import { useAppSelector } from "@/store";
import { CartInitialState } from "@/store/slices/cart";
import WishListDrawer from "../wishlist/WishlistDrawer";
import { WishlistInitialState } from "@/store/slices/wishlist";
import { Collapse } from "@mui/material";
import Nextlink from "next/link";

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

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: wishlistIsOpen,
    onOpen: openWishlist,
    onClose: closeWishlist,
  } = useDisclosure();
  const cartState = useAppSelector((state) => state.cart as CartInitialState);
  const wishListState = useAppSelector(
    (state) => state.wishlist as WishlistInitialState
  );
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        elevation={0}
        component="nav"
        sx={{ bgcolor: "background.light" }}
      >
        <Banner />
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box display={"flex"} alignItems={"center"} gap={"2.5rem"}>
            <Typography
              variant="h3"
              color={"text.primary"}
              paddingRight={"4.94rem"}
            >
              Bandage
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "flex" } }} gap={"0.94rem"}>
              {routes.map((item) => (
                <Link
                  href={item?.path}
                  key={item.label}
                  color={"text.secondary"}
                >
                  {item.label}
                </Link>
                // !todo: add shop   {/* {!!item.children && <ChevronIcon fontSize="small" />} */}
              ))}
            </Box>
          </Box>
          <Box display={{ xs: "none", md: "flex" }} alignItems={"center"}>
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
                onClick={onOpen}
                sx={{ cursor: "pointer" }}
              >
                <CartIcon fontSize="small" />
                <Typography variant="small" color={"primary.main"}>
                  {cartState.totalCount}
                </Typography>
              </Box>

              {/* todo: show number of wishlist items */}
              <Box
                display={"flex"}
                alignItems={"center"}
                padding={"0.94rem"}
                gap={"0.31rem"}
                onClick={openWishlist}
                sx={{ cursor: "pointer" }}
              >
                <HeartIcon fontSize="small" />
                <Typography variant="small" color={"primary.main"}>
                  {wishListState?.items.length}
                </Typography>
              </Box>
            </Box>
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <HamburgerIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Collapse in={mobileOpen}>
          <Stack
            spacing={"1.88rem"}
            alignItems={"center"}
            justifyContent={"center"}
            paddingTop={"5rem"}
            width={"100vw"}
          >
            {routes.map((item) => (
              <Typography
                key={item.label}
                variant="mobile-menu"
                color={"text.secondary"}
                textAlign={"center"}
                onClick={handleDrawerToggle}
                {...(item?.path && {
                  component: Nextlink,
                  href: item?.path,
                  sx: { textDecoration: "none" },
                })}
              >
                {item.label}
              </Typography>
            ))}
          </Stack>
        </Collapse>
      </nav>
      <CartDrawer isOpen={isOpen} onClose={onClose} />
      <WishListDrawer isOpen={wishlistIsOpen} onClose={closeWishlist} />
    </Box>
  );
}
