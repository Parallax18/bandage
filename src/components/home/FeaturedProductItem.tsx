import { FeaturedProduct } from "@/assets";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

interface IFeaturedProductItem {
  img: string;
  title: string;
  description: string;
}

const FeaturedProductItem = ({
  img,
  title,
  description,
}: IFeaturedProductItem) => {
  return (
    <Grid item xs={12} md={2.4}>
      <Box position={"relative"} height={"14.875rem"}>
        <Image
          src={FeaturedProduct}
          alt={title}
          loading="lazy"
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Stack
        spacing={"0.62rem"}
        height={"10.125rem"}
        padding={"1.56rem"}
        paddingBottom={"2.19rem"}
        textAlign={"center"}
      >
        <Typography variant="h5">{title}</Typography>
        <Typography color={"text.secondary"}>English Department</Typography>
        <Stack
          paddingY={"0.31rem"}
          direction={"row"}
          spacing={"0.31rem"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography variant="h5" color={"text.muted"}>
            $16.48
          </Typography>
          <Typography variant="h5" color={"secondary.main"}>
            $6.48
          </Typography>
        </Stack>
      </Stack>
    </Grid>
  );
};

export default FeaturedProductItem;
