"use client";

import * as Styles from "./styles";
import Image from "next/image";

export { DestOrProviderList, ContentContainer, ContentText } from "./styles";

interface Props {
  brandName: string;
  logoUrl: string;
  destination: string;
  group: "destinations" | "providers";
}

export function DestinationOrProvider({
  brandName,
  logoUrl,
  destination,
  group,
}: Props) {
  return (
    <Styles.Container href={`/dash/${group}/${destination}`}>
      <Styles.LogoContainer>
        <Image src={logoUrl} width={32} height={32} alt={`${brandName} logo`} />
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
      group="providers"
    />
  );
}

export function DiscordDestination() {
  return (
    <DestinationOrProvider
      brandName="Discord"
      logoUrl="/logo-discord.svg"
      destination="discord"
      group="destinations"
    />
  );
}
