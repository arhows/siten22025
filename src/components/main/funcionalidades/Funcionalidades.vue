<script setup>
import { reactive } from 'vue';
import FuncionalidadeCard from './FuncionalidadeCard.vue';




const cards = reactive([
    {
        id: 1,
        titulo: "Gestão de Estoque Eficiente",
        descritivo: "Controle cada item do seu estoque com precisão. Evite perdas, minimize rupturas e mantenha seu inventário sempre atualizado.",
        icon: "estoque.png"
    },
    {
        id: 2,
        titulo: "Otimização de Compras",
        descritivo: "Gerencie suas compras com facilidade. Automatize processos,negocie com fornecedores e controle seus pedidos em tempo real.",
        icon: "compras.png"
    },
    {
        id: 3,
        titulo: "Impulsione suas Vendas",
        descritivo: "Acompanhe suas vendas de forma simples e integrada. Tenha controle total sobre pedidos, pagamentos e relatórios detalhados.",
        icon: "vendas.png"
    },
    {
        id: 4,
        titulo: "Conformidade Fiscal Simplificada",
        descritivo: "Mantenha sua empresa em dia com as obrigações fiscais. Emita notas fiscais, apure impostos e evite problemas com o fisco.",
        icon: "fiscal.png"
    },
    {
        id: 5,
        titulo: "Controle Financeiro Completo",
        descritivo: "Gerencie o fluxo de caixa, contas a pagar e a receber, e acompanhe sua saúde financeira com relatórios claros e confiáveis.",
        icon: "financeiro.png"
    },
    {
        id: 6,
        titulo: "Gestão Inteligente de Custos",
        descritivo: "Identifique e controle os custos do seu negócio. Aumente sua rentabilidade com ferramentas práticas e análises detalhadas.",
        icon: "custos.png"
    },
    {
        id: 7,
        titulo: "Integração com E-commerces",
        descritivo: "Sincronize seu sistema com plataformas de e-commerce. Gerencie estoques, pedidos e vendas online de forma automatizada e integrada.",
        icon: "ecommerce.png"
    },
    {
        id: 8,
        titulo: "Venda na Palma da Mão",
        descritivo: "Realize vendas diretamente do seu celular. Agilidade e praticidade para atender seus clientes em qualquer lugar.",
        icon: "mobile.png"
    },
    {
        id: 9,
        titulo: "Analise seus Resultados com Clareza",
        descritivo: "Tenha uma visão detalhada da saúde financeira do seu negócio. Acompanhe receitas, despesas e lucros com relatórios precisos e intuitivos.",
        icon: "dre.png"
    },
])

</script>

<template>

    <section id="funcionalidades" class="o-que-fazemos">
        <h2 class="section-title">O que fazemos</h2>
        <div class="container">
            <div class="o-que-fazemos__conteudo">
                <FuncionalidadeCard v-for="card in cards" :key="card.id" :card />
            </div>
        </div>
    </section>

</template>



<style scoped>
.o-que-fazemos {
    background-color: rgba(64, 249, 155, 0.1);
}

.o-que-fazemos .section-title {
    color: #5a385c;
}

.o-que-fazemos .section-title::after {
    background-color: #ff6600;
}

.o-que-fazemos__conteudo {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    gap: 20px;
}
</style>