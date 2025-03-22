/*Questão01*/
const draggables = document.querySelectorAll('.draggable');
            const dropzone = document.getElementById('dropzone');
            let hasDropped = false;  // Flag to check if an item has been dropped
    
            draggables.forEach(draggable => {
                draggable.addEventListener('dragstart', (e) => {
                    // Só permite o drag se ainda não foi feito um drop
                    if (hasDropped) {
                        e.preventDefault();
                        return;
                    }
                    e.dataTransfer.setData('text', e.target.id);
                    dropzone.classList.add('highlight-drop');
                });
            });
    
            dropzone.addEventListener('dragover', (e) => {
                e.preventDefault();
            });
    
            dropzone.addEventListener('dragleave', () => {
                dropzone.classList.remove('highlight-drop');
            });
    
            dropzone.addEventListener('drop', (e) => {
                if (hasDropped) return;  // Se já houve um drop, não faz nada
    
                e.preventDefault();
                dropzone.classList.remove('highlight-drop');
    
                const itemId = e.dataTransfer.getData('text');
                const draggedItem = document.getElementById(itemId);
                dropzone.appendChild(draggedItem);
                hasDropped = true;  // Marcar que o item foi dropado
    
                // Verificar se o item soltado é o correto ou errado
                if (itemId === 'drag4') {
                    // Resposta certa
                    Swal.fire({
                        title: 'Resposta Certa!<br><br>',
                        html: 'Você escolheu o item correto.<br><br>',
                        icon: 'success',
                    });
                } else if (itemId === 'drag2') {
                    // Resposta errada
                    Swal.fire({
                        title: 'Resposta Errada!<br><br>',
                        html: 'Este não é o item correto.<br><br>',
                        icon: 'error',
                    }).then(() => {
                        // Recarregar a página após o feedback de resposta errada
                        location.reload();
                    });
                }else if (itemId === 'drag3') {
                    // Resposta errada
                    Swal.fire({
                        title: 'Resposta Errada!<br><br>',
                        html: 'Este não é o item correto.<br><br>',
                        icon: 'error',
                    }).then(() => {
                        // Recarregar a página após o feedback de resposta errada
                        location.reload();
                    });
                }else if (itemId === 'drag1') {
                    // Resposta errada
                    Swal.fire({
                        title: 'Resposta Errada!<br><br>',
                        html: 'Este não é o item correto.<br><br>',
                        icon: 'error',
                    }).then(() => {
                        // Recarregar a página após o feedback de resposta errada
                        location.reload();
                    });
                } else {
                    // Para outros itens que não são nem o certo nem o errado
                    Swal.fire({
                        title: 'Item Inválido!',
                        text: 'Esse item não tem resposta correta ou errada.',
                        icon: 'warning',
                    });
                }
            });
/*Questão01*/
/*Questão02*/
const draggables2 = document.querySelectorAll('.draggable02');
    const dropzone2 = document.getElementById('dropzone2');
    let hasDropped2 = false;

    draggables2.forEach(draggable => {
        draggable.addEventListener('dragstart', (e) => {
            if (hasDropped2) {
                e.preventDefault();
                return;
            }
            e.dataTransfer.setData('text', e.target.id);
            dropzone2.classList.add('highlight-drop2');
        });
    });

    dropzone2.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    dropzone2.addEventListener('dragleave', () => {
        dropzone2.classList.remove('highlight-drop2');
    });

    dropzone2.addEventListener('drop', (e) => {
        if (hasDropped2) return;

        e.preventDefault();
        dropzone2.classList.remove('highlight-drop2');

        const itemId2 = e.dataTransfer.getData('text');
        const draggedItem2 = document.getElementById(itemId2);

        // Adiciona o item no dropzone (removendo os anteriores)
        dropzone2.innerHTML = "";
        dropzone2.appendChild(draggedItem2);
        hasDropped2 = true;

        if (itemId2 === 'dragItem1') {
            Swal.fire({
                title: 'Resposta Certa!<br><br>',
                html: 'Você escolheu a opção correta.<br><br>',
                icon: 'success',
                confirmButtonText: 'OK'
            });
        } else {
            Swal.fire({
                title: 'Resposta Errada!<br><br>',
                html: 'Esse não é o item correto.<br><br>',
                icon: 'error',
                confirmButtonText: 'Tentar novamente'
            }).then(() => {
                location.reload();
            });
        }
    });
/*Questão02*/    
/*Questão03*/ 
const draggables3 = document.querySelectorAll('.draggable03');
const dropzone3 = document.getElementById('dropzone3');
let hasDropped3 = false;

draggables3.forEach(draggable => {
    draggable.addEventListener('dragstart', (e) => {
        if (hasDropped3) {
            e.preventDefault();
            return;
        }
        e.dataTransfer.setData('text', e.target.id);
        dropzone3.classList.add('highlight-drop3');
    });
});

dropzone3.addEventListener('dragover', (e) => {
    e.preventDefault();
});

dropzone3.addEventListener('dragleave', () => {
    dropzone3.classList.remove('highlight-drop3');
});

dropzone3.addEventListener('drop', (e) => {
    if (hasDropped3) return;

    e.preventDefault();
    dropzone3.classList.remove('highlight-drop3');

    const itemId3 = e.dataTransfer.getData('text');
    const draggedItem3 = document.getElementById(itemId3);

    // Adiciona o item no dropzone (removendo os anteriores)
    dropzone3.innerHTML = "";
    dropzone3.appendChild(draggedItem3);
    hasDropped3 = true;

    if (itemId3 === 'dragItemC') {
        Swal.fire({
            title: 'Resposta Certa!<br><br>',
            html: 'Você escolheu a opção correta.<br><br>',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    } else {
        Swal.fire({
            title: 'Resposta Errada!<br><br>',
            html: 'Esse não é o item correto.<br><br>',
            icon: 'error',
            confirmButtonText: 'Tentar novamente'
        }).then(() => {
            location.reload();
        });
    }
});
/*Questão03*/      