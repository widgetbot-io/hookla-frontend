'use client'

import {useState} from 'react';
import {styled, theme} from "stitches-config";
import Link from "next/link";
import {Input} from "@/components/common/Input";

const SearchWrap = styled('div', {
  position: 'relative',
  flexGrow: 1,
});

const SearchResults = styled('div', {
  position: 'absolute',
  top: '49px',
  left: '16px',
  borderBottomLeftRadius: theme.radii.medium,
  borderBottomRightRadius: theme.radii.medium,
  background: theme.colors.neutral100,
  border: '1px solid',
  borderColor: theme.colors.neutral300,
  maxWidth: '512px',
  width: '100vw',
  borderTopColor: theme.colors.neutral500,

  '& > a': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textDecoration: 'none',
    color: theme.colors.neutral700,
    padding: '16px',

    '&:not(:last-child)': {
      borderBottom: '1px solid',
      borderColor: theme.colors.neutral200,
    },

    '&::after': {
      content: '',
      display: 'block',
      width: '32px',
      height: '12px',
      backgroundImage: 'url(/sidebar_arrow.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      marginLeft: '16px',
    }
  }
});

export function SearchDocumentation() {
  const [display, setDisplay] = useState(false);

  return (
    <SearchWrap>
      {display &&
          <SearchResults>
              <Link href='/'>How to do x cool thing with Hookla</Link>
              <Link href='/'>How to do x cool thing with Hookla</Link>
              <Link href='/'>How to do x cool thing with Hookla</Link>
          </SearchResults>
      }
      <Input placeholder='Search documentation' type='search' onFocus={() => setDisplay(true)} onBlur={() => setDisplay(false)} />
    </SearchWrap>
  )
}