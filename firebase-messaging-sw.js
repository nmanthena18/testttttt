// Import Firebase SDK for v9 (modular version)
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

// Firebase configuration (replace with your actual Firebase project config)
const firebaseConfig = {
  apiKey: "AIzaSyBWEJF6i62U6jGdznT1LdDJ5JpCetrrl_4",
  authDomain: "theflyexpress-5daf2.firebaseapp.com",
  projectId: "theflyexpress-5daf2",
  storageBucket: "theflyexpress-5daf2.firebasestorage.app",
  messagingSenderId: "450991642308",
  appId: "1:450991642308:web:261a07bf66eb7cc7fc5b91",
  vapidKey:"BH5NW1zcS74Be5Vglf5-DtjAGJJznW9ns9CdNG_nwP9SWO0Mfh6OUR7uixsaLJgYs462ExsmTJvWZ816KVUXK_8	"
};

firebase.initializeApp(firebaseConfig);

// Initialize Firebase Messaging
const messaging = firebase.messaging();

// Background message handler
messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message: ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
