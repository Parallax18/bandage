import { Grid, Skeleton, Stack } from "@mui/material";
import React from "react";

const LoadingGrid = ({ length }: { length: number }) => {
  return (
    <Grid
      container
      rowGap={"0.94rem"}
      spacing={"1.88rem"}
      padding={"1.5rem"}
      my={"1.5rem"}
    >
      {new Array(length).fill("").map((item) => (
        <Grid item key={item} xs={12} md={2.4}>
          <Stack spacing={1}>
            <Skeleton
              animation="wave"
              variant="rectangular"
              width={210}
              height={118}
            />
            <Skeleton
              animation="wave"
              variant="rectangular"
              width={210}
              height={30}
            />
            <Skeleton
              animation="wave"
              variant="rectangular"
              width={110}
              height={20}
            />
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};

export default LoadingGrid;
