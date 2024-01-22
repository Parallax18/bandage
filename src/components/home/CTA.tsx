import { CtaImage } from "@/assets";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";

const CTA = () => {
  return (
    <Box
      height={"40rem"}
      sx={{
        background: `url(${CtaImage.src}) center/cover no-repeat`,
        backgroundColor: "grey.light",
      }}
    >
      <center>
        <Container
          maxWidth={"lg"}
          sx={{
            border: "1px solid red",
            paddingTop: "10rem",
            paddingBottom: "7rem",
          }}
        >
          <Stack width={"35.68rem"} spacing={"1.88rem"} alignItems={"center"}>
            <Typography variant="h6" color={"primary.main"}>
              Designing Better Experience
            </Typography>
            <Typography variant="h2">
              Problems trying to resolve the conflict between
            </Typography>
            <Typography
              color={"text.secondary"}
              variant="body2"
              width={"27.9375rem"}
            >
              Problems trying to resolve the conflict between the two major
              realms of Classical physics:{" "}
            </Typography>
            <Typography color={"secondary.main"} variant={"h3"}>
              $16.48
            </Typography>
            <center>
              <Button variant="contained">ADD YOUR CALL TO ACTION</Button>
            </center>
          </Stack>
        </Container>
      </center>
    </Box>
  );
};

export default CTA;
