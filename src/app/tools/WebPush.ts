import {
  PushSubscription as IPushSubscription,
  sendNotification,
  setVapidDetails,
} from "web-push";

export function getPubKey() {
  return "BELnlIVfKSvD8wWyXz6Q7vjcn_djLU1ggYSY-_L04VnGVMggQU5zJBfLQNRb8wAzMyrKnKStww1CVGHOJsl4t_k";
}

export function getPrivKey() {
  return "Rg2Dbrwc1rwzD0qIlbfoRLyB4j_SuInBO5jidxo0u_8";
}

try {
  setVapidDetails(
    "mailto:webdevteam@rvdprojects.com",
    getPubKey(),
    getPrivKey()
  );
} catch (error) {
  console.error(error);
}

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

export async function sendPushNotification(notification: object) {
  if (!subscription) {
    throw new Error("No subscription available");
  }

  try {
    await sendNotification(subscription, JSON.stringify(notification));
    return { success: true };
  } catch (error) {
    console.error("Error sending push notification:", error);
    return { success: false, error: "Failed to send notification" };
  }
}
