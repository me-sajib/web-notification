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

let sub = {};

push.sendNotification({}, "Hello, World!");
