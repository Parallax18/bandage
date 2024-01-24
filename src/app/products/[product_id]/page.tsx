"use client";

import { Box, Container, Stack } from "@mui/material";
import React from "react";
import ProductDisplay from "@/components/product-detail/ProductDisplay";
import Hooli from "@/components/svgs/Hooli";
import Lyft from "@/components/svgs/Lyft";
import Pipper from "@/components/svgs/Pipper";
import Stripe from "@/components/svgs/Stripe";
import Aws from "@/components/svgs/Aws";
import Reddit from "@/components/svgs/Reddit";
import { useGetSingleProductDetail } from "@/api-services/products";
import { useParams } from "next/navigation";
import BestSellerProducts from "@/components/product-detail/BestSellerProducts";
import Description from "@/components/product-detail/Description";

const ProductDetail = () => {
  const params = useParams<{ product_id: string }>();
  const { data: singleProduct } = useGetSingleProductDetail({
    id: params?.product_id,
  });
  return (
    <>
      <Box bgcolor={"grey.light"} paddingBottom={"3rem"}>
        <Container maxWidth={"lg"}>
          <ProductDisplay {...(singleProduct as IProduct)} />
        </Container>
      </Box>
      <Container maxWidth={"lg"}>
        <Description {...(singleProduct as IProduct)} />
      </Container>
      {/* todo: reuse component from featured products */}
      <Box bgcolor={"grey.light"} paddingY={"3rem"}>
        <Container maxWidth={"lg"}>
          <BestSellerProducts />
          <Stack
            direction={"row"}
            spacing={"1.88rem"}
            alignItems={"center"}
            paddingY={"3.12rem"}
          >
            <Hooli /> <Lyft /> <Pipper /> <Stripe /> <Aws /> <Reddit />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default ProductDetail;
