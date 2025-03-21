const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

// Initialisation de l'application Express
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Servir les fichiers statiques (HTML, CSS, JS)
app.use(express.static('public'));

// Gestion des connexions Socket.io
io.on('connection', (socket) => {
    console.log('Un utilisateur s\'est connecté');

    // Écoute des messages envoyés par un client
    socket.on('message', (msg) => {
        console.log('Message reçu :', msg);

        // Diffuse le message à tous les autres clients sauf l'expéditeur
        socket.broadcast.emit('message', msg);
    });

    // Gestion de la déconnexion
    socket.on('disconnect', () => {
        console.log('Un utilisateur s\'est déconnecté');
    });
});

// Démarrage du serveur sur toutes les interfaces réseau
const PORT = 80;
server.listen(PORT, '0.0.0.0', () => {
    console.log(`Serveur démarré sur http://0.0.0.0:${PORT}`);
});