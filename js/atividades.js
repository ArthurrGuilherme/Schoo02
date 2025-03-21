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