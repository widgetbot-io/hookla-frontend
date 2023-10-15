import { styled } from "panda/jsx";

export const NotificationListContainer = styled("div", {
  base: {
    position: "relative",
    width: "100%",
    height: "100%",
    padding: "4",

    maxHeight: "512px",
    overflow: "hidden",

    _before: {
      content: "''",
      position: "absolute",
      backgroundColor: "colorPalette.400",

      left: 0,
      bottom: 0,

      width: "100%",
      height: "192px",
    },

    sm: {
      maxHeight: "unset",
    },
  },

  variants: {
    placement: {
      left: {
        sm: {
          padding:
            "token(spacing.4) token(spacing.0) token(spacing.4) token(spacing.paddingToMaxWidth)",

          _before: {
            left: "unset",
            right: 0,
            height: "100%",
            width: "50%",
          },
        },
      },
      right: {
        sm: {
          padding:
            "token(spacing.4) token(spacing.paddingToMaxWidth) token(spacing.4) token(spacing.0)",

          _before: {
            height: "100%",
            width: "50%",
          },
        },
      },
    },
  },
});

export const NotificationList = styled("ul", {
  base: {
    displayFlex: "column",
    gap: "4",
    translate: "0 -10%",
  },
});
