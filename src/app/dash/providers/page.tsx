import { PageHeader } from "@/components/common/PageHeader";
import { GraphNodeList, GithubProvider } from "@/components/Dash/GraphNode";

function Providers() {
  return (
    <>
      <PageHeader
        title="Providers"
        subtitle="Define your providers for the WidgetBot webhook here."
      />
      <GraphNodeList>
        <GithubProvider />
      </GraphNodeList>
    </>
  );
}

export default Providers;
