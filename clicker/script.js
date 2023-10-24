let batman = document.getElementById("batman");
let power_button = document.getElementById("upgrade");
let score = 1;
let power = 1;
let power_lvl = 1;
let newelement = document.querySelector("#new");
let batmobil = document.getElementById("batmobil");
if(score >= 1000){  
    batmobil.classList.add("on");
}
else{
    batmobil.classList.add("off");
}
let robin = document.getElementById("robin");
if(score >= 1000){  
    robin.classList.add("on");
}
else{
    robin.classList.add("off");
}

let yourpower= document.getElementById("yourpower");
    yourpower.innerHTML = power;
let powerneeded = document.getElementById("powerneeded");
    powerneeded.innerHTML = power_lvl * 2;

batman.addEventListener("click", function (e) {
    score = score + power;
    console.log(score);
    let yourscore = document.getElementById("yourscore");
    yourscore.innerHTML = score;   
    if(score >= 1000){  
        batmobil.classList.add("on");
    }
    else{
        batmobil.classList.add("off");
    }
    if(score >= 2500){  
        robin.classList.add("on");
    }
    else{
        robin.classList.add("off");
    }
})

power_button.addEventListener("click", function () {  
    let element = document.createElement("p");
    let text = document.createTextNode("You dont have enough score");
    if (score >= power_lvl * 2) {
        power = power + 1;
        power_lvl = power_lvl + power_lvl;       
        }
    else{    
        element.appendChild(text);      
        element.addEventListener("click", function () {
            this.remove();
        });
        newelement.appendChild(element);
        }

let yourpower= document.getElementById("yourpower");
    yourpower.innerHTML = power;
let powerneeded = document.getElementById("powerneeded");
    powerneeded.innerHTML = power_lvl * 2;
});

