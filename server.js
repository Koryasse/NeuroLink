// Importation des modules
import express from 'express';
import { Server } from 'socket.io';
import http from 'http';

// Création de l'application Express
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Configuration de l'application Express
app.use(express.static('public'));

// Gestion des connexions WebSocket
io.on('connection', (socket) => {
    console.log('Un utilisateur connecté');

    socket.on('message', (message) => {
        if (!message.trim()) return;
        let filteredMessage = filter.clean(message);
        console.log(`Message reçu de ${socket.id}: ${filteredMessage}`);
        socket.broadcast.emit('message', filteredMessage);
    });

    socket.on('disconnect', () => {
        console.log('Un utilisateur déconnecté');
    });
});

// Gestion des signaux d'arrêt
process.on('SIGINT', () => {
    console.log('Arrêt du serveur');
    server.close(() => {
        console.log('Serveur arrêté');
        process.exit(0);
    });
});

// Gestion des signaux d'arrêt
process.on('SIGTERM', () => {
    console.log('Arrêt du serveur');
    server.close(() => {
        console.log('Serveur arrêté');
        process.exit(0);
    });
});

// Démarrage du serveur
server.listen(3000, () => {
    console.log('Serveur démarré sur http://localhost:3000');
});