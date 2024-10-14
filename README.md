# project_chat_online_node

## More About the Project

This is a description of a chat application using Socket.IO with Node.js:

A real-time chat application built with Node.js and Socket.IO allows users to exchange messages instantly. The server is created using Express.js, which handles basic routing and serves the client-side files. Socket.IO enables bi-directional communication between the server and connected clients, allowing for real-time messaging without the need for constant HTTP requests.

Each user can join a chat room, send and receive messages in real-time, and see when other users are typing. The server broadcasts messages to all connected clients in the room, ensuring that every participant receives updates immediately. The system also supports features such as user connection notifications and disconnection alerts.

The front end is built using HTML, CSS, and JavaScript, connecting to the Socket.IO server to display the chat interface, where users can send messages and see them update dynamically without reloading the page.

## How to Install

First, clone the project:

```bash
git clone https://github.com/VictorRodrigues0/project_chat_online_node.git
```

After that, install the dependencies. Open the terminal and run:
```terminal
npm install
```

## How to use:

Start the server:

```terminal
npm run server
```
## Settings:

Don't forget to create the .env file and specify the PORT for the server.
