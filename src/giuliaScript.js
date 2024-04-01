

/* window.onload = function (){
    document.getElementsByTagName('button')[0].disabled = true;
    document.getElementsByTagName('button')[1].disabled = true;
}
function showPuls() {
    document.getElementsByClassName('hide')[0].style.opacity = 1;
    
} */

    

function ready() { 
    document.getElementById('tema').play();
    document.getElementById("sw-logo").style.display = 'flex';
    document.getElementsByClassName('hide')[0].style.opacity = 1;
    document.getElementsByClassName('inizio')[0].style.display = 'none'
    setTimeout(cambiaSfondo, 1500);
    document.body.style.backgroundImage = 'url(images/lightsaber.gif)';
    

}
function cambiaSfondo() {
    document.body.style.backgroundImage = 'url(images/lightsaber-on.gif)';
    document.getElementsByTagName('button')[1].disabled = false;
    document.getElementsByTagName('button')[2].disabled = false;
    
}
function chooseJedi() {
    let cont = document.getElementById("cont");
    let vader = document.getElementById('vader');
    let cantinetta = document.getElementById('cantinetta');

    cont.style.justifyContent = 'flex-start';
    document.body.style.backgroundImage = 'url(images/star-wars-jedi-order-wallpaper.jpg)';
    document.getElementById("sw-logo").style.opacity = 0; 
    document.getElementById("cont").style.background = '#fff';
    document.getElementById("undo").style.opacity = 1;
    document.getElementById('tema').pause();
    vader.pause();
    cantinetta.pause();
    vader.currentTime = 0;
    cantinetta.currentTime = 0;
    document.getElementById('obiWan').play();
}
  
function undoMyChoice() {
    let cont = document.getElementById("cont");
    let vader = document.getElementById('vader');
    let obiWan = document.getElementById('obiWan');
    
    cont.style.justifyContent = 'center';
    document.body.style.backgroundImage = 'url(images/lightsaber-on.gif)';
    document.getElementById("sw-logo").style.opacity = 1;
    document.getElementById("cont").style.background = '#ccc';
    document.getElementById("undo").style.opacity = 0;
    document.getElementById('tema').pause()
    vader.pause();
    obiWan.pause();
    vader.currentTime = 0;
    obiWan.currentTime = 0;
    document.getElementById('cantinetta').play();
}

function chooseSith() {
    let cont = document.getElementById("cont"); 
    let obiWan = document.getElementById('obiWan'); 
    let cantinetta = document.getElementById('cantinetta'); 
    
    cont.style.justifyContent = 'flex-end';
    document.body.style.backgroundImage = 'url(images/star-wars-sith-empire-wallpaper.jpg)';
    document.getElementById("sw-logo").style.opacity = 0;
    document.getElementById("cont").style.background = '#222';
    document.getElementById("undo").style.opacity = 1;
    document.getElementById('tema').pause();
    cantinetta.pause();
    obiWan.pause();
    obiWan.currentTime = 0;
    cantinetta.currentTime = 0;
    document.getElementById('vader').play();
}

/* da fare:
 - come fare la stessa cosa con il toggle?
 */