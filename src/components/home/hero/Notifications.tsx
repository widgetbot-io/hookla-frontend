'use client'

import {useState, useEffect} from 'react';
import {styled, theme} from "stitches-config";
import {Notification} from './Notification';

const NotificationsSection = styled('div', {
  position: 'relative',
  height: '100%',
  width: '100%',
  maxWidth: '384px',

  '&::before': {
    content: '',
    position: 'absolute',
    display: 'block',
    width: '50%',
    height: '100%',
    top: '0',
    background: theme.colors.green500,
  },

  '&:first-of-type::before': {
    left: '0',
  },

  '&:last-of-type::before': {
    right: '0',
  }
});

const NotificationsWrap = styled('div');

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
    {
      name: 'Test9',
    },
    {
      name: 'Test10',
    },
    {
      name: 'Test11',
    },
    {
      name: 'Test12',
    },
  ]);

/*  useEffect(() => {
    const interval = setInterval(() => {
      const state = notifications;
      state.unshift(state.pop());

      setNotifications(state);
      console.log(notifications);
    }, 2000);

    return () => clearInterval(interval);
  }, [notifications]); */

  return (
    <NotificationsSection>
      <NotificationsWrap>
        {notifications.map((user, index) => (<Notification key={index} name={user.name} />))}
      </NotificationsWrap>
    </NotificationsSection>
  )
}