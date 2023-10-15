import * as Styles from "./styles";
import { ComponentPropsWithRef } from "react";

interface Props extends ComponentPropsWithRef<"input"> {
  label?: string;
}

export function TextInput({ label, ...rest }: Props) {
  return (
    <Styles.InputLabel>
      {label}
      <Styles.Input type="text" {...rest} />
    </Styles.InputLabel>
  );
}
