import { styled } from "panda/jsx";
import Link from "next/link";

export const BackButton = styled(Link, {
  base: {
    borderColor: "neutral.300",
    borderStyle: "solid",
    borderWidth: "1px",
    backgroundImage: "url(/back-arrow.svg)",
    borderRadius: "full",
    width: "40px",
    height: "40px",
    backgroundColor: "input.bg",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "60%",
    cursor: "pointer",
    transition: "border-color token(durations.fast)",

    "&:hover": {
      borderColor: "neutral.900",
    },
  },
});
