---
layout: post
title:  "ES6 - Let, Const & Blocks"
description: "Aprenda a diferença das novas variáveis no ES6 e o que mudou para o Javascript antigo."
date:   2016-03-27 16:13:43 -0300
language: Brazilian Portugese
excerpt: |
  Aprenda a diferença das novas variáveis no ES6 e o que mudou para o Javascript antigo.

  Lista dos assuntos que irei abordar no post:

  - Let
  - Const
  - Blocks
  - TDZ
tags:
- es6
- js
categories:
- ES6 - O que mudou?
---

Fala galera, nesse post eu vou falar um pouco sobre a "nova" versão do JavaScript (ES6).

Digo "nova" (entre aspas) porque a especificação dela foi aprovada no ano passado (2015), e já tem muitos browsers que suportam boa parte de suas funcionalidades, mas ainda vejo muita gente com dúvidas sobre ela.
  
Esse post será parte de uma série de posts chamada "ES6 - O que mudou?", ela será uma versão simplificada do primeiro tópico de uma talk que eu dei onde eu trabalho, quem quiser ver, é só acessar os [slides](http://www.slideshare.net/Hugeinc/what-is-new-on-es6).

O objetivo é escrever posts pequenos e com bastante exemplos.

Lista dos assuntos que irei abordar no post:

- Let
- Const
- Blocks
- TDZ

## Let & Blocks

> `let` permite que você defina uma variável limitada pelo escopo do bloco `{}` de onde foi declarada.

Diferente de `var`, que é limitada ao escopo de sua função.

Anteriormente, no javascript, somente as funções criam escopo, diferente de outras linguagens, que criam escopo dentro de blocos, no ES6 com `let` isso muda, e passamos a ter escopo nos blocos também.

**Exemplo:**

```javascript
(function IIFE () {
  'use strict';

  var version = 'ES5'; // Declara "version" dentro da função IIFE

  {
    let version = 'ES6'; // Declara "version" dentro do bloco "{}"
    console.log(version); // > 'ES6'
  }

  console.log(version); // > 'ES5'
})();
```

Ok, vamos recapitular o que aconteceu acima  

1. Dentro da IIFE declaramos uma variável com o nome `version` limitada ao escopo da função 
2. Em seguida temos um bloco, sem nenhuma condição ou loop, um bloco puro (sim, podemos fazer isso em JS)
3. Dentro desse bloco, declaramos outra variável `version`
4. Logamos a variável `version` (declarada dentro do bloco)
5. Fora do bloco, logamos a variável `version` (que será a que foi declarada no início da função)

Ou seja, as duas variáveis não conflitaram, porque elas estão declaradas em escopos diferentes, isso graças ao `let`, caso nós usássemos `var` para declarar a segunda variável chamada version, a variável anterior seria sobrescrita.

Uma coisa bacana que `let` resolve, é quando você quer fazer um loop fazendo operações assíncronas para cada iteração (adicionando uma callback).

Como assim?

Bom, quando usamos um `for` loop adicionando callbacks e usando a variável `i` de alguma forma em cada callback, temos um problema, a variável `i` não será a mesma quando as operações assíncronas acabarem, porque todas as callbacks tem a mesma referência de `i`.

**Exemplo usando `var`:**

```javascript
(function IIFE () {
  'use strict';
  
  var versions = ['es5', 'es6', 'es7', 'es8'];

  for (var i = 0, n = versions.length; i < n; i++) {
    console.log(i);
    getNewName(versions[i], function (newName) {
      versions[i] = newName;
      console.log(versions, i, version[i]);
    });
  }
})();

> 0
> 1
> 2
> 3

> ['es5', 'es6', 'es7', 'es8'] 4 undefined
> ['es5', 'es6', 'es7', 'es8', 'es5'] 4 'es5'
> ['es5', 'es6', 'es7', 'es8', 'es2015'] 4 'es2015'
> ['es5', 'es6', 'es7', 'es8', 'es2016'] 4 'es2016'
```

Vamos recapitular de novo?

1. Tenho um array com versões do javascript
2. Para cada item do array, eu chamo o método `getNewName` passando a versão e uma callback (pois ele é assíncrono)
3. Dentro da callback eu uso a variável `i` para acessar o item desejado
4. Dá tudo errado

A referência da variável `i` é a mesma, para todas as operações dentro do `for`, ou seja, como a callback será executada depois de um certo período de tempo, o valor de `i` não será o mesmo, no nosso caso, ele terá o valor `4` porque estamos aumentando seu valor a cada iteração.

Então, o que acontece quando usamos `let` ao invés de `var`?

**Exemplo usando `let`:**

```javascript
(function IIFE () {
  'use strict';
  
  var versions = ['es5', 'es6', 'es7', 'es8'];

  for (let i = 0, n = versions.length; i < n; i++) {
    console.log(i);
    getNewName(versions[i], function (newName) {
      versions[i] = newName;
      console.log(versions, i, version[i]);
    });
  }
})();

> 0
> 1
> 2
> 3

> ['es5', 'es6', 'es7', 'es8'] 0 'es5'
> ['es5', 'es2015', 'es7', 'es8'] 1 'es2015'
> ['es5', 'es2015', 'es2016', 'es8'] 2 'es2016'
> ['es5', 'es2015', 'es2016', 'es2017'] 3 'es2017'
```

Recapitulando...

Então, como disse no exemplo com `var`, a referência da variável `i` é a mesma para todas as operações dentro do `for`, porque o escopo dela é a função, com `let`, o escopo da variável `i` é o bloco, logo, para cada iteração feita, a referência de `i` será diferente, por isso mesmo executando uma callback depois de um certo período de tempo usando `i` não tem problema, pois a referência é única para cada iteração.

## Const

> `Const` declara uma constante, uma referência de somente leitura para um valor alocado em memória.

Ou seja, diferente de `var` ou `let`, se tentarmos alterar a referência que a `const` declarada está guardando, ganhamos um `TypeError`.

**Exemplo alterando a referência:**

```javascript
(function IIFE () {
  'use strict';

  const VERSION = 'ES6';

  VERSION = 'ES5';
})();

> 'Uncaught TypeError: Assignment to constant variable'
```

**O fato dela ser uma const`, não quer dizer que o valor que ela guarda é imutável!**

Ihalá, como assim o.O?

Com um exemplo deve ficar fácil de entender

**Exemplo alterando o valor:**

```javascript
(function IIFE () {
  'use strict';

  const VERSIONS = {
    es6: 'ES6',
    es7: 'ES2016',
    es8: 'ES2017'
  };

  VERSIONS.es6 = 'ES2015';

  console.log(VERSIONS);
})();

> {es6: 'ES2015', es7: 'ES2016', es8: 'ES2017'}
```

Então, acho que agora ficou claro, o erro só ocorre quando você tenta substituir a referência que uma `const` está guardando.

Mais um exemplo de erro, dessa vez usando um objeto igual no exemplo anterior.

**Exemplo alterando a referência:**

```javascript
(function IIFE () {
  'use strict';

  const VERSIONS = {
    es6: 'ES6',
    es7: 'ES2016',
    es8: 'ES2017'
  };

  VERSIONS = {
    es6: 'ES2015',
    es7: 'ES2016',
    es8: 'ES2017'
  };
})();

> 'Uncaught TypeError: Assignment to constant variable'
```

## Const & Blocks

>`const` é limitada ao escopo do bloco `{}`.

Isso mesmo, `const` se comporta igual ao `let` quando se trata do escopo em que foram declaradas.

**Exemplo:**

```javascript
(function IIFE () {
  'use strict';

  const VERSION = 'ES5';
  
  {
    const VERSION = 'ES6';
    console.log(VERSION);
  }

  console.log(VERSION);
})();

> 'ES6'
> 'ES5'
```

## TDZ (Temporal Dead Zone)

> `let` e `const` farão o "hoist" do valor para o topo do bloco. Porém, usa-los antes da linha de código onde foram declarados, causa um `ReferenceError`.

 Os valores estão no "temporal dead zone", que existe do começo do bloco `{}` até a linha onde ocorre a declaração do valor (usando `const` ou `let`).

 Com `var`, a variável sempre é declarada como `undefined` no início da função, logo não temos o temporal dead zone quando usamos `var`.

**Exemplo:**

```javascript
(function IIFE () {
  'use strict';
  
  console.log(version); // undefined
  console.log(letVersion);
  // Uncaught ReferenceError: letVersion is not defined
  console.log(VERSION);
  // Uncaught ReferenceError: VERSION is not defined

  var version = 'es6';
  let letVersion = 'ES6';
  const VERSION = 'ES6';
})();
```

Então, recapitulando esse último exemplo.

Com variáveis declaradas com `var`, não importa em qual momento da função ela está sendo declarada, o javascript fará a declaração dela como `undefined` no ínicio da função.

Com `let`, ele faz o hoisting para o início do bloco, porém não permite você acessar a variável até a sua declaração, mesmo sem atribuição alguma, por exemplo:

```javascript
let version;
```

E com `const`, funciona da mesma forma que o `let`.

Bom galera, espero que tenham gostado do post, qualquer feedback será muito bem vindo.  
Se tiverem algo a acrescentar, comentem ai em baixo :)

