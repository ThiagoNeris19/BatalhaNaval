const TAMANHO = 5;
const NAVIOS = 3;
const MAX_TENTATIVAS = 10;
let tabuleiro = Array.from({ length: TAMANHO }, () => Array(TAMANHO).fill(false));
let naviosRestantes = NAVIOS;

// Posiciona os navios aleatoriamente
function posicionarNavios() {
    let colocados = 0;
    while (colocados < NAVIOS) {
        let linha = Math.floor(Math.random() * TAMANHO);
        let coluna = Math.floor(Math.random() * TAMANHO);
        if (!tabuleiro[linha][coluna]) {
            tabuleiro[linha][coluna] = true;
            colocados++;
        }
    }
}

function jogar() {
    const readline = require('readline-sync');
    posicionarNavios();
    console.log("Bem-vindo ao Batalha Naval! Você tem " + MAX_TENTATIVAS + " tiros para afundar " + NAVIOS + " navios.");
    
    let tentativas = 0;
    while (tentativas < MAX_TENTATIVAS && naviosRestantes > 0) {
        let linha = parseInt(readline.question("Digite a linha (0-4): "));
        let coluna = parseInt(readline.question("Digite a coluna (0-4): "));

        if (linha < 0 || linha >= TAMANHO || coluna < 0 || coluna >= TAMANHO) {
            console.log("Coordenadas inválidas! Tente novamente.");
            continue;
        }

        if (tabuleiro[linha][coluna]) {
            console.log("Você acertou um navio!");
            tabuleiro[linha][coluna] = false;
            naviosRestantes--;
        } else {
            console.log("Tiro na água.");
        }

        tentativas++;
        console.log("Navios restantes: " + naviosRestantes);
        console.log("Tiros restantes: " + (MAX_TENTATIVAS - tentativas));
    }

    if (naviosRestantes === 0) {
        console.log("Parabéns! Você afundou todos os navios e venceu o jogo!");
    } else {
        console.log("Fim de jogo! Ainda restam " + naviosRestantes + " navios. A máquina venceu!");
    }
}

jogar();
