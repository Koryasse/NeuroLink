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

let users = [];

// Gestion des connexions Socket.io
io.on('connection', (socket) => {
    console.log('Un utilisateur s\'est connecté');

    users.push(socket.id);
    io.emit('user-connected', [...users]);

    // Écoute des messages envoyés par un client
    socket.on('message', (msg) => {
        if (msg.type === 'text') {
            console.log(`Message reçu: ${msg.content}`);
            socket.broadcast.emit('message', msg);
        } else if (msg.type === 'file') {
            const fileBuffer = Buffer.from(msg.content.split(',')[1], 'base64');
            const filePath = path.join(__dirname, 'uploads', msg.filename);

            fs.writeFile(filePath, fileBuffer, (err) => {
                if (err) {
                    console.error(`Erreur lors de l'écriture du fichier: ${err.message}`);
                    return;
                }

                console.log(`Fichier enregistré: ${filePath}`);
                socket.broadcast.emit('message', {
                    type: 'file',
                    filename: msg.filename,
                    content: `/uploads/${msg.filename}`
                });

                // Crée un élément <img> pour afficher l'image
                const img = document.createElement('img');
                img.src = `/uploads/${msg.filename}`;
                img.alt = msg.filename;
                img.style.maxWidth = "300px";
                document.body.appendChild(img);
            });
        }
    });

    // Gestion de la déconnexion
    socket.on('disconnect', () => {
        console.log('Un utilisateur s\'est déconnecté');
        users = users.filter(id => id !== socket.id);
        io.emit('user-connected', users);
    });
});

// Gestion des fichiers uploadés
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Démarrage du serveur sur toutes les interfaces réseau
const PORT = 4040;
server.listen(PORT, '0.0.0.0', () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});