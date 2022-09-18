/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-messaging.js')

const firebaseConfig = {
    apiKey: "AIzaSyCvZYqnlVMtmDJjSQ_WNQa6nFXul9z46mk",
    authDomain: "login-f4489.firebaseapp.com",
    databaseURL: "https://login-f4489-default-rtdb.firebaseio.com",
    projectId: "login-f4489",
    storageBucket: "login-f4489.appspot.com",
    messagingSenderId: "564447251099",
    appId: "1:564447251099:web:1436d380f85b660590143e",
    measurementId: "G-7G4D0VS2Q1"
};

firebase.initializeApp(firebaseConfig)

const messaging = firebase.messaging()

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload)
    const notificationTitle = payload.notification.title
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.icon || payload.notification.image,
    }

    self.registration.showNotification(notificationTitle, notificationOptions)
})

self.addEventListener('notificationclick', (event) => {
    if (event.action) {
        clients.openWindow(event.action)
    }
    event.notification.close()
})