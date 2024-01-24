import { DescriptionImage, FeaturedPostImageOne } from "@/assets";
import { Box, Stack, Typography, Button, Link } from "@mui/material";
import Image from "next/image";
import React from "react";

const Description = (props: IProduct) => {
  const tabs = [
    {
      label: "Description",
    },
    {
      label: "Additional Information",
    },
    {
      label: "Reviews",
      count: 0,
    },
  ];
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"center"}
        marginTop={"0.62rem"}
        sx={{ borderBottom: 1, borderColor: "divider" }}
      >
        {tabs.map((item) => (
          <Stack
            spacing={"0.5rem"}
            direction={"row"}
            alignItems={"center"}
            key={item.label}
          >
            <Typography padding={"1.5rem"} sx={{ cursor: "pointer" }}>
              {item.label}
            </Typography>
            {item?.count && (
              <Typography color={"secondary.main"} sx={{ cursor: "pointer" }}>
                ( {item?.count} )
              </Typography>
            )}
          </Stack>
        ))}
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        paddingTop={"1.5rem"}
        paddingBottom={"3rem"}
      >
        <Stack
          spacing={"1.88rem"}
          width={"37.4375rem"}
          paddingBottom={"1.5625rem"}
        >
          <Typography variant="h3">{props?.title}</Typography>
          <Typography variant="body1">{props?.description}</Typography>
        </Stack>
        <Box position={"relative"} width={"25.8125rem"} height={"23.25rem"}>
          <Image
            fill
            style={{ objectFit: "cover", borderRadius: "0.34rem" }}
            src={props?.thumbnail}
            alt={""}
          />
        </Box>
      </Box>
    </>
  );
};

export default Description;
