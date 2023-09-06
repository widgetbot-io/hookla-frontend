import { styled } from "panda/jsx";

export const HeroContainer = styled("section", {
  base: {
    display: "flex",
    width: "100%",
    height: "700px",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "colorPalette.500",
    backgroundImage: "url(/graph.svg)",
  },
});

export const HeroContent = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
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
    padding: "8",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
});
