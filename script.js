function abrirPizza(id) {
    document.getElementById("desfoque").style.display = "block";
    document.getElementById("desfoque").onclick = fecharPizza;
    document.getElementById("divPizzaAberta").style.display = "flex";
    const pizzaElement = document.getElementById(id);
    const img = pizzaElement.querySelector("img").src;
    const nome = pizzas.find(pizza => pizza.nome.replace(/\s+/g, '-').toLowerCase() === id).nome;
    const descricao = pizzas.find(pizza => pizza.nome.replace(/\s+/g, '-').toLowerCase() === id).descricao;
    const preco = pizzas.find(pizza => pizza.nome.replace(/\s+/g, '-').toLowerCase() === id).preco.toFixed(2);
    document.getElementById("divPizzaAberta").innerHTML = `
        <img src="imagens/xVermelho.svg" id="botaoFechar" onclick="fecharPizza()" style="width: 30px; height: 30px; position: absolute; top: 0; right: 0; background-color: #f5f5f5; padding: 5px; border-radius: 5px; cursor: pointer;">
        <img src="${img}" id="imgPizzaAberta">
        <h1>${nome}</h1>
        <p>${descricao}</p>
        <h4>Preço: R$${preco}</h4>
        <button onclick="fecharPizza()">Fechar</button>
    `;
}
function fecharPizza() {
    document.getElementById("divPizzaAberta").style.display = "none";
    document.getElementById("desfoque").style.display = "none";
}

const pizzas = [
    { nome: "Pizza de Calabresa", categoria: "pizzas-tradicionais", preco: 34.90, imagem: "imagens/pizzas/Pizza de Calabresa.png", descricao: "Calabresa, cebola, molho de tomate, mussarela e orégano." },
    { nome: "Pizza Marguerita", categoria: "pizzas-tradicionais", preco: 34.90, imagem: "imagens/pizzas/Pizza Margherita.png", descricao: "Molho de tomate, mussarela, manjericão e azeite." },
    { nome: "Pizza Portuguesa", categoria: "pizzas-tradicionais", preco: 34.90, imagem: "imagens/pizzas/Pizza Portuguesa.png", descricao: "Presunto, ovos, azeitonas, cebola, pimentão, molho de tomate e mussarela." },
    { nome: "Pizza de Mussarela", categoria: "pizzas-tradicionais", preco: 34.90, imagem: "imagens/pizzas/Pizza de Mussarela.png", descricao: "Molho de tomate, queijo mussarela e orégano." },
    { nome: "Pizza de Pepperoni", categoria: "pizzas-tradicionais", preco: 34.90, imagem: "imagens/pizzas/Pizza de Pepperoni.png", descricao: "Fatias de pepperoni, molho de tomate, mussarela e orégano." },
    { nome: "Pizza de Quatro Queijos", categoria: "pizzas-tradicionais", preco: 34.90, imagem: "imagens/pizzas/Pizza Quatro Queijos.png", descricao: "Mussarela, gorgonzola, parmesão e provolone." },
    { nome: "Pizza de Frango com Catupiry", categoria: "pizzas-tradicionais", preco: 34.90, imagem: "imagens/pizzas/Pizza de Frango com Catupiry.png", descricao: "Frango desfiado, catupiry, molho de tomate e mussarela." },
    { nome: "Pizza Vegetariana", categoria: "pizzas-tradicionais", preco: 34.90, imagem: "imagens/pizzas/Pizza Vegetariana.png", descricao: "Abobrinha, berinjela, tomate, pimentão, cebola, mussarela e molho pesto." },
    { nome: "Pizza Napolitana", categoria: "pizzas-tradicionais", preco: 34.90, imagem: "imagens/pizzas/Pizza Napolitana.png", descricao: "Molho de tomate, anchovas, tomate fresco, mussarela e orégano." },
    { nome: "Pizza de Palmito", categoria: "pizzas-tradicionais", preco: 34.90, imagem: "imagens/pizzas/Pizza de Palmito.png", descricao: "Palmito, molho, mussarela e orégano." },
    { nome: "Pizza de Brócolis com Bacon", categoria: "pizzas-tradicionais", preco: 34.90, imagem: "imagens/pizzas/Pizza de Brócolis com Bacon.png", descricao: "Brócolis cozido, bacon e catupiry." },
    { nome: "Pizza de Carne Seca", categoria: "pizzas-tradicionais", preco: 34.90, imagem: "imagens/pizzas/Pizza de Carne Seca.png", descricao: "Carne seca desfiada e cremosa." },
    { nome: "Pizza Toscana", categoria: "pizzas-tradicionais", preco: 34.90, imagem: "imagens/pizzas/Pizza Toscana.png", descricao: "Linguiça toscana temperada, cebola roxa e chimichurri." },
    { nome: "Pizza de Atum", categoria: "pizzas-tradicionais", preco: 34.90, imagem: "imagens/pizzas/Pizza de Atum.png", descricao: "Atum, cebola e mussarela." },
    { nome: "Pizza de Brigadeiro", categoria: "pizzas-doces", preco: 19.90, imagem: "imagens/pizzas/Pizza de Brigadeiro.png", descricao: "Cobertura de chocolate ao leite derretido." },
    { nome: "Pizza de Chocolate com Morango", categoria: "pizzas-doces", preco: 19.90, imagem: "imagens/pizzas/Pizza de Chocolate com Morango.png", descricao: "Chocolate ao leite e morangos frescos." },
    { nome: "Pizza de Prestígio", categoria: "pizzas-doces", preco: 19.90, imagem: "imagens/pizzas/Pizza Prestígio.png", descricao: "Chocolate e coco ralado." },
    { nome: "Pizza Romeu e Julieta", categoria: "pizzas-doces", preco: 19.90, imagem: "imagens/pizzas/Pizza Romeu e Julieta.png", descricao: "Goiabada cremosa com queijo mussarela." },
    { nome: "Pizza de Banana com Canela", categoria: "pizzas-doces", preco: 19.90, imagem: "imagens/pizzas/Pizza de Banana com Canela.png", descricao: "Banana fatiada, doce de leite e canela." },
    { nome: "Suco de Laranja", categoria: "bebidas", preco: 9.00, imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIPFQqxyTpu5hxVS1R7q4f1mhSTFhQ1WJFqA&s", descricao: "Suco natural de laranja" },
    { nome: "Drink", categoria: "bebidas", preco: 20.00, imagem: "https://content.paodeacucar.com/wp-content/uploads/2017/05/receitas-de-drinks-capa-2.jpg", descricao: "Bebida sem álcool" },
    { nome: "Refrigerante 350ml", categoria: "bebidas", preco: 5.00, imagem: "https://acarajedajaira.lojatop.net/_core/_uploads/44/2022/06/2145160622jke4cdfbif.png", descricao: "Refrigerante em lata" },
    { nome: "Refrigerante 2L", categoria: "bebidas", preco: 22.00, imagem: "https://www.mamacida.com.br/image/cache/data/refrigerante-2l-650x650.jpg", descricao: "Refrigerante em garrafa" },
    { nome: "Água 500ml", categoria: "bebidas", preco: 5.00, imagem: "https://www.l4limpeza.com.br/image/cache/catalog/912178371_AGUA_MINERAL_500ML_CRYSTAL_SEMGAS-800x800.jpg", descricao: "Água mineral" },
];

function displayPizzas(pizzasFiltradas) {
    const pizzaList = document.getElementById('pizza-list');
    pizzaList.innerHTML = ''; // Limpa a lista de pizzas

    pizzasFiltradas.forEach(pizza => {
        const pizzaDiv = document.createElement('div');
        pizzaDiv.id = pizza.nome.replace(/\s+/g, '-').toLowerCase(); // ID único para cada pizza
        pizzaDiv.classList.add('pizza');
        pizzaDiv.className = "pizzasQ";
        pizzaDiv.innerHTML = `
            <img src="${pizza.imagem}" alt="${pizza.nome}">
            <h4>${pizza.nome}</h4>
        `;
        pizzaDiv.onclick = () => abrirPizza(pizza.nome.replace(/\s+/g, '-').toLowerCase());
        pizzaList.appendChild(pizzaDiv);
    });
}

function filtrarPizzas() {
    const filtroCategoria = document.getElementById('categoria').value;
    const filtroPesquisa = document.getElementById('pesquisa').value.toLowerCase().trim();

    const pizzasFiltradas = pizzas.filter(pizza => {
        const matchesCategoria = filtroCategoria ? pizza.categoria === filtroCategoria : true;
        const matchesPesquisa = pizza.nome.toLowerCase().includes(filtroPesquisa);
        return matchesCategoria && matchesPesquisa;
    });

    displayPizzas(pizzasFiltradas);
}

// Inicializa com todos os produtos
displayPizzas(pizzas);

// Event listeners para os filtros
document.getElementById('categoria').addEventListener('change', filtrarPizzas);
document.getElementById('pesquisa').addEventListener('input', filtrarPizzas);

function displayTantasPizzas(pizzasFiltradas, quantidade) {
    let i = 0;
    const pizzaList = document.getElementById('pizza-list');
    while (i < quantidade) {
        pizzasFiltradas.forEach(pizza => {
            const pizzaDiv = document.createElement('div');
            pizzaDiv.id = pizza.nome.replace(/\s+/g, '-').toLowerCase(); // ID único para cada pizza
            pizzaDiv.classList.add('pizza');
            pizzaDiv.className = "pizzasQ";
            pizzaDiv.innerHTML = `
                <img src="${pizza.imagem}" alt="${pizza.nome}">
                <h4>${pizza.nome}</h4>
                <p>${pizza.descricao}</p>
                <span>R$ ${pizza.preco.toFixed(2)}</span>
            `;
            pizzaDiv.onclick = () => abrirPizza(pizza.nome.replace(/\s+/g, '-').toLowerCase());
            pizzaList.appendChild(pizzaDiv);
            i++;
        });
    } 
}

function abrirFecharMenu() {
    const menu = document.getElementById("menu");
    if (menu.style.display === "flex") {
        menu.style.display = "none";
        document.getElementById("logo-header").style.display = "block";
        document.getElementById("logo-header-menu").style.display = "block";
        document.getElementById("imagem-botao").src = "imagens/hamburguer.svg";
        document.getElementById("imagem-botao").style.top = "18px";
    } else {
        menu.style.display = "flex";
        document.getElementById("logo-header").style.display = "none";
        document.getElementById("logo-header-menu").style.display = "none";
        document.getElementById("imagem-botao").src = "imagens/X.svg";
        document.getElementById("imagem-botao").style.top = "5px";
    }
}
