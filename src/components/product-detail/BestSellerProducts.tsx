import { Divider, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import FeaturedProductItem from "../home/FeaturedProductItem";
import { useGetAllProducts } from "@/api-services/products";
import LoadingGrid from "../util/LoadingGrid";

const BestSellerProducts = () => {
  const { data: productsData, isLoading } = useGetAllProducts({ limit: 8 });
  return (
    <Stack spacing={"1.5rem"} justifyContent={"center"}>
      <Typography variant="h3">BESTSELLER PRODUCTS</Typography>
      <Divider />
      {isLoading && <LoadingGrid length={10} />}
      {productsData && (
        <Grid container spacing={"1.88rem"} padding={0}>
          {productsData?.products?.map((item) => (
            <Grid key={item.title} item xs={12} md={3}>
              <FeaturedProductItem {...item} />
            </Grid>
          ))}
        </Grid>
      )}
    </Stack>
  );
};

export default BestSellerProducts;
