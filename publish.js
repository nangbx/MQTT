const mqtt = require("mqtt");
require("dotenv").config();

const topic = process.env.TOPIC;
const broker = process.env.BROKER;

const data = {
	id: 11,
	packet_no: 126,
	temperature: 30,
	humidity: 60,
	tds: 1100,
	pH: 5.0,
};

var client = mqtt.connect(broker, {
	protocol: "mqtt/tcp",
});

const handleSend = (message) => {
	return client.publish(topic, message, {
		qos: 0,
		retain: true,
	});
};

client.on("connect", (packet) => {
	console.log("Publish data: " + JSON.stringify(data) + "...");
	handleSend(JSON.stringify(data));
	console.log("Publish successfull");
	client.end();
});
