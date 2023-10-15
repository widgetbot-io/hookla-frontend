import { Box } from "@/components/common/Box";
import { styled } from "panda/jsx";

export const SubmitSection = styled("section", {
  base: {
    displayFlex: "row",
    width: "100%",
    justifyContent: "center",
  },
});

export const SubmitBoxContainer = styled("div", {
  base: {
    padding: "paddingToMaxWidth",
    paddingTop: "0",
    width: "homeMaxWidth",
  },
});

export const SubmitBox = styled(Box, {
  base: {
    padding: "8",
    displayFlex: "column",
    gap: "2",
    alignItems: "flex-start",

    sm: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
});

export const SubmitTitle = styled("p", {
  base: {
    fontSize: "2xl",
    color: "green.800",
  },
});
