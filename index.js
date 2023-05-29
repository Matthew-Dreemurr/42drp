const rpc = require("discord-rpc");
const client = new rpc.Client({ transport: 'ipc' });
const config = require('./config.json');

client.login({ clientId: config.ClientID }).catch(console.error);

client.on('ready', () => {
    console.log('[DEBUG] Presence now active!')
    console.log('[WARN] Do not close this Console as it will terminate the rpc')
    console.log('=================== Error Output ===================')
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: `Available in ${process.env.CLUSTER}`,
            state: `${process.env.CLUSTERPOS}`,
            timestamps: {
                start: Date.now()
            },
            assets: {
                large_image: config.LargeImage,
                large_text: config.LargeImageText,
                small_image: config.SmallImage,
                small_text: config.SmallImageText,
            },
           buttons: [{
                   label: "Show in the cluster",
                   url: `https://meta.intra.42.fr/clusters#${process.env.CLUSTERPOS}`
               },
            ]
        }
    })
})
