import * as Styles from "./styles";
import { Route } from "@/components/common/Route";
import Image from "next/image";

function RoutePanel({ type }: { type: "dest" | "src" }) {
  return (
    <Styles.ListContainer>
      <Styles.ListHeader>
        <Styles.ListTitle>
          {type === "src"
            ? "Select your providers."
            : "Select your destinations"}
        </Styles.ListTitle>
        <Styles.ListSubtitle>
          {type === "src"
            ? "Description of what a provider is."
            : "Description of what a destination is."}
        </Styles.ListSubtitle>
      </Styles.ListHeader>
      <Styles.List>
        {[...Array(4)].map((_, index) => (
          <li key={index}>
            <Route
              name={type === "src" ? "Cheems" : "Roingus"}
              description={
                type === "src"
                  ? "professional funny dog"
                  : "coolest rodent on the block"
              }
              logoUrl={`https://cdn.discordapp.com/emojis/${
                type === "src" ? "698964060770926684" : "873144625278382110"
              }.png?size=64`}
            />
          </li>
        ))}
      </Styles.List>
    </Styles.ListContainer>
  );
}

export function RouteList() {
  return (
    <Styles.RouteSection>
      <Styles.RouteSectionContent>
        <RoutePanel type="src" />
        <Image
          src="arrow_xlarge.svg"
          alt="arrow"
          width={124}
          height={22}
          className={Styles.Arrow}
        />
        <RoutePanel type="dest" />
      </Styles.RouteSectionContent>
    </Styles.RouteSection>
  );
}
