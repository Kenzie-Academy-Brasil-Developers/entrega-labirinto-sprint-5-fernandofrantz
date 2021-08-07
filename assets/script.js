const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];
let area = document.getElementById('principal');
function divLinha(){

    for (let index = 0; index < map.length; index++) {
        let linha = document.createElement('div');
        linha.setAttribute('id', 'linha');
        area.appendChild(linha);   

        for (let counter = 0; counter < map[index].length; counter++) {            

            // let ws = document.createElement('div');
            // ws.setAttribute('id', 'celulas');
            // linha.appendChild(ws);

            let divNova = document.createElement("div");
            

            if (map[index][counter] == "S"){
                divNova.setAttribute("id", 'S');
            }
            else if (map[index][counter] == "F"){
                divNova.setAttribute("id", 'F');
            }
            else if (map[index][counter] == " ") {
                divNova.setAttribute("class", 'E');
            }
            else {
                divNova.setAttribute("class", map[index][counter]);
            }
            if (map[index][counter] == " ") {
                let conteudoNovo = document.createTextNode("E");
                divNova.appendChild(conteudoNovo);
            }
            else {
                let conteudoNovo = document.createTextNode(map[index][counter]);
                divNova.appendChild(conteudoNovo);
            }
            let divAtual = document.getElementById("principal");
            linha.appendChild(divNova);
        }
    }
}
divLinha();

function quemTaDireita(){
    let character = document.getElementById("S");
    let proxDir = character.nextElementSibling;
    return proxDir;
}
quemTaDireita();

function quemTaEsquerda(){
    let character = document.getElementById("S");
    let proxDir = character.previousElementSibling;
    return proxDir;
}
quemTaEsquerda();

function quemTaCima(){
    let character = document.getElementById("S");
    let proxDir = character.parentNode.nextElementSibling
    return proxDir;
}
quemTaCima();

function quemTaBaixo(){
    let character = document.getElementById("S");
    let proxDir = character.parentNode.previousElementSibling;
    return proxDir;    
}
quemTaBaixo();

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if (keyName === 'ArrowRight' && quemTaDireita().innerHTML == "E"){
        let s = document.getElementById('S');
        let next = s.nextElementSibling;
        next.appendChild(s);
    }
    else if (keyName === 'ArrowLeft'&& quemTaEsquerda().innerHTML == "E"){
        let s = document.getElementById('S');
        let next = s.previousElementSibling;
        next.appendChild(s);
    }
    else if (keyName === 'ArrowUp' && quemTaCima().innerHTML == "E"){
        let s = document.getElementById("S");
        let next = s.parentNode.nextElementSibling;
        next.appendChild(s);
    }
    else if (keyName === 'ArrowDown'&& quemTaBaixo().innerHTML == "E"){
        let s = document.getElementById("S");
        let next = s.parentNode.previousElementSibling;
        next.appendChild(s);
    }
    else if (keyName === 'ArrowRight' || keyName === 'ArrowLeft' || keyName === 'ArrowUp' || keyName === 'ArrowDown'){
        alert("Youn cannot move in this direction!")
    }
});








// function addLinhas() {
    
//     for (let counter = 0; counter < map.length; counter++){
//         for (let index = 0; index < map[counter].length; index++) {
        
//         function adcElemento (){
//             let divNova = document.createElement("div");

//             if (map[counter][index] == "S"){
//                 divNova.setAttribute("id", 'S');
//             }
//             else if (map[counter][index] == "F"){
//                 divNova.setAttribute("id", 'F');
//             }
//             else if (map[counter][index] == " ") {
//                 divNova.setAttribute("class", 'E');
//             }
//             else {
//                 divNova.setAttribute("class", map[counter][index]);
//             }
//             if (map[counter][index] == " ") {
//                 let conteudoNovo = document.createTextNode("E");
//                 divNova.appendChild(conteudoNovo);
//             }
//             else {
//                 let conteudoNovo = document.createTextNode(map[counter][index]);
//                 divNova.appendChild(conteudoNovo);
//             }
//             let divAtual = document.getElementById("principal");
//             divAtual.appendChild(divNova);
//             }
//             adcElemento();
//         }
//     }
// }
// addLinhas();


// 
// 
// 


// function quemTaDireita(){
//     let character = document.getElementById("S");
//     let proxDir = character.nextElementSibling;
//     return proxDir;
// }
// quemTaDireita();

// function quemTaEsquerda(){
//     let character = document.getElementById("S");
//     let proxDir = character.previousElementSibling;
//     return proxDir;
// }
// quemTaEsquerda();

// function quemTaCima(){
//     let character = document.getElementById("S");
//     let proxDir = character.parentNode
//     return proxDir;
// }
// quemTaCima();

// function quemTaBaixo(){
//     let character = document.getElementById("S");
//     let proxDir = character.parentNode.previousElementSibling;
//     return proxDir;    
// }
// quemTaBaixo();


// document.addEventListener('keydown', (event) => {
//     const keyName = event.key;
//     if (keyName === 'ArrowRight' && quemTaDireita().innerHTML == "E"){
//         let s = document.getElementById('S');
//         let next = s.nextElementSibling;
//         next.appendChild(s);
//     }
//     else if (keyName === 'ArrowLeft'&& quemTaEsquerda().innerHTML == "E"){
//         let s = document.getElementById('S');
//         let next = s.previousElementSibling;
//         next.appendChild(s);
//     }
//     else if (keyName === 'ArrowUp' && quemTaCima().innerHTML == "E"){
//         let s = document.getElementById("S");
//         let next = s.parentNode.nextElementSibling;
//         next.appendChild(s);
//     }
//     else if (keyName === 'ArrowDown'&& quemTaBaixo().innerHTML == "E"){
//         let s = document.getElementById("S");
//         let next = s.parentNode.previousElementSibling;
//         next.appendChild(s);
//     }
// });


// let boxTop = 0;
// let boxLeft = 0;




// function moveRight(){
//     document.getElementById("S").style.right = boxRight + "px";
// }
// function moveLeft(){
//     document.getElementById("S").style.left = boxLeft + "px";
// }
// function moveDown(){
//     document.getElementById("S").style.bottom = boxBottom + "px";
// }
// function moveUp(){
//     document.getElementById("S").style.top = boxTop + "px";
// }


    // if (keyName === 'ArrowDown'){
    //     boxBottom += 5;
    //     moveTop();
    // }
    // else if (keyName === 'ArrowUp'){
    //     boxTop -= 5;
    //     moveDown();
    // }
    // else if (keyName === 'ArrowLeft'){
    //     boxLeft -= 5;
    //     moveRight();
    // }
    // else if (keyName === 'ArrowRight'){
    //     boxRight += 5;
    //     moveLeft();
    // }
    // console.log('top: '+ boxTop+ '    left: ' +boxLeft)