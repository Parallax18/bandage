"use client";

import {
  Box,
  Divider,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material";
import ChevronRight from "@/components/svgs/ChevronRight";
import ChevronLeft from "@/components/svgs/ChevronLeft";
import WishlistIcon from "../svgs/WishlistIcon";
import CartIcon from "../svgs/CartIcon";
import EyeIcon from "../svgs/EyeIcon";
import Image from "next/image";
import { TestimonialImageEight } from "@/assets";
import { useGetSingleProductDetail } from "@/api-services/products";
import { useParams } from "next/navigation";

const ProductDisplay = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const params = useParams<{ product_id: string }>();
  const { data: singleProduct } = useGetSingleProductDetail({
    id: params?.product_id,
  });
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
      onclick: () => {},
    },
    {
      icon: <CartIcon />,
      onclick: () => {},
    },
    {
      icon: <EyeIcon />,
      onclick: () => {},
    },
  ];
  return (
    <Box display={"flex"} gap={"1.88rem"} id={`/products/${singleProduct?.id}`}>
      <Stack spacing={"1.31rem"}>
        <Box
          sx={{ width: "31.625rem", flexGrow: 1, bgcolor: "text.light" }}
          position={"relative"}
        >
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {singleProduct?.images.map((image, idx) => (
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
                    alt={singleProduct?.title}
                  />
                ) : null}
              </div>
            ))}
          </SwipeableViews>
          <Box
            display={singleProduct?.images?.length! > 1 ? "flex" : "none"}
            justifyContent={"space-between"}
            position={"absolute"}
            top={250}
            width={"100%"}
            alignItems={"center"}
          >
            <Button
              onClick={handleNext}
              disabled={activeStep === singleProduct?.images?.length! - 1}
            >
              <ChevronLeft />
            </Button>
            <Button onClick={handleBack} disabled={activeStep === 0}>
              <ChevronRight />
            </Button>
          </Box>
        </Box>
        <Stack direction={"row"} spacing={"1.19rem"}>
          {singleProduct?.images.map((item, idx) => (
            <Box
              key={item}
              position={"relative"}
              width={"6.25rem"}
              height={"4.6875rem"}
              onClick={() => setActiveStep(idx)}
              sx={{ cursor: "pointer" }}
            >
              <Image src={item} alt={""} fill />
            </Box>
          ))}
        </Stack>
      </Stack>
      <Stack spacing={"7.44rem"} minWidth={"27.8125rem"}>
        <Stack spacing={"1.37rem"}>
          <Stack spacing={"0.75rem"}>
            <Typography variant="h4">{singleProduct?.title}</Typography>
            <Stack direction={"row"} spacing={"0.62rem"}>
              <Rating
                name="product-rating"
                readOnly
                value={singleProduct?.rating}
              />
              <Typography variant="h6" color={"text.secondary"}>
                10 Reviews
              </Typography>
            </Stack>
          </Stack>
          <Stack spacing={"0.31rem"}>
            <Typography variant="h3">${singleProduct?.price}</Typography>
            <Stack direction={"row"} spacing={"0.31rem"}>
              <Typography variant="h6" color={"text.secondary"}>
                Availability :
              </Typography>
              <Typography variant="h6" color={"primary.main"}>
                {singleProduct?.stock! > 0 ? "In Stock" : "Out of stock"}
              </Typography>
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
                }}
                aria-label="add to wish list"
              >
                {item.icon}
              </IconButton>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ProductDisplay;
