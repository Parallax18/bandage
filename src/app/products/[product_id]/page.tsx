"use client";

import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material";
import ChevronRight from "@/components/svgs/ChevronRight";
import ChevronLeft from "@/components/svgs/ChevronLeft";

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

const ProductDetail = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };
  return (
    <Box display={"flex"}>
      <Stack>
        <Box sx={{ maxWidth: "31.625rem", flexGrow: 1 }} position={"relative"}>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {images.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
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
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </SwipeableViews>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            position={"absolute"}
            top={250}
            width={"100%"}
            alignItems={"center"}
          >
            <Button onClick={handleNext} disabled={activeStep === maxSteps - 1}>
              <ChevronLeft />
            </Button>
            <Button onClick={handleBack} disabled={activeStep === 0}>
              <ChevronRight />
            </Button>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default ProductDetail;
