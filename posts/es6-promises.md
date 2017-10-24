---
layout: post
title: "ES6 - Promises"
slug: es6-promises
description: "Entenda ES6 promises e suas vantagens em operações assíncronas no javascript."
date: 2016-04-08 18:40:43 -0300
language: Brazilian Portugese
excerpt: |
  Esse post será sobre promises

  Lista dos tópicos que irei abordar:

  - O que é uma Promise?
  - States
  - Constructor
  - Instance Methods
  - Static Methods
  - Chaining
  - Error handling
  - Parallelism and sequencing
tags:
- es6
- js
- promises
- async
categories:
- ES6 - O que mudou?
---

E ai galera, vamos continuar a série "ES6 - O que mudou?" :)

Esse post será sobre promises

Lista dos tópicos que irei abordar:

- O que é uma Promise?
- States
- Constructor
- Instance Methods
- Static Methods
- Chaining
- Error handling
- Parallelism and sequencing

Vamos começar

## O que é uma Promise?

Promise é um objeto usado para representar uma operação que ainda não foi completada, mas que eventualmente será finalizada no futuro.

Esse objeto tem uma API que te permite fazer algo assim que ela acabar, recebendo o resultado dessa operação como parâmetro.

"Ta, mas eu já faço isso com callback"

Usar promises tem diversas vantagens, ela te permite manipular o resultado de uma ou várias operações assíncronas com mais facilidade e organização. 
**Promise é uma das soluções para o callback hell.**

Então, vamos ver um pequeno exemplo utilizando uma callback comum, para relembrar como fazemos operações assíncronas sem promises.

Digamos que nós temos uma função `fetch` que faz requests HTTP para um servidor.

```javascript
fetch('/data.json', (err, data) => {
  if (err) {
    // handle error
  }

  // handle data from server
});
```

Ok, temos uma callback que recebe 2 parâmetros, um `err` (caso tenha ocorrido algum erro) e um `data` (dados que o servidor retornou para a nossa aplicação).

Agora vamos ver como fazemos a mesma operação, sendo que a função `fetch` irá retornar uma promise dessa vez.

```javascript
fetch('/data.json')
  .then((data) => {
    // handle data from server
  })
  .catch((err) => {
    // handle error
  });
```

Dessa vez, chamamos 2 métodos, o `then` (que é chamado recebendo o dado do backend caso tudo tenha dado certo) e o `catch` (que é chamado recebendo um erro caso algo tenha dado errado), falarei mais sobre eles ao decorrer do post.

## States

Uma promise só pode ter 3 possíveis estados:

- Pending
- Fulfilled
- Rejected

Pendente, resolvida ou rejeitada. 

Caso o status atual seja pendente, a operação ainda não acabou e nenhuma callback passada para os métodos `then` ou `catch` foi invocada ainda.  

Se resolvida, o valor recebido é o valor que a operação retorna, quando a operação for executada sem problemas (parâmetro recebido no `then`).  

Se rejeitada, o valor é uma informação de erro, avisando que algo deu errado na operação e descrevendo a razão do acontecido (parâmetro recebido no `catch`).

**Uma promise não pode ser resolvida e em seguida rejeitada ou vice e versa**, a única transição de estado que ela sofre, é de pendente para uma das duas (resolvida ou rejeitada).

## Constructor

Então, qual é a sintaxe usada para criarmos uma promise em ES6?

Para criarmos uma instância de uma Promise, vamos usar o construtor `Promise(..)`.

Como exemplo, vamos ver uma representação do que acontece dentro da função `fetch`, que foi usada anteriormente.

```javascript
function fetch (url) {
  return new Promise((resolve , reject) => {
    // Faz o request HTTP (assíncrono)
    // dentro da callback do request chama `resolve(..)` ou `reject(..)`
  }); 
}
```

No código acima, dentro da função `fetch` estamos retornando uma nova Promise, criada por nós. O construtor dessa Promise, recebe uma função como parâmetro e essa função recebe dois parâmetros (`resolve` e `reject`), que também são funções.

Então, quando queremos que a nossa promise, seja resolvida, chamamos a função que recebemos como parâmetro `resolve('Some data')`, e no caso de erro, chamamos o `reject('Error description')` que também recebemos como parâmetro.

Vamos implementar um `fetch` falso que chamaria `resolve` depois de uma operação assíncrona, no exemplo usaremos o `setTimeout` para simular algo assíncrono.

```javascript
function fetch (url) {
  return new Promise((resolve , reject) => {
    setTimeout(() => resolve('Some data'), 1000);
  }); 
}

fetch('/some-url')
  .then(data => console.log(data));

// > 'Some data'
```

Como podemos ver no exemplo, a callback passada para o método `then` recebe o dado `'Some data'`, que é a string que passamos para a função `resolve`.

Agora vamos ver um exemplo parecido, mas dessa vez chamaremos a função `reject`.

```javascript
function fetch (url) {
  return new Promise((resolve , reject) => {
    setTimeout(() => reject(Error('Something went wrong')), 1000);
  }); 
}

fetch('/some-url')
  .then(data => console.log(data))
  .catch(err => console.log(err));

// > Error: Something went wrong
```

Nesse exemplo, vemos a callback passada para o método `catch` sendo executada recebendo o dado `'Something went wrong'` como o parâmetro `err`.
Algo importante a citar, é que o `then` **não é executado** nesse caso, porque quando o `reject` é chamado, ele pula para o primeiro `catch`.

## Instance Methods

Os métodos de uma instância de `Promise`, são o `then` e o `catch`.

#### then(..)

O método `then`, recebe uma callback de sucesso que será executada quando a promise for resolvida e uma segunda callback que será executada quando a promise for rejeitada.

Exemplo:

```javascript
function fetch (url) {
  return new Promise((resolve , reject) => {
    setTimeout(() => reject(Error('Something went wrong')), 1000);
  }); 
}

fetch('/some-url')
  .then(
    data => console.log(data),
    err => console.log(err)
  );

// > Error: Something went wrong
```

No exemplo acima, ao invés de usarmos `catch` passamos a callback de erro como o segundo parâmetro do `then`.

No final das contas, não faz diferença entre fazer dessa forma ou usar o `catch`, eu pessoalmente gosto de usar o `catch`, acho que fica mais claro e organizado.

#### catch(..)

Como visto nos exemplos anteriores, o método `catch` recebe uma única callback, para tratar de um erro que possa ter ocorrido na operação, quando a promise é rejeitada.

**Esses dois métodos retornam uma promise.**

"Oi? o.O"

Isso mesmo, como você já deve ter reparado nos exemplos, o `catch` está sendo chamado logo após o `then`, ou seja, é executado o método `catch` do retorno do `then`, isso funciona porque eles retornam uma promise.

"Então quer dizer que eu posso chamar o método `then` depois do `catch` também?"

Isso mesmo, podemos até chamar `then` depois de `then`.

Mostrarei como isso faz sentido no tópico "chaining".

## Static Methods

Assim como podemos criar promises `new Promise((resolve, reject) => { .. })` podemos também chamar métodos estáticos dessa referência (`Promise`).

Temos alguns métodos que podemos usar, que são bem úteis.

- all(iterable)
- race(iterable)
- resolve(value)
- reject(reason)

#### all([..])

O método `Promise.all(..)` recebe como parâmetro um array contendo promises e retorna uma promise que ou será resolvida apenas quando **todas** as promises do array estiverem resolvidas ou rejeitada assim que **uma** delas for rejeitada.

Vamos ver um exemplo sem `catch`:

```javascript
let promises = [];

promises.push(fetch('/some-url/1'));
promises.push(fetch('/some-url/2'));
promises.push(fetch('/some-url/3'));

Promise.all(promises)
  .then(responses => console.log(responses));

// > ['Some data 1  ', 'Some data 2', 'Some data 3']
```

Então, recapitulando o que aconteceu acima

1. Chamamos a nossa função `fetch` 3 vezes, para cada chamada é retornado uma promise diferente e adicionamos a promise retornada em um array.
2. Acessamos o método estático `all` da referência global `Promise` e passamos o array (`promises`) como parâmetro.
3. Como o método `all` retorna uma promise, estamos dando um `then` logo em seguida do `all`.
4. A callback que passamos para o `then` está recebendo um array de resultados, os resultados estão na mesma ordem das promises que existem dentro do array, logo `responses[0]` seria a resposta de `promises[0]`.

Vamos ver um exemplo igual, mas com uma das promises sendo rejeitada.  

Digamos que nesse exemplo, quando chamamos o `fetch` com `/some-url/2` a promise retornada seja rejeitada, teriamos um array de 2 promises que serão resolvidas e 1 rejeitada. Vamos ver o que acontece.

```javascript
let promises = [];

promises.push(fetch('/some-url/1'));
promises.push(fetch('/some-url/2'));
promises.push(fetch('/some-url/3'));

Promise.all(promises)
  .then(responses => console.log(responses))
  .catch(err => console.log(err));

// > Error: Something went wrong
```

Então, aconteceu a mesma coisa quando temos uma promise rejeitada, o `then` foi ignorado, e fomos parar direto no `catch` com apenas uma mensagem de erro que veio da segunda promise do array.

Vale citar que as outras operações ainda serão executadas, elas não são abortadas, porém, a callback do `then` mesmo assim não será chamada.

#### race([..])

O método `Promise.race(..)` também recebe como parâmetro um array contendo promises e retorna uma promise que ou será resolvida assim que **qualquer uma** das promises do array estiverem resolvida ou rejeitada assim que **qualquer uma** delas for rejeitada.

Vamos ver um exemplo em que a segunda promise foi a primeira que foi resolvida:

```javascript
let promises = [];

promises.push(fetch('/some-url/1'));
promises.push(fetch('/some-url/2'));
promises.push(fetch('/some-url/3'));

Promise.race(promises)
  .then(response => console.log(response))
  .catch(err => console.log(err));

// > 'Some data 2'
```

O exemplo é muito similar com o do `Promise.all([..])`, a única difereça, é que estamos chamando o método `race` e em vez de recebermos um array de resultados na callback do then, estamos recebendo o resultado da promise que foi resolvida primeiro.

No caso em que uma das promises for rejeitada, acontecerá a mesma coisa que aconteceu no exemplo do `Promise.all([..])`, a callback do `then` não será executada, e teremos o erro da promise que foi rejeitada.

Lembrando de novo, que não acontece nenhum tipo de cancelamento das outras operações, promises não tem um método para isso.

#### resolve(..)

Esse método é bem simples, ele retorna uma promise já resolvida, e recebe como parâmetro o valor que a callback do `then` receberá.

Exemplo:

```javascript
let promise = Promise.resolve('My data');

promise
  .then(data => console.log(data));

// > 'My data'
```

#### reject(..)

Esse método é o contrário do `Promise.resolve(..)`, ele retorna uma promise já rejeitada, e recebe como parâmetro o valor que a callback do `catch` receberá (o motivo da rejeição).

Exemplo:

```javascript
let promise = Promise.reject(Error('Some reason'));

promise
  .then(data => console.log(data))
  .catch(reason => console.log(reason));

// > Error: Some reason
```

## Chaining

Então, lembram quando eu mencionei que podemos chamar `then` / `catch` seguido de outro `then` / `catch`?

Isso se chama chaining, nesse tópico vamos descobrir que `then` não é o fim da estrada.

Podemos usar essa tática para processar dados ou executar mais operações assíncronas.

#### Processando dados

Você pode processar um dado que foi retornado em uma promise e continuar encadeamento de "thens", simplesmente retornando um novo valor dentro da callback.

Exemplo:

```javascript
let promise = Promise.resolve(2);

promise
  .then(data => data + 1)
  .then(data => console.log(data));

// > 3
```

Acima, definimos uma promise já resolvida com o valor `2`, chamamos o método `then` passando uma callback que retorna `data + 1` e em seguida colocamos mais um `then` que loga seu `data`.

O `data` do segundo `then` é o retorno do primeiro.

Então isso te permite criar um flow de execução bem limpo.

Digamos que chamamos o método `fetch` pegando um json, mas esse json vem como string, e queremos transforma-lo em objeto.

Exemplo:

```javascript
fetch('/data.json')
  .then(data => JSON.parse(data))
  .then(obj => console.log(obj));

> { name: 'Promise' }
```

Nesse exemplo, recebemos uma string `'{ "name": "Promise" }'`, e transformamos ela em um objeto javascript chamando o método `JSON.parse` retornando o novo objeto para o próximo `then` que apenas loga o objeto.

#### Executando mais operações assíncronas

Você pode encadear "thens" para executar mais operações assíncronas, em sequência da anterior.

Quando você retorna um valor na callback do `then` a callback do próximo `then` irá receber esse valor, mas se você retornar uma outra promise a próxima execução irá aguardar que essa promise seja resolvida ou rejeitada.

Exemplo:

```javascript
fetch('/data.json')
  .then(data => JSON.parse(data))
  .then(obj => { name: obj.name, date: new Date() })
  .then(obj => fetch('/save', { method: 'POST', body: obj }))
  .then(response => console.log(response));

// > 'Done.'
```

1. Usamos o `fetch` mais uma vez para fazer requests para uma API
2. Pegamos um json da API
3. Parseamos esse json
4. Retornamos um novo objeto com a propriedade `name` e com uma nova propriedade `date` recebendo a data atual
5. Usamos o fetch novamente passando esse novo objeto para outra rota da API
6. Quando o novo request acabar, o próximo `then` será executado, e logamos a resposta.

Agora, parem para pensar como isso ficaria sem promises...

Pois é, quando disse que promise é uma das soluções para o callback hell, foi isso que eu quis dizer.

## Error handling

Já vimos a utilização do `catch` em alguns exemplos, usaremos o `catch` bastante para tratar os erros que acontecem nessas operações com promises.

A callback que passamos pro`catch` será chamada caso a etapa anterior a ele der algum erro ou retornar uma promise rejeitada.

Exemplo:

```javascript
Promise.resolve('Data')
  .then(data => Promise.reject(Error('Fail')))
  .then(() => console.log('yay'))
  .catch(err => console.log(err));

// > Error: Fail
```

No exemplo, temos uma promise que foi resolvida, mas ao `then` ser executado, retornamos uma promise rejeitada, causando a execução do próximo `catch`.

Com isso, dentro de "thens" podemos fazer checagens e retornar uma promise rejeitada para forçar a entrada no próximo `catch`, porque checamos que algo deu errado e no `catch` tratamos esse erro.

O mesmo acontece quando um `throw` ocorre dentro de alguma etapa.

Exemplo:

```javascript
Promise.resolve('Data')
  .then(data => JSON.parse(data))
  .then(() => console.log('yay'))
  .catch(err => console.log(err));

// > SyntaxError: Unexpected token D
//       at Object.parse (native) ...
```

Nó código acima, quando executamos o método `JSON.parse` passando `data` como parâmetro ocorre um `throw SyntaxError(..)`. O que causa a execução direta do `catch`. 

Como podemos ver o `throw` não saiu do escopo do nosso encadeamento, permitindo o tratamento do erro, exibindo uma mensagem para o usuário ou até mesmo corrigindo o problema, sem afetar o funcionamento da aplicação.

## Parallelism and sequencing

Por último, vou mostrar duas formas de executarmos operações assim dinamicamente, utilizando métodos que nós temos nativamente em um `Array`.

#### Paralellism

Imaginem que temos um array de itens que queremos salvar através de uma API, e queremos mandar salvar todos eles em paralelo e fazer algo assim que cada operação acabar.

Exemplo:

```javascript
let items = [{ name: 'es5' }, { name: 'es6' }, { name: 'es7' }, { name: 'es8' }];

items.forEach(item => {
  fetch('/save', { method: 'POST', body: obj })
    .then(res => console.log(res));
});

// > 'es6 Done.'
// > 'es8 Done.'
// > 'es5 Done.'
// > 'es7 Done.'
```

Nesse exemplo, podemos ver que não importa a ordem de finalização de nossas operações, queremos que a nossa callback seja executada assim que a operação acabar.

No output do console, podemos ver que o es6 foi o primeiro a terminar, o es8 foi o segundo, es5 terceiro e es7 o quarto.

Não queremos que seja sequencial, na ordem que está no array, só queremos que todos sejam salvos em paralelo e que nossas callbacks sejam executadas assim que sua respectiva promise for resolvida.

#### Sequencing

Imaginem o mesmo array, a mesma operação, porém não queremos continuar salvando esses itens caso uma das operações falhe ou que queremos salva-los sequencialmente, na ordem que está no array.

Exemplo:

```javascript
let items = [{ name: 'es5' }, { name: 'es6' }, { name: 'es7' }, { name: 'es8' }];

items.reduce((sequence, obj) => {
  return sequence
    .then(() => fetch('/save', { method: 'POST', body: obj }))
    .then(res => console.log(res));
}, Promise.resolve());

// > 'es5 Done.'
// > 'es6 Done.'
// > 'es7 Done.'
// > 'es8 Done.'
```

Nesse exemplo podemos ver que criamos um encadeamento dinamico, não importa a quantidade de itens que temos no array, todos eles serão salvos na ordem que estão no array.

O método reduce no final das contas, é a mesma coisa que esse código:

```javascript
let items = [{ name: 'es5' }, { name: 'es6' }, { name: 'es7' }, { name: 'es8' }];

Promise.resolve()
  .then(() => fetch('/save', { method: 'POST', body: items[0] }))
  .then(res => console.log(res))
  .then(() => fetch('/save', { method: 'POST', body: items[1] }))
  .then(res => console.log(res))
  .then(() => fetch('/save', { method: 'POST', body: items[2] }))
  .then(res => console.log(res))
  .then(() => fetch('/save', { method: 'POST', body: items[3] }))
  .then(res => console.log(res));

// > 'es5 Done.'
// > 'es6 Done.'
// > 'es7 Done.'
// > 'es8 Done.'
```

Porém, com `reduce`, não importa a quantidade de items, conseguimos fazer operações baseadas em dados dinamicos que estão dentro de um array.

## Links úteis

Se quiserem ver mais exemplos e se aprofundar mais, vejam esses links.

- O [blog](https://ponyfoo.com/) (ponyfoo) e [esse artigo](https://ponyfoo.com/articles/es6-promises-in-depth) do [Nicolás Bevacqua](https://twitter.com/nzgb) que são sensacionais.
- Esse [artigo](http://www.html5rocks.com/en/tutorials/es6/promises) do [Jake Archibald](https://twitter.com/jaffathecake) é excelente.
- [MDN](https://developer.mozilla.org) é vida, e é claro que tem [documentação](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise) sobre Promise.

Bom galera, é isso.

Promises são ótimas, espero que com esse post vocês consigam entender melhor como é o seu funcionamento e usa-las no dia a dia.

Comentem ai o que acharam :)
