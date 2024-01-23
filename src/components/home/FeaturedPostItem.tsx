import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { StaticImageData } from "next/image";
import { Box, Stack } from "@mui/material";
import ClockIcon from "../svgs/ClockIcon";
import AreaChartIcon from "../svgs/AreaChartIcon";
import ChevronRight from "../svgs/ChevronRight";

interface IFeaturedPostItem {
  Image: StaticImageData;
}

const tags = ["Google", "Trending", "New"];

const FeaturedPostItem = ({ Image }: IFeaturedPostItem) => {
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 0 }}>
      <Box position={"relative"}>
        <CardMedia
          sx={{ height: "18.75rem" }}
          image={Image.src}
          title="featured post"
        />

        <Box
          sx={{ bgcolor: "danger.main", borderRadius: "0.19rem" }}
          position={"absolute"}
          top={0}
          paddingX={"0.63rem"}
          margin={"1.25rem"}
        >
          <Typography variant="h6" color={"text.light"}>
            NEW
          </Typography>
        </Box>
      </Box>
      <CardContent
        sx={{
          padding: "1.56rem",
          paddingBottom: "2.19rem",
          "& > *": { marginBottom: "0.62rem" },
        }}
      >
        <Stack direction={"row"} spacing={"0.94rem"}>
          {tags.map((item, index) => (
            <Typography
              variant="small"
              key={item}
              color={index === 0 ? "text.disabled" : "text.secondary"}
            >
              {item}
            </Typography>
          ))}
        </Stack>
        <Typography gutterBottom variant="h4" fontWeight={400}>
          Loudest à la Madison #1 (L&apos;integral)
        </Typography>
        <Typography variant="body1" color="text.secondary" fontWeight={400}>
          We focus on ergonomics and meeting you where you work. It&apos;s only
          a keystroke away.
        </Typography>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          py={"0.94rem"}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={"0.31rem"}>
            <ClockIcon fontSize="small" />
            <Typography variant="small" color={"text.secondary"}>
              22 April 2021
            </Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={"0.31rem"}>
            <AreaChartIcon fontSize="small" />
            <Typography variant="small" color={"text.secondary"}>
              10 comments
            </Typography>
          </Stack>
        </Box>
        <Stack direction={"row"} alignItems={"center"} spacing={"0.62rem"}>
          <Typography variant={"h6"} color={"text.secondary"}>
            Learn More
          </Typography>
          <ChevronRight fontSize="small" />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default FeaturedPostItem;
