// Va afficher les fonctionnalités
let menu = document.getElementById('menu-user-list');
let button = document.getElementById('menu-user');
button.addEventListener('click', () => {
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});

// Variables des boutons de chaque fonctionnalité
let back = document.getElementById('back-home');
let appareance = document.getElementById('change-appareance');
let furtif = document.getElementById('furtive-mode');
let deco = document.getElementById('disconnection');


// Lorsque l'on clique sur "Retour à l'accueil"
back.addEventListener('click', () => {
    window.location.href = '../index.html';
});

// Lorsque l'on clique sur "Déconnexion"
deco.addEventListener('click', () => {
    window.location.href = 'connexion.html';
});
// Lorsque l'on clique sur "Mode furtif"
let etatFurtif = true;
furtif.addEventListener('click', () => {
    if (etatFurtif) {
        document.getElementById("messages").style.display = "none";
        etatFurtif = false;
    } else {
        document.getElementById("messages").style.display = "block";
        etatFurtif = true;
    }
});

let color = true
function changer() {
    if(color) {
        // Dark mode

        // style
        document.body.style.backgroundColor = "#1c1b1f";
        mess.style.backgroundColor = "#1c1b1f";
        document.body.style.color = "white";
        document.getElementById("message-input").style.backgroundColor = "#1c1b1f";
        document.getElementById("message-input").style.color = "#ffffff";
        document.querySelector(".global-send").style.border = "2px solid #ffffff";
        
        // Changement des svg
        document.getElementById("file").innerHTML = `
            <svg class="w-[25px] h-[25px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 8H4m0-2v13a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-5.032a1 1 0 0 1-.768-.36l-1.9-2.28a1 1 0 0 0-.768-.36H5a1 1 0 0 0-1 1Z"/>
            </svg>`;
        
        appareance.innerHTML = `
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z"/>
            </svg><button onclick="changer()">Changer l'apparance</button>`;
        // attend 2 secondes avant de pouvoir changer de nouveau
        setTimeout(() => {
            color = false;
        }, 2000);
    } else {
        // Light mode

        // style
        document.body.style.backgroundColor = "#ffffff";
        mess.style.backgroundColor = "#ffffff";
        document.body.style.color = "black";
        document.getElementById("message-input").style.backgroundColor = "#ffffff";
        document.getElementById("message-input").style.color = "#000000";
        document.querySelector(".global-send").style.border = "2px solid #000000";
        
        // changement des svg
        document.getElementById("file").innerHTML = `
        <svg class="w-[25px] h-[25px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 8H4m0-2v13a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-5.032a1 1 0 0 1-.768-.36l-1.9-2.28a1 1 0 0 0-.768-.36H5a1 1 0 0 0-1 1Z"/>
        </svg>`;

        appareance.innerHTML = `
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="none" viewBox="0 0 24 24">
                <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/>
            </svg><button onclick="changer()">Changer l'apparance</button>`;

        // attend 2 secondes avant de pouvoir changer de nouveau
        setTimeout(() => {
            color = true;
        }, 2000);
    }
}