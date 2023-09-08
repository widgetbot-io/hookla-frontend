import * as Styles from "./styles";
import { token } from "panda/tokens";
import { Box } from "@/components/common/Box";
import { useId } from "react";

interface Props {
  name: string;
  description: string;
  logoUrl: string;
}

export function Route({ name, description, logoUrl }: Props) {
  const id = useId();

  return (
    <Box
      backgroundColor={token("colors.magenta.300")}
      foregroundColor={token("colors.magenta.400")}
    >
      <Styles.Route htmlFor={id}>
        {/* todo: switch to next's Image */}
        <img
          src={logoUrl}
          alt={`${name} logo`}
          width={64}
          height={64}
          className={Styles.RouteLogo}
        />
        <Styles.RouteInfo>
          <Styles.RouteName>{name}</Styles.RouteName>
          <Styles.RouteDescription>{description}</Styles.RouteDescription>
        </Styles.RouteInfo>
        <Styles.Checkbox type="checkbox" id={id} />
      </Styles.Route>
    </Box>
  );
}
