
// Elementos HTML
let columns = document.querySelectorAll('.lis');
let parents = document.querySelector("#ul");
let resetBtn = document.querySelector('#button_reset');

resetBtn.addEventListener('click', function() {
    location.reload();
});

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
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(Math.abs(matrix[i][j] + matrix[i][j+1] + matrix[i][j+2] + matrix[i][j+3]) === 4) {
                gameFinished(jogador);
            }
        }
    }

    // Horizontal
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(i<4 && Math.abs(matrix[i][j] + matrix[i+1][j] + matrix[i+2][j] + matrix[i+3][j]) === 4) {
                gameFinished(jogador);
            }
        }
    }

    // Diagonal /
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(i<4 && Math.abs(matrix[i][j] + matrix[i+1][j+1] + matrix[i+2][j+2] + matrix[i+3][j+3]) === 4) {
                gameFinished(jogador);
            }
        }
    }

    // Diagonal \
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(i<4 && j>2 && Math.abs(matrix[i][j] + matrix[i+1][j-1] + matrix[i+2][j-2] + matrix[i+3][j-3]) === 4) {
                gameFinished(jogador);
            }
        }
    }
}

function gameFinished(jogador) {
    if(jogador == 1){
       window.alert( 'jogador 1 venceu !' )
       

    }else if (jogador == -1){
        window.alert( 'jogador 2 venceu !' )
       

    } 
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
