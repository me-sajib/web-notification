const publicVapidKey =
	"BFUHn0jwlqeKQdPzHS_XbPd_-RZ_m33IEeGZ2o8zcbdOPfE28HQLBqKgHf3dZm0XKlPN0LcA_x7cFCejDpPapr0";

//Check for service worker
if ("serviceWorker" in navigator) {
	send().catch((err) => console.error(err));
}

// register SW, Register Push, Send Push
async function send() {
	//register service worker
	console.log("registering service worker");
	const register = await navigator.serviceWorker.register("/worker.js", {
		scope: "/",
	});
	console.log("service worker registered");
	//register push
	const subscription = await register.pushManager.subscribe({
		applicationServerKey: publicVapidKey,
		userVisibleOnly: true,
	});

	//send notification
	console.log("sending push");
	await fetch("/subscribe", {
		method: "POST",
		body: JSON.stringify(subscription),
		headers: {
			"content-type": "application/json",
		},
	});
	console.log("push send");
}
