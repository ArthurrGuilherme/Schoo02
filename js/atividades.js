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
/*Questão03 */
document.querySelectorAll(".checkResposta12").forEach(check => {
    check.addEventListener("change", function() {
        document.querySelectorAll(".checkResposta12").forEach(chk => chk !== this && (chk.checked = false));
        document.getElementById("botaoResposta12").style.display = "block";
    });
});

function verificarResposta12() {
    let selecionado = document.querySelector(".checkResposta12:checked");
    if (selecionado) {
        let correto = selecionado.getAttribute("data-correto") === "true";
        Swal.fire({
            title: correto ? "Parabéns! <br><br>" : "Alternativa correta: <br><br>",
            html: correto ? "Você escolheu a resposta certa! <br><br>" : "a) Ajuda a ver desafios como oportunidades de evolução. <br><br> Feedback: Aprender continuamente transforma desafios em oportunidades, fortalecendo a capacidade de lidar com mudanças e adversidades.<br><br>",
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
/*Questão03 */
/*Questão04 */
document.querySelectorAll(".checkResposta13").forEach(check => {
    check.addEventListener("change", function() {
        document.querySelectorAll(".checkResposta13").forEach(chk => chk !== this && (chk.checked = false));
        document.getElementById("botaoResposta13").style.display = "block";
    });
});

function verificarResposta13() {
    let selecionado = document.querySelector(".checkResposta13:checked");
    if (selecionado) {
        let correto = selecionado.getAttribute("data-correto") === "true";
        Swal.fire({
            title: correto ? "Parabéns! <br><br>" : "Alternativa correta: <br><br>",
            html: correto ? "Você escolheu a resposta certa! <br><br>" : "d) Ajustar-se às mudanças de forma positiva. <br><br> Feedback: Ser flexível significa se ajustar às mudanças, contribuindo para a produtividade e inovação.<br><br>",
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
/*Questão04*/
/*Questão05*/
document.querySelectorAll(".checkResposta14").forEach(check => {
    check.addEventListener("change", function() {
        document.querySelectorAll(".checkResposta14").forEach(chk => chk !== this && (chk.checked = false));
        document.getElementById("botaoResposta14").style.display = "block";
    });
});

function verificarResposta14() {
    let selecionado = document.querySelector(".checkResposta14:checked");
    if (selecionado) {
        let correto = selecionado.getAttribute("data-correto") === "true";
        Swal.fire({
            title: correto ? "Parabéns! <br><br>" : "Alternativa correta: <br><br>",
            html: correto ? "Você escolheu a resposta certa! <br><br>" : "c) Analisar a situação antes de tomar decisões. <br><br> Feedback: Analisar a situação antes de reagir permite tomar decisões ponderadas, demonstrando autocontrole emocional.<br><br>",
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
/*Questão05*/
/*Questão06*/
document.querySelectorAll(".checkResposta16").forEach(check => {
    check.addEventListener("change", function() {
        document.querySelectorAll(".checkResposta16").forEach(chk => chk !== this && (chk.checked = false));
        document.getElementById("botaoResposta16").style.display = "block";
    });
});

function verificarResposta16() {
    let selecionado = document.querySelector(".checkResposta16:checked");
    if (selecionado) {
        let correto = selecionado.getAttribute("data-correto") === "true";
        Swal.fire({
            title: correto ? "Parabéns! <br><br>" : "Alternativa correta: <br><br>",
            html: correto ? "Você escolheu a resposta certa! <br><br>" : "a) Oferecem apoio emocional e ajudam na superação de desafios. <br><br> Feedback: Redes de suporte fornecem apoio emocional e colaborativo, fortalecendo a capacidade de superar adversidades.<br><br>",
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
/*Questão06*/
/*Questão07*/
document.querySelectorAll(".checkResposta17").forEach(check => {
    check.addEventListener("change", function() {
        document.querySelectorAll(".checkResposta17").forEach(chk => chk !== this && (chk.checked = false));
        document.getElementById("botaoResposta17").style.display = "block";
    });
});

function verificarResposta17() {
    let selecionado = document.querySelector(".checkResposta17:checked");
    if (selecionado) {
        let correto = selecionado.getAttribute("data-correto") === "true";
        Swal.fire({
            title: correto ? "Parabéns! <br><br>" : "Alternativa correta: <br><br>",
            html: correto ? "Você escolheu a resposta certa! <br><br>" : "b) Transparência e clareza na transmissão das informações <br><br> Feedback: Comunicação eficaz durante mudanças envolve clareza e transparência para manter o alinhamento.<br><br>",
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
/*Questão07*/
/*Questão08*/
document.querySelectorAll(".checkResposta18").forEach(check => {
    check.addEventListener("change", function() {
        document.querySelectorAll(".checkResposta18").forEach(chk => chk !== this && (chk.checked = false));
        document.getElementById("botaoResposta18").style.display = "block";
    });
});

function verificarResposta18() {
    let selecionado = document.querySelector(".checkResposta18:checked");
    if (selecionado) {
        let correto = selecionado.getAttribute("data-correto") === "true";
        Swal.fire({
            title: correto ? "Parabéns! <br><br>" : "Alternativa correta: <br><br>",
            html: correto ? "Você escolheu a resposta certa! <br><br>" : "a) Promove perspectivas variadas para lidar com desafios. <br><br> Feedback: Diversidade oferece múltiplas perspectivas, promovendo soluções inovadoras e fortalecendo a resiliência da equipe.<br><br>",
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
/*Questão08*/
/*Questão09*/
document.querySelectorAll(".checkResposta19").forEach(check => {
    check.addEventListener("change", function() {
        document.querySelectorAll(".checkResposta19").forEach(chk => chk !== this && (chk.checked = false));
        document.getElementById("botaoResposta19").style.display = "block";
    });
});

function verificarResposta19() {
    let selecionado = document.querySelector(".checkResposta19:checked");
    if (selecionado) {
        let correto = selecionado.getAttribute("data-correto") === "true";
        Swal.fire({
            title: correto ? "Parabéns! <br><br>" : "Alternativa correta: <br><br>",
            html: correto ? "Você escolheu a resposta certa! <br><br>" : "d) Facilita a busca por soluções criativas e eficazes. <br><br> Feedback: Adaptabilidade é essencial para encontrar soluções criativas e inovadoras em ambientes dinâmicos.<br><br>",
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
/*Questão09*/
/*Questão10*/
document.querySelectorAll(".checkResposta20").forEach(check => {
    check.addEventListener("change", function() {
        document.querySelectorAll(".checkResposta20").forEach(chk => chk !== this && (chk.checked = false));
        document.getElementById("botaoResposta20").style.display = "block";
    });
});

function verificarResposta20() {
    let selecionado = document.querySelector(".checkResposta20:checked");
    if (selecionado) {
        let correto = selecionado.getAttribute("data-correto") === "true";
        Swal.fire({
            title: correto ? "Parabéns! <br><br>" : "Alternativa correta: <br><br>",
            html: correto ? "Você escolheu a resposta certa! <br><br>" : "a) Garantem melhor desempenho em cenários dinâmicos e desafiadores. <br><br> Feedback: Resiliência e adaptabilidade ampliam o impacto das habilidades técnicas, tornando os profissionais mais eficazes em mudanças e desafios.<br><br> Feedback FINAL:Desenvolver resiliência e adaptabilidade é essencial para enfrentar desafios, mudanças e adversidades com equilíbrio emocional e mental, promovendo bem-estar e reduzindo o impacto do estresse. Essas competências fortalecem a autoconfiança e a capacidade de aprender continuamente, permitindo lidar com situações incertas e encontrar soluções criativas. No ambiente profissional, contribuem para maior desempenho, produtividade e liderança eficaz, ao passo que, na vida pessoal, facilitam a manutenção de relações saudáveis e a construção de uma mentalidade aberta e flexível, fundamental em um mundo em constante transformação.<br><br>",
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
/*Questão09*/