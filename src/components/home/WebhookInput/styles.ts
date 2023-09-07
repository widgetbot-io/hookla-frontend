import { styled } from "panda/jsx";

export const Input = styled("input", {
  base: {
    fontSize: "3xl",
    padding: "8",
    border: "none",
    borderRadius: "var(--box-border-radius)",
    outline: "none",
    backgroundImage: "url('/arrow_large.svg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right token(spacing.8) center",
    backgroundSize: "65px 22px",
    maxWidth: "90vw",

    _placeholder: {
      color: "neutral.500",
    },
  },
});

export const Container = styled("div", {
  base: {
    backgroundColor: "neutral.200",
    display: "flex",
    justifyContent: "center",
    borderBottom: "1px solid token(colors.neutral.300)",
    marginBottom: "50px",

    [`& > *`]: {
      translate: "0 50%",
    },
  },
});
