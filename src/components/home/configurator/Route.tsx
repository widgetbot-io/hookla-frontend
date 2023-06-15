import Image from "next/image";
import {styled} from "stitches-config";
import * as Common from "@/components/common";

const RouteSection = styled(Common.Box, {
  display: 'flex',
  marginTop: '32px',
});

const RouteBox = styled(Common.Box, {
  flexGrow: 1,
  background: 'red',
});

export function Route() {
  return (
    <RouteSection>
      <RouteBox css={{paddingRight: '32px'}} />
      <Image src='/arrow_xl.svg' width={124} height={22} alt='Arrow' />
      <RouteBox css={{paddingLeft: '32px'}} />
    </RouteSection>
  );
}