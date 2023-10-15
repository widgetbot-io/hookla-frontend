import { styled } from "panda/jsx";

export const TeamMember = styled("li", {
  base: {
    inputBorder: true,
    listStyle: "none",
    paddingX: "8",
    paddingY: "4",
    backgroundColor: "input.bg",
    displayFlex: "column",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "2",

    md: {
      flexDirection: "row",
    },
  },
});

export const Controls = styled("div", {
  base: {
    displayFlex: "row",
    gap: "2",
  },
});
