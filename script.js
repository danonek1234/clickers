let garen = document.getElementById("garen");
let garen2 = document.getElementById("garen2");

let passive = document.getElementById("passive");
let querySelector = document.getElementById("q");
let w = document.getElementById("w");
let ee = document.getElementById("e");
let r = document.getElementById("r");

let score = 0;
let power = 1;
let power_lvl = 1;
let yourscore = document.getElementById("yourscore");
yourscore.innerHTML = score; 



garen.addEventListener("click", function (e) {
    e.preventDefault();
    garen2.classList.toggle('visible');
    garen.classList.toggle('hidden');
    score = score + power;
    function addScore() {      
    setInterval(function () {
        score += 2;
        yourscore.innerHTML = score; 
    }, 2000);
}
    function addScoreR() {      
        setInterval(function () {
            score += 10;
            yourscore.innerHTML = score; 
        }, 1000);
}
    yourscore.innerHTML = score;  

        passive.addEventListener("click", function (e) {
            e.preventDefault();
            if(score>=250){
            power++;
            score -= 250;
            yourscore.innerHTML = score; 
            }
        });
        q.addEventListener("click", function (e) {
            e.preventDefault();
            if(score>=1000){
            power += 5;
            score -= 1000;
            yourscore.innerHTML = score; 
            }
        });
        w.addEventListener("click", function (e) {
            e.preventDefault();
            if(score>=2500){
            addScore();
            score -= 2500;
            yourscore.innerHTML = score; 
            }
        });
        ee.addEventListener("click", function (e) {
            e.preventDefault();
            if(score>=10000){
            power++;
            score -= 10000;
            yourscore.innerHTML = score; 
            }
        });
        r.addEventListener("click", function (e) {
            e.preventDefault();
            if(score>=50000){
            addScoreR();
            score -= 50000;
            yourscore.innerHTML = score; 
            }
        });
})

garen2.addEventListener("click", function (e) {
    e.preventDefault();
    garen.classList.remove('hidden');
    garen2.classList.remove('visible');
    let tekst = document.getElementById("tekst");
    let item = document.createElement("p");
    let text = document.createTextNode("J***ć magów");
    item.appendChild(text);
    tekst.append(item);
    score = score + power;
    function addScore() {      
    setInterval(function () {
        score += 2;
        yourscore.innerHTML = score; 
    }, 2000);
}
    function addScoreR() {      
        setInterval(function () {
            score += 10;
            yourscore.innerHTML = score; 
        }, 1000);
}
    yourscore.innerHTML = score;  

        passive.addEventListener("click", function (e) {
            e.preventDefault();
            if(score>=250){
            power++;
            score -= 250;
            yourscore.innerHTML = score; 
            }
        });
        q.addEventListener("click", function (e) {
            e.preventDefault();
            if(score>=1000){
            power += 5;
            score -= 1000;
            yourscore.innerHTML = score; 
            }
        });
        w.addEventListener("click", function (e) {
            e.preventDefault();
            if(score>=2500){
            addScore();
            score -= 2500;
            yourscore.innerHTML = score; 
            }
        });
        ee.addEventListener("click", function (e) {
            e.preventDefault();
            if(score>=10000){
            power++;
            score -= 10000;
            yourscore.innerHTML = score; 
            }
        });
        r.addEventListener("click", function (e) {
            e.preventDefault();
            if(score>=50000){
            addScoreR();
            score -= 50000;
            yourscore.innerHTML = score; 
            }
        });
});

