import * as Styles from "@/components/home/Submit/styles";
import { token } from "panda/tokens";
import { Button } from "@/components/common/Button";

export function Submit() {
  return (
    <Styles.SubmitSection>
      <Styles.SubmitBoxContainer>
        <Styles.SubmitBox
          backgroundColor={token("colors.green.300")}
          foregroundColor={token("colors.green.400")}
        >
          <Styles.SubmitTitle>Ready to go?</Styles.SubmitTitle>
          <Button kind="callToAction">Proceed</Button>
        </Styles.SubmitBox>
      </Styles.SubmitBoxContainer>
    </Styles.SubmitSection>
  );
}
