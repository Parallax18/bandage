"use client";

import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import FeaturedProductItem from "./FeaturedProductItem";
import { useGetAllProducts } from "@/api-services/products";
import { Skeleton } from "@mui/material";
import LoadingGrid from "../util/LoadingGrid";

const FeaturedProducts = () => {
  const [limit, setLimit] = useState(10);
  const { data: productsData, isLoading } = useGetAllProducts({ limit });
  return (
    <Box py={"5rem"}>
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
      {isLoading && <LoadingGrid length={10} />}

      {productsData && (
        <Grid
          container
          rowGap={"0.94rem"}
          spacing={"1.88rem"}
          padding={"1.5rem"}
          my={"1.5rem"}
        >
          {productsData?.products?.map((item) => (
            <Grid item xs={12} md={2.4} key={item.id}>
              <FeaturedProductItem {...item} isCentered />
            </Grid>
          ))}
        </Grid>
      )}
      {/* @ts-expect-error */}
      {limit < productsData?.total && (
        <center>
          <Button
            variant="outlined"
            disabled={isLoading}
            onClick={() => setLimit((prev) => prev + 10)}
          >
            {isLoading ? "LOADING MORE..." : "LOAD MORE PRODUCTS"}
          </Button>
        </center>
      )}
    </Box>
  );
};

export default FeaturedProducts;
