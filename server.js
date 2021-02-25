// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

// our default array of dreams
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

// send the default array of dreams to the webpage
app.get("/dreams", (request, response) => {
  // express helps us take JS objects and send them as JSON
  response.json(dreams);
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

// login to Discord with your app's token
client.login('ODA2NDU3NTk1MjYxODc4Mjky.YBpuKQ.LaRyTW_nEBL0FGBg4jNeZ_MtxWc');
const discord = require('discord.js');
const Client = new Discord.Client();
//CLIENT EVENTS
client.on("ready", () => {
  console.log("Ready to boom your ears | Bot created by ANTOR");
  client.user.setActivity("Bot created by |√|ANNTOR#8129|😎|");
});
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
client.on('message', msg => {
  if (msg.content === 'Hi') {
    msg.reply('Hi');
  }
});
client.on('message', msg => {
  if (msg.content === 'hi') {
    msg.reply('hi');
  }
});
client.on('message', msg => {
  if (msg.content === 'HI') {
    msg.reply('HI');
  }
});
client.on('message', msg => {
  if (msg.content === 'hello') {
    msg.reply('hello');
  }
});
client.on('message', msg => {
  if (msg.content === 'Hello') {
    msg.reply('Hello');
  }
});
client.on('message', msg => {
  if (msg.content === 'HELLO') {
    msg.reply('HELLO');
  }
});
client.on('message', msg => {
  if (msg.content === 'bye') {
    msg.reply('bye🙋');
  }
});
client.on('message', msg => {
  if (msg.content === 'Bye') {
    msg.reply('Bye🙋');
  }
});
client.on('message', msg => {
  if (msg.content === 'BYE') {
    msg.reply('BYE🙋');
  }
});
client.on('message', msg => {
  if (msg.content === 'Bye🙋') {
    msg.reply('Bye🙋');
  }
});
client.on('message', msg => {
  if (msg.content === 'bye🙋') {
    msg.reply('bye🙋');
  }
});
client.on('message', msg => {
  if (msg.content === 'BYE🙋') {
    msg.reply('BYE🙋');
  }
});
client.on('message', msg => {
  if (msg.content === 'good night') {
    msg.reply('good night😴');
  }
});
client.on('message', msg => {
  if (msg.content === 'Good night') {
    msg.reply('Good night😴');
  }
});
client.on('message', msg => {
  if (msg.content === 'GOOD NIGHT') {
    msg.reply('GOOD NIGHT😴');
  }
});
client.on('message', msg => {
  if (msg.content === 'GOOD MORNING') {
    msg.reply('GOOD MORNING🥱');
  }
});
client.on('message', msg => {
  if (msg.content === 'good morning') {
    msg.reply('good morning🥱');
  }
});
client.on('message', msg => {
  if (msg.content === 'Good morning') {
    msg.reply('Good morning🥱');
  }
});
client.on('message', msg => {
  if (msg.content === 'ee') {
    msg.reply(':a: ')
  }
});
