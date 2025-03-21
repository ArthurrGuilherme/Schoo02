/*Questão 01 */
document.querySelectorAll(".checkResposta").forEach(check => {
    check.addEventListener("change", function() {
        document.querySelectorAll(".checkResposta").forEach(chk => chk !== this && (chk.checked = false));
        document.getElementById("botaoResposta").style.display = "block";
    });
});

function verificarResposta() {
    let selecionado = document.querySelector(".checkResposta:checked");
    if (selecionado) {
        let correto = selecionado.getAttribute("data-correto") === "true";
        if (correto) {
            swal("Parabéns!", "Você escolheu a resposta certa!", "success");
        } else {
            swal("Alternativa correta:", "d) Empresas de fast food adaptando seus cardápios para incluir opções  saudáveis. Você deve lembrar do exemplo da indústria de fast food ou dos restaurantes durante a pandemia. Para a adaptabilidade, destaca-se como as empresas ajustaram seus modelos de negócio para atender às mudanças na demanda (exemplo: introdução de  opções saudáveis). Para a resiliência, reconhecemos como as empresas superaram adversidades, reinventando suas operações para continuar  funcionando.", "error");
        }
    } else {
        swal("Atenção!", "Selecione uma opção primeiro!", "warning");
    }
}
/*Questão 02 */
document.querySelectorAll(".checkResposta1").forEach(check => {
    check.addEventListener("change", function() {
        document.querySelectorAll(".checkResposta1").forEach(chk => chk !== this && (chk.checked = false));
        document.getElementById("botaoResposta1").style.display = "block";
    });
});

function verificarResposta1() {
    let selecionado = document.querySelector(".checkResposta1:checked");
    if (selecionado) {
        let correto = selecionado.getAttribute("data-correto") === "true";
        if (correto) {
            swal("Parabéns!", "Você escolheu a resposta certa!", "success");
        } else {
            swal("Alternativa correta:", " a) Flexibilidade, autocontrole emocional, tolerância ao estresse e coragem Além de identificar os quatro pilares (pilares estresse e coragem), é importante que você conecte esses pilares a uma experiência pessoal, como adaptar-se a aulas online (flexibilidade)  gerenciar o estresse de uma avaliação difícil (autocontrole emocional) aprender com feedback negativo em um projeto (foco no aprendizado) ou buscar ajuda de colegas e professores (rede de suporte).", "error");
        }
    } else {
        swal("Atenção!", "Selecione uma opção primeiro!", "warning");
    }
}
/*Questão 03 */
document.querySelectorAll(".checkResposta2").forEach(check => {
    check.addEventListener("change", function() {
        document.querySelectorAll(".checkResposta2").forEach(chk => chk !== this && (chk.checked = false));
        document.getElementById("botaoResposta2").style.display = "block";
    });
});

function verificarResposta2() {
    let selecionado = document.querySelector(".checkResposta2:checked");
    if (selecionado) {
        let correto = selecionado.getAttribute("data-correto") === "true";
        if (correto) {
            swal("Parabéns!", "Você escolheu a resposta certa!", "success");
        } else {
            swal("Alternativa correta:", " b) Adaptabilidade é ajustar-se rapidamente às mudanças, e resiliência é superar adversidades. A adaptabilidade é a capacidade de ajustar-se rapidamente a mudanças, de abraçar o novo e lidar com o diferente, ao passo que resiliência é a habilidade de vencer adversidades, desafios ou /e superar os seus próprios limites e inseguranças. Em um mundo VUCA, como avanços tecnológicos e com as diferentes crises globais, as habilidades de resiliência e adaptabilidade desempenham um importante papel para superar as inúmeras adversidades, lidar com as pressões do dia a dia do trabalho, adaptar-se a novas ideias, metodologias e tecnologias, e para continuar aprendendo sempre diante das mudanças da sociedade.", "error");
        }
    } else {
        swal("Atenção!", "Selecione uma opção primeiro!", "warning");
    }
}