import { styled } from "panda/jsx";

export const SearchDocumentation = styled("input", {
  base: {
    padding:
      "token(spacing.4) token(spacing.4) token(spacing.4) token(spacing.10)",
    borderRadius: "lg",
    borderWidth: "1px",
    borderColor: "neutral.500",
    boxSizing: "border-box",
    backgroundColor: "neutral.100",
    fontSize: "sm",
    lineHeight: "1",
    backgroundImage: "url('/search.svg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "token(spacing.4) center",
    outline: "none",

    _placeholder: {
      color: "neutral.500",
    },
  },
});
