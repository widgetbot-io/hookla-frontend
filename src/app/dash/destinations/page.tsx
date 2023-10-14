import { PageHeader } from "@/components/Dash/PageHeader";
import {
  DestOrProviderList,
  DiscordDestination,
} from "@/components/Dash/DestinationOrProvider";

function Destinations() {
  return (
    <>
      <PageHeader
        title="Destinations"
        subtitle="Define your destinations for the WidgetBot webhook here."
      />
      <DestOrProviderList>
        <DiscordDestination />
      </DestOrProviderList>
    </>
  );
}

export default Destinations;
