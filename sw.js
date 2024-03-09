self.addEventListener("push", (e) => {
	var options = {
		body: "I'm your doctor, please be careful!",
		icon: "images/example.png",
		vibrate: [125, 75, 125],
		data: {
			dateOfArrival: Date.now(),
			primaryKey: 1,
		},
		actions: [
			{
				action: "explore",
				title: "Explore this new world",
				icon: "images/checkmark.png",
			},
			{
				action: "close",
				title: "Close notification",
				icon: "images/xmark.png",
			},
		],
	};
	e.waitUntil(self.registration.showNotification("Hey are you ok!", options));
});
