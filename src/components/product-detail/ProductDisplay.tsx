"use client";

import {
  Box,
  Divider,
  IconButton,
  Rating,
  Stack,
  Typography,
  Snackbar,
  Alert,
  Skeleton,
} from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material";
import {
  WishlistIcon,
  CartIcon,
  EyeIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@/components/svgs";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/store";
import { CartInitialState, addToCart } from "@/store/slices/cart";
import { WishlistInitialState, addToWishlist } from "@/store/slices/wishlist";
import CustomToast from "../util/CustomToast";
import BreadCrumb from "./BreadCrumb";
import { useDisclosure } from "@/utils/use-disclosure";
import LoaderItem from "../util/LoaderItem";

interface IProductDisplay extends IProduct {
  isLoading: boolean;
}

const ProductDisplay = (props: IProductDisplay) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const toast = CustomToast();
  const { isOpen, onClose, onOpen } = useDisclosure();

  const cartState = useAppSelector((state) => state.cart as CartInitialState);
  const wishListState = useAppSelector(
    (state) => state.wishlist as WishlistInitialState
  );
  const dispatch = useAppDispatch();
  const colors = [
    "primary.main",
    "success.main",
    "alert.main",
    "background.dark",
  ];
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };
  const actions = [
    {
      icon: <WishlistIcon />,
      isDisabled: wishListState?.items.some((item) => item.id === props?.id),
      onclick: (item: IProduct) => {
        onOpen();
        dispatch(addToWishlist(item));
      },
    },
    {
      icon: <CartIcon fill={"#252B42"} />,
      isDisabled: cartState?.items.some((item) => item.id === props?.id),
      onclick: (item: IProduct) => {
        // toast({ message: "Item added to cart" });
        onOpen();
        dispatch(addToCart({ ...item, count: 1 }));
      },
    },
    {
      icon: <EyeIcon />,
      onclick: () => {},
    },
  ];
  return (
    <>
      <BreadCrumb />
      <Box display={"flex"} gap={"1.88rem"} id={`/products/${props?.id}`}>
        <Stack spacing={"1.31rem"}>
          <Box
            sx={{ width: "31.625rem", flexGrow: 1, bgcolor: "text.light" }}
            position={"relative"}
          >
            <LoaderItem isLoading={props.isLoading}>
              <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
              >
                {props?.images?.map((image, idx) => (
                  <div key={idx}>
                    {Math.abs(activeStep - idx) <= 2 ? (
                      <Box
                        component="img"
                        sx={{
                          height: "28.125rem",
                          display: "block",
                          maxWidth: "31.625rem",
                          overflow: "hidden",
                          width: "100%",
                          objectFit: "cover",
                        }}
                        src={image}
                        alt={props?.title}
                      />
                    ) : null}
                  </div>
                ))}
              </SwipeableViews>
              <Box
                display={props?.images?.length! > 1 ? "flex" : "none"}
                justifyContent={"space-between"}
                position={"absolute"}
                top={250}
                width={"100%"}
                alignItems={"center"}
              >
                <Button
                  onClick={handleNext}
                  disabled={activeStep === props?.images?.length! - 1}
                >
                  <ChevronLeftIcon fill={"#fff"} />
                </Button>
                <Button onClick={handleBack} disabled={activeStep === 0}>
                  <ChevronRightIcon fill={"#fff"} />
                </Button>
              </Box>
            </LoaderItem>
          </Box>
          <Stack direction={"row"} spacing={"1.19rem"}>
            {props?.images?.map((item, idx) => (
              <Box
                key={item}
                position={"relative"}
                width={"6.25rem"}
                height={"4.6875rem"}
                onClick={() => setActiveStep(idx)}
                sx={{ cursor: "pointer" }}
              >
                <LoaderItem isLoading={props.isLoading}>
                  <Image
                    src={item}
                    alt={""}
                    style={{ objectFit: "cover" }}
                    fill
                  />
                </LoaderItem>
              </Box>
            ))}
          </Stack>
        </Stack>
        <Stack spacing={"7.44rem"} minWidth={"27.8125rem"}>
          <Stack spacing={"1.37rem"}>
            <Stack spacing={"0.75rem"}>
              <LoaderItem isLoading={props.isLoading}>
                <Typography variant="h4">{props?.title}</Typography>
              </LoaderItem>

              <Stack direction={"row"} spacing={"0.62rem"}>
                <LoaderItem isLoading={props.isLoading}>
                  <Rating
                    name="product-rating"
                    readOnly
                    value={props?.rating}
                  />
                </LoaderItem>
                <LoaderItem isLoading={props.isLoading}>
                  <Typography variant="h6" color={"text.secondary"}>
                    10 Reviews
                  </Typography>
                </LoaderItem>
              </Stack>
            </Stack>
            <Stack spacing={"0.31rem"}>
              <LoaderItem isLoading={props.isLoading}>
                <Typography variant="h3">${props?.price}</Typography>
              </LoaderItem>
              <Stack direction={"row"} spacing={"0.31rem"}>
                <LoaderItem isLoading={props.isLoading}>
                  <Typography variant="h6" color={"text.secondary"}>
                    Availability :
                  </Typography>{" "}
                </LoaderItem>

                <LoaderItem isLoading={props.isLoading}>
                  <Typography variant="h6" color={"primary.main"}>
                    {props?.stock! > 0 ? "In Stock" : "Out of stock"}
                  </Typography>
                </LoaderItem>
              </Stack>
            </Stack>
          </Stack>
          <Stack spacing={"4.19rem"}>
            <Box>
              <Divider sx={{ width: "100%", marginBottom: "1.81rem" }} />
              <Stack direction={"row"} spacing={"0.62rem"}>
                {colors.map((item) => (
                  <Box
                    key={item}
                    bgcolor={item}
                    borderRadius={"50%"}
                    width={"1.875rem"}
                    height={"1.875rem"}
                  />
                ))}
              </Stack>
            </Box>
            <Stack direction={"row"} alignItems={"center"} spacing={"0.62rem"}>
              <Button variant="contained" sx={{ width: "max-content" }}>
                Select Options
              </Button>
              {actions.map((item, idx) => (
                <IconButton
                  key={idx}
                  sx={{
                    width: "2.5rem",
                    height: "2.5rem",
                    padding: "0.625rem",
                    background: "#fff",
                    border: "1px solid #E8E8E8",
                    "&::disabled": { cursor: "not-allowed" },
                  }}
                  aria-label="add to wish list"
                  disabled={item?.isDisabled}
                  onClick={() => props && item.onclick(props)}
                >
                  {item.icon}
                </IconButton>
              ))}
            </Stack>
          </Stack>
        </Stack>
        <Snackbar
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          open={isOpen}
          onClose={onClose}
        >
          <Alert
            onClose={onClose}
            severity="success"
            variant="filled"
            sx={{ width: "100%", color: "background.light" }}
          >
            Item added to list
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
};

export default ProductDisplay;
