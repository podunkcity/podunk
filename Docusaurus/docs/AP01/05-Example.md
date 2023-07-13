---
sidebar_position: 5
title: 05 EXAMPLES
description: Search Engine Description
image: /img/docusaurus.png
tags: [Examples]
---
# Ch05: Examples
by BinKadal, Sdn. Bhd.

<span style={{backgroundColor: 'red', color: 'yellow'}}>StarBucks ipsum dolor J.CO Do Not!</span>&nbsp;
McD sit amet Wendy’s Burger King. KFC urna libero, in purus Hanamasa, sore wa tempura Hokben.

## SubHeader h2

StarBucks ipsum dolor J.CO Do Not! McD sit amet Wendy’s Burger King. 
KFC urna libero, in purus Hanamasa, sore wa tempura Hokben.

### SubHeader h3

StarBucks ipsum dolor J.CO Do Not! McD sit amet Wendy’s Burger King. 
KFC urna libero, in purus Hanamasa, sore wa tempura Hokben.

- StarBucks ipsum 
- dolor J.CO Do Not!
  - McD sit amet 
  - Wendy’s Burger King. 
    - KFC urna libero, 
  - in purus Hanamasa, 
- sore wa tempura Hokben.

## Code Block

```md title="hello.md" {1-4}
---
sidebar_label: 'Hi!'
sidebar_position: 3
---

# Hello

This is the Way!
```

## Images

![Docusaurus logo](/img/docusaurus.png)

## Admonitions

:::tip

Remember to **save** your _work_ `frequently`.

:::

:::tip My tip

Remember to `My tip`.

:::

:::danger

This `operation` cannot be _undone_. Proceed with **caution**.

:::

:::danger Take care

Just `Take Care`!

:::

:::note

Make sure to check the documentation for advanced configuration options.

:::

:::info

The event starts at `9:00` in the main auditorium.

:::

:::caution

Avoid modifying this file directly. Use the provided API for making changes.

:::

:::::info Parent

Parent content

::::danger Child

Child content

:::tip Deep Child

Deep child content

:::

::::

:::::

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

:::tip Use tabs in admonitions

<Tabs>
  <TabItem value="apple" label="Apple">This is an apple 🍎</TabItem>
  <TabItem value="orange" label="Orange">This is an orange 🍊</TabItem>
  <TabItem value="banana" label="Banana">This is a banana 🍌</TabItem>
</Tabs>

:::

## Quotes

> Easy to maintain open source documentation websites.

## Details element

<details>
  <summary>Toggle me!</summary>
  <div>
    <div>This is the detailed content</div>
    <br/>
    <details>
      <summary>
        Nested toggle! Some surprise inside...
      </summary>
      <div>😲😲😲😲😲</div>
    </details>
  </div>
</details>

## Exporting components 1

export const Highlight1 = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

<Highlight1 color="#25c2a0">Docusaurus green</Highlight1> and 
<Highlight1 color="#1877F2">Facebook blue</Highlight1> are my favorite colors.

I can write **Markdown** alongside my _JSX_!

## Exporting components 2

import Highlight from '@site/src/components/Highlight';

<Highlight color="#25c2a0">Docusaurus green</Highlight> and 
<Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors.

I can write **Markdown** alongside my _JSX_!

<!--
npm install --save raw-loader
-->
## Raw Loader

[DOWNLOAD](/src/C00-hello.c)

import CodeBlock from '@theme/CodeBlock';
import MyComponentSource from '!!raw-loader!/src/C00-hello.c';

<CodeBlock language="c">{MyComponentSource}</CodeBlock>

<hr />

REV: 06 -- 02 Jun 2023

<!--
REV06: Fri 02 Jun 2023 16:00
REV05: Thu 01 Jun 2023 10:00
REV04: Wed 31 May 2023 12:00
REV03: Mon 29 May 2023 17:00
REV01: Sat 27 May 2023 11:00
START: Wed 24 May 2023 16:00
-->

