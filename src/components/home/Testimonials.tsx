import {
  DesignerImage,
  TestimonialImageEight,
  TestimonialImageFive,
  TestimonialImageFour,
  TestimonialImageNine,
  TestimonialImageOne,
  TestimonialImageSeven,
  TestimonialImageSix,
  TestimonialImageThree,
  TestimonialImageTwo,
} from "@/assets";
import { ImageList, ImageListItem } from "@mui/material";
import { Avatar, Box, Link, Rating, Stack, Typography } from "@mui/material";
import React from "react";

const testimonials = [
  TestimonialImageOne,
  TestimonialImageTwo,
  TestimonialImageThree,
  TestimonialImageFour,
  TestimonialImageFive,
  TestimonialImageSix,
  TestimonialImageSeven,
  TestimonialImageEight,
  TestimonialImageNine,
];

const Testimonials = () => {
  return (
    <Box paddingY={"5rem"} border={"1px solid yellow"}>
      <Box
        display={"flex"}
        gap={"8rem"}
        padding={"3rem"}
        border={"1px solid yellow"}
        // alignItems={"center"}
      >
        <Box>
          <Typography variant={"h3"} textAlign={"center"} mb={"1.75rem"}>
            What they say about us
          </Typography>
          <Stack
            alignItems={"center"}
            spacing={"1.25rem"}
            paddingY={"1.88rem"}
            // paddingX={"2.19rem"}
          >
            <Avatar
              alt="Regina Miles"
              src={DesignerImage.src}
              sx={{ width: "5.625rem", height: "5.624rem" }}
            />
            <Rating name="read-only" value={4} readOnly />
            <Typography
              textAlign={"center"}
              variant="h6"
              color={"text.secondary"}
            >
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </Typography>
            <Stack alignItems={"center"}>
              <Typography fontWeight={700} component={Link}>
                Regina Miles
              </Typography>
              <Typography variant="h6" color={"text.primary"}>
                Designer
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <ImageList cols={3} gap={16 * 1.12} rowHeight={164}>
          {testimonials.map((item, idx) => (
            <ImageListItem key={idx}>
              <img src={item.src} alt={"images in a grid"} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
};

export default Testimonials;
