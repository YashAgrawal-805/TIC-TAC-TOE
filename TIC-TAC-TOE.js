const YOU_LOSE = "YOU LOSE";
const YOU_WON = "YOU WON";

let m = 0;
let main_list = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let list = [];
let O = [];
let x = [];

function search(list, a) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === a) {
            return true;
        }
    }
    return false;
}

function O_checker(O) {
    for (let n = 0; n < 7; n = n + 3) {
        if (search(O, n) && search(O, n + 1) && search(O, n + 2)) {
            document.querySelector("h1").innerText = YOU_LOSE;
            setTimeout(function () {
                location.reload();
            }, 1000);
        }
    }
    for (let n = 0; n < 3; n++) {
        if (search(O, n) && search(O, n + 3) && search(O, n + 6)) {
            document.querySelector("h1").innerText = YOU_LOSE;
            setTimeout(function () {
                location.reload();
            }, 1000);
        }
    }
    if (search(O, 0) && search(O, 4) && search(O, 8)) {
        document.querySelector("h1").innerText = YOU_LOSE;
        setTimeout(function () {
            location.reload();
        }, 1000);
    }
    if (search(O, 2) && search(O, 4) && search(O, 6)) {
        document.querySelector("h1").innerText = YOU_LOSE;
        setTimeout(function () {
            location.reload();
        }, 1000);
    }
}

function X_checker(x) {
    for (let n = 0; n < 7; n = n + 3) {
        if (search(x, n) && search(x, n + 1) && search(x, n + 2)) {
            document.querySelector("h1").innerText = YOU_WON;
            setTimeout(function () {
                location.reload();
            }, 1000);
        }
    }
    for (let n = 0; n < 3; n++) {
        if (search(x, n) && search(x, n + 3) && search(x, n + 6)) {
            document.querySelector("h1").innerText = YOU_WON;
            setTimeout(function () {
                location.reload();
            }, 1000);
        }
    }
    if (search(x, 0) && search(x, 4) && search(x, 8)) {
        document.querySelector("h1").innerText = YOU_WON;
        setTimeout(function () {
            location.reload();
        }, 1000);
    }
    if (search(x, 2) && search(x, 4) && search(x, 6)) {
        document.querySelector("h1").innerText = YOU_WON;
        setTimeout(function () {
            location.reload();
        }, 1000);
    }
}

function checker(list) {
    let remaining_list = main_list.filter((value) => !list.includes(value));
    let randomIndex = Math.floor(Math.random() * remaining_list.length);
    return remaining_list[randomIndex];
}

function compute(m) {
    let computerMove = checker(list);
    list.push(computerMove);
    O.push(computerMove);
    O_checker(O);
    document.querySelectorAll(".Box")[computerMove].lastChild.classList.add("circle");
    m++;
    return m;
}

for (let i = 0; i <= 8; i++) {
    if (m % 2 == 0) {
        m = compute(m);
    }

    if (m % 2 !== 0 && !list.includes(i) && !O.includes(i) && !x.includes(i)) {
            document.querySelectorAll(".Box")[i].addEventListener("click", function () {
                if(m%2!==0){
                    if(!search(list,i)){
                        document.querySelectorAll(".Box")[i].firstChild.classList.add("cross_1");
                        list.push(i);
                        x.push(i);
                        X_checker(x);
                        m++;
                        setTimeout(function () {
                            m = compute(m);
                        }, 2000);
                        if (m >= 8) {
                            setTimeout(function () {
                                location.reload();
                            }, 1000);
                        }
                    }
                    
                }
            });
    }
}
