const rpc = require("discord-rpc");
const client = new rpc.Client({ transport: 'ipc' });

const config = {
	ClientID : "526871343145287680",
	LargeImage : "https://campus19.be/wp-content/uploads/2022/06/19logowhite-150x150.png",
	LargeImageText : "iii",
	Details : `Available in ${process.env.CLUSTER}`,
	State: `${process.env.CLUSTERPOS}`
}

client.login({ clientId: "526871343145287680" }).catch(console.error);

client.on('ready', () => {
	console.log('[DEBUG] Presence now active!')
	client.request('SET_ACTIVITY', {
		pid: process.pid,
		activity: {
			details: config.Details,
			state: config.State,
			timestamps: {
				start: Date.now()
			},
			assets: {
				large_image: config.LargeImage,
				large_text: config.LargeImageText,
				// small_image: config.SmallImage,
				// small_text: config.SmallImageText,
			},
		buttons: [{
				label: "Show in the cluster",
				url: `https://meta.intra.42.fr/clusters#${process.env.CLUSTERPOS}`
			},
			]
		}
	})
})
