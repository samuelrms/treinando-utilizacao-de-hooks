export const textUseState = {
  titulo: {
    titulo: "Exemplos de useState",
  },
  botoes: {
    ativados: ["Ativado", "Clique no  botão desativado para ativar"],
    desativados: ["Desativado", "Clique no botão *ativado* para desativar"],
    modal: ["Open Modal", "Close Modal"],
    alterarFrase: [
      "Clique aqui para alterar a frase abaixo",
      "Frase alterada não tem como voltar!",
    ],
  },
};

export const textHome = {
  title: {
    title: "Projeto criado para estudos",
    description:
      "Foco para dispositivos web, o mesmo não possui responsividade",
    subTitle:
      "Neste projeto tentarei explicar um pouco de cada hook e como ele funciona",
  },
  content: {
    useState: {
      title: "useState",
      description:
        "O useState é uma função que retorna uma Array com 2 valores. O primeiro valor guarda o dado do estado atual, pode ser qualquer tipo de dado como strings, arrays, números, boolean, null, undefined e objetos. O segundo valor é uma função que pode ser utilizada para modificarmos o estado do primeiro valor. Quando a função de modificação do estado é ativada, todos os componentes que dependerem do estado, serão renderizados novamente e os seus filhos também. É isso que garante a reatividade de componentes funcionais no React.",
      descriptionComplement:
        "Quando a função de modificação do estado é ativada, todos os componentes que dependerem do estado, serão renderizados novamente e os seus filhos também. É isso que garante a reatividade de componentes funcionais no React",
    },
  },
};

export const textUseRef = {
  title: {},
  description: {},
  subTitle: {},
  content: {
    descriptionTodo: {
      title: "TodoCard",
      subTitle:
        "Feito com React Hooks, os Hooks utilizados foram useEffect, useRef e useState.",
      description:
        "Nesse exemplo todas as tarefas são salvas localmente utilizando localStorage, podemos apagar cada card e uma vez apagado ele também será retirado do armazenamento local.",
    },
  },
};
