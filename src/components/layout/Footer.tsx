import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "../svgs";

const footerRoutes = [
  {
    groupLabel: "Company Info",
    routes: ["About Us", "Carrier", "We are hiring", "Blog"],
  },
  {
    groupLabel: "Legal",
    routes: ["About Us", "Carrier", "We are hiring", "Blog"],
  },
  {
    groupLabel: "Features",
    routes: [
      "Business Marketing",
      "User Analytic",
      "Live Chat",
      "Unlimited Support",
    ],
  },
  {
    groupLabel: "Resources",
    routes: ["IOS & Android", "Watch a Demo", "Customers", "API"],
  },
];

const Footer = () => {
  return (
    <Box>
      <Container maxWidth={"lg"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          paddingY={"2.25rem"}
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <Typography
            variant="h3"
            color={"text.primary"}
            paddingRight={"4.94rem"}
          >
            Bandage
          </Typography>
          <Stack direction={"row"} spacing={"1.25rem"}>
            <FacebookIcon fill="#23A6F0" />
            <InstagramIcon fill="#23A6F0" />
            <TwitterIcon fill="#23A6F0" />
          </Stack>
        </Box>

        <Grid container paddingY={"3.12rem"}>
          {footerRoutes.map((item) => (
            <Grid item xs={12} md={2.25} key={item.groupLabel}>
              <Typography variant={"h5"} marginBottom={"1.25rem"}>
                {item.groupLabel}
              </Typography>
              <Stack spacing={"0.62rem"}>
                {item.routes.map((item) => (
                  <Link color={"text.secondary"} key={item} href={""}>
                    {item}
                  </Link>
                ))}
              </Stack>
            </Grid>
          ))}
          <Grid item xs={12} md={3}>
            <Typography variant={"h5"} marginBottom={"1.25rem"}>
              Get In Touch
            </Typography>
            <Box>
              <TextField
                id="outlined-basic"
                label="Your Email"
                variant="outlined"
                placeholder="Your Email"
                InputProps={{
                  sx: {
                    background: "#F9F9F9",
                    paddingRight: 0,
                    width: "20.0625rem",
                  },
                  endAdornment: (
                    <Button
                      variant={"contained"}
                      sx={{
                        textTransform: "capitalize",
                        width: "7.3125rem",
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                      }}
                    >
                      Subscribe
                    </Button>
                  ),
                }}
              />
              <Typography
                color={"text.secondary"}
                lineHeight={"1.75rem"}
                fontSize={"0.75rem"}
              >
                Lore imp sum dolor Amit
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box paddingY={"1.56rem"} bgcolor={"grey.light"}>
        <Container maxWidth={"lg"}>
          <Typography variant="h6" color={"text.secondary"}>
            Made With Love By Finland All Right Reserved
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
