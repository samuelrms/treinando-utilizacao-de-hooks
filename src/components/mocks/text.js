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
    useEffect: {
      title: "useEffect",
      description:
        "Todo componente possui um ciclo de vida. Os principais momentos acontecem quando o componente é renderizado, atualizado ou destruído. Com o React.useEffect() podemos definir um callback que irá ser executado durante certos momentos do ciclo de vida do componente.",
      secondaryDescription:
        "No useEffect podemos definir dois argumentos, o primeiro é a função de callback que será executada, o segundo é uma array com uma lista de dependências. A lista de dependências serve para informarmos quando o efeito deve ocorrer.",
      thirdDescription:
        "Se utilizarmos o valor de um hook ou propriedade dentro de um efeito, ele irá indicar a necessidade de definirmos o mesmo como uma dependência na array, ou seja, o useEffect será especialmente utilizado quando precisamos definir um efeito que deve ocorrer uma vez apenas, como o fetch de dados no servidor por exemplo.",
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
