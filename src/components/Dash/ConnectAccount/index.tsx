import * as Styles from "./styles";
import { Button } from "@/components/common/Button";
import Image from "next/image";

interface Props {
  connectText: string;
  brandName: string;
  logoUrl: string;
}

export function ConnectAccount({ connectText, brandName, logoUrl }: Props) {
  return (
    <Styles.Container>
      <Image src={logoUrl} alt="logo" width={64} height={64} />
      <Styles.Text>{connectText}</Styles.Text>
      <Button kind="primary">Connect {brandName}</Button>
    </Styles.Container>
  );
}
