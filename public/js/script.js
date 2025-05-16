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
let color = true
function changer()
{
    
    if(color)
    {
        document.body.style.backgroundColor = "#1c1b1f"
        mess.style.backgroundColor = "#1c1b1f"
        
        document.body.style.color = "white";
        document.getElementById("message-input").style.backgroundColor = "#1c1b1f";
        document.getElementById("message-input").style.color="#ffffff"
        document.getElementById("file").innerHTML = `
            <svg class="w-[25px] h-[25px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 8H4m0-2v13a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-5.032a1 1 0 0 1-.768-.36l-1.9-2.28a1 1 0 0 0-.768-.36H5a1 1 0 0 0-1 1Z"/>
            </svg>`;
        color= false
    }
    else
    {
        document.body.style.backgroundColor = "#ffffff";
        mess.style.backgroundColor = "#ffffff";
        document.body.style.color = "black";
        document.getElementById("message-input").style.backgroundColor = "#ffffff";
        document.getElementById("message-input").style.color = "#000000";
        document.getElementById("file").innerHTML = `
        <svg class="w-[25px] h-[25px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.5 8H4m0-2v13a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-5.032a1 1 0 0 1-.768-.36l-1.9-2.28a1 1 0 0 0-.768-.36H5a1 1 0 0 0-1 1Z"/>
        </svg>`;
        color=true
    }
    
}