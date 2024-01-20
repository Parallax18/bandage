import React from "react";

import { Box, Stack, Typography } from "@mui/material";
import PhoneIcon from "../svgs/PhoneIcon";
import EnvelopeIcon from "../svgs/EnvelopeIcon";
import InstagramIcon from "../svgs/InstagramIcon";
import YoutubeIcon from "../svgs/YoutubeIcon";
import FacebookIcon from "../svgs/FacebookIcon";
import TwitterIcon from "../svgs/TwitterIcon";

const Banner = () => {
  return (
    <Box
      paddingX={"1.5rem"}
      height={"3.625rem"}
      display={"flex"}
      alignItems={"center"}
      bgcolor={"secondary.main"}
      color={"secondary.contrastText"}
      justifyContent={"space-between"}
      mb={"0.75rem"}
    >
      <Box display={"flex"} alignItems={"center"} gap={"1.25rem"}>
        <Box
          display={"flex"}
          gap={"0.31rem"}
          alignItems={"center"}
          padding={"0.63rem"}
        >
          <PhoneIcon fontSize="small" />
          <Typography
            fontWeight={"bold"}
            lineHeight={"1.5rem"}
            letterSpacing={"0.0125rem"}
            fontSize={"0.875rem"}
            fontStyle={"normal"}
          >
            (225) 555-0118
          </Typography>
        </Box>
        <Box
          display={"flex"}
          gap={"0.31rem"}
          alignItems={"center"}
          padding={"0.63rem"}
        >
          <EnvelopeIcon fontSize="small" />
          <Typography
            fontWeight={"bold"}
            lineHeight={"1.5rem"}
            letterSpacing={"0.0125rem"}
            fontSize={"0.875rem"}
            fontStyle={"normal"}
          >
            michelle.rivera@example.com
          </Typography>
        </Box>
      </Box>
      <Box display={"flex"} alignItems={"center"} padding={"0.63rem"}>
        <Typography
          fontWeight={"bold"}
          lineHeight={"1.5rem"}
          letterSpacing={"0.0125rem"}
          fontSize={"0.875rem"}
          fontStyle={"normal"}
        >
          Follow Us and get a chance to win 80% off
        </Typography>
      </Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        padding={"0.63rem"}
        gap={"0.62rem"}
      >
        <Typography
          fontWeight={"bold"}
          lineHeight={"1.5rem"}
          letterSpacing={"0.0125rem"}
          fontSize={"0.875rem"}
          fontStyle={"normal"}
        >
          Follow Us :
        </Typography>
        <Stack direction="row" spacing={"0.65rem"}>
          <InstagramIcon fontSize="small" />
          <YoutubeIcon fontSize="small" />
          <FacebookIcon fontSize="small" />
          <TwitterIcon fontSize="small" />
        </Stack>
      </Box>
    </Box>
  );
};

export default Banner;
