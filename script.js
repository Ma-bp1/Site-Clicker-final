let totalCliques = 0;
var totalUpgrades = 0;

const marcos = document.getElementById('gato');
const parabens = new Audio('./assets/audio/parabens.mp3');
let somJaTocou = false;

var imagens = ['./assets/imagens/marcos1.png', './assets/imagens/marcos2.png', './assets/imagens/marcos3.png']
var indexImagens = 0;

function aoClicar() {
    indexImagens++;

    if(indexImagens === imagens.length) {
        indexImagens = 0;
    }

    marcos.src = imagens[indexImagens];
 
    if (!somJaTocou) {
        parabens.play();
        somJaTocou = true;
    }
}

marcos.addEventListener('click', aoClicar);

export function contarUpgrades() {
    totalUpgrades += 1;
    displayUpgrades();
}

export function contarCliques() {
    totalCliques += 1;
    displayCliques(); 
}

function displayCliques(){
    const labelClique = document.getElementById('labelClique');
    labelClique.innerHTML = Math.floor(totalCliques);

    const upgradeCards = document.querySelectorAll('.cardContainer');

    upgrades.forEach((upgrade, indice)=>{
    const upgradeCardsHtml = upgradeCards[indice];
    
    if (upgradeCardsHtml) {
        if (totalCliques >= parseFloat(upgrade.custo)) {
            upgradeCardsHtml.classList.remove('upgradeIndisponivel');
            upgradeCardsHtml.classList.add ('upgradeDisponivel');
        } else {
            upgradeCardsHtml.classList.remove('upgradeDisponivel');
            upgradeCardsHtml.classList.add('upgradeIndisponivel');
        }
    }
});
}

function displayUpgrades(){
    const labelUpdateUpgrades = document.getElementById('labelUpgrades')
}

document.getElementById('gato').addEventListener('click', contarCliques);

window.comprarUpgrade = function(indice){
    const upgrade = upgrades[indice];
    const custo = parseFloat(upgrade.custo);
    
    if (totalCliques >= custo) {
        totalCliques -= custo;

        upgrade.acao();
        displayCliques();
    }
    else {
        alert("Cliques insuficientes! Clique um pouco mais :3")
    }
}

//upgrades e suas funcionalidades abaixo:
function upgradeRatinhos() {
    var tempoAlteravel = 1000;

    setInterval(()=>{
        totalCliques += 1;
        displayCliques();
    }, tempoAlteravel);
}

function upgradeLeite() {
    totalCliques * 2;
}

function upgradeNomeGato() {
    const pegarNome = document.getElementById('nomeGato')
    const novoNome = confirm("Deseja mudar o nome do seu marcos para o nome alternativo?");

    if (novoNome){
        pegarNome.innerHTML = 'Vinicius';
    } else {
        alert("O Marcos continuará com o nome antigo.");
    }
}

function upgradeBaby () {
    console.log('ainda n funcionando')
}



export const upgrades = [
    {
        titulo:"Clicks automaticos",
        custo:"10",
        descricao:"1 Clique por segundo",
        acao: upgradeRatinhos
    },

    {
        titulo:"Multiplicador 2x",
        custo:"20",
        descricao:"Faz o autoclicker multiplicar os clicks automáticos por múltiplos de 2",
        acao: upgradeLeite
    },

    {
        titulo:"Nome secreto",
        custo:"500",
        descricao:"?",
        acao: upgradeNomeGato
    },

    {
        titulo: 'baby marcos',
        custo: '1000',
        descricao: 'its baby marcos!',
        acao: upgradeBaby
    }

]


displayCliques();