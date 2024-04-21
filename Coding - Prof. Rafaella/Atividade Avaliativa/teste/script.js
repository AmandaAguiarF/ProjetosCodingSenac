document.addEventListener("DOMContentLoaded", function() {
  // Adiciona evento de clique ao botão "Adicionar ao Carrinho"
  document.querySelector("#adicionarCarrinho").addEventListener("click", function() {
    alert("Produto adicionado ao carrinho!");
    // Aqui você pode adicionar a lógica para atualizar o número de itens no carrinho
  });

  // Adiciona evento de clique aos links de navegação
  document.querySelectorAll(".nav-link").forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault(); // Impede o comportamento padrão do link
      // Oculta todos os elementos com a classe "content"
      document.querySelectorAll(".content").forEach(function(content) {
        content.style.display = "none";
      });

      // Exibe o conteúdo correspondente ao link clicado
      document.querySelector(this.getAttribute("href")).style.display = "block";
    });
  });

  // Adiciona evento de mudança ao campo de quantidade
  document.querySelector("#quantidade").addEventListener("input", function() {
    // Aqui você pode adicionar a lógica para atualizar o preço total com base na quantidade selecionada
  });

  // Adiciona evento de mudança ao campo de cor (supondo que existe um campo com o id "cor")
  document.querySelector("#cor").addEventListener("change", function() {
    // Aqui você pode adicionar a lógica para atualizar o preço total com base na cor selecionada
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // Bloqueia a classificação para todos os comentários
  document.querySelectorAll(".star").forEach(function(star) {
    star.classList.remove("star");
    star.classList.add("star-disabled");
  });
});



