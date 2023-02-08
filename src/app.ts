import './utils/env';
import { App } from "@slack/bolt";

const app = new App({
	token: process.env.SLACK_BOT_TOKEN,
	appToken: process.env.SLACK_APP_TOKEN,
	signingSecret: process.env.SLACK_SIGNING_SECRET,
	socketMode: true,
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
							"text": "Hello"
						}
					},
					{
						"type": "divider"
					},
					{
						"type": "actions",
						"elements": [
							{
								"type": "button",
								"text": {
									"type": "plain_text",
									"text": "Farmhouse",
									"emoji": true
								},
								"value": "click_me_123"
							},
						]
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
