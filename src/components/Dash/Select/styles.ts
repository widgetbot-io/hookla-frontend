import { styled } from "panda/jsx";
import * as Select from "@radix-ui/react-select";

export const Container = styled("div", {
  base: {
    position: "relative",
  },
});

export const Trigger = styled(Select.Trigger, {
  base: {
    colorPalette: "neutral",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "3",
    minWidth: "250px",
    border: "1px solid token(colors.neutral.400)",
    borderRadius: "lg",
    gap: "2",
    cursor: "pointer",
    backgroundColor: "neutral.0",
  },
});

export const Caret = styled(Select.Icon, {
  base: {
    width: "12px",
    height: "20px",
    marginLeft: "auto",
  },
});

export const Content = styled(Select.Content, {
  base: {
    colorPalette: "neutral",
    backgroundColor: "neutral.100",
    width: "100%",
    border: "1px solid token(colors.neutral.400)",
    borderRadius: "lg",
    padding: "2",
    zIndex: "popup",
    boxShadow: "md",
  },
});

export const Viewport = styled(Select.Viewport, {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "2",
  },
});

export const Item = styled(Select.SelectItem, {
  base: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "4",
    gap: "2",
    cursor: "pointer",
    outline: "none",
    borderRadius: "md",

    '&[data-state="checked"]': {
      colorPalette: "blue",
      backgroundColor: "colorPalette.200",
    },

    '&[data-highlighted]:not([data-state="checked"])': {
      backgroundColor: "colorPalette.200",

      [`& .arrow`]: {
        translate: "4px 0",
      },
    },
  },
});
