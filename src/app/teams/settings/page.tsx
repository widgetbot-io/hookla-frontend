import { PageHeader } from "@/components/common/PageHeader";
import { TextInput } from "@/components/common/TextInput";
import { Button } from "@/components/common/Button";
import { PageFooter } from "@/components/common/PageFooter";

function Settings() {
  return (
    <>
      <PageHeader title="Settings" subtitle="Configure your team." />
      <TextInput label="Team name" placeholder="Enter team name" />
      <PageFooter>
        <Button kind="danger">Delete team</Button>
      </PageFooter>
    </>
  );
}

export default Settings;
