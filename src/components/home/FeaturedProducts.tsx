"use client";

import { Box, Button, Grid, ImageList, Stack, Typography } from "@mui/material";
import React from "react";
import FeaturedProductItem from "./FeaturedProductItem";
import { FeaturedProduct } from "@/assets";

const FeaturedProducts = () => {
  return (
    <Box py={"5rem"} sx={{ border: "1px solid red" }}>
      <Stack spacing={"0.62rem"}>
        <Typography
          variant={"h4"}
          textAlign={"center"}
          color={"text.secondary"}
        >
          Featured Products
        </Typography>
        <Typography variant="h3" textAlign={"center"}>
          BESTSELLER PRODUCTS
        </Typography>
        <Typography
          variant="body1"
          textAlign={"center"}
          color={"text.secondary"}
        >
          Problems trying to resolve the conflict between
        </Typography>
      </Stack>
      <Grid
        container
        rowGap={"1.94rem"}
        spacing={"1.88rem"}
        padding={"1.5rem"}
        my={"1.5rem"}
      >
        {itemData.map((item) => (
          <FeaturedProductItem key={item.title} {...item} />
        ))}
      </Grid>
      <center>
        <Button variant="outlined">LOAD MORE PRODUCTS</Button>
      </center>
    </Box>
  );
};

export default FeaturedProducts;

const itemData = [
  {
    img: FeaturedProduct,
    title: "Breakfast",
    description: "@bkristastucchio",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    description: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    description: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    description: "@nolanissac",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    description: "@hjrc33",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    description: "@arwinneil",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    description: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    description: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    description: "@silverdalex",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    description: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    description: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    description: "@southside_customs",
  },
];
