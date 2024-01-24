"use client";

import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  CartIcon,
  HamburgerIcon,
  HeartIcon,
  SearchIcon,
  UserIcon,
} from "../svgs";
import { Link } from "@mui/material";
import Banner from "./Banner";
import CartDrawer from "../cart/CartDrawer";
import { useDisclosure } from "@/utils/use-disclosure";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
// const navItems = ["Home", "About", "Contact"];
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

export default function NavBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isOpen, toggle, onClose } = useDisclosure();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {routes.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        elevation={0}
        component="nav"
        sx={{ bgcolor: "background.light" }}
      >
        <Banner />
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <HamburgerIcon />
          </IconButton>
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
                onClick={toggle}
                sx={{ cursor: "pointer" }}
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
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <CartDrawer isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}
