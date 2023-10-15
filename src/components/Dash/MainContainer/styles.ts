import { styled } from "panda/jsx";
import { Panel } from "@/components/Dash/Panel";

export const MainContainer = styled("main", {
  base: {
    displayFlex: "column",
    alignItems: "center",
    marginBottom: "8",

    _before: {
      content: "''",
      position: "absolute",
      top: 0,
      width: "100%",
      height: "256px",
      backgroundColor: "green.500",
      backgroundImage: "url(/graph.svg)",
      zIndex: -1,
    },
  },
});

export const MainContent = styled("div", {
  base: {
    displayFlex: "column",
    justifyContent: "center",
    gap: "8",
    maxWidth: "homeMaxWidth",
    paddingTop: "14",
    paddingLeft: "paddingToMaxWidth",
    paddingRight: "paddingToMaxWidth",
    width: "100%",

    lg: {
      flexDirection: "row",
    },
  },
});

export const PageContent = styled(Panel, {
  base: {
    flex: "1 0 auto",
    displayFlex: "column",
  },
});
