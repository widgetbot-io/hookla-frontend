import { styled } from "panda/jsx";

export const SearchDocumentation = styled("input", {
  base: {
    padding:
      "token(spacing.4) token(spacing.4) token(spacing.4) token(spacing.10)",
    inputBorder: true,
    boxSizing: "border-box",
    backgroundColor: "input.bg",
    fontSize: "sm",
    lineHeight: "1",
    backgroundImage: "url('/search.svg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "token(spacing.4) center",
    outline: "none",
    color: "text.primary",

    _placeholder: {
      color: "input.placeholder",
    },
  },
});
