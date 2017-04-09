# Fire-Push

Node Package to send push notifications using FCM

# Requirements

You must have api key from firebase

## Installation

```
npm install fire-push
```

## Usage

```
const FirePush = require('fire-push');

let config = {
	apiKey : 'YOUR_API_KEY'
};

let notificator = new FirePush(config);

let message = {
	notification :{
		title : 'Ey',
		body : 'Make push notifications great again',
		sound : 'default'
	},
	to : '/topics/testing'
};

notificator.sendMessage(message)
	.then((result) => console.log("notification sended"))
	.catch((error) => console.error(error));

/* You can send message with data too
message.data : {
	"extra" : "everything is awesome"
};

notificator.sendMessage(message)
	.then((result) => console.log("notification sended"))
	.catch((error) => console.error(error));
```