let garen = document.getElementById("garen");

let passive = document.getElementById("passive");
let q = document.getElementById("q");
let w = document.getElementById("w");
let ee = document.getElementById("e");
let r = document.getElementById("r");

let objectPower = 25;
let score = 0;
let power = 1;
let power_lvl = 1;
let yourscore = document.getElementById("yourscore");
yourscore.innerHTML = score; 
let yourpower = document.getElementById("yourpower");
yourpower.innerHTML = power; 

let text;
let number;
let remove = 0;

function Position() {
    let width = window.innerWidth;
    let height = window.innerHeight;

    let randomWidth = Math.floor(Math.random() * width - 20);
    let randomHeight = Math.floor(Math.random() * height - 20);
    
    let element = document.createElement("img");
    element.id = "object";
    element.src = "caster.png";
    element.style.position = "absolute";
    element.style.left = randomWidth + "px";
    element.style.top = randomHeight + "px";
    element.style.height = 40 + "px";
    element.style.widows = 35 + "px";
    document.body.appendChild(element);

    let object = document.getElementById("object");

    object.addEventListener("click", function () {
        score += objectPower;
        objectPower += 5;
        yourscore.innerHTML = score; 
        this.remove();
    });

    setInterval(function () {
        object.remove();
    }, 5000);
}

setInterval(function () {
    Position();
}, 30000);

function Dialogue(){
    number = Math.floor(Math.random() * 14);

    switch(number){
        case 0:
            text = "My heart and sword always for Demacia."; 
        break;
        case 1:
            text = "Fear is the first of many foes."; 
        break;
        case 2:
            text = "I could do this for hours. Really."; 
        break;
        case 3:
            text = "The glory of Demacia will never fade."; 
        break;
        case 4:
            text = "I bring justice."; 
        break;
        case 5:
            text = "Demacia!!!!"; 
        break;
        case 6:
            text = "Be bold; be just!"; 
        break;
        case 7:
            text = "This world needs hope."; 
        break;
        case 8:
            text = "We fight for those who cannot."; 
        break;
        case 9:
            text = "Our courage must never waver."; 
        break;
        case 10:
            text = "Darius, you are a butcher, not a general."; 
        break;
        case 11:
            text = "Hey, look, I'm holding the world up!"; 
        break;
        case 12:
            text = "Justice, by law, or by sword."; 
        break;
        case 13:
            text = "I will fight as long as I stand!"; 
        break;
    }
        let d = document.getElementById("d");
        let element = document.createElement("p");
        element.id = 'chuj';
        let tekst = document.createTextNode(text);
        element.appendChild(tekst);
        d.append(element);
        remove = 1;
    };

    function Remove() {
        if (remove == 1) { 
        let chuj = document.getElementById("chuj");
        chuj.remove();
        }
    }

    function Change() {
        if (garen.src.match("garen.png")) {
        garen.src = "garen2.png";
        }
        else{
            garen.src = "garen.png";
        }
    }

garen.addEventListener("click", function (e) {
    e.preventDefault();
    Remove(); 
    Dialogue();    
    Change();   
    score = score + power;
    yourscore.innerHTML = score;  
});

passive.addEventListener("click", function (e) {
    e.preventDefault();
    if(score >=250){                     
    power += 1;
    score -= 250;
    yourscore.innerHTML = score;   
    yourpower.innerHTML = power;        
    }   
});

function addScore() {      
    setInterval(function () {
        score += 2;
        yourscore.innerHTML = score; 
    }, 1000);
}
    function addScoreR() {      
        setInterval(function () {
            score += 10;
            yourscore.innerHTML = score; 
        }, 1000);
}

q.addEventListener("click", function (e) {
    if(score >=1000){
    e.preventDefault();           
    power += 5;
    score -= 1000;
    yourscore.innerHTML = score; 
    yourpower.innerHTML = power; 
    }
});

w.addEventListener("click", function (e) {
    if(score >=2500){
    e.preventDefault();           
    addScore();
    score -= 2500;
    yourscore.innerHTML = score; 
    }
});

ee.addEventListener("click", function (e) {
    e.preventDefault();
    power+= 60;
    score -= 10000;
    yourscore.innerHTML = score; 
    yourpower.innerHTML = power; 
});

r.addEventListener("click", function (e) {
    e.preventDefault();            
    addScoreR();
    score -= 50000;
    yourscore.innerHTML = score; 
});