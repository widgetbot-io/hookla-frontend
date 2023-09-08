import { styled } from "panda/jsx";

export const Container = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "1",
    borderBottom: "1px solid token(colors.neutral.300)",
    paddingBottom: "8",
    marginBottom: "8",
  },
});

export const Title = styled("p", {
  base: {
    fontSize: "2xl",
    color: "neutral.900",
  },
});

export const Subtitle = styled("p", {
  base: {
    color: "neutral.700",
    fontSize: "md",
  },
});
