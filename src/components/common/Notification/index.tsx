import * as Styles from "./styles";
import { token } from "panda/tokens";

export interface NotificationProperties {
  isDemo?: boolean;
  title: string;
  content: string;
  footer: string;
}

interface Props extends NotificationProperties {
  className?: string;
}

export function Notification({
  className,
  title,
  content,
  footer,
  isDemo = false,
}: Props) {
  return (
    <Styles.Notification
      foregroundColor={token("colors.colorPalette.400")}
      backgroundColor={token("colors.colorPalette.300")}
      backgroundProps={{
        className,
      }}
    >
      <Styles.NotificationSection>
        {isDemo ? (
          <div className={Styles.NotificationHeaderIcon} />
        ) : (
          <div className={Styles.NotificationHeaderIcon} />
        )}
        <p>{title}</p>
      </Styles.NotificationSection>
      <Styles.NotificationSection>
        <p>{content}</p>
      </Styles.NotificationSection>
      <Styles.NotificationSection>
        {isDemo ? (
          <div className={Styles.NotificationFooterIcon} />
        ) : (
          <div className={Styles.NotificationFooterIcon} />
        )}
        <p>{footer}</p>
      </Styles.NotificationSection>
    </Styles.Notification>
  );
}
