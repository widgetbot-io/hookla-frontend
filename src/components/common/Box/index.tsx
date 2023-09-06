import React, { type ComponentPropsWithoutRef, ReactNode } from "react";
import * as Styles from "./styles";

type Props = {
  className?: string;
  children?: ReactNode;
  backgroundColor: string;
  foregroundColor: string;
  backgroundProps?: ComponentPropsWithoutRef<typeof Styles.BoxBackground>;
};

export function Box({
  backgroundColor,
  foregroundColor,
  backgroundProps = {},
  className,
  children,
}: Props) {
  return (
    <Styles.BoxBackground
      {...backgroundProps}
      style={{
        ...backgroundProps.style,
        // @ts-expect-error TS2322: Type 'string' is not assignable to type 'CSSProperties'.
        "--box-background-color": backgroundColor,
        "--box-foreground-color": foregroundColor,
      }}
    >
      <Styles.BoxForeground
        className={className}
        style={{
          backgroundColor: foregroundColor,
        }}
      >
        {children}
      </Styles.BoxForeground>
    </Styles.BoxBackground>
  );
}
