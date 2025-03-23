// Questão 01
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
        Swal.fire({
            title: correto ? "Parabéns! <br><br>" : "Alternativa correta: <br><br>",
            html: correto ? "Você escolheu a resposta certa! <br><br>" : "d) Empresas de fast food adaptando seus cardápios para incluir opções saudáveis. <br><br>",
            icon: correto ? "success" : "error"
        });
    } else {
        Swal.fire({
            title: "Atenção!",
            text: "Selecione uma opção primeiro!",
            icon: "warning"
        });
    }
}

// Questão 02
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
        Swal.fire({
            title: correto ? "Parabéns! <br><br>" : "Alternativa correta: <br><br>",
            html: correto ? "Você escolheu a resposta certa! <br><br>" : "a) Flexibilidade, autocontrole emocional, tolerância ao estresse e coragem. <br><br>",
            icon: correto ? "success" : "error"
        });
    } else {
        Swal.fire({
            title: "Atenção!",
            text: "Selecione uma opção primeiro!",
            icon: "warning"
        });
    }
}

// Questão 03
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
        Swal.fire({
            title: correto ? "Parabéns! <br><br>" : "Alternativa correta: <br><br>",
            html: correto ? "Você escolheu a resposta certa! <br><br>" : "b) Adaptabilidade é ajustar-se rapidamente às mudanças, e resiliência é superar adversidades. <br><br>",
            icon: correto ? "success" : "error"
        });
    } else {
        Swal.fire({
            title: "Atenção!",
            text: "Selecione uma opção primeiro!",
            icon: "warning"
        });
    }
}

// Questão 04
document.querySelectorAll(".checkResposta3").forEach(check => {
    check.addEventListener("change", function() {
        document.querySelectorAll(".checkResposta3").forEach(chk => chk !== this && (chk.checked = false));
        document.getElementById("botaoResposta3").style.display = "block";
    });
});

function verificarResposta3() {
    let selecionado = document.querySelector(".checkResposta3:checked");
    if (selecionado) {
        let correto = selecionado.getAttribute("data-correto") === "true";
        Swal.fire({
            title: correto ? "Parabéns! <br><br>" : "Alternativa correta: <br><br>",
            html: correto ? "Você escolheu a resposta certa! <br><br>" : "a) Buscar aprendizado com erros e construir uma rede de suporte confiável. <br><br>",
            icon: correto ? "success" : "error"
        });
    } else {
        Swal.fire({
            title: "Atenção!",
            text: "Selecione uma opção primeiro!",
            icon: "warning"
        });
    }
}
/*Atividade 02*/
/*Questão01*/
document.querySelectorAll(".checkResposta10").forEach(check => {
    check.addEventListener("change", function() {
        document.querySelectorAll(".checkResposta10").forEach(chk => chk !== this && (chk.checked = false));
        document.getElementById("botaoResposta10").style.display = "block";
    });
});

function verificarResposta10() {
    let selecionado = document.querySelector(".checkResposta10:checked");
    if (selecionado) {
        let correto = selecionado.getAttribute("data-correto") === "true";
        Swal.fire({
            title: correto ? "Parabéns! <br><br>" : "Alternativa correta: <br><br>",
            html: correto ? "Você escolheu a resposta certa! <br><br>" : "d) Mantendo a calma e priorizando tarefas importantes. <br><br> Feedback: O gerenciamento do estresse envolve manter a calma e priorizar tarefas, garantindo clareza e foco em situações desafiadoras.<br><br>",
            icon: correto ? "success" : "error"
        });
    } else {
        Swal.fire({
            title: "Atenção!",
            text: "Selecione uma opção primeiro!",
            icon: "warning"
        });
    }
}
/*Questão01 */
/*Questão02 */
document.querySelectorAll(".checkResposta11").forEach(check => {
    check.addEventListener("change", function() {
        document.querySelectorAll(".checkResposta11").forEach(chk => chk !== this && (chk.checked = false));
        document.getElementById("botaoResposta11").style.display = "block";
    });
});

function verificarResposta11() {
    let selecionado = document.querySelector(".checkResposta11:checked");
    if (selecionado) {
        let correto = selecionado.getAttribute("data-correto") === "true";
        Swal.fire({
            title: correto ? "Parabéns! <br><br>" : "Alternativa correta: <br><br>",
            html: correto ? "Você escolheu a resposta certa! <br><br>" : "a) Focam nas oportunidades criadas pelas mudanças. <br><br> Feedback: Pessoas adaptáveis enxergam mudanças como oportunidades para crescer e contribuir positivamente com a organização.<br><br>",
            icon: correto ? "success" : "error"
        });
    } else {
        Swal.fire({
            title: "Atenção!",
            text: "Selecione uma opção primeiro!",
            icon: "warning"
        });
    }
}
/*Questão02 */