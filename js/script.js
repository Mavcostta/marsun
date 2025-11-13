// Loading Screen
window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loading-screen");
  setTimeout(() => {
    loadingScreen.classList.add("hide");
    // Remove completamente após a animação
    setTimeout(() => {
      loadingScreen.style.display = "none";
    }, 500);
  }, 1000); // Reduzido para 1 segundo
});

// Lazy Loading de Imagens para Performance
const imageObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        // Carrega a imagem apenas quando visível
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
        }
        observer.unobserve(img);
      }
    });
  },
  {
    rootMargin: "50px", // Começa a carregar 50px antes de aparecer
  }
);

// Aplicar lazy loading em todas as imagens de produtos e lifestyle
document.addEventListener("DOMContentLoaded", () => {
  const lazyImages = document.querySelectorAll(
    ".product-card img, .lifestyle-item img, .about-image img"
  );
  lazyImages.forEach((img) => {
    // Move src para data-src
    if (img.src && !img.dataset.src) {
      img.dataset.src = img.src;
      img.src =
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23f0f0f0"/%3E%3C/svg%3E'; // Placeholder
    }
    imageObserver.observe(img);
  });
});

// Animação de scroll suave para produtos
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observa todos os cards de produtos, features e lifestyle
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    ".product-card, .feature-card, .lifestyle-item"
  );
  elements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});

// Dados dos produtos
const produtos = [
  {
    id: 8,
    nome: "Camiseta UV Montanha Elite",
    descricao: "Tecnologia para alta montanha",
    preco: 12.0,
    imagem: "imagens/montanha (1).jpeg",
    categoria: "montanha",
  },
  {
    id: 9,
    nome: "Camiseta UV Trekking Pro",
    descricao: "Resistência para longas caminhadas",
    preco: 12.0,
    imagem: "imagens/montanha (2).jpeg",
    categoria: "montanha",
  },
  {
    id: 10,
    nome: "Camiseta UV Adventure",
    descricao: "Para aventureiros de plantão",
    preco: 12.0,
    imagem: "imagens/montanha (3).jpeg",
    categoria: "montanha",
  },
  {
    id: 11,
    nome: "Camiseta UV Plus Size G",
    descricao: "Tamanhos G - Conforto e proteção",
    preco: 16.0,
    imagem: "imagens/montanha G(4).jpeg",
    categoria: "montanha",
  },
  {
    id: 12,
    nome: "Camiseta UV Infantil Fashion",
    descricao: "Estilo e proteção para crianças",
    preco: 9.0,
    imagem: "imagens/infantil2.jpeg",
    categoria: "infantil",
  },
  {
    id: 13,
    nome: "Camiseta UV Plus Size GG",
    descricao: "Tamanhos GG - Conforto total",
    preco: 16.0,
    imagem: "imagens/praiagg.jpeg",
    categoria: "praia",
  },
  {
    id: 14,
    nome: "Camiseta UV Ocean",
    descricao: "Inspirada nas ondas do mar",
    preco: 12.0,
    imagem: "imagens/praia (3).jpeg",
    categoria: "praia",
  },
  {
    id: 15,
    nome: "Camiseta UV Paradise",
    descricao: "Seu paraíso pessoal",
    preco: 12.0,
    imagem: "imagens/praia (4).jpeg",
    categoria: "praia",
  },
  {
    id: 16,
    nome: "Camiseta UV Tropical",
    descricao: "Vibes tropicais",
    preco: 12.0,
    imagem: "imagens/praia (5).jpeg",
    categoria: "praia",
  },
  {
    id: 17,
    nome: "Camiseta UV Runner Pro",
    descricao: "Máxima performance para corrida",
    preco: 12.0,
    imagem: "imagens/esporte1 (1).jpeg",
    categoria: "esportes",
  },
  {
    id: 18,
    nome: "Camiseta UV Extreme Sports",
    descricao: "Para esportes radicais",
    preco: 12.0,
    imagem: "imagens/esporte1 (3).jpeg",
    categoria: "esportes",
  },
  {
    id: 19,
    nome: "Camiseta UV Athlete Elite",
    descricao: "Para atletas de elite",
    preco: 12.0,
    imagem: "imagens/esporte1 (6).jpeg",
    categoria: "esportes",
  },
  {
    id: 20,
    nome: "Camiseta UV Kids Adventure",
    descricao: "Proteção e diversão para crianças",
    preco: 9.0,
    imagem: "imagens/infantil.jpeg",
    categoria: "infantil",
  },
  {
    id: 21,
    nome: "Bermuda UV Proteção Solar - P",
    descricao: "Tamanho P - Conforto e proteção",
    preco: 13.0,
    imagem: "imagens/bermudap.jpeg",
    categoria: "bermudas",
  },
  {
    id: 22,
    nome: "Bermuda UV Proteção Solar - M",
    descricao: "Tamanho M - Conforto e proteção",
    preco: 13.0,
    imagem: "imagens/bermudam.jpeg",
    categoria: "bermudas",
  },
  {
    id: 23,
    nome: "Bermuda UV Proteção Solar - G",
    descricao: "Tamanho G - Conforto e proteção",
    preco: 13.0,
    imagem: "imagens/bermudag.jpeg",
    categoria: "bermudas",
  },
  {
    id: 24,
    nome: "Bermuda UV Estilo Verão - P",
    descricao: "Tamanho P - Estilo e proteção",
    preco: 13.0,
    imagem: "imagens/bermudap (2).jpeg",
    categoria: "bermudas",
  },
];

// Carrinho de compras
let carrinho = JSON.parse(localStorage.getItem("marsun_carrinho")) || [];

// DOM Elements
const cartBtn = document.querySelector(".cart-btn");
const cartSidebar = document.querySelector(".cart-sidebar");
const closeCartBtn = document.querySelector(".close-cart-btn");
const overlay = document.querySelector(".overlay");
const cartCount = document.querySelector(".cart-count");
const cartItems = document.getElementById("cartItems");
const totalPriceEl = document.querySelector(".total-price");
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navMenu = document.querySelector(".nav-menu");

// Navegação
document.addEventListener("DOMContentLoaded", () => {
  // Inicializar carrinho
  atualizarCarrinho();

  // Menu mobile
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  // Navegação smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        // Fechar menu mobile após click
        navMenu.classList.remove("active");
      }
    });
  });

  // Ativar link do menu baseado no scroll
  window.addEventListener("scroll", () => {
    let current = "";
    const sections = document.querySelectorAll("section[id]");

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop - 100) {
        current = section.getAttribute("id");
      }
    });

    document.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // Adicionar ao carrinho
  document.querySelectorAll(".btn-add-cart").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const productId = parseInt(e.currentTarget.dataset.product);
      adicionarAoCarrinho(productId);

      // Feedback visual
      e.currentTarget.innerHTML = '<i class="fas fa-check"></i> Adicionado!';
      setTimeout(() => {
        e.currentTarget.innerHTML =
          '<i class="fas fa-cart-plus"></i> Adicionar ao Carrinho';
      }, 2000);
    });
  });

  // Filtros de produtos
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      // Atualizar botão ativo
      document
        .querySelectorAll(".filter-btn")
        .forEach((b) => b.classList.remove("active"));
      e.currentTarget.classList.add("active");

      const filter = e.currentTarget.dataset.filter;
      filtrarProdutos(filter);
    });
  });

  // Newsletter
  const newsletterForm = document.querySelector(".newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = e.target.querySelector('input[type="email"]').value;
      alert(`Obrigado por se inscrever! Você receberá novidades em ${email}`);
      e.target.reset();
    });
  }

  // Formulário de contato
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      e.target.reset();
    });
  }
});

// Abrir/Fechar carrinho
cartBtn?.addEventListener("click", () => {
  cartSidebar.classList.add("active");
  overlay.classList.add("active");
});

closeCartBtn?.addEventListener("click", fecharCarrinho);
overlay?.addEventListener("click", fecharCarrinho);

function fecharCarrinho() {
  cartSidebar.classList.remove("active");
  overlay.classList.remove("active");
}

// Adicionar produto ao carrinho
function adicionarAoCarrinho(productId) {
  const produto = produtos.find((p) => p.id === productId);
  if (!produto) return;

  const itemExistente = carrinho.find((item) => item.id === productId);

  if (itemExistente) {
    itemExistente.quantidade++;
  } else {
    carrinho.push({
      ...produto,
      quantidade: 1,
    });
  }

  salvarCarrinho();
  atualizarCarrinho();

  // Abrir carrinho automaticamente
  cartSidebar.classList.add("active");
  overlay.classList.add("active");
}

// Remover produto do carrinho
function removerDoCarrinho(productId) {
  carrinho = carrinho.filter((item) => item.id !== productId);
  salvarCarrinho();
  atualizarCarrinho();
}

// Atualizar quantidade
function atualizarQuantidade(productId, quantidade) {
  const item = carrinho.find((item) => item.id === productId);
  if (item) {
    item.quantidade = quantidade;
    if (item.quantidade <= 0) {
      removerDoCarrinho(productId);
    } else {
      salvarCarrinho();
      atualizarCarrinho();
    }
  }
}

// Atualizar interface do carrinho
function atualizarCarrinho() {
  // Atualizar contador
  const totalItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
  cartCount.textContent = totalItens;

  // Atualizar items
  if (carrinho.length === 0) {
    cartItems.innerHTML = '<p class="empty-cart">Seu carrinho está vazio</p>';
    totalPriceEl.textContent = "R$ 0,00";
    return;
  }

  cartItems.innerHTML = carrinho
    .map(
      (item) => `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.imagem}" alt="${item.nome}">
            </div>
            <div class="cart-item-info">
                <div class="cart-item-title">${item.nome}</div>
                <div class="cart-item-price">R$ ${item.preco.toFixed(2)}</div>
                <div class="cart-item-quantity">
                    <button onclick="atualizarQuantidade(${item.id}, ${
        item.quantidade - 1
      })">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span>${item.quantidade}</span>
                    <button onclick="atualizarQuantidade(${item.id}, ${
        item.quantidade + 1
      })">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removerDoCarrinho(${
              item.id
            })">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `
    )
    .join("");

  // Atualizar total
  const total = carrinho.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );
  totalPriceEl.textContent = `R$ ${total.toFixed(2)}`;
}

// Salvar carrinho no localStorage
function salvarCarrinho() {
  localStorage.setItem("marsun_carrinho", JSON.stringify(carrinho));
}

// Filtrar produtos
function filtrarProdutos(filtro) {
  const productCards = document.querySelectorAll(".product-card");

  productCards.forEach((card) => {
    const categoria = card.dataset.category;

    if (filtro === "all") {
      card.style.display = "block";
    } else {
      if (categoria.includes(filtro)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    }
  });
}

// Finalizar compra
document.querySelector(".btn-checkout")?.addEventListener("click", () => {
  if (carrinho.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }

  const total = carrinho.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  // Monta a mensagem para o WhatsApp
  let mensagem = `*🛒 NOVO PEDIDO - MAR SUN*\n\n`;
  mensagem += `*Itens do Pedido:*\n`;
  mensagem += `━━━━━━━━━━━━━━━━━━━━\n\n`;

  carrinho.forEach((item, index) => {
    mensagem += `${index + 1}. *${item.nome}*\n`;
    mensagem += `   📦 Quantidade: ${item.quantidade}\n`;
    mensagem += `   💰 Preço unit.: R$ ${item.preco.toFixed(2)}\n`;
    mensagem += `   💵 Subtotal: R$ ${(item.preco * item.quantidade).toFixed(
      2
    )}\n\n`;
  });

  mensagem += `━━━━━━━━━━━━━━━━━━━━\n`;
  mensagem += `*TOTAL: R$ ${total.toFixed(2)}*\n\n`;
  mensagem += `_Aguardando confirmação do pedido..._`;

  // Número do WhatsApp
  const numeroWhatsApp = "5581989651063";

  // Codifica a mensagem para URL
  const mensagemCodificada = encodeURIComponent(mensagem);

  // Abre o WhatsApp com a mensagem
  window.open(
    `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`,
    "_blank"
  );

  // Limpa o carrinho após enviar
  carrinho = [];
  salvarCarrinho();
  atualizarCarrinho();
  fecharCarrinho();
});

// Busca (funcionalidade básica)
document.querySelector(".search-btn")?.addEventListener("click", () => {
  const termo = prompt("Digite o que você está procurando:");
  if (termo) {
    const produtosSection = document.querySelector("#produtos");
    produtosSection.scrollIntoView({ behavior: "smooth" });

    // Aqui você implementaria uma busca real
    alert(`Buscando por: ${termo}`);
  }
});

// Adicionar estilo para os botões de quantidade no carrinho
const style = document.createElement("style");
style.textContent = `
    .cart-item-quantity {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-top: 0.5rem;
    }
    
    .cart-item-quantity button {
        background: var(--primary-color);
        color: white;
        border: none;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8rem;
        transition: all 0.3s ease;
    }
    
    .cart-item-quantity button:hover {
        background: var(--primary-dark);
        transform: scale(1.1);
    }
    
    .cart-item-quantity span {
        font-weight: 600;
        min-width: 30px;
        text-align: center;
    }
    
    .cart-item {
        position: relative;
    }
    
    .cart-item-remove {
        position: absolute;
        top: 1rem;
        right: 1rem;
    }
`;
document.head.appendChild(style);

// Formulário de Pedido via WhatsApp
const pedidoForm = document.getElementById("pedidoForm");
if (pedidoForm) {
  pedidoForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const tipoCompra = document.getElementById("tipoCompra").value;
    const produto = document.getElementById("produto").value;
    const quantidade = document.getElementById("quantidade").value;
    const tamanho = document.getElementById("tamanho").value;
    const observacoes = document.getElementById("observacoes").value;

    // Monta a mensagem para o WhatsApp
    let mensagem = `*NOVO PEDIDO - MAR SUN*\n\n`;
    mensagem += `👤 *Nome:* ${nome}\n`;
    mensagem += `📱 *Telefone:* ${telefone}\n`;
    mensagem += `🛒 *Tipo de Compra:* ${tipoCompra}\n`;
    mensagem += `👕 *Produto:* ${produto}\n`;
    mensagem += `📦 *Quantidade:* ${quantidade}\n`;
    if (tamanho) mensagem += `📏 *Tamanho:* ${tamanho}\n`;
    if (observacoes) mensagem += `📝 *Observações:* ${observacoes}\n`;

    // Número do WhatsApp
    const numeroWhatsApp = "5581989651063"; // +55 81 98965-1063

    // Codifica a mensagem para URL
    const mensagemCodificada = encodeURIComponent(mensagem);

    // Abre o WhatsApp com a mensagem
    window.open(
      `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`,
      "_blank"
    );

    // Limpa o formulário
    pedidoForm.reset();
  });
}

console.log("🌊 Mar Sun - Website carregado com sucesso!");
console.log("💙 Proteção que acompanha sua aventura");
