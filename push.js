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
		"https://fcm.googleapis.com/fcm/send/cm8ixRfL5hM:APA91bFYiMWvrhIjy5COmd5DWY9CefkPLguv7Rb7B-gNzhf49mPsZ2hxMZqqyFLvS9GWVZ83LtGl-gECzQtZYtXh2Ac6hfVVMgMZQG2Ux5UDhdgksA4Ar5cYeKsZxR-d-c-tZX6Qfnvv",
	expirationTime: null,
	keys: {
		p256dh:
			"BOUhyw8mT3iNroIGzeTTPlfR2ZnxN5Ojn-kvMb8mExuC-0H8ZAFQ3POPCOgc-XfnkFS_jkQizywspjFjqHhrqQM",
		auth: "2YKQVygfyjWn_I4M-ss9XA",
	},
};

push.sendNotification(sub, "Hey are you ok!");
