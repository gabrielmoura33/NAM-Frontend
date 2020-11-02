/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect, useMemo } from 'react';
import { MdNotifications } from 'react-icons/md';
import { parseISO, formatDistance } from 'date-fns';

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification,
} from './styles';

interface INotificationProps {
  _id: string;
  read: boolean;
  content: string;
  timeDistance: string;
}
const Notifications: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState<INotificationProps[]>([]);
  const hasUnread = useMemo(
    () => !!notifications.find(notification => notification.read === false),
    [notifications],
  );

  useEffect(() => {
    function loadNotifications() {
      const data: INotificationProps[] = [
        {
          _id: '02cd4ece-07dd-11eb-adc1-0242ac120002',
          content: 'Usuário lorem adicionou o acerto lorem',
          read: true,
          timeDistance: formatDistance(
            parseISO('2020-10-06 09:16:51.079916'),
            new Date(),
            { addSuffix: true },
          ),
        },
        {
          _id: '004c48f2-07de-11eb-adc1-0242ac120002',
          content: 'Usuário lorem adicionou o acerto lorem',
          read: true,
          timeDistance: formatDistance(
            parseISO('2020-10-03 09:16:51.079916'),
            new Date(),
            { addSuffix: true },
          ),
        },
        {
          _id: '072f0aba-07de-11eb-adc1-0242ac120002',
          content: 'Usuário lorem adicionou o acerto lorem',
          read: true,
          timeDistance: formatDistance(
            parseISO('2020-10-05 09:16:51.079916'),
            new Date(),
            { addSuffix: true },
          ),
        },
      ];
      setNotifications(data);
    }
    loadNotifications();
  }, []);
  function handleTogleVisible() {
    setVisible(!visible);
  }

  async function handleMarkAsRead(id: string) {
    const aux = notifications.map(n => {
      if (n._id === id) {
        n.read = true;
      }
      return n;
    });

    setNotifications(aux);
  }
  return (
    <Container>
      <Badge onClick={handleTogleVisible} hasUnread={hasUnread}>
        <MdNotifications color="#FFFF" size={30} />
      </Badge>
      <NotificationList visible={visible}>
        <Scroll>
          {notifications.map(notification => (
            <Notification key={notification._id} unread={!notification.read}>
              <p>{notification.content}</p>
              <div>
                <time>{notification.timeDistance}</time>
                {!notification.read && (
                  <button
                    onClick={() => handleMarkAsRead(notification._id)}
                    type="button"
                  >
                    Marcar como lida
                  </button>
                )}
              </div>
            </Notification>
          ))}
        </Scroll>
      </NotificationList>
    </Container>
  );
};

export default Notifications;
