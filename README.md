# project_chat_online_node

## Tópicos / Topics:

- [Sobre o projeto](#sobre-o-projeto) | [About the project](#about-the-project)
- [Ferramentas](#ferramentas) | [Tools](#tools)
- [Como instalar](#como-instalar) | [How to Install](#how-to-install)
- [Configurações](#configurações) | [Settings](#settings)
- [Link da API](#link-da-api) | [API Link](#api-link)
- [Agradecimento](#agradecimento) | [Acknowledgment](#acknowledgment)

<hr>

## Mais Sobre o Projeto

Esta é uma descrição de uma aplicação de chat usando Socket.IO com Node.js:

Uma aplicação de chat em tempo real construída com Node.js e Socket.IO permite que os usuários troquem mensagens instantaneamente. O servidor é criado usando Express.js, que gerencia o roteamento básico e serve os arquivos do lado do cliente. O Socket.IO possibilita a comunicação bidirecional entre o servidor e os clientes conectados, permitindo o envio de mensagens em tempo real sem a necessidade de constantes requisições HTTP.

Cada usuário pode entrar em uma sala de chat, enviar e receber mensagens em tempo real e ver quando outros usuários estão digitando. O servidor transmite as mensagens para todos os clientes conectados na sala, garantindo que cada participante receba as atualizações imediatamente. O sistema também suporta recursos como notificações de conexão de usuários e alertas de desconexão.

A interface do front-end é construída usando HTML, CSS e JavaScript, conectando-se ao servidor Socket.IO para exibir a interface de chat, onde os usuários podem enviar mensagens e vê-las sendo atualizadas dinamicamente sem recarregar a página.

Esta é a primeira versão; futuramente, este projeto será remodelado com Tailwind e React.

<hr>

## Ferramentas 

<div style="display:inline-block">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" width="100px" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"  width="100px" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg"  width="100px" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"  width="100px" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"  width="100px" />
</div>
<hr>

## Como Instalar

Primeiro, clone o projeto:

```bash
git clone https://github.com/VictorRodrigues0/project_chat_online_node.git
```
Depois disso, instale as dependências. Abra o terminal e execute:
```terminal
npm install
```

Inicie o servidor:

```bash
npm run server
```

## Configurações

Não se esqueça de criar o arquivo `.env` e especificar a `PORTA` para o servidor.

<hr>

## Link da API

Clique para acessar o chat: https://project-chat-online-node.onrender.com

<hr>

## Agradecimento

Agradeço por utilizar esta aplicação. Sua contribuição é sempre bem-vinda, seja para corrigir algum erro ou adicionar novas funcionalidades. Não hesite em enviar sua solução.

<hr>

## More About the Project

This is a description of a chat application using Socket.IO with Node.js:

A real-time chat application built with Node.js and Socket.IO allows users to exchange messages instantly. The server is created using Express.js, which handles basic routing and serves the client-side files. Socket.IO enables bi-directional communication between the server and connected clients, allowing for real-time messaging without the need for constant HTTP requests.

Each user can join a chat room, send and receive messages in real-time, and see when other users are typing. The server broadcasts messages to all connected clients in the room, ensuring that every participant receives updates immediately. The system also supports features such as user connection notifications and disconnection alerts.

The front end is built using HTML, CSS, and JavaScript, connecting to the Socket.IO server to display the chat interface, where users can send messages and see them update dynamically without reloading the page.

This is the first version; in the future, this project will be redesigned with Tailwind and React.

<hr>

## Tools


<div style="display:inline-block">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" width="100px" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"  width="100px" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg"  width="100px" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"  width="100px" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"  width="100px" />
</div>
<hr>

## How to Install

First, clone the project:

```bash
git clone https://github.com/VictorRodrigues0/project_chat_online_node.git
```

After that, install the dependencies. Open the terminal and run:
```bash
npm install
```
Start the server:

```bash
npm run server
```
## Settings

Don't forget to create the `.env` file and specify the `PORT` for the server.

<hr>

## API Link

Click on link to access the chat: https://project-chat-online-node.onrender.com

<hr>

## Acknowledgment

Thank you for using this application. Your contribution is always welcome, whether to fix a bug or add new features. Don’t hesitate to submit your solution.


