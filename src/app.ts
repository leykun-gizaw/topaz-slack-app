import './utils/env';
import { App } from "@slack/bolt";

const app = new App({
	token: process.env.SLACK_BOT_TOKEN,
	signingSecret: process.env.SLACK_SIGNING_SECRET,
});

app.event('app_home_opened', async({ event, client, context }) => {
	console.log(event);
});

(async () => {
	// Start your app
	await app.start(process.env.PORT || 3000);
	console.log("⚡️Bolt app is running");
})();
