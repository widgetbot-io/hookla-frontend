import { styled } from "panda/jsx";

export const Input = styled("input", {
  base: {
    backgroundColor: "input.bg",
    inputBorder: true,
    padding: "token(spacing.2) token(spacing.4)",

    _placeholder: {
      color: "input.placeholder",
    },
  },
});
