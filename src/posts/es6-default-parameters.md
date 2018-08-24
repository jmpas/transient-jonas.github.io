---
layout: post
title: "ES6 - Default Parameters"
slug: es6-default-parameters
description: "Entenda parâmetros predefinidos em javascript com a nova sintaxe do es6."
date: 2016-04-21 11:25:43 -0300
language: Brazilian Portuguese
excerpt: |
  Continuando a série "ES6 - O que mudou?".

  Esse post será sobre definir valores predefinidos para parâmetros de uma função com ES6.

  Lista dos tópicos que irei abordar:

  - Descrição
  - Old way
  - Sintaxe ES6
  - Exemplos
tags:
- es6
- js
categories:
- ES6 - O que mudou?
---

Continuando a série "ES6 - O que mudou?".

Esse post será sobre definir valores predefinidos para parâmetros de uma função com ES6.

Lista dos tópicos que irei abordar:

- Descrição
- Old way
- Sintaxe ES6
- Exemplos

## Descrição

No javascript, quando declaramos uma função que recebe parâmetros, podemos notar que ao chamá-la sem passarmos nenhum valor vamos receber `undefined` como resultado. Mas em certas ocasiões, queremos que algum valor seja atrelado a esses parâmetros, caso a função seja chamada sem nenhum.

Queremos que o parâmetro tenha um valor predefinido.

## Old way

Como fazemos isso sem ES6?

```javascript
function hello (name) {
  name = typeof name !== 'undefined' ? name : 'World';
  console.log('Hello ' + name);
}

hello('People');
hello();

// > Hello People
// > Hello World
```

Então, o que aconteceu?

1. Temos uma função chamada `hello` que recebe um parâmetro chamado `name`
2. Assim que a função é executada, checamos se o tipo do parâmetro `name` é diferente de `undefined`, se sim usamos o `name` se não, definimos `name` como `'World'`
3. Logamos uma mensagem `'Hello ' + name`
4. Chamamos a função passando `'People'` como o valor de `name`, que resulta no log `'Hello People'`
5. Chamamos a função sem passarmos nenhum valor como parâmetro, que resulta no log `'Hello World'`

## Sintaxe ES6

Como vimos anteriormente, uma das formas de definir um valor padrão para um parâmetro é simples, porém não tão simples como em outras linguagens.

Com ES6 isso muda, ganhamos uma nova sintaxe que deixará nosso código bem mais fácil de escrever e amigável.

Vamos reproduzir o exemplo anterior com ES6 e sua nova sintaxe de definir valores padrões aos parâmetros.

```javascript
function hello (name = 'World') {
  console.log(`Hello ${name}`);
}

hello('People');
hello();

// > Hello People
// > Hello World
```

Então, bem melhor?

Pode parecer besteira, mas isso faz muita diferença, seu código fica muito mais semântico e você passa a escrever seu código com muito mais gosto.
E muito provavelmente as pessoas usarão bem mais essa funcionalidade, já que a facilidade do seu uso aumentou tanto com essa nova sintaxe.

E como isso já é padrão em outras linguagens, já estava na hora do javascript adicionar isso também.

## Exemplos

Mostrarei alguns exemplos separados por situação, é bom entendermos como essa funcionalidade reagirá em cada uma.

#### Passando `undefined`

```javascript
function say (message = 'Hello', name = 'World') {
  console.log(`${message} ${name}`);
}

say('Hey', 'People');
say(undefined, 'People');
say('Hi', undefined);
say(undefined, undefined);

// > Hey People
// > Hello People
// > Hi World
// > Hello World
```

#### Passando `null`

```javascript
function say (message = 'Hello', name = 'World') {
  console.log(`${message} ${name}`);
}

say('Hey', 'People');
say(null, 'People');
say('Hi', null);
say(null, null);

// > Hey People
// > null People
// > Hi null
// > null null
```

Como `null` é um valor "falso", podiamos esperar que fosse substituido pelo valor padrão que definimos, mas essa funcionalidade só será aplicada se o valor do parâmetro for `undefined` ou se não passarmos nada como valor.

O mesmo se aplica ao valor `0`, como sabemos, `0` é um valor "falso".

```javascript
function say (message = 'Hello', name = 'World') {
  console.log(`${message} ${name}`);
}

say('Hey', 'People');
say(0, 'People');
say('Hi', 0);
say(0, 0);

// > Hey People
// > 0 People
// > Hi 0
// > 0 0
```

#### Avaliados em tempo de execução da função

Diferente de outras linguagens, o valor padrão do parâmetro é definido novamente a cada chamada da função, ou seja, para cada chamada será uma referência completamente nova.

```javascript
function add (value, list = []) {
  list.push(value);
  return list;
}

console.log(add('test'));
console.log(add('test2'));

// > ['test']
// > ['test2']
```

Chamamos a função duas vezes, e para cada vez que chamamos, o parâmetro `list` é um array completamente novo, em python, por exemplo, teriamos no final uma lista assim: `['test', 'test2']`.

#### Usando funções

Podemos usar o valor retornado de uma função.

```javascript
function getList () {
  return [];
}

function add (value, list = getList()) {
  list.push(value);
  return list;
}

console.log(add('test'));
console.log(add('test2'));

// > ['test']
// > ['test2']
```

E como vocês podem ver, a cada chamada que fazemos na função `add`, a função `getList` é chamada e seu retorno é usado para definir o valor do parâmetro `list`.

#### Usando parâmetros

Podemos usar parâmetros definidos anteriormente.

```javascript
function foo (x, y = x+1, z = x+y) {
  return [x, y, z];
}

console.log(foo(2));
console.log(foo(2, 20));

// > [2, 3, 5]
// > [2, 20, 22]
```


#### Definindo uma callback vazia

Neste exemplo, definimos uma callback vazia, caso alguém chame a função `ajax` sem callback.

```javascript
function ajax (url, cb = function () {}) {
  // ...
}
```


É isso galera

A intenção do post foi tentar esclarecer dúvidas com alguns exemplos e mostrar o funcionamento dessa nova sintaxe bem simples e gratificante de usar \o/
