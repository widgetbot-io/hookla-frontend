import { styled } from "panda/jsx";
import { Box } from "@/components/common/Box";
import { css } from "panda/css";

export const Notification = styled(Box, {
  base: {
    padding: "6",
    display: "flex",
    flexDirection: "column",
    gap: "2",
  },
});

export const NotificationSection = styled("div", {
  base: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "2",
    textStyle: "normal",
    color: "colorPalette.900",
  },
});

export const NotificationHeaderIcon = css({
  base: {
    width: "20px",
    height: "20px",
    borderRadius: "sm",
    backgroundColor: "colorPalette.700",
  },
});

export const NotificationFooterIcon = css({
  base: {
    width: "18px",
    height: "18px",
    borderRadius: "full",
    backgroundColor: "colorPalette.700",
  },
});
