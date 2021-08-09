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
let contador = 1;
let area = document.getElementById('principal');
function divLinha(){

    for (let index = 0; index < map.length; index++) {
        let linha = document.createElement('div');
        linha.setAttribute('id', 'linha');
        area.appendChild(linha);   

        for (let counter = 0; counter < map[index].length; counter++) {            

            let divNova = document.createElement("div");
            
            if (map[index][counter] == "S"){
                divNova.setAttribute("id", 'S');
                let personagem = document.createElement('div');
                personagem.setAttribute('id', 'perso');
                divNova.appendChild(personagem);
            }
            else if (map[index][counter] == "F"){
                divNova.setAttribute("class", 'F');
            }
            else if (map[index][counter] == " ") {
                divNova.setAttribute("class", 'E');
            }
            else {
                divNova.setAttribute("class", map[index][counter]);
            }
            if (map[index][counter] == " ") {
                let conteudoNovo = document.createTextNode("");
                divNova.appendChild(conteudoNovo);
            }
            let divAtual = document.getElementById("principal");
            linha.appendChild(divNova);
        }
    }
}
divLinha();

function quemTaDireita(){
    let character = document.getElementById("perso");
    let proxDir = character.parentNode.nextElementSibling;
    return proxDir;
}
quemTaDireita();

function quemTaEsquerda(){
    let character = document.getElementById("perso");
    let proxDir = character.parentNode;
    return proxDir;
}
quemTaEsquerda();

function quemTaCima(){
    let character = document.getElementById("perso");
    let proxDir = character.parentNode.parentNode.previousSibling.querySelector(`#linha div:nth-child(${contador})`)
    return proxDir;
}
quemTaCima();

function quemTaBaixo(){
    let character = document.getElementById("perso");
    let proxDir = character.parentNode.parentNode.nextSibling.querySelector(`#linha div:nth-child(${contador})`)
    return proxDir;    
}
quemTaBaixo();


document.addEventListener('keydown', (event) => {
    let s = document.getElementById('perso');
    let direita = s.parentNode.nextElementSibling;
    let esquerda = s.parentNode.previousElementSibling;

    const keyName = event.key;
    if (keyName === 'ArrowRight' && quemTaDireita().classList.contains('E')){
        direita.appendChild(s);
        contador++
    }
    else if (keyName === 'ArrowLeft'&& quemTaEsquerda().classList.contains('E')){
        esquerda.appendChild(s);
        contador--
    }
    else if (keyName === 'ArrowUp' && quemTaCima().classList.contains('E')){
        quemTaCima().appendChild(s);
    }
    else if (keyName === 'ArrowDown'&& quemTaBaixo().classList.contains('E')){
        quemTaBaixo().appendChild(s);
    }
    else if (keyName === 'ArrowRight' && quemTaDireita().classList.contains('F')){
        direita.appendChild(s);
        let victoria = document.getElementById('vitoria');
        victoria.classList.remove('vic');
        victoria.classList.add('final');
    }
    else if (keyName === 'ArrowRight' || keyName === 'ArrowLeft' || keyName === 'ArrowUp' || keyName === 'ArrowDown'){

    }
});