import React from 'react';

const useNotification = (title, options) => {
  if (!('Notification' in window)) {
    return;
  }
  const fireNotif = () => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};

const App = () => {
  const triggerNotif = useNotification('Nice to meet you', {
    body: 'How about you?',
  });
  return (
    <div>
      <button onClick={triggerNotif}>See notification</button>
    </div>
  );
};

export default App;
