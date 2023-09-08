import { styled } from "panda/jsx";
import { css } from "panda/css";

export const Route = styled("label", {
  base: {
    padding: "8",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "4",
    cursor: "pointer",
    userSelect: "none",
  },
});

export const RouteInfo = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    gap: "1",
    flexBasis: "100%",
  },
});

export const RouteName = styled("p", {
  base: {
    fontSize: "xl",
    color: "magenta.900",
  },
});

export const RouteDescription = styled("p", {
  base: {
    color: "magenta.800",
  },
});

export const Checkbox = styled("input", {
  base: {
    appearance: "none",
    width: "18px",
    height: "18px",
    border: "1px solid token(colors.magenta.900)",
    borderRadius: "full",
    flex: "1 0 auto",

    _before: {
      content: "''",
      display: "block",
      width: "100%",
      height: "100%",
      backgroundColor: "green.400",
      borderRadius: "full",
      scale: "0",
      transition: "scale 0.1s ease-in-out 0s",
    },

    _checked: {
      _before: {
        scale: "1",
      },
    },
  },
});

export const RouteLogo = css({
  base: {
    borderRadius: "full",
    backgroundColor: "magenta.300",
    border: "1px solid token(colors.neutral.900)",
    width: "64px",
    height: "64px",
  },
});
