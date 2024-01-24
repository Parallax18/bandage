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

export default function CartDrawer({ isOpen, onClose }) {
  const list = () => (
    <Box
      sx={{
        width: 400,
        paddingBottom: "1rem",
        overflowY: "scroll",
      }}
    >
      <List>
        {[
          "Inbox",
          "Starred",
          "Send email",
          "Drafts",
          "Inbox",
          "Starred",
          "Send email",
          "Drafts",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <Box display={"flex"} width={"100%"} padding={"1rem"} gap={"1rem"}>
              <Image src={FeaturedPostImageOne} width={70} height={80} alt="" />
              <Stack
                justifyContent={"space-between"}
                width={"100%"}
                spacing={1}
              >
                <Stack>
                  <Typography>{text}</Typography>
                  <Typography>$9,00</Typography>
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
                    <IconButton>
                      <SubtractIcon />
                    </IconButton>

                    <Typography>4</Typography>
                    <IconButton>
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
        {list()}

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
            <Typography>Total 10 items</Typography>
            <Typography>$900</Typography>
          </Box>
          <Button variant="contained" fullWidth>
            Proceed to Checkout
          </Button>
        </Stack>
      </Drawer>
    </div>
  );
}
