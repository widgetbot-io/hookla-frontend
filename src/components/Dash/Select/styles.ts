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
    displayFlex: "row",
    alignItems: "center",
    minWidth: "200px",
    inputBorder: true,
    borderRadius: "input",
    gap: "2",
    cursor: "pointer",
    backgroundColor: "input.bg",
  },
  variants: {
    size: {
      sm: {
        paddingY: "1",
        paddingLeft: "3",
        paddingRight: "2",
      },
      md: {
        padding: "3",
      },
    },
  },
  defaultVariants: {
    size: "md",
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
    border: "1px solid token(colors.borders.normal)",
    borderRadius: "input",
    gap: "2",
    padding: "2",
    zIndex: "popup",
    boxShadow: "md",
  },
});

export const Viewport = styled(Select.Viewport, {
  base: {
    displayFlex: "column",
    gap: "2",
  },
});

export const Item = styled(Select.SelectItem, {
  base: {
    displayFlex: "row",
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
