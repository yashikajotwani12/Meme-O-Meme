// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken } from 'firebase/messaging'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase

function requestPermission() {
    console.log('Requesting...')
    Notification.requestPermission().then((permission) => {
        if(permission === 'granted') {
            console.log('granted')
            const app = initializeApp(firebaseConfig);
            const messaging = getMessaging(app);
            getToken(messaging, {
                vapidKey: "BLv8o-23NfPOzQEUYfFz3reSU8MOE5sVRptGSDcwj4y_x-Pl-CPbGNN_Wj32gQwDuevfR-gcWKUJUfZoHLlL5KY"
            }).then((currentToken) => {
                if(currentToken) {
                    console.log(currentToken);
                }
                else {
                    console.log('error')
                }
            })
        }
        else {
            console.log('denied')
        }
    });
}

requestPermission();
