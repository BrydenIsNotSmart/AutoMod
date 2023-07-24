const io = require('socket.io-client');
require("dotenv").config();

const socket = io("http://localhost:443/events", { query: { token: process.env.token } });

socket.on("ready", (client) => {
    console.log(`${client.user.username}#${client.user.discriminator} is online.`)
})