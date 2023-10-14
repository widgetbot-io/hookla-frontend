import * as ContentStyles from "../DestinationOrProvider";
import { Button } from "@/components/common/Button";
import Image from "next/image";

interface Props {
  connectText: string;
  brandName: string;
  logoUrl: string;
  onConnect(): void;
}

export function ConnectAccount({
  connectText,
  brandName,
  logoUrl,
  onConnect,
}: Props) {
  return (
    <ContentStyles.ContentContainer>
      <Image src={logoUrl} alt="logo" width={64} height={64} />
      <ContentStyles.ContentText>{connectText}</ContentStyles.ContentText>
      <Button kind="primary" onClick={onConnect}>
        Connect {brandName}
      </Button>
    </ContentStyles.ContentContainer>
  );
}
