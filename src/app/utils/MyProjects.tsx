export const projects: {
  name: string;
  link: string;
  description: string;
  sources: string[];
  gif: string;
}[] = [];

projects.push({
  name: "E-commerce online: Loja de chocolate",
  link: "https://vitaolv.github.io/project-vite-react-ecommerce/",
  description:
    "Um site de e-commerce e um carrinho de compras, onde os usuários podem visualizar \
    a página principal, pesquisar os produtos, adicionar produtos, selecionar quantidades, \
    visualizar os itens no carrinho, remover produtos, calcular o preço total das compras e \
    finalizar o pedido de compra.",
  sources: [
    "Javascript",
    "Vite",
    "React",
    "HTML5",
    "CSS3",
    "Redux",
    "Bootstrap",
    "Ant Design",
  ],
  gif: "/assets/videos/1projeto-ecommerce.gif",
});

projects.push({
  name: "Nome do projeto aqui",
  link: "Adicione link do segundo projeto",
  description: "Meu segundo projeto, faça um textão bem bonito aqui",
  sources: [
    "Adicione recursos aqui, exemplo:",
    "JS",
    "CSS",
    "JS",
    "E assim por diante...",
  ],
  gif: "Adicione o caminho do video aqui.",
});
