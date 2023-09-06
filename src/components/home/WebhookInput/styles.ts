import { styled } from "panda/jsx";

export const Input = styled("input", {
  base: {
    fontSize: "3xl",
    padding: "8",
    border: "none",
    borderRadius: "var(--box-border-radius)",
    outline: "none",
    backgroundImage: "url('/arrow.svg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 1rem center",
    backgroundSize: "65px 22px",
    maxWidth: "90vw",
  },
});

export const Container = styled("div", {
  base: {
    backgroundColor: "neutral.200",
    display: "flex",
    justifyContent: "center",
    borderBottom: "1px solid token(colors.neutral.300)",

    [`& > *`]: {
      translate: "0 50%",
    },
  },
});
