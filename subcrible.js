const mqtt = require("mqtt");
require("dotenv").config();
const topic = process.env.TOPIC;
const broker = process.env.BROKER;
var client = mqtt.connect(broker);

client.subscribe(topic);

client.on("message", (topic, payload) => {
	console.log(payload.toString());
});
