import { useState } from "react";

export const useDisclosure = () => {
  const [state, setState] = useState(false);

  const onOpen = () => setState(true);
  const isOpen = state;
  const onClose = () => setState(false);
  const toggle = () => setState((prev) => !prev);

  return { onOpen, isOpen, onClose, toggle };
};
