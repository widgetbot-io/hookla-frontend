import { Panel } from "@/components/Dash/Panel";
import { styled } from "panda/jsx";
import Link from "next/link";

export const Sidebar = styled(Panel, {
  base: {
    displayFlex: "column",
    gap: "6",
  },
});

export const Section = styled("div", {});

export const Label = styled("p", {
  base: {
    color: "text.secondary",
    fontSize: "sm",
    marginBottom: "2",
  },
});

export const Nav = styled("div", {
  base: {
    displayFlex: "column",
    gap: "2",
  },
});

export const NavLink = styled(Link, {
  base: {
    padding: "token(spacing.4) 64px token(spacing.4) token(spacing.4)",
    borderRadius: "lg",
    border: "1px solid token(colors.neutral.300)",
    backgroundColor: "input.bg",
    displayFlex: "row",
    alignItems: "center",
    gap: "2",
    colorPalette: "neutral",
    transition:
      "box-shadow 0.2s ease-in-out, background-position 0.2s ease-in-out",
    backgroundImage: "url(/arrow.svg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right token(spacing.4) center",
    userSelect: "none",
    color: "text.primary",

    _hover: {
      boxShadow: "md",
      borderColor: "neutral.700",
      backgroundPosition: "right token(spacing.3) center",
    },
  },

  variants: {
    isActive: {
      true: {
        colorPalette: "green",
        backgroundPosition: "right -100px center",

        _hover: {
          backgroundPosition: "right -100px center",
        },
      },
    },
  },
});

export const NavIcon = styled("div", {
  base: {
    width: "32px",
    height: "32px",
    borderRadius: "full",
    backgroundColor: "colorPalette.100",
    border: "1px solid token(colors.colorPalette.400)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "background-color 0.1s ease-in-out",
  },
});
