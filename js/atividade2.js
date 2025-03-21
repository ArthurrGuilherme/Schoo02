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