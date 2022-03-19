window.onload = function(){
    // Jogadas Escolhidas pelos Jogadores
    var jogoJogador1 = document.getElementById("jogo-jogador-1");
    var jogoJogador2 = document.getElementById("jogo-jogador-2");
    // Opções de Jogadas Disponíveis
    var jogoJogadaPedra = document.getElementById("jogo-jogada-pedra");
    var jogoJogadaPapel = document.getElementById("jogo-jogada-papel");
    var jogoJogadaTesoura = document.getElementById("jogo-jogada-tesoura");
    // Resultado da Partida
    var jogoResultado = document.getElementById("jogo-resultado");

    // Sorteia a Jogada do Jogador 2
    function jogada(escolha){
        const jogadas = ["pedra", "papel", "tesoura"];
        const jogada = Math.floor(Math.random() * jogadas.length);
        if(jogadas[jogada] == "pedra"){
            jogoJogador2.src = "img/pedra2.jpg";
            if(escolha == "pedra"){
                jogoResultado.value = "Empate!"
            }
            else if(escolha == "papel"){
                jogoResultado.value = "Vitória!"
            }
            else{
                jogoResultado.value = "Derrota!"
            }
        }
        else if(jogadas[jogada] == "papel"){
            jogoJogador2.src = "img/papel2.jpg";
            if(escolha == "pedra"){
                jogoResultado.value = "Derrota!"
            }
            else if(escolha == "papel"){
                jogoResultado.value = "Empate!"
            }
            else{
                jogoResultado.value = "Vitória!"
            }
        }
        else{
            jogoJogador2.src = "img/tesoura2.jpg";
            if(escolha == "pedra"){
                jogoResultado.value = "Vitória!"
            }
            else if(escolha == "papel"){
                jogoResultado.value = "Derrota!"
            }
            else{
                jogoResultado.value = "Empate!"
            }
        }
    }
    jogoJogadaPedra.onclick = function(){
        jogoJogador1.src = "img/pedra1.jpg";
        jogada("pedra");
    };
    jogoJogadaPapel.onclick = function(){
        jogoJogador1.src = "img/papel1.jpg";
        jogada("papel");
    };
    jogoJogadaTesoura.onclick = function(){
        jogoJogador1.src = "img/tesoura1.jpg";
        jogada("tesoura");
    };
};