import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Button, Stack, Typography, Divider, IconButton } from "@mui/material";
import Image from "next/image";
import { FeaturedPostImageOne } from "@/assets";
import SubtractIcon from "../svgs/SubtractIcon";
import { AdditionIcon } from "../svgs";
import { useAppDispatch, useAppSelector } from "@/store";
import cart, {
  CartInitialState,
  decreaseItemQuantity,
  increaseItemQuantity,
  removeFromCart,
} from "@/store/slices/cart";

export default function CartDrawer({ isOpen, onClose }) {
  const cartState = useAppSelector((state) => state.cart as CartInitialState);
  const dispatch = useAppDispatch();
  const list = () => (
    <Box
      sx={{
        width: 400,
        paddingBottom: "1rem",
        overflowY: "scroll",
      }}
    >
      <List>
        {cartState?.items.map((item, index) => (
          <ListItem key={item?.id} disablePadding>
            <Box display={"flex"} width={"100%"} padding={"1rem"} gap={"1rem"}>
              <Image
                src={item?.thumbnail}
                style={{ objectFit: "cover" }}
                width={70}
                height={80}
                alt=""
              />
              <Stack
                justifyContent={"space-between"}
                width={"100%"}
                spacing={1}
              >
                <Stack>
                  <Typography>{item?.title}</Typography>
                  <Typography>${item?.price}</Typography>
                </Stack>
                <Box
                  alignItems={"center"}
                  justifyContent={"space-between"}
                  width={"100%"}
                  display={"flex"}
                >
                  <Stack
                    spacing={1}
                    direction={"row"}
                    display={"flex"}
                    alignItems={"center"}
                  >
                    <IconButton
                      disabled={item?.count === 1}
                      onClick={() => dispatch(decreaseItemQuantity(item))}
                    >
                      <SubtractIcon />
                    </IconButton>

                    <Typography>{item?.count}</Typography>
                    <IconButton
                      onClick={() => dispatch(increaseItemQuantity(item))}
                    >
                      <AdditionIcon />
                    </IconButton>
                  </Stack>
                  <Button
                    variant="text"
                    sx={{
                      color: "danger.main",
                      fontSize: "0.825rem",
                      padding: 0,
                      height: "max-content",
                    }}
                    onClick={() => dispatch(removeFromCart(item))}
                  >
                    Remove
                  </Button>
                </Box>
              </Stack>
            </Box>
            <Divider />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer anchor={"right"} open={isOpen} onClose={onClose}>
        <Typography variant="h3" padding={"1rem"}>
          Your Cart
        </Typography>

        {cartState.totalCount === 0 ? (
          <Typography width={400} padding={"1rem"} variant="h4">
            Cart is empty
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
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography>Total : {cartState?.totalCount} items</Typography>
            <Typography>${cartState?.totalPrice}</Typography>
          </Box>
          <Button variant="contained" fullWidth>
            Proceed to Checkout
          </Button>
        </Stack>
      </Drawer>
    </div>
  );
}
