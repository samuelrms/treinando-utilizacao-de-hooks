# Treinando utilizacao de hooks
## Projeto criado para estudos de React Hooks
## https://samuelrms.github.io/treinando-utilizacao-de-hooks/

---
<details>

  <summary>
    
   # useState
  
  </summary>

### Estrutura base:

```
const [seuState, setSeuState] = useState(valor do seu state)
```
Utilizamos `set` como um padrão para boas práticas, porém, você pode utilizar o nome que quiser

O useState é uma função que retorna uma Array com 2 valores. O primeiro valor guarda o dado do estado atual, pode ser qualquer tipo de dado como strings, arrays, números, boolean, null, undefined e objetos. O segundo valor é uma função que pode ser utilizada para modificarmos o estado do primeiro valor.

Quando a função de modificação do estado é ativada, todos os componentes que dependerem do estado, serão renderizados novamente e os seus filhos também. É isso que garante a reatividade de componentes funcionais no React.

Não existem limites para o uso do useState, podemos definir diversos no mesmo componente.

Podemos passar o estado e a função de modificação como propriedades para outros elementos.

Podemos passar uma função de callback para atualizar o estado. A função de callback recebe um parâmetro que representa o valor anterior e irá modificar o estado para o valor que for retonado na função.

A definição do estado inicial também pode ser feita com um callback.

### Reatividade
Não modifique o estado diretamente. Utilize sempre a função de atualização do estado, pois ela que garante a reatividade dos componentes. Sempre modifique o seu `setState` jamais o seu `state`

</details>

---

<details>

  <summary>
    
   # useEffect
  
  </summary>

### Estrutura base:

```
  useEffect(() => {
    Função a ser executada
  }, [dependência])
```

Todo componente possui um ciclo de vida. Os principais momentos acontecem quando o componente é renderizado, atualizado ou destruído. Com o React.useEffect() podemos definir um callback que irá ser executado durante certos momentos do ciclo de vida do componente.

### Array de Dependências
No useEffect podemos definir dois argumentos, o primeiro é a função de callback que será executada, o segundo é uma array com uma lista de dependências. A lista de dependências serve para informarmos quando o efeito deve ocorrer.

Se utilizarmos o valor de um hook ou propriedade dentro de um efeito, ele irá indicar a necessidade de definirmos o mesmo como uma dependência na array.

O useEffect será especialmente utilizado quando precisamos definir um efeito que deve ocorrer uma vez apenas, como o get de dados no servidor por exemplo.

Podemos ter diversos useEffect no nosso código. O ideal é separarmos efeitos diferentes em useEffect diferentes.

### As vezes precisamos executar um efeito sempre que um componente for desmontado. Para isso utilizamos um callback no retorno do callback do efeito. Com a seguinte sintaxe:

```
useEffect(() => {
    função
    evento a ocorrer
    
    return () => {
      callback da função
    }
  }, [dependência])
  ```
  
  </details>
  
  ---
  
  <details>
  
  <summary>
  
  # useRef
  
  </summary>
  
  ### Estrutura base:
  
  ```
  const App = () => {
  const section = useRef();

  useEffect(() => {
    console.log(section.current);
  }, []);

  return <section ref={section}></section>;
};
```

Retorna um objeto com a propriedade current. Esse objeto pode ser utilizado para guardarmos valores que irão persistir durante todo o ciclo de vida do elemento. Geralmente usamos o mesmo para nos referirmos a um elemento do DOM, sem precisarmos utilizar o querySelector ou similar.

É comum utilizarmos em formulários, quando precisamos de uma referência do elemento para colocarmos o mesmo em foco.

O seu uso não é restrito a elementos do dom. Podemos utilizar também para guardarmos a referência de qualquer valor, como de um setTimeout por exemplo.
  
  </details>

---

<details>

<summary>

# useMemo

</summary>

### Estrutura base com exemplo de função lenta:

```
const App = () => {
  const [add, setAdd] = useState(0);
  
  const BIG_NUMBER = 10000000000;
  const DIVISOR_BY_TEN = 10
  const ZERO = 0
  
  function slowOperation() {
  let slow;
  for (let index = ZERO; index < BIG_NUMBER; index++) {
    slow = index + index / DIVISOR_BY_TEN;
  }
  return slow;
}
  
  const getTime = performance.now(); // performance.now() Pega o tempo atual onde sua aplicação está no momento
  
  const value = useMemo(() => //Utilizando o useMemo o valor dessa função será armazenado na memória
  slowOperation(),[]);
  
  // const value = slowOperation(); // Dessa maneira o valor da função não será armazenado e ela precisará ser executada novamente
  
  console.log(performance.now() - getTime);

  return <button onClick={() => setAdd(add + 1)}>{value}</button>;
};
```

Memoriza um valor, evitando a recriação do mesmo todas as vezes em que um componente for atualizado. Recebe um callback e uma array de dependências. Assim como o useEffect.

Ou seja, ele serve para casos em que você faz uma operação lenta, para retornar um valor e não ter que fazer a recriação do mesmo todas as vezes.

</details>

---

<details>

<summary>

# useCallback

</summary>

### Estrutura base:

```
const memoizedCallback = useCallback(
  () => {
    suaFunção(a, b);
  },
  [a, b],
);
```

`Retorna um callback memoizado.`

Recebe como argumentos, um callback e um array. useCallback retornará uma versão memoizada do callback que só muda se uma das entradas tiverem sido alteradas. Isto é útil quando utilizamos callbacks a fim de otimizar componentes filhos, que dependem da igualdade de referência para evitar renderizações desnecessárias (como por exemplo shouldComponentUpdate).

ou seja

Permite definirmos um callback e uma lista de dependências do callback. Esse callback só será recriado se essa lista de dependências for modificada, caso contrário ele não irá recriar o callback.

</details>

---

