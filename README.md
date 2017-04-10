# Fire-Push

Node Package to send push notifications using FCM

## Requirements

- You must get a api key (server key) from firebase

- Create a new project in your firebase console
![alt text](https://firebasestorage.googleapis.com/v0/b/gdgmonterrey.appspot.com/o/crear%20proyecto.png?alt=media&token=1550472b-2e34-4b25-a332-d795c338110c "Create project")

- Copy the server key in the section cloud messaging
![alt text](https://firebasestorage.googleapis.com/v0/b/gdgmonterrey.appspot.com/o/clave.png?alt=media&token=76c88508-e822-487e-b536-c5373ae6488a "Cloud messaging section")

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
*/
notificator.sendMessage(message)
	.then((result) => console.log("notification sended"))
	.catch((error) => console.error(error));
```