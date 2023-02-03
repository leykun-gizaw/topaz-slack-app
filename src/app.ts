import './utils/env';
import { App } from "@slack/bolt";

const app = new App({
	token: process.env.SLACK_BOT_TOKEN,
	signingSecret: process.env.SLACK_SIGNING_SECRET,
});

app.event('app_home_opened', async({ event, client, context }) => {
	try {
		const result = await client.views.publish({
			user_id: event.user,
			view: {
				type: 'home',
				callback_id: 'home_view',
				blocks: [
					{
						"type": "section",
						"text": {
							"type": "mrkdwn",
							"text": "*Welcome to Topaz* :tada:"
						}
					}
				]
			}
		});
		console.log(result);
	} catch (err) {
		console.error(err);
	}
});

(async () => {
	// Start your app
	await app.start(process.env.PORT || 3000);
	console.log("⚡️Bolt app is running");
})();
