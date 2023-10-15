import * as Styles from "./styles";
import { ComponentPropsWithRef } from "react";

interface Props extends ComponentPropsWithRef<"input"> {}

export function TextInput({ ...rest }: Props) {
  return <Styles.Input type="text" {...rest} />;
}
