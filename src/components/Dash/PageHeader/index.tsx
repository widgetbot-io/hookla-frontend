import * as Styles from "./styles";

interface Props {
  title: string;
  subtitle: string;
}

export function PageHeader({ title, subtitle }: Props) {
  return (
    <Styles.Container>
      <Styles.Title>{title}</Styles.Title>
      <Styles.Subtitle>{subtitle}</Styles.Subtitle>
    </Styles.Container>
  );
}
