console.log("service worker loaded");

self.addEventListener("push", (event) => {
	const data = event.data.json();
	console.log("push received", data);
	self.registration.showNotification(data.title, {
		body: "Hey are you ok now!",
	});
});
