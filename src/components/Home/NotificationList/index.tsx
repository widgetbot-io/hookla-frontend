import * as Styles from "./styles";
import type { NotificationProperties } from "@/components/common/Notification";
import React, { ComponentProps } from "react";
import { Notification } from "@/components/common/Notification";

interface Props
  extends ComponentProps<typeof Styles.NotificationListContainer> {}

export function NotificationList({ ...rest }: Props) {
  const notifications: NotificationProperties[] = [...Array(6)].map(
    (_, index) => ({
      title: `Test ${index + 1}`,
      content: "Test content",
      footer: "widgetbot-io/Charts:master",
      isDemo: true,
    }),
  );

  return (
    <Styles.NotificationListContainer {...rest}>
      <Styles.NotificationList>
        {notifications.map((notification, index) => (
          <li key={index}>
            <Notification {...notification} />
          </li>
        ))}
      </Styles.NotificationList>
    </Styles.NotificationListContainer>
  );
}
