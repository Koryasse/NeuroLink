const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Servir les fichiers statiques (HTML, CSS, JS)
app.use(express.static('public'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

let users = {}; // socket.id -> username

io.on('connection', (socket) => {
    console.log('Un utilisateur s\'est connecté');

    // Réception du pseudo
    socket.on('set-username', (username) => {
        users[socket.id] = username || 'Utilisateur';
        io.emit('user-list', Object.values(users));
    });

    // Réception des messages texte ou fichiers
    socket.on('message', (msg) => {
        if (msg.type === 'text') {
            msg.sender = users[socket.id] || 'Utilisateur';
            socket.broadcast.emit('message', msg);
        } else if (msg.type === 'file') {
            // Enregistre le fichier sur le serveur (optionnel, dépend de ton usage)
            const fileBuffer = Buffer.from(msg.content.split(',')[1], 'base64');
            const filePath = path.join(__dirname, 'uploads', msg.filename);

            fs.writeFile(filePath, fileBuffer, (err) => {
                if (err) {
                    console.error(`Erreur lors de l'écriture du fichier: ${err.message}`);
                    return;
                }
                console.log(`Fichier enregistré: ${filePath}`);
                // Envoie le chemin du fichier pour téléchargement
                socket.broadcast.emit('message', {
                    type: 'file',
                    filename: msg.filename,
                    content: `/uploads/${msg.filename}`,
                    sender: users[socket.id] || 'Utilisateur'
                });
            });
        }
    });

    // Déconnexion
    socket.on('disconnect', () => {
        delete users[socket.id];
        io.emit('user-list', Object.values(users));
        console.log('Un utilisateur s\'est déconnecté');
    });
});

// Démarrage du serveur
const PORT = 4040;
server.listen(PORT, '0.0.0.0', () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});