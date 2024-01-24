import {
  FeaturedPostImageOne,
  FeaturedPostImageThree,
  FeaturedPostImageTwo,
} from "@/assets";
import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/material";
import React from "react";
import FeaturedPostItem from "./FeaturedPostItem";

const posts = [
  { id: "0", image: FeaturedPostImageOne },
  { id: "1", image: FeaturedPostImageTwo },
  { id: "2", image: FeaturedPostImageThree },
];

const FeaturedPosts = () => {
  return (
    <Box py={"7rem"}>
      <Stack spacing={"0.62rem"} mb={"5rem"}>
        <Typography variant={"h6"} textAlign={"center"} color={"primary.main"}>
          Practice Advice
        </Typography>
        <Typography variant="h2" textAlign={"center"} color={"text.primary"}>
          Featured Posts
        </Typography>
      </Stack>
      <Box
        display={"flex"}
        gap={"0.62rem"}
        justifyContent={"center"}
        flexWrap={"wrap"}
      >
        {posts.map((item) => (
          <FeaturedPostItem key={item.id} Image={item.image} />
        ))}
      </Box>
    </Box>
  );
};

export default FeaturedPosts;
