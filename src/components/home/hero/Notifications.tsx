'use client'

import {useState, useEffect} from 'react';
import {styled, theme} from 'stitches-config';
import { useInterval } from '@/hooks';
import {Notification} from './Notification';

const NotificationsSection = styled('div', {
  position: 'relative',
  width: '100%',
  height: '100%',
  minHeight: '800px',
  maxWidth: '384px',

  '&::before': {
    content: '',
    position: 'absolute',
    display: 'block',
    width: '50%',
    height: '100%',
    top: '0',
    background: theme.colors.green400,
  },

  '&:first-of-type::before': {
    right: '0',
  },

  '&:last-of-type::before': {
    left: '0',
  },

  '@media (max-width: 1200px)': {
    maxWidth: 'unset',
    flexGrow: 1,

    '&:last-of-type': {
      display: 'none',
    },
  },

  '@media (max-width: 900px)': {
    minHeight: '528px',

    '&::before': {
      position: 'absolute',
      display: 'block',
      bottom: '0',
      top: 'unset',
      right: 'unset',
      left: '50%',
      width: '100vw',
      height: '192px',
      transform: 'translateX(-50%)',
      background: theme.colors.green400,
    },
  },
});

const NotificationsWrap = styled('div', {
  position: 'absolute',
  top: 0,
  height: '100%',
  width: '100%',

  '@media (max-width: 900px)': {
    overflowY: 'hidden',
  },
});

export function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      name: 'Test1',
    },
    {
      name: 'Test2',
    },
    {
      name: 'Test3',
    },
    {
      name: 'Test4',
    },
    {
      name: 'Test5',
    },
    {
      name: 'Test6',
    },
    {
      name: 'Test7',
    },
    {
      name: 'Test8',
    },
  ]);
  const [translate, setTranslate] = useState(0);

  useInterval(() => {
    setNotifications(state => {
      if (!state.length) return [];

      return [
        state[state.length - 1], // The last element, now at the start
        ...state.slice(0, -1) // Gets all but the last element
      ];
    });

    setTranslate(-133);
  }, 2000);

  useEffect(() => {
    setTranslate(0);
  }, [translate]);

  return (
    <NotificationsSection>
      <NotificationsWrap css={{
        transform: `translateY(${translate}px)`,
        transition: translate === 0 ? '.2s ease transform' : 'none',
      }}>
        {notifications.map((user, index) => (<Notification key={index} name={user.name} />))}
      </NotificationsWrap>
    </NotificationsSection>
  )
}
