import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getMessaging, isSupported, getToken, onMessage } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-messaging.js";

const firebaseConfig = {
    apiKey: "AIzaSyA5z5FS7U50eI5S3-H9jRM6g1fYzG0S8Vk",
    authDomain: "Hi Free Tools-1470394573010.firebaseapp.com",
    databaseURL: "https://Hi Free Tools-1470394573010.firebaseio.com",
    projectId: "Hi Free Tools-1470394573010",
    storageBucket: "Hi Free Tools-1470394573010.appspot.com",
    messagingSenderId: "543959747848",
    appId: "1:543959747848:web:83f221c4a7b29c76c1f0bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

setTimeout(async function () {
    function isTokenSaved() {
        return window.localStorage.getItem('fcmTokenSST') === '1';
    }

    if (await isSupported()) {
        if (!isTokenSaved()) {
            try {
                // Request FCM token
                const currentToken = await getToken(messaging, {
                    vapidKey: 'BD63BuwrjVY0fkIa646mXTNGt1JlZBvj_fgTpe2EwSWV3vvJr_XAzp98YjKVB3R-qm00ElKJS1vpGbQNXluKtQM'
                });

                if (currentToken) {
                    saveToken(currentToken); // Send token to server
                } else {
                    console.log('No registration token available. Request permission to generate one.');
                }
            } catch (err) {
                console.error('Error retrieving token:', err);
                updateSubscriptionStatus(false);
            }
        }
    } else {
        console.log('Notifications are not supported by this browser.');
    }

    function saveToken(currentToken) {
        $.ajax({
            url: `${base_url}save-fcm-token/`,
            type: 'POST',
            data: {
                device_token: currentToken
            },
            dataType: 'JSON',
            success: function (response) {
                let isTokenSaved = false;
                if (response.status === 'success') {
                    isTokenSaved = true;
                } 
                updateSubscriptionStatus(isTokenSaved);
            },
            error: function (err) {
                console.error('Error saving token:', err);
                updateSubscriptionStatus(false);
            }
        });
    }

    function updateSubscriptionStatus(status) {
        window.localStorage.setItem('fcmTokenSST', status ? '1' : '0');
    }

    onMessage(messaging, (payload) => {
        console.log('Message received: ', payload);

        const notificationTitle = payload.notification?.title || payload.data?.title || 'Notification';
        const notificationOptions = {
            body: payload.notification?.body || payload.data?.body || 'Message from Hi Free Tools',
            icon: payload.notification?.icon || payload.data?.icon,
            tag: payload.data?.tag || '',
            requireInteraction: true
        };

        const notification = new Notification(notificationTitle, notificationOptions);

        notification.onclick = function (event) {
            event.preventDefault(); 
            const theLink = payload.data?.link;
            if (theLink) {
                window.open(theLink, '_blank');
            }
            notification.close();
        };
    });
}, 5000);
