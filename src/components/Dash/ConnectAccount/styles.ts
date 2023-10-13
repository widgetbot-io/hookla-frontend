import { styled } from "panda/jsx";

export const Container = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "4",
    justifyContent: "center",
    alignItems: "center",
    flex: "1 0 auto",
  },
});

export const Text = styled("p", {
  base: {
    fontSize: "md",
    fontWeight: "500",
  },
});
