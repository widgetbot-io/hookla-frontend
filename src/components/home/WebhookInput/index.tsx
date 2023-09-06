import { Box } from "@/components/common/Box";
import { token } from "panda/tokens";
import * as Styles from "./styles";

interface Props {}

function WebhookInput({}: Props) {
  return (
    <Box
      backgroundColor={token("colors.neutral.200")}
      foregroundColor={token("colors.neutral.100")}
    >
      <Styles.Input placeholder="Webhook URL" />
    </Box>
  );
}

export function WebhookInputSection() {
  return (
    <Styles.Container>
      <WebhookInput />
    </Styles.Container>
  );
}
