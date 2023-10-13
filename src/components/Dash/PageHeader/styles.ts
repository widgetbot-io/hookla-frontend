import { styled } from "panda/jsx";

export const Container = styled("div", {
  base: {
    display: "flex",
    borderBottom: "1px solid token(colors.neutral.300)",
    paddingBottom: "8",
    marginBottom: "8",
    justifyContent: "space-between",
  },
});

export const TextContainer = styled("div", {
  base: {
    display: "flex",
    gap: "1",
    flexDirection: "column",
  },
});

export const Title = styled("p", {
  base: {
    fontSize: "2xl",
    color: "neutral.900",
    display: "flex",
    flexDirection: "row",
    gap: "3",
    fontWeight: "500",
  },
  variants: {
    hasBackButton: {
      false: {
        justifyContent: "left",
      },
      true: {
        justifyContent: "center",
      },
    },
  },
});

export const Subtitle = styled("p", {
  base: {
    color: "neutral.700",
    fontSize: "md",
  },
});
