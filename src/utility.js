import { MACHINES } from "./machines-data";

export const getButtonStyle = (activeButton, buttonText, bgColor) => {
  return {
    background: bgColor,
    boxShadow:
      buttonText === activeButton
        ? "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px"
        : "none",
  };
};

export const getFilteredMachines = (activeButton) => {
  return MACHINES.filter((machine) => machine.status === activeButton);
};
