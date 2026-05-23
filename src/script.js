// ==========================================
// 1. CONFIGURAÇÕES DA LOJA E PRODUTOS
// ==========================================
const lojaConfig = {
    telefoneWhatsApp: "5581988981497", // Coloque o código do país (55) + DDD + Número
    horaAbertura: 18,
    horaFechamento: 23,
    // Dias da semana que a loja abre (0 = Domingo, 1 = Segunda, 2 = Terça, etc.)
    // Exemplo: Abre de Terça a Domingo (fecha segunda)
    diasAbertos: [0, 2, 3, 4, 5, 6] 
};

const categorias = ['Todos', 'Pizzas', 'Brotinhos', 'Açaí', 'Bebidas'];
const diasSemanaNomes = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

// PAINEL FÁCIL PARA EDITAR PRODUTOS (DESCRIÇÕES CORRIGIDAS)
const listaPadraoProdutos = [
    {
        id: 1,
        nome: "Pizza Calabresa",
        descricao: "Mussarela, calabresa fatiada, cebola e orégano.",
        preco: 45.90,
        categoria: "Pizzas",
        imagem: "projeto ft/ft das pizza/calabresa.png"
    },
    {
        id: 2,
        nome: "Pizza Margherita",
        descricao: "Mussarela, tomate em rodelas, manjericão fresco e orégano.",
        preco: 42.00,
        categoria: "Pizzas",
        imagem: "projeto ft/ft das pizza/Marquerita.jpg"
    },
    {
        id: 3,
        nome: "Pizza Atum",
        descricao: "MOLHO DE TOMATE, MUSSARELA, ATUM, CEBOLA, azeitonas e orégano.",
        preco: 42.90,
        categoria: "Pizzas",
        imagem: "projeto ft/ft das pizza/atum.jpg"
    },
    {
        id: 4,
        nome: "Pizza Bacon",
        descricao: "MOLHO DE TOMATE, MUSSARELA, CEBOLA, BACON, azeitonas e orégano.",
        preco: 42.90,
        categoria: "Pizzas",
        imagem: "projeto ft/ft das pizza/Bacon.jpg"
    },
    {
        id: 5,
        nome: "Pizza Caipira",
        descricao: "MOLHO DE TOMATE, MUSSARELA, FRANGO, CATUPIRY, MILHO, azeitonas e orégano.",
        preco: 37.90,
        categoria: "Pizzas",
        imagem: "projeto ft/ft das pizza/Caipira.jpg"
    },
    {
        id: 6,
        nome: "Pizza Camarão",
        descricao: "MOLHO DE TOMATE, MUSSARELA, CAMARÃO, CATUPIRY, orégano.",
        preco: 55.90,
        categoria: "Pizzas",
        imagem: "projeto ft/ft das pizza/Camarão.png"
    },
    {
        id: 7,
        nome: "Pizza Mista",
        descricao: "MOLHO DE TOMATE, MUSSARELA, FRANGO, CATUPIRY, MILHO, azeitonas e orégano.",
        preco: 37.90,
        categoria: "Pizzas",
        imagem: "projeto ft/ft das pizza/Mista.jpg"
    },
    {
        id: 8,
        nome: "Pizza Mussarela",
        descricao: "MOLHO DE TOMATE, MUSSARELA, azeitonas e orégano",
        preco: 35.90,
        categoria: "Pizzas",
        imagem: "projeto ft/ft das pizza/mussarela.png"
    },
    {
        id: 9,
        nome: "Pizza Napolitana",
        descricao: "MOLHO DE TOMATE, MUSSARELA, TOMATE, MILHO E AZEITONAS.",
        preco: 35.90,
        categoria: "Pizzas",
        imagem: "projeto ft/ft das pizza/Napolitana.jpg"
    },
    {
        id: 10,
        nome: "Pizza Nordestina",
        descricao: "MOLHO DE TOMATE, MUSSARELA, CHARQUE, CATUPIRY, MILHO, CEBOLA E MILHO.",
        preco: 42.90,
        categoria: "Pizzas",
        imagem: "projeto ft/ft das pizza/Nodestina.jpg"
    },
    {
        id: 11,
        nome: "Pizza Portuguesa",
        descricao: "Mussarela, presunto, ovos cozidos, cebola, ervilha, azeitonas e orégano.",
        preco: 35.90,
        categoria: "Pizzas",
        imagem: "projeto ft/ft das pizza/portugeusa.jpg"
    },
    {
        id: 12,
        nome: "Pizza Presunto",
        descricao: "Mussarela, fatias de presunto magro, tomate, azeitonas e orégano.",
        preco: 35.90,
        categoria: "Pizzas",
        imagem: "projeto ft/ft das pizza/presunto].jpg"
    },
    {
        id: 13,
        nome: "Pizza Sertaneja",
        descricao: "Mussarela, carne de sol, cebola roxa, manteiga da terra e orégano.",
        preco: 50.90,
        categoria: "Pizzas",
        imagem: "projeto ft/ft das pizza/sertaneja.png"
    },
    {
        id: 14,
        nome: "Pizza Três Queijos",
        descricao: "Mussarela, provolone, catupiry e orégano.",
        preco: 35.90,
        categoria: "Pizzas",
        imagem: "projeto ft/ft das pizza/trez quijos.png"
    },
    {
        id: 15,
        nome: "Brotinho 4 Queijos",
        descricao: "Mussarela, provolone, parmesão e catupiry original.",
        preco: 25.00,
        categoria: "Brotinhos",
        imagem: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 16,
        nome: "Açaí Tradicional 500ml",
        descricao: "Açaí puro com banana, morango, leite condensado e granola.",
        preco: 22.90,
        categoria: "Açaí",
        imagem: "https://images.unsplash.com/photo-1590135338381-893fa1380922?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 17,
        nome: "Coca-Cola 1L",
        descricao: "Refrigerante Coca-Cola 1Litros gelado.",
        preco: 10.00,
        categoria: "Bebidas",
        imagem: "projeto ft/ftBebida/Coca.jpg"
    },
    {
        id: 18,
        nome: "Coca-Cola 350ML",
        descricao: "Refrigerante Coca-Cola 350ML gelado.",
        preco: 6.00,
        categoria: "Bebidas",
        imagem: "projeto ft/ftBebida/CocaLata.jpg"
    },
    {
        id: 19,
        nome: "Guarána Antártica 1L",
        descricao: "Refrigerante Guarána Antártica 1 Litros gelado.",
        preco: 10.00,
        categoria: "Bebidas",
        imagem: "projeto ft/ftBebida/guarana.jpg"
    },
    {
        id: 20,
        nome: "Guarána 350ML",
        descricao: "Refrigerante Guarána 350ML gelado.",
        preco: 6.00,
        categoria: "Bebidas",
        imagem: "projeto ft/ftBebida/guaranaLata.jpg"
    }


];

// 2. O sistema pega o que está salvo, mas se não tiver nada, pega a lista padrão
let produtos = JSON.parse(localStorage.getItem('dmaria_produtos')) || listaPadraoProdutos;

// 3. SEGREDO AQUI: Se você adicionou itens novos no código, ele atualiza a memória do navegador!
if (produtos.length < listaPadraoProdutos.length) {
    produtos = listaPadraoProdutos;
    localStorage.setItem('dmaria_produtos', JSON.stringify(produtos));
}

// ==========================================
// 2. ESTADO DO APLICATIVO
// ==========================================
let carrinho = JSON.parse(localStorage.getItem('dmaria_cart')) || [];
let categoriaAtual = 'Todos';
let produtoAtualModal = null;
let quantidadeModal = 1;

// ==========================================
// 3. INICIALIZAÇÃO
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    verificarStatusLoja();
    renderizarDiasFuncionamento();
    renderizarCategorias();
    renderizarProdutos();
    atualizarBarraCarrinho();
});

// Verifica se a loja está aberta e mostra o badge
function verificarStatusLoja() {
    const dataAtual = new Date();
    const horaAtual = dataAtual.getHours();
    const diaAtual = dataAtual.getDay();
    const statusEl = document.getElementById('store-status');
    
    const abreHoje = lojaConfig.diasAbertos.includes(diaAtual);
    const dentroDoHorario = horaAtual >= lojaConfig.horaAbertura && horaAtual < lojaConfig.horaFechamento;

    if (abreHoje && dentroDoHorario) {
        statusEl.textContent = 'Loja Aberta';
        statusEl.className = 'status-badge status-open';
    } else {
        statusEl.textContent = 'Loja Fechada';
        statusEl.className = 'status-badge status-closed';
    }
}

// Renderiza as bolinhas coloridas dos dias da semana
function renderizarDiasFuncionamento() {
    const container = document.getElementById('schedule-days');
    if (!container) return;

    container.innerHTML = diasSemanaNomes.map((dia, index) => {
        const isOpen = lojaConfig.diasAbertos.includes(index);
        return `<span class="day-badge ${isOpen ? 'day-open' : 'day-closed'}">${dia}</span>`;
    }).join('');
}

// ==========================================
// 4. RENDERIZAÇÃO DA INTERFACE
// ==========================================
function renderizarCategorias() {
    const nav = document.getElementById('category-nav');
    nav.innerHTML = categorias.map(cat => `
        <button class="cat-btn ${cat === categoriaAtual ? 'active' : ''}" 
                onclick="mudarCategoria('${cat}')">${cat}</button>
    `).join('');
}

function mudarCategoria(cat) {
    categoriaAtual = cat;
    renderizarCategorias();
    renderizarProdutos();
}

function renderizarProdutos() {
    const grid = document.getElementById('products-grid');
    
    // Removendo os itens antigos antes de renderizar para reiniciar a animação
    grid.innerHTML = '';
    
    const produtosFiltrados = categoriaAtual === 'Todos' 
        ? produtos 
        : produtos.filter(p => p.categoria === categoriaAtual);

    setTimeout(() => {
        grid.innerHTML = produtosFiltrados.map((p, index) => `
            <div class="product-card" style="animation-delay: ${index * 0.05}s" onclick="abrirModalProduto(${p.id})">
                <div class="product-info">
                    <h3>${p.nome}</h3>
                    <p>${p.descricao}</p>
                    <div class="price">R$ ${p.preco.toFixed(2).replace('.', ',')}</div>
                </div>
                <img src="${p.imagem}" alt="${p.nome}" class="product-img">
            </div>
        `).join('');
    }, 10);
}

// ==========================================
// 5. LÓGICA DOS MODAIS E PRODUTO
// ==========================================
function abrirModalProduto(id) {
    produtoAtualModal = produtos.find(p => p.id === id);
    quantidadeModal = 1;
    
    document.getElementById('modal-img').src = produtoAtualModal.imagem;
    document.getElementById('modal-title').textContent = produtoAtualModal.nome;
    document.getElementById('modal-desc').textContent = produtoAtualModal.descricao;
    document.getElementById('modal-price').textContent = `R$ ${produtoAtualModal.preco.toFixed(2).replace('.', ',')}`;
    document.getElementById('modal-obs').value = '';
    
    atualizarModalPreco();
    abrirModal('product-modal');
}

function changeModalQty(delta) {
    if (quantidadeModal + delta > 0) {
        quantidadeModal += delta;
        atualizarModalPreco();
    }
}

function atualizarModalPreco() {
    document.getElementById('modal-qty').textContent = quantidadeModal;
    const total = produtoAtualModal.preco * quantidadeModal;
    document.getElementById('modal-btn-price').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

function abrirModal(id) {
    document.getElementById(id).classList.add('active');
}

function closeModal(id) {
    document.getElementById(id).classList.remove('active');
}

// ==========================================
// 6. LÓGICA DO CARRINHO (LocalStorage)
// ==========================================
function addToCart() {
    const obs = document.getElementById('modal-obs').value;
    
    const itemExistente = carrinho.findIndex(item => 
        item.id === produtoAtualModal.id && item.obs === obs
    );

    if (itemExistente > -1) {
        carrinho[itemExistente].quantidade += quantidadeModal;
    } else {
        carrinho.push({
            id: produtoAtualModal.id,
            nome: produtoAtualModal.nome,
            preco: produtoAtualModal.preco,
            imagem: produtoAtualModal.imagem,
            quantidade: quantidadeModal,
            obs: obs
        });
    }

    salvarCarrinho();
    closeModal('product-modal');
    atualizarBarraCarrinho();
}

function salvarCarrinho() {
    localStorage.setItem('dmaria_cart', JSON.stringify(carrinho));
}

function atualizarBarraCarrinho() {
    const barra = document.getElementById('floating-cart');
    if (carrinho.length > 0) {
        const totalItens = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
        const valorTotal = carrinho.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
        
        document.getElementById('floating-cart-count').textContent = `${totalItens} ${totalItens === 1 ? 'item' : 'itens'}`;
        document.getElementById('floating-cart-total').textContent = `R$ ${valorTotal.toFixed(2).replace('.', ',')}`;
        barra.classList.add('visible');
    } else {
        barra.classList.remove('visible');
    }
}

function openCart() {
    renderizarCarrinho();
    abrirModal('cart-modal');
}

function renderizarCarrinho() {
    const container = document.getElementById('cart-items');
    
    if (carrinho.length === 0) {
        container.innerHTML = '<p style="text-align:center; color: var(--text-muted); padding: 20px;">Seu carrinho está vazio.</p>';
        document.getElementById('cart-subtotal').textContent = 'R$ 0,00';
        document.getElementById('cart-total').textContent = 'R$ 0,00';
        return;
    }

    let total = 0;
    container.innerHTML = carrinho.map((item, index) => {
        const subtotal = item.preco * item.quantidade;
        total += subtotal;
        return `
            <div class="cart-item">
                <img src="${item.imagem}" class="cart-item-img">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.quantidade}x ${item.nome}</div>
                    ${item.obs ? `<div class="cart-item-obs">Obs: ${item.obs}</div>` : ''}
                    <div class="cart-item-price">R$ ${subtotal.toFixed(2).replace('.', ',')}</div>
                </div>
                <div class="quantity-control">
                    <button onclick="alterarQtdCarrinho(${index}, -1)">-</button>
                    <span>${item.quantidade}</span>
                    <button onclick="alterarQtdCarrinho(${index}, 1)">+</button>
                </div>
            </div>
        `;
    }).join('');

    const totalFormatado = `R$ ${total.toFixed(2).replace('.', ',')}`;
    document.getElementById('cart-subtotal').textContent = totalFormatado;
    document.getElementById('cart-total').textContent = totalFormatado;
}

function alterarQtdCarrinho(index, delta) {
    if (carrinho[index].quantidade + delta > 0) {
        carrinho[index].quantidade += delta;
    } else {
        carrinho.splice(index, 1); // Remove se zerar
    }
    salvarCarrinho();
    renderizarCarrinho();
    atualizarBarraCarrinho();
    if (carrinho.length === 0) closeModal('cart-modal');
}

function clearCart() {
    if (confirm('Tem certeza que deseja limpar o carrinho?')) {
        carrinho = [];
        salvarCarrinho();
        renderizarCarrinho();
        atualizarBarraCarrinho();
        closeModal('cart-modal');
    }
}

// ==========================================
// 7. CHECKOUT E INTEGRAÇÃO WHATSAPP
// ==========================================
function openCheckout() {
    if (carrinho.length === 0) return;
    closeModal('cart-modal');
    abrirModal('checkout-modal');
}

function toggleAddress() {
    const isDelivery = document.querySelector('input[name="delivery-type"]:checked').value === 'delivery';
    const addressFields = document.getElementById('address-fields');
    const inputs = addressFields.querySelectorAll('input');
    
    if (isDelivery) {
        addressFields.style.display = 'block';
        inputs.forEach(input => { if(input.id !== 'address-ref') input.required = true; });
    } else {
        addressFields.style.display = 'none';
        inputs.forEach(input => input.required = false);
    }
}

function finishOrder(event) {
    event.preventDefault();
    
    const nome = document.getElementById('client-name').value;
    const telefone = document.getElementById('client-phone').value;
    const tipoEntrega = document.querySelector('input[name="delivery-type"]:checked').value;
    
    let textoEndereco = "";
    if (tipoEntrega === 'delivery') {
        const rua = document.getElementById('address-street').value;
        const numero = document.getElementById('address-number').value;
        const bairro = document.getElementById('address-neighborhood').value;
        const ref = document.getElementById('address-ref').value;
        
        textoEndereco = `
📍 *Endereço:*
Rua ${rua}, Nº ${numero}
Bairro ${bairro}
${ref ? `Ref: ${ref}` : ''}`;
    }

    let textoItens = "";
    let valorTotal = 0;

    carrinho.forEach(item => {
        const subtotal = item.preco * item.quantidade;
        valorTotal += subtotal;
        textoItens += `
• ${item.quantidade}x ${item.nome}
${item.obs ? `  Obs: ${item.obs}\n` : ''}  R$ ${subtotal.toFixed(2).replace('.', ',')}
`;
    });

    const mensagem = `
🍕 *NOVO PEDIDO - D’MARIA PIZZAS*

👤 *Nome:* ${nome}
📞 *Telefone:* ${telefone}

🚚 *Tipo:* ${tipoEntrega === 'delivery' ? 'Entrega' : 'Retirar na Loja'}
${textoEndereco}

🛒 *ITENS:*
${textoItens}

💰 *TOTAL: R$ ${valorTotal.toFixed(2).replace('.', ',')}*
    `.trim();

    // Redirecionar para WhatsApp
    const url = `https://wa.me/${lojaConfig.telefoneWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
    
    // Limpa o carrinho após finalizar
    carrinho = [];
    salvarCarrinho();
    atualizarBarraCarrinho();
    closeModal('checkout-modal');
}

// ==========================================
// 8. CONTROLE ADMINISTRATIVO (CRUD) - ATUALIZADO COM BOTÃO DE FOTO
// ==========================================

const ADMIN_USER = "admin";
const ADMIN_PASS = "1234";

function loginAdmin(event) {
    event.preventDefault();
    const user = document.getElementById('admin-user').value;
    const pass = document.getElementById('admin-pass').value;

    if (user === ADMIN_USER && pass === ADMIN_PASS) {
        document.getElementById('admin-login-form').reset();
        closeModal('admin-auth-modal');
        abrirModal('admin-panel-modal');
        renderizarListaAdmin();
    } else {
        alert('Usuário ou senha incorretos!');
    }
}

// FUNÇÃO NOVA: Transforma o arquivo de foto escolhido em texto salvo
function carregarImagemLocal(event) {
    const arquivo = event.target.files[0];
    const textoNome = document.getElementById('crud-imagem-nome');
    
    if (arquivo) {
        textoNome.textContent = arquivo.name;
        
        const reader = new FileReader();
        reader.onload = function(e) {
            // Guarda o código gerado da imagem no campo oculto
            document.getElementById('crud-imagem-atual').value = e.target.result;
        };
        reader.readAsDataURL(arquivo);
    }
}

function renderizarListaAdmin() {
    const container = document.getElementById('admin-products-list');
    container.innerHTML = produtos.map(p => `
        <div class="cart-item" style="align-items: center; justify-content: space-between;">
            <div style="display: flex; gap: 10px; align-items: center;">
                <img src="${p.imagem}" class="cart-item-img" style="width:40px; height:40px;">
                <div>
                    <div class="cart-item-title">${p.nome}</div>
                    <div class="cart-item-price">R$ ${p.preco.toFixed(2).replace('.', ',')}</div>
                </div>
            </div>
            <div class="admin-item-actions">
                <button class="btn-edit" onclick="editarProdutoForm(${p.id})">Editar</button>
                <button class="btn-delete" onclick="apagarProdutoCrud(${p.id})">Excluir</button>
            </div>
        </div>
    `).join('');
}

function abrirFormProduto() {
    document.getElementById('product-form-container').style.display = 'block';
    document.getElementById('form-title').textContent = 'Novo Produto';
    document.getElementById('product-crud-form').reset();
    
    // Limpa os campos de arquivo
    document.getElementById('crud-id').value = '';
    document.getElementById('crud-imagem-file').value = '';
    document.getElementById('crud-imagem-atual').value = '';
    document.getElementById('crud-imagem-nome').textContent = 'Nenhuma foto selecionada';
}

function cancelarFormProduto() {
    document.getElementById('product-form-container').style.display = 'none';
    document.getElementById('product-crud-form').reset();
}

function salvarProdutoCrud(event) {
    event.preventDefault();
    
    const id = document.getElementById('crud-id').value;
    const nome = document.getElementById('crud-nome').value;
    const descricao = document.getElementById('crud-descricao').value;
    const preco = parseFloat(document.getElementById('crud-preco').value);
    const categoria = document.getElementById('crud-categoria').value;
    
    // Pega a imagem carregada pelo botão. Se não escolheu nenhuma, coloca uma padrão
    const imagem = document.getElementById('crud-imagem-atual').value || "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500";

    if (id) {
        // Editar existente
        const index = produtos.findIndex(p => p.id === parseInt(id));
        if (index > -1) {
            produtos[index] = { id: parseInt(id), nome, descricao, preco, categoria, imagem };
        }
    } else {
        // Criar novo produto
        const novoId = produtos.length > 0 ? Math.max(...produtos.map(p => p.id)) + 1 : 1;
        produtos.push({ id: novoId, nome, descricao, preco, categoria, imagem });
    }

    localStorage.setItem('dmaria_produtos', JSON.stringify(produtos));
    renderizarListaAdmin();
    cancelarFormProduto();
}

function editarProdutoForm(id) {
    const prod = produtos.find(p => p.id === id);
    if (!prod) return;

    document.getElementById('product-form-container').style.display = 'block';
    document.getElementById('form-title').textContent = 'Editar Produto';
    
    document.getElementById('crud-id').value = prod.id;
    document.getElementById('crud-nome').value = prod.nome;
    document.getElementById('crud-descricao').value = prod.descricao;
    document.getElementById('crud-preco').value = prod.preco;
    document.getElementById('crud-categoria').value = prod.categoria;
    
    // Passa a imagem atual para o sistema
    document.getElementById('crud-imagem-atual').value = prod.imagem;
    document.getElementById('crud-imagem-nome').textContent = "Imagem já cadastrada";
}

function apagarProdutoCrud(id) {
    if (confirm('Tem certeza que deseja remover este produto do cardápio?')) {
        produtos = produtos.filter(p => p.id !== id);
        localStorage.setItem('dmaria_produtos', JSON.stringify(produtos));
        renderizarListaAdmin();
    }
}

function fecharPainelAdmin() {
    closeModal('admin-panel-modal');
    renderizarProdutos(); // Aplica e atualiza tudo na tela do cliente imediatamente
}