import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import BookReader from "@/components/svgs/BookReader";
import Book from "../svgs/Book";
import ArrowGrowth from "../svgs/ArrowGrowth";

const services = [
  {
    icon: <BookReader fontSize="large" />,
    title: "Easy Wins",
    description: "Get your best looking smile now!",
  },

  {
    icon: <Book fontSize="large" />,
    title: "Concrete",
    description:
      "Defalcate is most focused in helping you discover your most beautiful smile",
  },
  {
    icon: <ArrowGrowth fontSize="large" />,
    title: "Hack Growth",
    description: "Overcame any hurdle or any other problem.",
  },
];

const FeaturedServices = () => {
  return (
    <Box py={"5rem"} mb={"1rem"}>
      <Stack spacing={"0.62rem"} mb={"5rem"}>
        <Typography
          variant={"h4"}
          textAlign={"center"}
          color={"text.secondary"}
        >
          Featured Services
        </Typography>
        <Typography variant="h3" textAlign={"center"}>
          THE BEST SERVICES
        </Typography>
        <Typography
          variant="body1"
          textAlign={"center"}
          color={"text.secondary"}
        >
          Problems trying to resolve the conflict between
        </Typography>
      </Stack>

      <Box
        display={"flex"}
        flexWrap={"wrap"}
        gap={"1.88rem"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {services.map((item) => (
          <Box
            key={item.title}
            height={"15.875rem"}
            width={"19.6875rem"}
            paddingY={"2.19rem"}
            paddingX={"2.5rem"}
          >
            <Stack
              spacing={"1.25rem"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              {item.icon}
              <Typography variant={"h3"}>{item.title}</Typography>
              <Typography
                variant="body1"
                color={"text.secondary"}
                textAlign={"center"}
              >
                {item.description}
              </Typography>
            </Stack>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default FeaturedServices;
