import { Box } from "@/components/common/Box";
import { styled } from "panda/jsx";

export const SubmitSection = styled("section", {
  base: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
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
    display: "flex",
    flexDirection: "column",
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
