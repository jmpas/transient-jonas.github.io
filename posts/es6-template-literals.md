---
layout: post
title: "ES6 - Template Literals"
slug: es6-template-literals
description: "Veja o que são ES6 template literals e as melhorias que trazem para o javascript."
date: 2016-05-01 20:23:43 -0300
language: Brazilian Portugese
excerpt: |
  Falarei sobre Template Literals, algo bem simples que é incrívelmente maneiro, acredito que assim como eu, vários devs de JS adoraram essa adição a linguagem.
tags:
- es6
- js
categories:
- ES6 - O que mudou?
---

Continuando a série "ES6 - O que mudou?".

Falarei sobre Template Literals, algo bem simples que é incrívelmente maneiro, acredito que assim como eu, vários devs de JS adoraram essa adição a linguagem.

**Tópicos**

- Literal?
- O que são Template Literals?
- Old vs New
- Interpolated Expressions
- Expression Scope
- Tagged Template Literals

## Literal?

Literal é uma notação que representa um valor no nosso código, podendo representar um componente de software, facilitando muito na escrita.

Um exemplo bem rápido criando um `Object`:

```javascript
let myObj = {}; // literal
let myObj2 = new Object(); // non-literal
```

Temos vários literals no javascript:

```javascript
let myStr = "string literal";
let myStr2 = 'string literal'; 
let myRegExp = /^[a-z0-9-]+$/;
let myRegExp = [];
```

Usamos literals o tempo todo, para `String`, `RegExp`, `Array`...

## O que são Template Literals?

Template literals são literals que representam uma `String` com suporte a interpolation e multiplas linhas.

## Old vs New

Antes do ES6, a forma de criar, manipular e gerar dinamicamênte strings é bem pobre, com essa nova feature, conseguimos realizar essas operações mais facilmente.

#### Interpolation

Old:

```javascript
let myVar = 'es6';

console.log('Welcome ' + myVar + '!');

// > Welcome es6!
```

New: 

```javascript
let myVar = 'es6';

console.log(`Welcome ${myVar}!`);

// > Welcome es6!
```

Como podemos ver, temos uma nova sintaxe literal para criar strings, usando <code>`</code> no ínicio e no fim.

Além disso podemos inserir resultados de expressões dentro da string em uma posição específica, usando `${..}` para definir a área que será interpretada.

#### Multiplas linhas

Old:

```javascript
let myText = 'This is the first line\n' +
  'This is the second line\n' +
  'This is the third line';

console.log(myText);

// > This is the first line 
//   This is the second line 
//   This is the third line
```

New:

```javascript
let myText = `This is the first line
This is the second line
This is the third line`;

console.log(myText);

// > This is the first line 
//   This is the second line 
//   This is the third line
```

Usando <code>`</code> como comentado anteriormente podemos criar strings de multiplas linhas, sem a necessidade de concatenar com o operador <code>+</code> e adicionar o <code>\n</code> para declarar a quebra de linha.

## Interpolated Expressions

Interpolated Expressions são expressões que você pode executar de uma forma com que seu resultado seja inserido dentro da string.

Exemplos:

```javascript
console.log(`4 * 3 equals ${4 * 3}`);

// > 4 * 3 equals 12
```

No exemplo acima estamos inserindo na string o resultado da execução de uma multiplicação.

```javascript
let value = 5.123124,
  name = 'Vincent';

console.log(`${name.toUpperCase()}, you owe me U$${value.toFixed(2)}!`);

// > VINCENT, you owe me U$5.12!
```

Nesse exemplo chamamos métodos das variáveis `name` e `value`, o retorno dos métodos são inseridos na string.

Outro exemplo usando funções:

```javascript
console.log(`Hello ${getUserName()}.`);

// > Hello, Vincent.
```

Nesse exemplo, imagine que temos uma função que retorna o nome do usuário, chamada `getUserName`, podemos executar essa função dentro da área `${..}` que seu retorno será inserido na string.

Então, dentro dessa área, podemos inserir qualquer expressão, até mesmo outro Template Literal.

```javascript
let name = 'Leo';

console.log(`Hello ${`${`${name}`}`}.`);

// > Hello, Leo.
```

## Expression Scope

Algo rápido e interessante de mostar é como funciona o escopo usado para resolver valores das variaveis inseridas dentro da string, uma forma de entender, é enxergar a expressão como se fosse uma `IIFE`.

Exemplo:

```javascript
function foo (str) {
  let name = 'foo';

  console.log(str);
}

function bar () {
  let name = 'bar';

  foo(`Hello ${name}!`);
}

let name = 'global';

bar();
```

Então, o que aconteceu acima?

- Declaramos uma veriável no escopo global chamada `name` com o valor `'global'`
- Chamamos a função `bar`
- `bar` declara uma variável também chamada `name`
- `bar` chama a função `foo` passando como parâmetro uma string com uma variável `name` inserida nela
- `foo` recebe como parâmetro essa string e declara outra variável chamada `name`
- `foo` chama `console.log` passando como parâmetro a string que veio de `bar`

A questão é, qual das variáveis `name` realmente foi inserida dentro da string, o `name` global, de `bar` ou de `foo`?

O resultado do código é esse:

```javascript
// > Hello bar!
```

A variável `name` de `bar` que realmente foi utilizada, a expressão usa a referência do escopo de onde ela foi declarada (dentro da função `bar`).

## Tagged Template Literals

Essa feature pode parecer meio estranha e não prática no ínicio, mas depois de ver algumas aplicações dela, você consegue visualizar sua utilidade.

Ela é uma forma mais avançada de Template Literals. Você pode customizar completamente o seu comportamento usando uma função.

```javascript
'use strict';

const moment = require('moment');

let name = 'Jonas';

function tag (strings, ...values) {
  console.log(strings[0]);
  console.log(strings[1]);
  console.log(strings[2]);

  console.log(values[0]);
  console.log(values[1]);

  return `Whatever ${values[0]}!`;
}

console.log(tag`Hello, my name is ${name} and I'm ${moment().diff('1994-03-08', 'years')} years old`);

// > Hello, my name is 
// >  and I'm 
// >  years old

// > Jonas
// > 22

// > Whatever Jonas!
```

Antes de tudo, <code>tag`..`</code>, não é nada similar a qualquer sintaxe que já vimos no JS, o que é isso?

Isso é um tipo especial de chamada de função que não precisa dos `(..)`, e não precisa necessáriamente ser uma função, podemos fazer isso com qualquer expressão que retorne uma função.

O primeiro argumento é um array de strings (`'Hello, my name is '`, `' and I'm '` e `'' years old'` nesse exemplo). A partir do segundo argumento, recebemos os resultados das expressões inseridas dentro dos `${..}` (`'Jonas'` e `'22'`). No final, a função retorna outra string.

Não tem nada de especial no nome da função `tag`, podemos definir qualquer função com qualquer nome.

Bom, é isso galera, se vocês quiserem se aprofundar mais nesse assunto, recomendo alguns links:

- [Post](https://developers.google.com/web/updates/2015/01/ES6-Template-Strings) bem maneiro do [Addy Osmani](https://twitter.com/addyosmani)
- [Post](http://www.2ality.com/2015/01/template-strings-html.html) do [Axel Rauschmayer](https://twitter.com/rauschma)
- [MDN](https://developer.mozilla.org) é claro, [artigo](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)

E qualquer coisa, comentem ai em baixo :)
