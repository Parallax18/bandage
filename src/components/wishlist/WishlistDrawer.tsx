import React, { Dispatch, SetStateAction } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Button, Stack, Typography, Grid } from "@mui/material";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/store";

import {
  WishlistInitialState,
  removeFromWishlist,
} from "@/store/slices/wishlist";

interface IWishList {
  isOpen: boolean;
  onClose: () => void;
}

const WishListDrawer = ({ isOpen, onClose }: IWishList) => {
  const wishListState = useAppSelector(
    (state) => state.wishlist as WishlistInitialState
  );
  const dispatch = useAppDispatch();
  const list = () => (
    <Box
      sx={{
        width: 400,
        paddingBottom: "1rem",
        overflowY: "scroll",
      }}
    >
      <Grid container>
        {wishListState?.items.map((item, index) => (
          <Grid item xs={12} md={6} key={item?.id}>
            <Box width={"100%"} padding={"1rem"} gap={"1rem"}>
              <Image
                src={item?.thumbnail}
                style={{ objectFit: "cover" }}
                width={150}
                height={200}
                alt=""
              />
              <Stack
                justifyContent={"space-between"}
                width={"100%"}
                spacing={1}
              >
                <Stack>
                  <Typography>{item?.title}</Typography>
                </Stack>
                <Box
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  width={"100%"}
                  display={"flex"}
                >
                  <Button
                    variant="text"
                    sx={{
                      color: "danger.main",
                      fontSize: "0.725rem",
                      padding: 0,
                      height: "max-content",
                    }}
                    onClick={() => dispatch(removeFromWishlist(item))}
                  >
                    Remove
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  return (
    <div>
      <Drawer anchor={"right"} open={isOpen} onClose={onClose}>
        <Typography variant="h3" padding={"1rem"}>
          Your Wishlist
        </Typography>

        {wishListState?.items.length === 0 ? (
          <Typography width={400} padding={"1rem"} variant="h4">
            List is empty
          </Typography>
        ) : (
          list()
        )}
        <Stack
          padding={"1rem"}
          borderTop={"1px solid #EBF0EE"}
          position={"fixed"}
          bottom={0}
          width={400}
          spacing={"1.88rem"}
          bgcolor={"white"}
        >
          <Button variant="contained" fullWidth onClick={() => onClose()}>
            Close
          </Button>
        </Stack>
      </Drawer>
    </div>
  );
};

export default WishListDrawer;
