import { styled } from "panda/jsx";
import { css } from "panda/css";

export const Navbar = styled("nav", {
  base: {
    padding:
      "token(spacing.6) token(spacing.4) token(spacing.4) token(spacing.4)",
    displayFlex: "row",
    gap: "4",
    flexWrap: "wrap",
    justifyContent: "space-between",
    maxWidth: "homeMaxWidth",
    flexGrow: "1",

    sm: {
      flexWrap: "unset",
      justifyContent: "center",
      padding: "token(spacing.6) token(spacing.paddingToMaxWidth)",
    },
  },
});

export const NavbarContainer = styled("div", {
  base: {
    position: "sticky",
    top: 0,
    zIndex: "nav",
    backgroundColor: "neutral.100",
    displayFlex: "row",
    justifyContent: "center",
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
    displayFlex: "column",
    gap: "0.5",
  },
});

export const Title = styled("h1", {
  base: {
    textStyle: "normal",
    color: "text.primary",
  },
});

export const Slogan = styled("p", {
  base: {
    textStyle: "normal",
    color: "magenta.400",
    textWrap: "nowrap",

    hideBelow: "md",
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
    displayFlex: "column",
    gap: "0.5",
    hideBelow: "sm",
  },
});

export const WelcomeUsername = styled("p", {
  base: {
    textStyle: "normal",
    color: "text.primary",
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
    displayFlex: "column",
    alignItems: "stretch",

    sm: {
      order: 1,
      flexBasis: "min(800px, 100%)",
      alignItems: "start",
    },
  },
});
