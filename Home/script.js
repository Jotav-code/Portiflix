document.addEventListener("DOMContentLoaded", function () {
    // Seleciona o modal e o botão de fechar
    const modal = document.getElementById("modal");
    const closeModal = document.querySelector(".close");

    // Seleciona todos os botões "Ver Preview"
    const previewButtons = document.querySelectorAll(".projetos .items .preview h4");

    // Garante que o modal sempre inicie escondido
    modal.style.display = "none";

    // Adiciona evento de clique nos botões para abrir o modal
    previewButtons.forEach(button => {
        button.addEventListener("click", () => {
            modal.style.display = "flex"; // Exibe o modal ao clicar
        });
    });

    // Fecha o modal ao clicar no botão "X"
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Fecha o modal ao clicar fora dele
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
