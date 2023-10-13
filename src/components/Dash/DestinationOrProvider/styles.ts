import { styled } from "panda/jsx";
import Link from "next/link";

export const Container = styled(Link, {
  base: {
    border: "1px solid token(colors.neutral.300)",
    borderRadius: "lg",
    backgroundColor: "neutral.0",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    padding: "8",
    color: "neutral.900",
    alignItems: "center",
    gap: "4",
    cursor: "pointer",
  },
});

export const LogoContainer = styled("div", {
  base: {
    width: "64px",
    height: "64px",
    backgroundColor: "grey.200",
    borderRadius: "full",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const BrandName = styled("p", {
  base: {
    textStyle: "normal",
  },
});

export const DestOrProviderList = styled("ul", {
  base: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});