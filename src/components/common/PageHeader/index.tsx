import * as Styles from "./styles";
import { BackButton } from "@/components/common/BackButton";
import Image from "next/image";

interface Props {
  title: string;
  subtitle?: string;
  hasBackButton?: boolean;
  backButtonUrl?: string;
  logoUrl?: string;
}

export function PageHeader({
  title,
  subtitle,
  backButtonUrl,
  hasBackButton,
  logoUrl,
}: Props) {
  return (
    <Styles.Container>
      <Styles.TextContainer>
        <Styles.Title hasBackButton={hasBackButton}>
          {logoUrl && <Image src={logoUrl} alt="" width={32} height={32} />}{" "}
          <Styles.TitleText>{title}</Styles.TitleText>
        </Styles.Title>
        {subtitle && <Styles.Subtitle>{subtitle}</Styles.Subtitle>}
      </Styles.TextContainer>
      {hasBackButton && <BackButton backPath={backButtonUrl} />}
    </Styles.Container>
  );
}
