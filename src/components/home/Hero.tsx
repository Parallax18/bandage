import {
  HeroGridImageFour,
  HeroGridImageOne,
  HeroGridImageThree,
  HeroGridImageTwo,
} from "@/assets";
import {
  Box,
  Grid,
  Stack,
  Typography,
  TypographyPropsVariantOverrides,
} from "@mui/material";
import Image from "next/image";
import React from "react";

interface IProductItemContent {
  titleSize?: string;
}

const ProductItemContent = ({ titleSize }: IProductItemContent) => {
  return (
    <Stack
      position={"absolute"}
      top={0}
      width={"100%"}
      zIndex={"1"}
      padding={"1.5rem"}
      spacing={"0.31re"}
    >
      <Typography variant="h6" color={"success.main"}>
        5 Items
      </Typography>
      <Typography variant={titleSize || "h3"} color={"text.primary"}>
        FURNITURE
      </Typography>
      <Typography variant="h6" color={"text.primary"}>
        Read More
      </Typography>
    </Stack>
  );
};

const Hero = () => {
  return (
    <Box py={"5rem"} sx={{ border: "1px solid red" }}>
      <Grid container spacing={"1rem"}>
        <Grid item xs={12} md={5}>
          <Box bgcolor={"grey.light"} height={"38.5rem"} position={"relative"}>
            <ProductItemContent titleSize="h2" />
            <Image
              fill
              src={HeroGridImageOne}
              style={{ objectFit: "cover" }}
              alt=""
            />
          </Box>
        </Grid>
        <Grid container item xs={12} md={7} spacing={"1rem"}>
          <Grid item xs={12} md={12}>
            <Box
              bgcolor={"grey.light"}
              height={"18.75rem"}
              position={"relative"}
            >
              <ProductItemContent />
              <Image
                fill
                src={HeroGridImageTwo}
                style={{ objectFit: "cover" }}
                alt=""
              />
            </Box>
          </Grid>
          <Grid container item xs={12} md={12} spacing={"1rem"}>
            <Grid item xs={12} md={6}>
              <Box
                bgcolor={"grey.light"}
                height={"18.75rem"}
                position={"relative"}
              >
                <ProductItemContent />
                <Image
                  fill
                  src={HeroGridImageThree}
                  style={{ objectFit: "cover" }}
                  alt=""
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                bgcolor={"grey.light"}
                height={"18.75rem"}
                position={"relative"}
              >
                <ProductItemContent />
                <Image
                  fill
                  src={HeroGridImageFour}
                  style={{ objectFit: "cover" }}
                  alt=""
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
