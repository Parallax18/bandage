import { useDisclosure } from "@/utils/use-disclosure";
import { Alert, Snackbar } from "@mui/material";
import React, { useEffect } from "react";

const CustomToast = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();

  useEffect(() => {
    console.log({ isOpen });
  }, []);

  const toast = ({ message }: { message: string }) => {
    onOpen();
    return (
      <Snackbar
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
        open={isOpen}
        onClose={onClose}
        style={{ zIndex: 9999 }} // Add a high z-index value
      >
        <Alert
          onClose={onClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%", color: "background.light" }}
        >
          {message}
        </Alert>
      </Snackbar>
    );
  };

  return toast;
};

export default CustomToast;
