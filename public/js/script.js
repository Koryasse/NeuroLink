// petite animation
function scrollToBottom() {
    const messagesContainer = document.getElementById('messages-container');
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

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

// Variables concernant le petit menu du chat
let back = document.getElementById('back-home');
let appareance = document.getElementById('change-appareance');
let furtif = document.getElementById('furtive-mode');
let deco = document.getElementById('disconnection');
let totalAppareance = document.getElementById('total-change-appareance');
let totalFurtiv = document.getElementById('total-furtive-mode');

// Lorsque l'on clique sur "Retour à l'accueil"
back.addEventListener('click', () => {
    window.location.href = '../index.html';
});

// Lorsque l'on clique sur "Changer l'apparance"
let appBool = true;
appareance.addEventListener('click', () => {
    if (appBool) {
        totalAppareance.innerHTML = 
            `<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="none" viewBox="0 0 24 24">
                <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z"/>
            </svg>`;
            appBool = false;
    } else {
        totalAppareance.innerHTML = 
            `<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="none" viewBox="0 0 24 24">
                <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/>
            </svg>`;
            appBool = true;
    }
});

// Lorsque l'on clique sur "Mode furtif"
let furtivBool = true;
furtif.addEventListener('click', () => {
    
});

deco.addEventListener('click', () => {
    
});