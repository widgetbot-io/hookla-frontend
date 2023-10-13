import { styled } from "panda/jsx";

export const Button = styled("button", {
  base: {
    cursor: "pointer",
  },
  variants: {
    kind: {
      callToAction: {
        backgroundColor: "neutral.900",
        color: "neutral.100",
        padding:
          "token(spacing.4) token(spacing.16) token(spacing.4) token(spacing.6)",
        border: "1px solid token(colors.neutral.900)",
        borderRadius: "lg",
        boxSizing: "border-box",
        textStyle: "normal",
        backgroundImage: "url(/arrow_white.svg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right token(spacing.6) center",
      },
      primary: {
        backgroundColor: "buttons.primary",
        color: "neutral.100",
        padding: "token(spacing.2) token(spacing.4)",
        borderRadius: "lg",
        textStyle: "button",
      },
    },
  },
});
