import { styled } from "panda/jsx";

export const BoxBackground = styled("div", {
  base: {
    "--box-border-radius": "token(radii.lg)",
    marginLeft: "token(spacing.1)",
    marginTop: "token(spacing.1)",
    borderWidth: "1px",
    borderColor: "neutral.900",
    borderRadius: "var(--box-border-radius)",
    backgroundColor: "var(--box-background-color)",
    position: "relative",
    zIndex: 1,
  },
});

export const BoxForeground = styled("div", {
  base: {
    translate: `calc(-1 * token(spacing.1)) calc(-1 * token(spacing.1))`,
    borderWidth: "1px",
    borderColor: "neutral.900",
    borderRadius: "lg",
    backgroundColor: "var(--box-foreground-color)",
  },
});
