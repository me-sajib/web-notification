// Import required packages
const express = require("express");
const path = require("path");
const webpush = require("web-push");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Initialize Express app
const app = express();

// Middleware
app.use(express.static(path.join(__dirname, "client")));
app.use(bodyParser.json());

// MongoDB setup
// mongoose.connect("mongodb://localhost:27017/subscriptionDB", {
// 	useUnifiedTopology: true,
// });
// const subscriptionSchema = new mongoose.Schema({
// 	endpoint: String,
// 	expirationTime: Date,
// 	keys: {
// 		p256dh: String,
// 		auth: String,
// 	},
// });
// const Subscription = mongoose.model("Subscriptions", subscriptionSchema);

// WebPush setup
const publicVapidKey =
	"BFUHn0jwlqeKQdPzHS_XbPd_-RZ_m33IEeGZ2o8zcbdOPfE28HQLBqKgHf3dZm0XKlPN0LcA_x7cFCejDpPapr0";
const privateVapidKey = "Dk7noTEhTXFTfOAfowieOypRwj0EaDune0lPkFyiBn4";
webpush.setVapidDetails(
	"mailto:test@test.com",
	publicVapidKey,
	privateVapidKey
);

// Save subscription to database
app.post("/subscribe", async (req, res) => {
	const subscription = req.body;
	console.log("subscription", subscription);
	res.status(201).json({});

	// create payload
	const payload = JSON.stringify({ title: "Push Notification" });

	//past object into sendnotification
	await webpush
		.sendNotification(subscription, payload)
		.catch((err) => console.error(err));

	// try {
	// 	const newSubscription = new Subscription(subscription);
	// 	await newSubscription.save();
	// 	res.status(201).json({ message: "Subscription saved" });
	// } catch (err) {
	// 	res
	// 		.status(500)
	// 		.json({ message: "Failed to save subscription", error: err });
	// }
});

// Send notification
app.post("/send-notification", async (req, res) => {
	const userId = req.body.userId;
	try {
		const subscription = await Subscription.findOne({
			/* your query to find the subscription based on userId */
		});
		if (subscription) {
			const payload = JSON.stringify({ title: "New Notification" });
			await webpush.sendNotification(subscription, payload);
			res.status(200).json({ message: "Notification sent" });
		} else {
			res.status(404).json({ message: "Subscription not found" });
		}
	} catch (err) {
		res
			.status(500)
			.json({ message: "Failed to send notification", error: err });
	}
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
