import { PageHeader } from "@/components/common/PageHeader";
import { GraphNodeList, DiscordDestination } from "@/components/Dash/GraphNode";

function Destinations() {
  return (
    <>
      <PageHeader
        title="Destinations"
        subtitle="Define your destinations for the WidgetBot webhook here."
      />
      <GraphNodeList>
        <DiscordDestination />
      </GraphNodeList>
    </>
  );
}

export default Destinations;
