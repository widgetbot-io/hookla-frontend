import * as ContentStyles from "@/components/Dash/DestinationOrProvider";
import Image from "next/image";
import { ReactNode } from "react";

interface Props {
  setUpText: string;
  logoUrl: string;
  children: ReactNode;
}

export function SetUp({ setUpText, logoUrl, children }: Props) {
  return (
    <ContentStyles.ContentContainer>
      <Image src={logoUrl} alt="logo" width={64} height={64} />
      <ContentStyles.ContentText>{setUpText}</ContentStyles.ContentText>
      {children}
    </ContentStyles.ContentContainer>
  );
}
