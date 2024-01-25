import { Skeleton } from "@mui/material";
import React from "react";

const LoaderItem = ({
  children,
  isLoading,
}: {
  children: React.ReactNode;
  isLoading: boolean;
}) => {
  return (
    <>
      {isLoading && (
        <Skeleton animation={"wave"} height={"100%"} width={"100%"} />
      )}
      {!isLoading && children}
    </>
  );
};

export default LoaderItem;
