import { styled } from "panda/jsx";
import { css } from "panda/css";

export const RouteSection = styled("section", {
  base: {
    displayFlex: "row",
    width: "100%",
    justifyContent: "center",
  },
});

export const RouteSectionContent = styled("div", {
  base: {
    padding: "paddingToMaxWidth",
    displayFlex: "column",
    justifyContent: "center",
    width: "homeMaxWidth",
    gap: "14",

    lg: {
      flexDirection: "row",
    },
  },
});

export const ListContainer = styled("div", {
  base: {
    displayFlex: "column",
    gap: "8",
    flex: "1 0 auto",
  },
});

export const ListHeader = styled("div", {
  base: {
    displayFlex: "column",
  },
});

export const ListTitle = styled("p", {
  base: {
    fontSize: "4xl",
    color: "neutral.900",
  },
});

export const ListSubtitle = styled("p", {
  base: {
    fontSize: "md",
    color: "neutral.700",
  },
});

export const List = styled("ul", {
  base: {
    displayFlex: "column",
    gap: "2",
  },
});

export const Arrow = css({
  hideBelow: "md",
});
