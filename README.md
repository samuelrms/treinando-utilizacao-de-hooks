# Treinando utilizacao de hooks
## Projeto criado para estudos de React Hooks
## https://samuelrms.github.io/treinando-utilizacao-de-hooks/

---

## useState

O useState é uma função que retorna uma Array com 2 valores. O primeiro valor guarda o dado do estado atual, pode ser qualquer tipo de dado como strings, arrays, números, boolean, null, undefined e objetos. O segundo valor é uma função que pode ser utilizada para modificarmos o estado do primeiro valor.

Quando a função de modificação do estado é ativada, todos os componentes que dependerem do estado, serão renderizados novamente e os seus filhos também. É isso que garante a reatividade de componentes funcionais no React.

Não existem limites para o uso do useState, podemos definir diversos no mesmo componente.

Podemos passar o estado e a função de modificação como propriedades para outros elementos.

Podemos passar uma função de callback para atualizar o estado. A função de callback recebe um parâmetro que representa o valor anterior e irá modificar o estado para o valor que for retonado na função.

A definição do estado inicial também pode ser feita com um callback.

### Reatividade
Não modifique o estado diretamente. Utilize sempre a função de atualização do estado, pois ela que garante a reatividade dos componentes. Sempre modifique o seu `setState` jamais o seu `state`

---

## useRef
