import { PageHeader } from "@/components/Dash/PageHeader";
import {
  DestOrProviderList,
  GithubProvider,
} from "@/components/Dash/DestinationOrProvider";

function Providers() {
  return (
    <>
      <PageHeader
        title="Providers"
        subtitle="Define your providers for the WidgetBot webhook here."
      />
      <DestOrProviderList>
        <GithubProvider />
      </DestOrProviderList>
    </>
  );
}

export default Providers;
