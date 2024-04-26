// Arquivo que contém o código relacionado ao bloqueio de classificação para comentários.

document.addEventListener("DOMContentLoaded", function() {
    // Bloqueia a classificação para todos os comentários
    document.querySelectorAll(".star").forEach(function(star) {
      star.classList.remove("star");
      star.classList.add("star-disabled");
    });
  });
  //-----------------------


const cartIcon = document.getElementById('cart-icon');
const cartOverlay = document.getElementById('cart-overlay');
const closeCart = document.getElementById('close-cart');
const cartItems = document.getElementById('cart-items');
const totalPrice = document.getElementById('total-price');
const addToCartButtons = document.querySelectorAll('.add-to-cart');

let cart = [];

// Função para atualizar o total do carrinho
function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalPrice.textContent = total.toFixed(2);
}

// Função para atualizar a quantidade de itens no carrinho
function updateCartCount() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-total').textContent = totalCount;
}

// Função para remover um item específico do carrinho
function removeItem(index) {
    cart.splice(index, 1);
    updateCartDisplay();
    updateCartTotal();
    updateCartCount();
}

// Função para diminuir a quantidade de um item no carrinho
function decreaseQuantity(index) {
    const item = cart[index];
    if (item.quantity > 1) {
        item.quantity--;
    } else {
        removeItem(index); // Se a quantidade for 1, remova o item
    }
    updateCartDisplay();
    updateCartTotal();
    updateCartCount();
}

// Função para adicionar um item ao carrinho
function addToCart(name, price) {
    const existingItemIndex = cart.findIndex(item => item.name === name);

    if (existingItemIndex !== -1) {
        // Se o item já estiver no carrinho, aumente a quantidade
        cart[existingItemIndex].quantity++;
    } else {
        // Adiciona o novo item ao carrinho
        cart.push({ name, price, quantity: 1 });
    }

    updateCartDisplay();
    updateCartTotal();
    updateCartCount();
}

// Função para atualizar a exibição do carrinho
function updateCartDisplay() {
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name}: R$ ${item.price.toFixed(2)} x ${item.quantity}`;
        
        // Adiciona o botão "Diminuir Quantidade" para o item na lista do carrinho
        const decreaseButton = document.createElement('button');
        decreaseButton.textContent = '-';
        decreaseButton.classList.add('decrease-button');
        decreaseButton.addEventListener('click', () => {
            decreaseQuantity(index); // Diminui a quantidade ou remove o item se for 1
        });
        
        li.appendChild(decreaseButton);
        cartItems.appendChild(li);
    });
}

// Adiciona funcionalidade ao ícone do carrinho
cartIcon.addEventListener('click', () => {
    cartOverlay.style.display = 'flex';
});

// Adiciona funcionalidade ao botão "Fechar"
closeCart.addEventListener('click', () => {
    cartOverlay.style.display = 'none';
});

// Adiciona funcionalidade aos botões "Adicionar ao Carrinho"
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const name = button.dataset.name;
        const price = parseFloat(button.dataset.price);
        addToCart(name, price);
    });
});
