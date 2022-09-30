windows.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const jogadorDisplay = document.getElementById("jogador");
    const resetBtn = document.getElementById("resetBtn");
    const anunciador = document.getElementById("anunciador");

    let board = ['', '', '', '', '', '', '', '', ''];
    let atualJogador = 'X';
    let jogoAtivo = true;

    const JogadorX_Ganhou = 'JogadorX_Ganhou';
    const JogadorO_Ganhou = 'JogadorO_Ganhou';
    const Empate = 'Empate';

    /*
        [0] [1] [2]
        [3] [4] [5]
        [6] [7] [8]
    */

    const condicoesDeVitoria = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [3, 0, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    const acaoDoUsuario = (tile, index) => {
        if (isValidAction(tile) && jogoAtivo){
            tile.innerText = atualJogador;
            tile.classList.add('jogador${atualJogador}');
            
        }
    }

    tiles.forEach((tile, index) => {
        tile.addEventListener('click', () => acaoDoUsuario(tile, index));
    });

    resetBtn.addEventListener('click', resetBoard)
});