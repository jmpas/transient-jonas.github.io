---
layout: post
title: The Importance of Iteration Protocols
slug: the-importance-of-iteration-protocols
description: "Let's talk about the importance of iteration protocols, and how valuable they're to the javascript language"
date: 2017-12-07 00:40:43 +0200
language: English
excerpt: |
  What value iteration protocols bring, what they are, how they work and how are they different across programming languages.

  On this blog post, I'll explore iteration protocols and give you lots of examples, so we can understand them easily and explore their usefulness
tags:
- js
- iterator
- iterable
- protocols
---

Hey everyone, recently I caught myself talking to a great friend of mine ([Maksim Ivanov](http://maksimivanov.com/), he writes some really useful articles) about iteration protocols in javascript, during the discussion we were very happy with the language improvements that these protocols bring and we also noticed even more things about it, because of this discussion, I decided to write this article.

Let's get started then, first, let me list the topics that I want to talk about:

- [Iteration Protocols?](#iteration-protocols)
- [Its true value](#its-true-value)
- [for..of](#for-of)
- [Creating a custom iterator](#creating-a-custom-iterator)
- [Built-in iterables](#built-in-iterables)
- [Iterating over objects](#iterating-over-objects)
- [Other languages](#other-languages)
- [Conclusion](#conclusion)

<h2 id='iteration-protocols'>Iteration Protocols?</h2>

Ok, if you don't even know what I'm talking about, I'll explain it real quick and show an example.

Among the iteration protocols we have the Iterable and the Iterator.

Let's check them out separately:

#### Iterable

This protocol simply defines a way to specify the iteration behavior of an object.  
So for example, we have a string object `'Hello World'`, the object itself will tell how its iteration should be like.

How's that? 

Well, let's see a code snippet and explain its code, I believe it'll be easier to understand.

```javascript
const message = 'Hello World'

console.log(message[Symbol.iterator])
// > ƒ [Symbol.iterator]() { [native code] }

console.log(message[Symbol.iterator]())
// > StringIterator {}
```

So, wtf?

Let's go through it:

- A string is created and assigned to the `message` constant
- We use `message[Symbol.iterator]` to access a function (which will return an iterator)
- We call the function, which returns a `StringIterator` (which implements the Iterator Protocol)

That's the iterable protocol, having the `[Symbol.iterator]` defined, so anyone can call it and get its iterator, which can be used to get the values to be iterated.

As you might have noticed, we didn't need to implement/define it, the string object already has a `[Symbol.iterator]` defined, it comes from its prototype (`String.prototype[Symbol.iterator]`), that's not the case for all types of objects, we'll talk more about it on the topic "Built-in iterables".

#### Iterator

This protocol is basically an interface for getting sequencial values.

If you think about it for a bit, that's what an iteration is about, getting values sequencially from something. And you'll also realize how many different types of objects we usually want to iterate over:  
Arrays, Strings, Map, Set, DOM data structures, Streams, Objects...

Now, in case we want to get sequencial values from one of these guys, we could use the iterator protocol to do so.

An iterator needs to implement this interface:

```javascript
{
  next() {
    return { value: <Anything>, done: <Boolean> }
  }
}
```

Let's use a string again, so we can see these two protocols working together:

```javascript
const message = 'Hello'

const messageIterator = message[Symbol.iterator]() // > StringIterator {}

console.log(messageIterator.next())
// > { value: 'H', done: false }
console.log(messageIterator.next())
// > { value: 'e', done: false }
console.log(messageIterator.next())
// > { value: 'l', done: false }
console.log(messageIterator.next())
// > { value: 'l', done: false }
console.log(messageIterator.next())
// > { value: 'o', done: false }
console.log(messageIterator.next())
// > { value: undefined, done: true }
```

Well, I guess it's starting to make some sense, right?

Let's go through it real quick

- We define the string and get an instance of its iterator from it
- We start calling `next()` from the iterator instance (the interface that I mentioned)
- Each value returned by `next()` is a letter from the string
- It returns letters in a left -> right order from the string
- When there are no letters left, we get `undefined` as a value and `true` as done (which means there're no more values)

If you think about it, it's a very simple interface and yet it brings a lot of value to the javascript language.

<h2 id='its-true-value'>Its true value</h2>

As I glimpsed before, we have a lot of cases which we would like to iterate over some kind of structure/object.

We didn't really have a well defined interface for doing it, resulting in different ways to iterate over stuff.

A lot of libraries solved this problem for us, `lodash` for example:

```javascript
_.forEach('Hello', value => console.log(key))
// > 'H' 
// > 'e'
// > 'l'
// > 'l'
// > 'o'

_.forEach([1, 2], value => console.log(value))
// > 1 
// > 2
 
_.forEach({ 'a': 1, 'b': 2 }, (value, key) => console.log(key))
// > 'a' 
// > 'b'
```

As you can see above, one single function `.forEach(...)` which works with any kind of object (String, Array, Object).

But it was about time, that the language itself would improve that, so we wouldn't need a library to execute such a simple thing in a programming language.

Don't get me wrong, I love lodash and such, and they're still super useful and relevant today, they themselves can use and benefit from the iteration interfaces, and they do, imagine how simpler it is to implement their `_.forEach` method now than it was before.

That's the real value, the combination of simplicity, consistency and well defined patterns.

<h2 id='for-of'>for..of</h2>

So, how can we use these protocols in a generic way?

Now, we have `for (let value of <iterable>) { ... }`.

As you can see, it's different than the `for` we're used to.

Let's check some `for..of` examples:

```javascript
const message = 'Hello'

for (let letter of message) {
  console.log(letter)
}

// > H
// > e
// > l
// > l
// > o

const list = [1, 2, 3, 4, 5]

for (let i of list) {
  console.log(i)
}

// > 1
// > 2
// > 3
// > 4
// > 5

const person = new Map([['name', 'jonas'], ['age', 23]])

console.log(person)
// > Map { name → "Jonas", age → 23 }

for (let [key, value] of person) {
  console.log(`${key}:`, value)
}

// > name: Jonas
// > age: 23
```

How about `for..in`?

It's still different.

The `for..in` iteration does not use iteration protocols, it iterates over enumerable properties of objects, unless the property's name is a `Symbol` or defined via `Object.defineProperty` setting `enumerable` to `false`.

This also means it would also iterate over its prototype properties (if they fit the description above).

You can avoid such thing by adding a conditional `if (obj.hasOwnProperty(prop)) { ... }` inside your `for..in` block, so it will execute the code only for properties of the actual instance.

However, you can avoid `for..in` if you wish, and use iteration protocols with `Object` instances like you would use `for..in` (without the necessity of the conditional though), make sure to use one of the static methods when using `for..of` with `Object` types, for example: `Object.entries`

I'll show how it looks like on the topic "Iterating over objects".

<h2 id='creating-a-custom-iterator'>Creating a custom iterator</h2>

One interesting thing to point out, is that these protocols are not stricted to be implemented only in the javascript engines, it's also possible to create a custom one.

Let's check an example?

```javascript
function rangeOf(n) {
  let i = 1
  const range = {}

  range[Symbol.iterator] = () => ({
    next() {
      let [value, done] = (i <= n ? [i++, false] : [undefined, true])
      return { value, done }
    }
  })

  return range
}

for (let i of rangeOf(5)) {
  console.log(i)
}

// > 1
// > 2
// > 3
// > 4
// > 5
```

Ok, once more, let's go through the code:

- A function called `rangeOf` is defined, it should receive a integer as a parameter
- Inside it, we define a variable `ì` and a `range` empty object
- Now we assign a function to the `range[Symbol.iterator]`
- The function which we assign to `range` returns an object, which follows the iterator protocol
- Its `next` method checks if our `i` variable is yet bigger than our `n` (dynamic integer parameter) or not
- If not, we define `i` as value and add plus one to it, and of course done is `false`
- If yes, we pass value as `undefined` and done as `true`
- In the end of `rangeOf` we return our iterable `range` object
- Now, we're using `for..of` to iterate a brand new created iterable `range` object, using the value `5`
- We log to the console each value during the iteration

You see, we created a brand new code following the iteration protocols and using `for..of` with it and it works!

<h2 id='built-in-iterables'>Built-in iterables</h2>

So, Built-in iterables, what do I mean with "Built-in" here?

If we take a look at the language specification ([Ecma262](https://github.com/tc39/ecma262)), we'll find a couple of clauses which mention the implementation of the `[Symbol.iterator]` to some "language entities", check it out:

- [Map.prototype[Symbol.iterator]](https://tc39.github.io/ecma262/#sec-map.prototype-@@iterator)
- [Set.prototype[Symbol.iterator]](https://tc39.github.io/ecma262/#sec-set.prototype-@@iterator)
- [Array.prototype[Symbol.iterator]](https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator)
- [String.prototype[Symbol.iterator]](https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator)
- [%IteratorPrototype%[Symbol.iterator]](https://tc39.github.io/ecma262/#sec-%iteratorprototype%-@@iterator)
- [%TypedArray%.prototype[Symbol.iterator]](https://tc39.github.io/ecma262/#sec-%typedarray%.prototype-@@iterator)

This is what I mean with Built-in iterables, the specification is created and the javascript engines implement it.

If you're as curious as I am about such things, I also recommend you to go take a look at the [Test262](https://github.com/tc39/test262) repository.

So, now that we've seen this, let's look at some code?

```javascript
console.log(new Map()[Symbol.iterator]())
// > Map Iterator {  }

console.log(new Set()[Symbol.iterator]())
// > Set Iterator {  }

console.log(''[Symbol.iterator]())
// > String Iterator {  }

console.log([][Symbol.iterator]())
// > Array Iterator {  }
console.log(new Int8Array()[Symbol.iterator]())
// > Array Iterator {  }
console.log(new Int16Array()[Symbol.iterator]())
// > Array Iterator {  }
console.log(new Int32Array()[Symbol.iterator]())
// > Array Iterator {  }
```

As you can see, all of these objects are iterables and implement the protocols that we've been discussing so far, you don't need to define them, they're already implemented by the engines which are up to date with the specification.

But... how about `Object` instances? As I mentioned earlier, if we want ot use `for..of` with it, we need to use one of its static methods.

Plain objects are not iterables, if we look at the `Object.prototype[Symbol.iterator]` we see that it's not defined.

<h2 id='iterating-over-objects'>Iterating over objects</h2>

So, let's say we want to iterate over objects using `for..of`, how can we do it?

Let's check some of the `Object` static methods in action:

```javascript
const person = {name: 'Jonas', age: 23}

for (let [prop, value] of Object.entries(person)) {
  console.log(`${prop}:`, value)
}

// > name: Jonas
// > age: 23

for (let value of Object.values(person)) {
  console.log(value)
}

// > 'Jonas'
// > 23

for (let key of Object.keys(person)) {
  console.log(key)
}

// > name
// > age
```

As you can see, we have the `entries`, `values` and `keys` static methods, which we call directly from the `Object` reference, and with that, we can iterate over an object the way it's more appropiate for us, depending on the situation.

<h2 id='other-languages'>Other Languages</h2>

I wanted to compare for curiosity how these interfaces/protocols work on other programming languages, so I decided to add this topic to the blog post, in case you're curious like me and wish to compare the specifications.

#### Python

Let's check a slice of text from the [language specification](https://docs.python.org/3/glossary.html#term-iterable) itself for these protocols.

**Iterable**

> An object capable of returning its members one at a time. Examples of iterables include all sequence types (such as list, str, and tuple) and some non-sequence types like dict, file objects, and objects of any classes you define with an __iter__() method or with a __getitem__() method that implements Sequence semantics.

**Iterator:**

> An object representing a stream of data. Repeated calls to the iterator’s __next__() method (or passing it to the built-in function next()) return successive items in the stream. When no more data are available a StopIteration exception is raised instead.

Sounds familiar? :)

Let's recreate the same `rangeOf` example with python?

```python
class RangeOf:

    def __init__(self, n):
        self.n = n

    def __iter__(self):
        self.i = 1
        return self

    def __next__(self):
        if self.i <= self.n:
            result = self.i
            self.i += 1
            return result
        else:
          raise StopIteration

for i in RangeOf(5):
    print(i)

# > 1
# > 2
# > 3
# > 4
# > 5
```

For the record, python has an immutable sequence type called `range` already, I won't go into it here though.


#### Elixir

In Elixir, we've the Enumerable protocol, let's take a look and see if it's similar.

When you invoke a function from the `Enum` module (usually used to iterate over stuff) the first argument is usually a collection that must implement the enumerable protocol.

The enumerable protocol is basically having a reduce method defined:

```elixir
def reduce(_,       {:halt, acc}, _fun),   do: {:halted, acc}
def reduce(list,    {:suspend, acc}, fun), do: {:suspended, acc, &reduce(list, &1, fun)}
def reduce([],      {:cont, acc}, _fun),   do: {:done, acc}
def reduce([h | t], {:cont, acc}, fun),    do: reduce(t, fun.(h, acc), fun)
```

(it uses pattern matching and recursion)

And we have this guy which is returned:

**acc()**
> acc() :: {:cont, term} | {:halt, term} | {:suspend, term}
  The accumulator value for each step.

It must be a tagged tuple with the accumulator value (`term`) and with one of the following “tags”:

`:cont` - the enumeration should continue  
`:halt` - the enumeration should halt immediately  
`:suspend` - the enumeration should be suspended immediately

So, we kind of see a very similar thing to the `done` we've seen before.

Let's create something using it?

Let's say we've a `Developer` and this developer has a `name` and a `languages` collection.  
I want to iterate over it using `Enum.reduce` which will use the Enumerable protocol, and I want to get a language on each iteration step.

```elixir
defmodule Developer do
  defstruct name: '', languages: []

  defimpl Enumerable do
    def reduce(_, {:halt, acc}, _fun), do: {:halted, acc}

    def reduce(%Developer{languages: languages}, {:suspend, acc}, fun) do
      {:suspended, acc, &reduce(%Developer{languages: languages}, &1, fun)}
    end

    def reduce(%Developer{languages: []}, {:cont, acc}, _fun), do: {:done, acc}

    def reduce(%Developer{languages: [head | tail]}, {:cont, acc}, fun) do
      reduce(%Developer{languages: tail}, fun.(head, acc), fun)
    end
  end
end

defmodule Main do
  def run do
    developer = %Developer{name: 'Charlieh', languages: ['js', 'ruby', 'python', 'elixir']}

    Enum.reduce(developer, "#{developer.name} knows", fn(skill, acc) -> "#{acc} #{skill}" end) |> IO.puts
  end
end

Main.run

# > Charlieh knows js ruby python elixir
```

There you go, we created our own `Developer` entity and implemented the `Enumerable` protocol on it.

This example doesn't add much customization to the iteration behavior actually, but it could...

Unfortunately I'm not experienced with Elixir to show you something more interesting than this, but I guess it served the purpose well, which is the demonstration of a protocol being implemented.

<h2 id='conclusion'>Conclusion</h2>

In this post, I hope you've got the idea and how awesome and important iteration protocols are for a language.

And there are many more things related to this topic that I could've added here, but I don't want this blog post to grow so long.

But I can list a few things which I didn't mention that use these protocols in the javascript language:

- Promises (`Promise.all`, etc)
- Spread (`[...[1, 2, 3, 4], 5, 6, 7]`)
- Destructuring (`[a, b] = [1, 2]`, `[first, ...rest] = [1, 2, 3, 4, 5]`)
- Array.from (`Array.from(new Map(['name', 'jonas'], ['age', 23]))`)
- more...

And we have a very nice stage 3 proposal regarding async iterators: [Asynchronous Iterators for JavaScript](https://github.com/tc39/proposal-async-iteration) which I'm very hyped about.

Well, I think that's it, I hope you learned reading this article as much as I did writing it.

I wish to leave a few useful links in case you want to check them out and go even further:

- [Ecma262 Iteration Interfaces](https://tc39.github.io/ecma262/#sec-common-iteration-interfaces)
- [Test262](https://github.com/tc39/test262)
- [MDN Iteration Protocols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
- [ES6 Iterators in Depth](https://ponyfoo.com/articles/es6-iterators-in-depth) by [Nicolás Bevacqua](https://twitter.com/nzgb)
- [Iterables and iterators in ECMAScript 6](http://2ality.com/2015/02/es6-iteration.html) by [Axel Rauschmayer](https://twitter.com/rauschma)

If you have any feedback at all, feel free to comment below :)

See ya around!
