"use client";

import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import FeaturedProductItem from "./FeaturedProductItem";
import { useGetAllProducts } from "@/api-services/products";
import { Skeleton } from "@mui/material";

const FeaturedProducts = () => {
  const [limit, setLimit] = useState(10);
  const { data: productsData, isLoading } = useGetAllProducts({ limit });
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
        rowGap={"0.94rem"}
        spacing={"1.88rem"}
        padding={"1.5rem"}
        my={"1.5rem"}
      >
        {isLoading ? (
          <Skeleton
            animation="wave"
            variant="rectangular"
            width={210}
            height={118}
          />
        ) : (
          productsData?.products?.map((item) => (
            <Grid item xs={12} md={2.4} key={item.id}>
              <FeaturedProductItem {...item} isCentered />
            </Grid>
          ))
        )}
      </Grid>
      {/* @ts-expect-error */}
      {(limit < productsData?.total || 100) && (
        <center>
          <Button
            variant="outlined"
            disabled={isLoading}
            onClick={() => setLimit((prev) => prev + 1)}
          >
            {isLoading ? "LOADING..." : "LOAD MORE PRODUCTS"}
          </Button>
        </center>
      )}
    </Box>
  );
};

export default FeaturedProducts;
