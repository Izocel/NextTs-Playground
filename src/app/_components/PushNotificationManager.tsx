"use client";

import { useEffect, useState } from "react";
import { urlBase64ToUint8Array } from "../tools/Strings";
import {
  getPubKey,
  sendPushNotification,
  subscribeUser,
  unsubscribeUser,
} from "../tools/WebPush";

export default function PushNotificationManager() {
  const [isSupported, setIsSupported] = useState(false);
  const [message, setMessage] = useState(
    '{"title":"Test notification","body":"This is the notication body","icon":null}'
  );

  const inputClass =
    "m-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

  const btnClass =
    "m-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-md px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800";

  useEffect(() => {
    if ("serviceWorker" in navigator && "PushManager" in window) {
      setIsSupported(true);
      registerServiceWorker();
    }
  }, []);

  async function registerServiceWorker() {
    navigator.serviceWorker.register("/Service-Worker.js", {
      scope: "/",
      updateViaCache: "none",
    });
  }

  async function subscribeToPush() {
    const registration = await navigator.serviceWorker.ready;

    try {
      const sub = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(getPubKey()),
      });

      await subscribeUser(sub);
    } catch (error) {
      console.error(error);
    }
  }

  async function unsubscribeFromPush() {
    await unsubscribeUser();
  }

  async function sendTestNotification() {
    const notification = JSON.parse(message);
    await sendPushNotification(notification);
  }

  if (!isSupported) {
    return <p>Push notifications are not supported in this browser.</p>;
  }

  return (
    <div className="w-100">
      <p>Push Notifications</p>
      <p>You are subscribed to push notifications.</p>

      <div className="flex w-100">
        <textarea
          rows={10}
          value={message}
          className={inputClass}
          placeholder="Enter notification json"
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <div className="flex-row">
        <button
          type="button"
          className={btnClass}
          onClick={unsubscribeFromPush}
        >
          Unsubscribe
        </button>
        <button type="button" className={btnClass} onClick={subscribeToPush}>
          Subscribe
        </button>
        <button
          type="button"
          className={btnClass}
          onClick={sendTestNotification}
        >
          Send Test
        </button>
      </div>
    </div>
  );
}
