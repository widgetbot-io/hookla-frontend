import { styled } from "panda/jsx";

export const BackButton = styled("button", {
  base: {
    borderColor: "neutral.300",
    borderStyle: "solid",
    borderWidth: "1px",
    backgroundImage: "url(/back-arrow.svg)",
    borderRadius: "full",
    width: "40px",
    height: "40px",
    backgroundColor: "neutral.0",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "60%",
    cursor: "pointer",
    transition: "border-color 300ms",

    "&:hover": {
      borderColor: "neutral.900",
    },
  },
});
