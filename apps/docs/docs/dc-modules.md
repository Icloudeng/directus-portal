---
slug: /dc-modules
---

# Docs Modules

```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';

import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import ReactPlayer from 'react-player'
```

<!-- ====================================== Module 1 ====================================== -->

## (1) Youtube video player

> Youtube video player

#### Code

````md
```mdx-code-block
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

<LiteYouTubeEmbed
    id="mxT233EdY5c"
    title="What is Cloud Computing?"
    params="autoplay=1&autohide=1&showinfo=0&rel=0"
    poster="maxresdefault"
    webp
/>
```
````

#### Preview

```mdx-code-block
<BrowserWindow>
    <LiteYouTubeEmbed
        id="mxT233EdY5c"
        title="What is Cloud Computing?"
        poster="maxresdefault"
        params="autoplay=1&autohide=1&showinfo=0&rel=0"
        webp
    />
</BrowserWindow>
```

#### Get Youtube Video ID

```mdx-code-block
import GetYoutubeVideoId from '@site/src/components/GetYoutubeId';

<GetYoutubeVideoId />
```

---

<!-- ====================================== Module 2 ====================================== -->

## (2) Videos player

> Playing a variety of URLs, including file paths, YouTube, Facebook, Twitch, SoundCloud, Streamable, Vimeo, Wistia, Mixcloud, DailyMotion and Kaltura

[More example](https://github.com/CookPete/react-player)

#### Code

> Playlist video

````md
```mdx-code-block
import ReactPlayer from 'react-player'

<div className='player-wrapper'>
    <ReactPlayer
        controls
        url={[
            'https://www.youtube.com/watch?v=oUFJJNQGwhk',
            'https://www.youtube.com/watch?v=jNgP6d9HraI'
        ]}
        className='react-player'
        width='100%'
        height='100%'
    />
</div>
```
````

#### Preview

```mdx-code-block
<BrowserWindow>
    <div className='player-wrapper'>
        <ReactPlayer
            controls
            url={[
                'https://www.youtube.com/watch?v=oUFJJNQGwhk',
                'https://www.youtube.com/watch?v=jNgP6d9HraI'
            ]}
            className='react-player'
            width='100%'
            height='100%'
        />
    </div>
</BrowserWindow>
```

---

<!-- ====================================== Module 3 ====================================== -->

## (3) Code blocks

[More Examples](https://docusaurus.io/docs/markdown-features/code-blocks)

#### Code

````md
```js
console.log("Every repo must come with a mascot.");
```
````

#### Preview

```mdx-code-block
<BrowserWindow>
```

```js
console.log("Every repo must come with a mascot.");
```

```mdx-code-block
</BrowserWindow>
```

---

<!-- ====================================== Module 4 ====================================== -->

## (4) Interactive code editor

#### Code

````md
```jsx live
function Clock(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
```
````

#### Preview

```mdx-code-block
<BrowserWindow>
```

```jsx live
function Clock(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
```

```mdx-code-block
</BrowserWindow>
```

---

<!-- ====================================== Module 5 ====================================== -->

## (5) Details element

> Details element example

#### Code

```md
<details>
  <summary>Toggle me!</summary>
  <div>
    <div>This is the detailed content</div>
    <br/>
    <details>
      <summary>
        Nested toggle! Some surprise inside...
      </summary>
      <div>
        😲😲😲😲😲
      </div>
    </details>
  </div>
</details>
```

#### Preview

```mdx-code-block
<BrowserWindow>
    <details>
    <summary>Toggle me!</summary>
    <div>
        <div>This is the detailed content</div>
        <br/>
        <details>
        <summary>
            Nested toggle! Some surprise inside...
        </summary>
        <div>
            😲😲😲😲😲
        </div>
        </details>
    </div>
    </details>
</BrowserWindow>
```

---

<!-- ====================================== Module 6 ====================================== -->

## (6) Tabs

#### Code

[More Examples](https://docusaurus.io/docs/markdown-features/tabs)

<!-- prettier-ignore-start -->
```jsx
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="apple" label="Apple" default>
    This is an apple 🍎
  </TabItem>
  <TabItem value="orange" label="Orange">
    This is an orange 🍊
  </TabItem>
  <TabItem value="banana" label="Banana">
    This is a banana 🍌
  </TabItem>
</Tabs>
```

<!-- prettier-ignore-end -->

#### Preview

```mdx-code-block
<BrowserWindow>
    <Tabs>
        <TabItem value="apple" label="Apple" default>
            This is an apple 🍎
        </TabItem>
        <TabItem value="orange" label="Orange">
            This is an orange 🍊
        </TabItem>
        <TabItem value="banana" label="Banana">
            This is a banana 🍌
        </TabItem>
    </Tabs>
</BrowserWindow>
```

---

<!-- ====================================== Module 7 ====================================== -->

## (7) Admonitions

[More Examples](https://docusaurus.io/docs/markdown-features/admonitions)

#### Code

```md
:::note

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::tip

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::caution

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::danger

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::
```

#### Preview

```mdx-code-block
<BrowserWindow>

:::note

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::tip

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::caution

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::danger

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

</BrowserWindow>
```

---

<!-- ====================================== Module 8 ====================================== -->

## (8) Diagrams

- [More Examples](https://docusaurus.io/docs/markdown-features/diagrams)
- [Documentation](https://mermaid-js.github.io/mermaid/)

#### Code

````md
```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```
````

#### Preview

```mdx-code-block
<BrowserWindow>
```

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

```mdx-code-block
</BrowserWindow>
```

---

<!-- ====================================== Module 9 ====================================== -->

## (9) Math Equations

Please read [KaTeX](https://katex.org) documentation for more details.

#### Code

```latex
Let $f\colon[a,b]\to\R$ be Riemann integrable. Let $F\colon[a,b]\to\R$ be
$F(x)=\int_{a}^{x} f(t)\,dt$. Then $F$ is continuous, and at all $x$ such that
$f$ is continuous at $x$, $F$ is differentiable at $x$ with $F'(x)=f(x)$.
```

#### Preview

```mdx-code-block
<BrowserWindow>
```

Let $f\colon[a,b] \to \R$ be Riemann integrable. Let $F\colon[a,b]\to\R$ be $F(x)=
\int_{a}^{x} f(t)\,dt$. Then $F$ is continuous, and at all $x$ such that $f$ is continuous at $x$, $F$ is differentiable at $x$ with $F'(x)=f(x)$.

```mdx-code-block
</BrowserWindow>
```

---

---

#### Code

```latex
$$
I = \int_0^{2\pi} \sin(x)\,dx
$$
```

#### Preview

```mdx-code-block
<BrowserWindow>
```

$$
I = \int_0^{2\pi} \sin(x)\,dx
$$

```mdx-code-block
</BrowserWindow>
```
