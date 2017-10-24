---
layout: post
title: "ES6 - Arrow Functions"
slug: ES6-arrow-functions
description: "Entenda ES6 arrow functions e sua diferença para a função padrão do javascript."
date: 2016-03-31 00:40:43 -0300
language: Brazilian Portugese
excerpt: |
  E ai galera, continuando a série "ES6 - O que mudou?", irei abordar nesse post, uma nova maneira de declarar funções anônimas em javascript.

  O objetivo é ser um post curto, explicativo e com bastante exemplos.

  Lista dos tópicos que irei abordar:

  - Sintaxe
  - Lexical this
tags:
- es6
- js
categories:
- ES6 - O que mudou?
---

E ai galera, continuando a série "ES6 - O que mudou?", irei abordar nesse post, uma nova maneira de declarar funções anônimas em javascript.

O objetivo é ser um post curto, explicativo e com bastante exemplos.

Lista dos tópicos que irei abordar:

- Sintaxe
- Lexical this

## Sintaxe

Então, começando com Sintaxe, vamos relembrar como que é uma função anônima sem ES6:  

```javascript
var versions = [5, 6, 7, 8];

versions.map(function (item) {
  return 'es' + item;
});

// > ['es5', 'es6', 'es7', 'es8']
```

Beleza, como escrevo uma arrow function (ES6)?
Muito fácil, baste tirar o `function` e adicionar `=>` depois do `()` vamos ver um exemplo:

```javascript
let versions = [5, 6, 7, 8];

versions.map((item) => {
  return `es${item}`;
});

// > ['es5', 'es6', 'es7', 'es8']
```

Belo, não é?

Caso nossa arrow function seja apenas de uma linha, podemos escreve-la sem as `{}` e caso receba apenas um parâmetro, podemos escreve-la sem o `()`.

Mas cara, e se eu não receber parâmetro nenhum?  
Precisamos deixar o `()`, vazio mesmo.

Vamos ver uns exemplos de arrow functions de apenas uma linha:

```javascript
let versions = [5, 6, 7, 8];

// Arrow functions com parâmetro
versions
  .filter(item => item > 5)
  .map(item => `es${item}`);

// > ['es6', 'es7', 'es8']

// Arrow function sem parâmetro
document.addEventListener('click', () => console.log('click'));
```

É importante citar também, caso vocês não tenham notado, que arrow functions, quando são de uma linha só, não precisam do `return` para indicar o que ela está retornando, o valor já é retornado automaticamente.

## Lexical this

Em javascript, temos a palavra-chave `this`, que tem o valor determinado pela forma como chamamos a função.

A arrow function, tem seu `this` definido lexicalmente, seu `this` recebe o contexto de execução de onde a arrow function é declarada.

Em uma arrow function definida em um contexto global, por exemplo, seu `this` assume o objeto global.

Ou seja, a principal diferença entre a arrow function e a function normal que usamos, nesse tópico, é que a arrow function não modifica o `this` do contexto em que ela está inserida.

Vamos ver um exemplo:

```javascript
function Timer () {
  this.seconds = 0;

  setInterval(() => this.seconds++, 1000);
}

let t = new Timer();

setTimeout(() => console.log(t.seconds), 5000);

// depois de 5 segundos...
// > 5
```

Vamos recapitular o código acima

1. Criamos um construtor chamado `Timer`.
2. No constructor `Timer` setamos a propriedade `seconds` dele para `0`.
3. Fizemos um `setInterval` de 1 segundo, usando uma arrow function, adicionando +1 a propriedade `seconds`.
4. Criamos um novo objeto a partir do construtor `Timer` (cada objeto terá seu próprio `this` devido a palavra-chave `new`).
5. Executamos um `setTimeout` de 5 segundos, para logar a propriedade `seconds` de `t` (que é uma instancia de `Timer`).

Se nós utilizassemos uma função normal como callback para o `setInterval`, teriamos problemas.
Seu `this` não seria o `this` do contexto que desejamos.

Porque?

Lembra que comentei que a palavra-chave `this` tem seu valor determinado pela forma como chamamos a função?
Então, a função possívelmente está sendo chamada dentro de outro contexto do `setInterval`.

Exemplo usando uma função normal:

```javascript
function Timer () {
  this.seconds = 0;

  setInterval(function () {
    this.seconds++;
  }, 1000);
}

let t = new Timer();

setTimeout(() => console.log(t.seconds), 5000);

// depois de 5 segundos...
// > 0
```

Dessa vez, temos o valor `0` logado, porque para cada segundo que é executado a callback, o seu `this` não é o mesmo do contexto em que ela está inserida.

## Use com consciência

Então galera, pra concluir o post rapidinho, quero citar que é bom entender que nem sempre uma arrow function é o ideal.

É importante entender como o javascript interpreta uma arrow function, para saber o momento certo de usar.

Ela é ótima para callbacks anônimas, que só servem para serem executadas naquela vez (para aquele caso), e em nenhum outro lugar.

Voltando ao exemplo "versions":

```javascript
let versions = [5, 6, 7, 8];

versions
  .filter(item => item > 5)
  .map(item => `es${item}`);
```

Então, as duas arrow functions que eu uso no map e no filter, são apenas callbacks, funções anônimas, que serão usadas para aquela operação e em nenhum outro lugar da aplicação.

Um exemplo onde eu não usaria arrow functions, seria quando uso o padrão Revealing Module.

```javascript
let MyModule = (function() {

  function myMethod() {
    // Doing something
  }
  
  function myOtherMethod() {
    // Doing something
  }
  
  return {
    someMethod: myMethod,
    someOtherMethod: myOtherMethod
  };
});
```

Porque?

Bom, poderiamos declarar variáveis como arrow functions...
Mas lembrando, arrow functions são funções **anônimas**, logo, quando algum erro ocorrer, teriamos mais dificuldade de achar de onde ele veio no stack trace.

A indicação de no erro seria `(anonymous function)`, ao invés do nome da função `myMethod`.

Outro exemplo, seria quando precisamos usar a palavra-chave `this` associada ao objeto.
Voltando no exemplo do Timer.

```javascript
let Timer = (function IIFE () {
  'use strict';

  function Timer () {
    this.seconds = 0;

    this.play();
  }

  function pause () {
    clearInterval(this._interval);
  }

  function play () {
    this._interval = setInterval(() => this.seconds++, 1000);
  }

  Timer.prototype.pause = pause;
  Timer.prototype.play = play;

  return Timer;
})();


let t = new Timer();
let t2 = new Timer();
let logger = setInterval(() => console.log(t.seconds, t2.seconds), 1000);

setTimeout(() => t.pause(), 5000);

setTimeout(() => t.play(), 9000);

setTimeout(() => {
  t.pause();
  t2.pause();

  clearInterval(logger);
}, 15000);

// > 1 1
// > 2 2
// > 3 3
// > 4 4
// > 5 5
// > 5 6
// > 5 7
// > 5 8
// > 5 9
// > 5 10
// > 6 11
// > 7 12
// > 8 13
// > 9 14
// > 10 15
```

Nesse exemplo, estamos usando a mesma referência da função `pause` e `play` para o `Timer`, adicionado em seu `prototype`.

Quando executamos `new Timer()` a função `Timer` é executada e é gerado um novo contexto para ela, porque usamos a palavra-chave `new`, então cada `Timer` criado dessa forma, gera um objeto com seu próprio `this`.

Se usassemos arrow functions para essas duas funções que botamos no `prototype` do `Timer`, não teriamos o `this` correto, e sim o contexto global.

Bom, é isso, finalizando mais um post rapidinho

Espero que tenham gostado! :)

Valeu galera!
