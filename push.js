var push = require("web-push");

const vapidKeys = {
	publicKey:
		"BFUHn0jwlqeKQdPzHS_XbPd_-RZ_m33IEeGZ2o8zcbdOPfE28HQLBqKgHf3dZm0XKlPN0LcA_x7cFCejDpPapr0",
	privateKey: "Dk7noTEhTXFTfOAfowieOypRwj0EaDune0lPkFyiBn4",
};

push.setVapidDetails(
	"mailto:Jqy0l@example.com",
	vapidKeys.publicKey,
	vapidKeys.privateKey
);

let sub = {
	endpoint:
		"https://fcm.googleapis.com/fcm/send/cBI229p3Byg:APA91bHD1SXM-DYjMTeeOsEtg0JBAN2Q6GHkWPdxuvwoTe6zGW65hY-xT0DlUKaCrTEAL0yKInXXJYIQgeVOm5HzYrxryF7ytrNiT5jfB8JI6f6EE8DL77shg9AKMDNvpyCjPMJztn7c",
	expirationTime: null,
	keys: {
		p256dh:
			"BOJdQuJuehkN480Dh-AjajGLRBd1zemkb4suL3gU6dfDCH8R94Ndngg0Ey02zIrcpXwx-R7p0-fV_OiD1XgOr3E",
		auth: "QhV_gCNyNZk24mSEse-S2A",
	},
};

push.sendNotification(sub, "Hey are you ok!");
