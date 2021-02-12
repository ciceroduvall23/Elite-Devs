// Elementos HTML
let columns = document.querySelectorAll('.lis');

let parents=document.querySelector("#ul")
function createEl(parentEl,nameEl,attEl,valeuEl){
    let el = document.createElement(nameEl)
    let att = document.createAttribute(attEl)
    att.value=valeuEl
    el.setAttributeNode(att)
    parentEl.appendChild(el)
    return el;
}

function validateCreation(path){
    let val=0
    path.childNodes.forEach(e=>{
        val++
    })
    return val>=6?false:true
}

let jogador = -1;
function toggle(){
    let vetor1 =["circulo"];
    let vetor2 =["circulo-two"];
    if (jogador==-1){
        jogador+=2;
        return vetor1
    }
    else if(jogador==1){
        jogador-=2;
        return vetor2
    }
}

let matrix = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
];
function pushMatrix(el) {         
    matrix[el.id-1].push(jogador);
}

function stopGame() {
    // Vertical
    matrix.forEach(function(column) {
        if(column.length === 4 && checkLastFour(column) && Math.abs(column.reduce((a,b) => a+b)) === 4) {
            gameFinished('vertical')
        } else if (column.length === 5 && checkLastFour(column) && Math.abs(column.reduce((a,b) => a+b)) >= 3) {
            gameFinished('vertical')
        } else if (column.length === 6 && checkLastFour(column) && Math.abs(column.reduce((a,b) => a+b)) >= 2) {
            gameFinished('vertical')
        }
    });
    
    // Horizontal
    // Diagonal
}

function checkLastFour(column) {
    let nextNumber = 0;
    let prevNumber = 0;
    let lastFourCheck = 0;
    for(let i = column.length-1; i > 0 ; i--) {
        prevNumber = column[i];
        nextNumber = column[i-1];
        if(prevNumber != nextNumber) {
            return false
        } else {
            lastFourCheck += 1
            if (lastFourCheck === 3) {
                return true
            }
        }
    }
}

function gameFinished(direction) {
    console.log('fim ' + direction)
}

function listener(tag){
    if(tag){
        tag.forEach(el => {
            el.addEventListener("click",e=>{
            validateCreation(e.target)?new Ball(createEl(parents,"div","class",toggle(),pushMatrix(el), stopGame()),e.target,5,.2,"circle"):0
            })
        });
    }
}
listener(document.querySelectorAll(".lis"))