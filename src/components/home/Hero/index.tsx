import { NotificationList } from "@/components/home/NotificationList";
import * as Styles from "./styles";
import { css } from "panda/css";

const colorPalette = css({ colorPalette: "green" });

export function Hero() {
  return (
    <Styles.HeroContainer className={colorPalette}>
      <Styles.HeroContent>
        <NotificationList placement="left" />
        <Styles.HeroText>Keep your community informed</Styles.HeroText>
        <NotificationList
          className={css({ hideBelow: "md" })}
          placement="right"
        />
      </Styles.HeroContent>
    </Styles.HeroContainer>
  );
}
