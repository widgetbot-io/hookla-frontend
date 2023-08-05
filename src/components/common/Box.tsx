import {styled, theme} from 'stitches-config';
import {ReactNode} from "react";
import {CSS} from "@stitches/react";

type BoxProps = {
  stacked?: boolean;
  children: ReactNode;
  css: CSS;
  inline?: boolean;
}

const BoxDefault = styled('div', {
  border: '1px solid',
  borderColor: theme.colors.neutral900,
  borderRadius: theme.radii.medium,
  padding: '32px',
});

const BoxStacked = styled(BoxDefault, {
  background: '$$background',
  padding: 0,
  margin: '4px 0 0 4px',
  borderRadius: theme.radii.large,
});

const BoxStackedContent = styled(BoxDefault, {
  variants: {
    inline: {
      true: {
        padding: 0,
      },
    },
  },

  background: '$$foreground',
  transform: 'translate(-4px, -4px)',
});

export function Box({stacked, children, css, inline}: BoxProps) {
  if (stacked === true) return (
    <BoxStacked css={css}>
      <BoxStackedContent inline={inline}>
        {children}
      </BoxStackedContent>
    </BoxStacked>
  )

  return (
    <BoxDefault css={css}>
      {children}
    </BoxDefault>
  )
}