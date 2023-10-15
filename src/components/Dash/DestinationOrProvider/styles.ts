import { styled } from "panda/jsx";
import Link from "next/link";

export const Container = styled(Link, {
  base: {
    border: "1px solid token(colors.neutral.300)",
    borderRadius: "lg",
    backgroundColor: "input.bg",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    padding: "8",
    alignItems: "center",
    gap: "4",
    cursor: "pointer",

    _hover: {
      borderColor: "borders.hover",
    },
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
    color: "text.primary",
  },
});

export const DestOrProviderList = styled("ul", {
  base: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export const ContentContainer = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "4",
    justifyContent: "center",
    alignItems: "center",
    flex: "1 0 auto",
  },
});

export const ContentText = styled("p", {
  base: {
    fontSize: "md",
    fontWeight: "500",
    maxWidth: "60%",
    textWrap: "wrap",
    textAlign: "center",
    color: "text.primary",
  },
});
