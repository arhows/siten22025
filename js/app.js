// Seleciona os elementos necessários
const whatsappChat = document.getElementById("whatsapp-chat");
const whatsappFloat = document.getElementById("whatsapp-float");
const closeBtn = document.getElementById("close-btn");

whatsappFloat.addEventListener("click", () => {
  whatsappChat.classList.add("show"); // Adiciona classe para exibir com animação
});

closeBtn.addEventListener("click", () => {
  whatsappChat.classList.remove("show"); // Remove a classe para ocultar
});
