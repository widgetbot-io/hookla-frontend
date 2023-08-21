import { styled } from "panda/jsx";
import { css } from "panda/css";

export const Navbar = styled("nav", {
  base: {
    position: "sticky",
    top: 0,
    backgroundColor: "neutral.100",
    paddingX: "4",
    paddingTop: "6",
    paddingBottom: "4",
    display: "flex",
    flexDirection: "row",
    gap: "4",
    flexWrap: "wrap",
    justifyContent: "space-between",

    sm: {
      flexWrap: "unset",
      justifyContent: "center",
      paddingX: "8",
      paddingY: "6",
    },
  },
});

export const LogoContainer = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    gap: "4",
    flexShrink: "0",
  },
});

export const LogoText = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5",
  },
});

export const Title = styled("h1", {
  base: {
    textStyle: "normal",
  },
});

export const Slogan = styled("p", {
  base: {
    textStyle: "normal",
    color: "magenta.400",
    textWrap: "nowrap",

    hideBelow: "sm",
  },
});

export const User = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    flexShrink: "0",
    gap: "3",

    order: { base: 1, sm: 2 },
  },
});

export const UserAvatar = css({
  base: {
    borderRadius: "full",
  },
});

export const UserText = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5",
    hideBelow: "sm",
  },
});

export const WelcomeUsername = styled("p", {
  base: {
    textStyle: "normal",
  },
});

export const LogOut = styled("p", {
  base: {
    textStyle: "normal",
    color: "red.500",
  },
});

export const SearchContainer = styled("div", {
  base: {
    boxSizing: "border-box",
    order: 2,
    flexBasis: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",

    sm: {
      order: 1,
      flexBasis: "min(800px, 100%)",
      alignItems: "start",
    },
  },
});