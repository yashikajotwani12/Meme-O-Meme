
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js");
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
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    const promiseChain = clients
        .matchAll({
            type: "window",
            includeUncontrolled: true,
        })
        .then((windowClients) => {
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                windowClient.postMessage(payload);
            }
        })
        .then(() => {
            return registration.showNotification("my notification title");
        });
    return promiseChain;
});
self.addEventListener("notificationclick", function (event) {
    console.log(event);
});