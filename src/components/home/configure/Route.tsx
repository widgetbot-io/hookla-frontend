import Image from "next/image";
import {styled} from "stitches-config";
import * as Common from "@/components/common";
import {RouteOption} from "./RouteOption";

const RouteSection = styled(Common.Box, {
  display: 'flex',
  marginTop: '32px',
});

const RouteGroup = styled(Common.Box, {
  flexGrow: 1,
});

export function Route() {
  return (
    <RouteSection>
      <RouteGroup css={{paddingRight: '32px'}}>
        <RouteOption />
      </RouteGroup>
      <Image src='/arrow_xl.svg' width={124} height={22} alt='Arrow' />
      <RouteGroup css={{paddingLeft: '32px'}} />
    </RouteSection>
  );
}