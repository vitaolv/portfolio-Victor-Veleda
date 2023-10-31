export const projects: {
  id: number;
  name: string;
  githubLink: string;
  liveDemogithubLink: string;
  description: string;
  sources: string[];
  gif: string;
}[] = [
    {
      id: 1,
      name: "E-commerce básico",
      githubLink: "https://github.com/vitaolv/projeto-frontend-web-HTML-CSS",
      liveDemogithubLink: "https://vitaolv.github.io/projeto-frontend-web-HTML-CSS/",
      description: `
      Participei de um desafio de desenvolvimento front-end para criar um E-commerce em uma única página, 
      utilizando HTML, CSS e Bootstrap, sem JavaScript. 
      A ausência de recursos adicionais, como JavaScript, representou um grande desafio, 
      especialmente ao criar um E-commerce com 6 seções em uma única página. A preocupação central 
      foi manter um código limpo e bem estruturado, respeitando as limitações técnicas impostas. 
      Essa abordagem proporcionou uma valiosa experiência ao explorar a organização e a responsividade
      do design, destacando a importância de estratégias semânticas e técnicas de layout eficazes.
      Este desafio demonstrou a capacidade de trabalhar com restrições, enfatizando a necessidade 
      de uma abordagem cuidadosa e eficiente no desenvolvimento front-end, mesmo sem o uso de recursos avançados.`,
      sources: [
        "HTML5",
        "CSS3",
        "Bootstrap",
      ],
      gif: "/portfolio-Victor-Veleda/assets/videos/1projeto-ecommerce.gif",
    },
    {
      id: 2,
      name: "E-commerce online: Loja de chocolate",
      githubLink: "https://github.com/vitaolv/project-vite-react-ecommerce",
      liveDemogithubLink: "https://vitaolv.github.io/project-vite-react-ecommerce/",
      description: `
      O projeto consiste em um amplo e detalhado site de e-commerce e um sofisticado carrinho de compras, 
      oferecendo aos usuários uma gama de funcionalidades. Além das possibilidades de visualizar a 
      página principal, pesquisar produtos, adicionar itens, selecionar quantidades e gerenciar 
      o carrinho (com opções para remover produtos e calcular o preço total das compras), 
      o projeto abrange uma arquitetura robusta, ações interativas, diversos estados, 
      componentes variados e múltiplas páginas. Desenvolvido em React com JavaScript, 
      o projeto segue a metodologia da arquitetura limpa, visando um código limpo e de fácil manutenção. 
      Utilizando o Redux para gerenciar o estado global da aplicação, a experiência de desenvolvimento 
      tem sido incrível, permitindo um constante aprimoramento do projeto, com o objetivo contínuo de 
      aperfeiçoar a funcionalidade, a eficiência e a experiência do usuário.
      `,
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
      gif: "/portfolio-Victor-Veleda/assets/videos/2projeto-ecommerce.gif",
    },
    {
      id: 3,
      name: "Em breve",
      githubLink: "",
      liveDemogithubLink: "",
      description: `
      Em andamento, o projeto visa oferecer soluções personalizadas em saúde, incorporando abordagens 
      inovadoras para o atendimento presencial e digital. A proposta abrange o 
      desenvolvimento de um website utilizando TypeScript com React e SASS, visando 
      fornecer uma plataforma moderna e adaptável às necessidades do setor de saúde. 
      Com a escolha dessas tecnologias, busca-se integrar a robustez do TypeScript com a flexibilidade 
      e eficiência do React, juntamente com o poder de estilização do SASS, proporcionando um ambiente 
      versátil e interativo para atender às demandas específicas desse setor em constante evolução.`,
      sources: [
        "TypeScript", "React", "SASS",
      ],
      gif: "/portfolio-Victor-Veleda/assets/dev.png",
    },
  ];



