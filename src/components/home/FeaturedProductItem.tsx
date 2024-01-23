import { calculateDiscount } from "@/utils/calculate-discount";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

interface IFeaturedProductItem extends IProduct {
  isCentered?: boolean;
}

const FeaturedProductItem = (props: IFeaturedProductItem) => {
  const router = useRouter();
  const pathname = usePathname();
  const handleClick = () => {
    pathname.includes("products") &&
      scroll.scrollTo(`/products/${props.id}`, {
        duration: 100,
        offset: -50,
      });

    setTimeout(
      () => {
        router.push(`/products/${props.id}`);
      },
      pathname.includes("products") ? 500 : 0
    );
  };

  return (
    <ScrollLink
      style={{ cursor: "pointer" }}
      to={`/products/${props.id}`}
      onClick={handleClick}
      smooth
      offset={-50}
      duration={500}
    >
      <Box position={"relative"} height={"14.875rem"}>
        <Image
          src={props?.thumbnail}
          alt={props?.title}
          loading="lazy"
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Stack
        spacing={"0.62rem"}
        height={"10.125rem"}
        padding={"1.56rem"}
        paddingBottom={"2.19rem"}
        textAlign={props?.isCentered ? "center" : "left"}
        bgcolor={"background.light"}
      >
        <Typography variant="h5">{props?.title}</Typography>
        <Typography
          color={"text.secondary"}
          sx={{ textTransform: "capitalize" }}
        >
          {props?.category}
        </Typography>
        <Stack
          paddingY={"0.31rem"}
          direction={"row"}
          spacing={"0.31rem"}
          justifyContent={props?.isCentered ? "center" : "flex-start"}
          alignItems={"center"}
        >
          <Typography variant="h5" color={"text.muted"}>
            ${props?.price}
          </Typography>
          <Typography variant="h5" color={"secondary.main"}>
            $
            {calculateDiscount({
              price: props?.price,
              discountPercentage: props?.discountPercentage,
            })}
          </Typography>
        </Stack>
      </Stack>
    </ScrollLink>
  );
};

export default FeaturedProductItem;
