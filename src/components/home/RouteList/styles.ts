import { styled } from "panda/jsx";
import { css } from "panda/css";

export const RouteSection = styled("section", {
  base: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
  },
});

export const RouteSectionContent = styled("div", {
  base: {
    padding: "8",
    display: "flex",
    flexDirection: "column",
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
    display: "flex",
    flexDirection: "column",
    gap: "8",
    flex: "1 0 auto",
  },
});

export const ListHeader = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
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
    display: "flex",
    flexDirection: "column",
    gap: "2",
  },
});

export const Arrow = css({
  hideBelow: "md",
});
