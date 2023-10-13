import { PageHeader } from "@/components/Dash/PageHeader";
import { ConnectAccount } from "@/components/Dash/ConnectAccount";

function GitHubProvider() {
  return (
    <>
      <PageHeader title="GitHub" logoUrl="/logo-github.svg" hasBackButton />
      <ConnectAccount
        connectText="Please connect GitHub to get started."
        brandName="GitHub"
        logoUrl="/logo-github.svg"
      />
    </>
  );
}

export default GitHubProvider;
