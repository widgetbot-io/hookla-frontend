import { styled } from "panda/jsx";

export const HeroContainer = styled("section", {
  base: {
    displayFlex: "row",
    width: "100%",
    height: "700px",
    justifyContent: "center",
    backgroundColor: "colorPalette.500",
    backgroundImage: "url(/graph.svg)",
  },
});

export const HeroContent = styled("div", {
  base: {
    displayFlex: "column",
    alignItems: "center",
    maxWidth: "homeMaxWidth",

    sm: {
      flexDirection: "row",
    },
  },
});

export const HeroText = styled("div", {
  base: {
    backgroundColor: "colorPalette.400",
    textStyle: "hero",
    color: "colorPalette.900",
    padding: "paddingToMaxWidth",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});
