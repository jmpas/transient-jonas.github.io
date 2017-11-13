---
layout: post
title: "Creating a static website with NextJs"
slug: creating-a-static-website-with-nextjs
description: "I just created a totally new and redesigned version of my website using the awesome NextJs framework, let me show you how."
date: 2017-11-31 00:40:43 -0300
language: English
excerpt: |
  I decided to write this article and go through all the interesting things that I've learned from this experience,
  how I worked on the animations, why I chose NextJs, how awesome it has been to work with NextJs, challenges so far, etc.
tags:
- nextjs
- js
- react
- css-animations
categories:
- ES6 - O que mudou?
---

Hey everyone, just launched my new website using a framework that I really love, brought to the community by [Zeit](http://zeit.co), [NextJs](https://github.com/zeit/next.js/).

So I decided to write this article and go through all the interesting things that I've learned from this experience, why I chose NextJs, how awesome it has been to work with it, challenges so far, etc.

First of all, let me create a timeline of topics so it'll be easier to follow along and so you might pick only what's interesting to you:

- NextJs & Why
- Serverside Rendering
- Static export
- No page reload
- Static endpoints
- Blog
- Scoped Style
- Challenges
- Conclusion


## NextJs & Why

Next.js is a minimalistic framework for server-rendered or statically-exported React applications.
Ok, man, what does that mean?

So, I won't go through what is react or what's server side rendering in dept, otherwise this article would get huge.
But I plan to show you small examples of how easy it is to start working with these things using NextJs.

#### No setup time wasted

If you're already familiar with setting up a webpack based project, you know how much time that usually takes, NextJs brings a lot of things already set up for you:

- Server-rendered by default
- Automatic code splitting for faster page loads
- Simple client-side routing (page based)
- Webpack-based dev environment which supports Hot Module Replacement (HMR)
- Able to implement with Express or any other Node.js HTTP server
- Customizable with your own Babel and Webpack configurations

This list was taken from [learnnextjs.com](learnnextjs.com).
I totally recommend accessing it and following their learning process in case you want to get started with NextJs, it helped me a lot.

So, you only need 3 dependencies to start working with modern javascript features, scoped modular styles, react and all those great previous features...

```bash
$ npm install --save next react react-dom
```

Simple as that.

When I first saw it, I had to try it out, and I did.
Back in the day, I really wanted to use it in some project of mine, but NextJs didn't have the static export feature, because of that, I didn't really redesigned my blog to use it.

A while ago, they launched the 3.0 version, which included the static export functionallity, it was in beta version.

Ask me if I waited for it to become stable?

**Of course not**, I started redisning my blog right away using the new beta version.

At the time of this writing, NextJs is on `4.1.4`.

## Serverside Rendering

