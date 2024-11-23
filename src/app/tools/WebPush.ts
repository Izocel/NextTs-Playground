import {
  PushSubscription as IPushSubscription,
  sendNotification,
  setVapidDetails,
} from "web-push";

setVapidDetails(
  "mailto:webdevteam@rvdprojects.com",
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
);

export type PS = PushSubscription & IPushSubscription;

let subscription: PS | null = null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function subscribeUser(sub: PS | any) {
  subscription = sub;
  // In a production environment, you would want to store the subscription in a database
  // For example: await db.subscriptions.create({ data: sub })
  return { success: true };
}

export async function unsubscribeUser() {
  subscription = null;
  // In a production environment, you would want to remove the subscription from the database
  // For example: await db.subscriptions.delete({ where: { ... } })
  return { success: true };
}

export async function sendPushNotification(message: string) {
  if (!subscription) {
    throw new Error("No subscription available");
  }

  try {
    await sendNotification(
      subscription,
      JSON.stringify({
        title: "Test Notification",
        body: message,
        icon: "/icon.png",
      })
    );
    return { success: true };
  } catch (error) {
    console.error("Error sending push notification:", error);
    return { success: false, error: "Failed to send notification" };
  }
}
