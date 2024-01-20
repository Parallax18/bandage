import {
  HeroGridImageFour,
  HeroGridImageOne,
  HeroGridImageThree,
  HeroGridImageTwo,
} from "@/assets";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const ProductItemContent = ({ titleSize }: { titleSize?: string }) => {
  return (
    <Stack
      position={"absolute"}
      top={0}
      width={"100%"}
      zIndex={"1"}
      padding={"1.5rem"}
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
    <Box py={"5rem"}>
      <Grid container>
        <Grid item xs={12} md={5}>
          <Box
            bgcolor={"gray"}
            height={"38.5rem"}
            width={"28.5rem"}
            position={"relative"}
          >
            <ProductItemContent titleSize="h2" />
            <Image
              layout="fill"
              src={HeroGridImageOne}
              objectFit="cover"
              alt=""
            />
          </Box>
        </Grid>
        <Grid container item xs={12} md={7} spacing={"1rem"}>
          <Grid item xs={12} md={12}>
            <Box bgcolor={"gray"} height={"18.75rem"} position={"relative"}>
              <ProductItemContent />
              <Image
                layout="fill"
                src={HeroGridImageTwo}
                objectFit="cover"
                alt=""
              />
            </Box>
          </Grid>
          <Grid container item xs={12} md={12} spacing={"1rem"}>
            <Grid item xs={12} md={6}>
              <Box bgcolor={"gray"} height={"18.75rem"} position={"relative"}>
                <ProductItemContent />
                <Image
                  layout="fill"
                  src={HeroGridImageThree}
                  objectFit="cover"
                  alt=""
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box bgcolor={"gray"} height={"18.75rem"} position={"relative"}>
                <ProductItemContent />
                <Image
                  layout="fill"
                  src={HeroGridImageFour}
                  objectFit="cover"
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
