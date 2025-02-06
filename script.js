let xTurn = true;

function changeMark(buttonId) {
    let button = document.getElementById(buttonId);
    if (!button.innerHTML) {
        if (xTurn) {
            button.innerHTML = "X";
            button.style.color = "blue"; // X color
        } else {
            button.innerHTML = "O";
            button.style.color = "green"; // O color
        }
        xTurn = !xTurn;
        checkWin();
    }
}

function resetGame() {
    let positions = ["a1", "b1", "c1", "a2", "b2", "c2", "a3", "b3", "c3"];
    positions.forEach(id => document.getElementById(id).innerHTML = "");
    xTurn = true;
}

function checkWin() {
    let a1 = document.getElementById("a1").innerHTML;
    let b1 = document.getElementById("b1").innerHTML;
    let c1 = document.getElementById("c1").innerHTML;
    let a2 = document.getElementById("a2").innerHTML;
    let b2 = document.getElementById("b2").innerHTML;
    let c2 = document.getElementById("c2").innerHTML;
    let a3 = document.getElementById("a3").innerHTML;
    let b3 = document.getElementById("b3").innerHTML;
    let c3 = document.getElementById("c3").innerHTML;
    
    if (a1 == b1 && b1 == c1 && a1 != "") {
        document.body.innerHTML += `<h2>${a1} Wins!</h2>`;
    } else if (a2 == b2 && b2 == c2 && a2 != "") {
        document.body.innerHTML += `<h2>${a2} Wins!</h2>`;
    } else if (a3 == b3 && b3 == c3 && a3 != "") {
        document.body.innerHTML += `<h2>${a3} Wins!</h2>`;
    } else if (a1 == a2 && a2 == a3 && a1 != "") {
        document.body.innerHTML += `<h2>${a1} Wins!</h2>`;
    } else if (b1 == b2 && b2 == b3 && b1 != "") {
        document.body.innerHTML += `<h2>${b1} Wins!</h2>`;
    } else if (c1 == c2 && c2 == c3 && c1 != "") {
        document.body.innerHTML += `<h2>${c1} Wins!</h2>`;
    } else if (a1 == b2 && b2 == c3 && a1 != "") {
        document.body.innerHTML += `<h2>${a1} Wins!</h2>`;
    } else if (c1 == b2 && b2 == a3 && c1 != "") {
        document.body.innerHTML += `<h2>${c1} Wins!</h2>`;
    }
}
