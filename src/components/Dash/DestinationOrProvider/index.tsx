"use client";

import * as Styles from "./styles";
import Image from "next/image";

export { DestOrProviderList } from "./styles";

interface Props {
  brandName: string;
  logoUrl: string;
  destination: string;
}

export function DestinationOrProvider({
  brandName,
  logoUrl,
  destination,
}: Props) {
  return (
    <Styles.Container href={`/dash/providers/${destination}`}>
      <Styles.LogoContainer>
        <Image src={logoUrl} width={48} height={48} alt={`${brandName} logo`} />
      </Styles.LogoContainer>
      <Styles.BrandName>{brandName}</Styles.BrandName>
    </Styles.Container>
  );
}

export function GithubProvider() {
  return (
    <DestinationOrProvider
      brandName="GitHub"
      logoUrl="/logo-github.svg"
      destination="github"
    />
  );
}
