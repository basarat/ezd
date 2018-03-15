var data = {"contents":[{"pageSubDirName":"welcome","type":"html","html":"<a href=\"http://github.com/basarat/eze\" class=\"github-corner\" aria-label=\"Visit Project\"><svg width=\"80\" height=\"80\" viewBox=\"0 0 250 250\" style=\"fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;\" aria-hidden=\"true\"><path d=\"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z\"></path><path d=\"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2\" fill=\"currentColor\" style=\"transform-origin: 130px 106px;\" class=\"octo-arm\"></path><path d=\"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z\" fill=\"currentColor\" class=\"octo-body\"></path></svg></a><style>.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}</style>"},{"type":"html","pageSubDirName":"welcome","html":"<div class=\"eze-markdown\">\n      <h1>\n      Welcome\n      <a name=\"sample-subheading\" class=\"heading-anchor\" href=\"#welcome\" aria-hidden=\"true\">\n        <svg aria-hidden=\"true\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"20\" height=\"20\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>\n      </a>\n    </h2></div>"},{"type":"html","pageSubDirName":"welcome","html":"<div class=eze-markdown><p>Designed to make creating component styleguides / demos eze.</p>\n<blockquote>\n<p><a href=\"https://github.com/basarat/eze/stargazers\" target=\"_blank\">Don&#39;t forget to ⭐ on github</a></p>\n</blockquote>\n<p>The following code shows how the demo you are looking at was created.</p></div>"},{"type":"code","html":"<div class=eze-markdown><pre><code><div style=\"display: inline-block\"><span class=\"hljs-keyword\">import</span> { render } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">\"../index\"</span>;\n<span class=\"hljs-keyword\">import</span> { colors } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'../internal/styles'</span>;\n<span class=\"hljs-keyword\">import</span> { storyAndAppIndexTemplate } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'../internal/page'</span>;\n\n<span class=\"hljs-comment\">/** Render */</span>\nrender({\n  <span class=\"hljs-attr\">outputDir</span>: __dirname + <span class=\"hljs-string\">'/../../docs'</span>,\n  <span class=\"hljs-attr\">repoUrl</span>: <span class=\"hljs-string\">\"http://github.com/basarat/eze\"</span>,\n  <span class=\"hljs-attr\">title</span>: <span class=\"hljs-string\">'eze 🌹'</span>\n}, eze =&gt; {\n  eze.page({ <span class=\"hljs-attr\">heading</span>: <span class=\"hljs-string\">'Welcome'</span>, <span class=\"hljs-attr\">subDirName</span>: <span class=\"hljs-string\">'welcome'</span> })\n\n    <span class=\"hljs-comment\">/** Write some markdown */</span>\n    .md(<span class=\"hljs-string\">`\n  Designed to make creating component styleguides / demos eze.\n\n  &gt; [Don't forget to ⭐ on github](https://github.com/basarat/eze/stargazers)\n  \n  The following code shows how the demo you are looking at was created.\n  `</span>)\n\n    <span class=\"hljs-comment\">/** Show this file */</span>\n    .code({\n      <span class=\"hljs-attr\">mode</span>: <span class=\"hljs-string\">'ts'</span>,\n      <span class=\"hljs-attr\">code</span>: <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'fs'</span>).readFileSync(__filename).toString(),\n    })\n\n    .md(<span class=\"hljs-string\">`\n  &gt; Yup, we just loaded the code for the demo in the demo ... with the power of *node* ✨🐢🚀✨\n  `</span>)\n\n    .md(<span class=\"hljs-string\">`\n  # Why?\n  Opinions (why chose eze over others): \n  * Documenating components is more than just showing running components. Eze supports markdown. \n  * TypeScript first. No need to install 10 npm packages to get a basic example working. Single npm install.\n  * You write demos in TypeScript with full TypeScript support (autocomplete / error checking etc).\n  * Eze is just a node application. You are free to use introspective code e.g. the color of this text is <span class=\"hljs-subst\">${colors.text}</span> 🌹\n  * Docs in JS/TS have so many of the same advantages as JSX and CSSinJS.\n  `</span>)\n\n    .md(<span class=\"hljs-string\">`\n  # Installation\n  Checkout the [README](https://github.com/basarat/eze#install) ⚡\n  `</span>);\n\n  <span class=\"hljs-comment\">/** Show stories */</span>\n  eze.page({ <span class=\"hljs-attr\">heading</span>: <span class=\"hljs-string\">'Stories'</span>, <span class=\"hljs-attr\">subDirName</span>: <span class=\"hljs-string\">'stories'</span> })\n    .md(<span class=\"hljs-string\">`\n  Stories are lightweight applications designed to showcase simple components.\n  \n  You write them using \\`import {story} from 'eze/lib/client'\\`\n\n  As an example the following code:\n  `</span>)\n    .code({\n      <span class=\"hljs-attr\">mode</span>: <span class=\"hljs-string\">'ts'</span>,\n      <span class=\"hljs-attr\">code</span>: <span class=\"hljs-built_in\">require</span>(<span class=\"hljs-string\">'fs'</span>).readFileSync(__dirname + <span class=\"hljs-string\">'/story-1.tsx'</span>).toString()\n    })\n    .md(<span class=\"hljs-string\">`\n  Produces the following story:\n  `</span>)\n    .story({\n      <span class=\"hljs-attr\">entryPointPath</span>: __dirname + <span class=\"hljs-string\">'/story-1.tsx'</span>,\n    });\n\n  <span class=\"hljs-comment\">/** Show some complete application demos */</span>\n  eze.page({ <span class=\"hljs-attr\">heading</span>: <span class=\"hljs-string\">'Applications'</span>, <span class=\"hljs-attr\">subDirName</span>: <span class=\"hljs-string\">'apps'</span> })\n    .md(<span class=\"hljs-string\">`\n  You can easily show complete applications. This allows you to showcase application level layouts.\n  `</span>)\n    .app({\n      <span class=\"hljs-attr\">entryPointPath</span>: __dirname + <span class=\"hljs-string\">'/app-1.tsx'</span>,\n      <span class=\"hljs-attr\">sourceUrl</span>: <span class=\"hljs-string\">'https://github.com/basarat/eze/blob/master/src/docs/app-1.tsx'</span>,\n      <span class=\"hljs-attr\">height</span>: <span class=\"hljs-string\">'100px'</span>,\n    })\n    .md(<span class=\"hljs-string\">`\n  Embedded applications can use \\`import {resize} from 'eze/lib/client'\\` to \n  request the containing iframe to be automatically resized.\n  `</span>)\n    .app({\n      <span class=\"hljs-attr\">entryPointPath</span>: __dirname + <span class=\"hljs-string\">'/app-2.tsx'</span>,\n      <span class=\"hljs-attr\">sourceUrl</span>: <span class=\"hljs-string\">'https://github.com/basarat/eze/blob/master/src/docs/app-2.tsx'</span>,\n    })\n    .md(<span class=\"hljs-string\">`\n  All applications can target the \\`root\\` element. The following is the HTML that is used:\n  `</span>)\n    .code({\n      <span class=\"hljs-attr\">mode</span>: <span class=\"hljs-string\">'html'</span>,\n      <span class=\"hljs-attr\">code</span>: storyAndAppIndexTemplate({ <span class=\"hljs-attr\">index</span>: <span class=\"hljs-number\">0</span>, <span class=\"hljs-attr\">jsFileName</span>: <span class=\"hljs-string\">'app-0.js'</span> }),\n    });\n\n  <span class=\"hljs-comment\">/** Table of contents */</span>\n  eze.page({ <span class=\"hljs-attr\">heading</span>: <span class=\"hljs-string\">'Table on contents generation'</span>, <span class=\"hljs-attr\">subDirName</span>: <span class=\"hljs-string\">'toc'</span> })\n    .md(<span class=\"hljs-string\">`\n  TOC is generated automatically based on the headings parsed from markdown.\n  ## Sample subheading\n  Yup. You guessed it. ^ It should be visible in the TOC.\n  `</span>);\n});</div></code></pre></div>","collapsed":false,"pageSubDirName":"welcome"},{"type":"html","pageSubDirName":"welcome","html":"<div class=eze-markdown><blockquote>\n<p>Yup, we just loaded the code for the demo in the demo ... with the power of <em>node</em> ✨🐢🚀✨</p>\n</blockquote></div>"},{"type":"html","pageSubDirName":"welcome","html":"<div class=eze-markdown><h1>\n      Why?\n      <a name=\"why-\" class=\"heading-anchor\" href=\"#why-\" aria-hidden=\"true\">\n        <svg aria-hidden=\"true\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"20\" height=\"20\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>\n      </a>\n    </h1><p>Opinions (why chose eze over others): </p>\n<ul>\n<li>Documenating components is more than just showing running components. Eze supports markdown. </li>\n<li>TypeScript first. No need to install 10 npm packages to get a basic example working. Single npm install.</li>\n<li>You write demos in TypeScript with full TypeScript support (autocomplete / error checking etc).</li>\n<li>Eze is just a node application. You are free to use introspective code e.g. the color of this text is #555 🌹</li>\n<li>Docs in JS/TS have so many of the same advantages as JSX and CSSinJS.</li>\n</ul></div>"},{"type":"html","pageSubDirName":"welcome","html":"<div class=eze-markdown><h1>\n      Installation\n      <a name=\"installation\" class=\"heading-anchor\" href=\"#installation\" aria-hidden=\"true\">\n        <svg aria-hidden=\"true\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"20\" height=\"20\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>\n      </a>\n    </h1><p>Checkout the <a href=\"https://github.com/basarat/eze#install\" target=\"_blank\">README</a> ⚡</p></div>"},{"pageSubDirName":"stories","type":"html","html":"<a href=\"http://github.com/basarat/eze\" class=\"github-corner\" aria-label=\"Visit Project\"><svg width=\"80\" height=\"80\" viewBox=\"0 0 250 250\" style=\"fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;\" aria-hidden=\"true\"><path d=\"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z\"></path><path d=\"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2\" fill=\"currentColor\" style=\"transform-origin: 130px 106px;\" class=\"octo-arm\"></path><path d=\"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z\" fill=\"currentColor\" class=\"octo-body\"></path></svg></a><style>.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}</style>"},{"type":"html","pageSubDirName":"stories","html":"<div class=\"eze-markdown\">\n      <h1>\n      Stories\n      <a name=\"sample-subheading\" class=\"heading-anchor\" href=\"#stories\" aria-hidden=\"true\">\n        <svg aria-hidden=\"true\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"20\" height=\"20\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>\n      </a>\n    </h2></div>"},{"type":"html","pageSubDirName":"stories","html":"<div class=eze-markdown><p>Stories are lightweight applications designed to showcase simple components.</p>\n<p>You write them using <code>import {story} from &#39;eze/lib/client&#39;</code></p>\n<p>As an example the following code:</p></div>"},{"type":"code","html":"<div class=eze-markdown><pre><code><div style=\"display: inline-block\"><span class=\"hljs-keyword\">import</span> { story } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'../client'</span>;\n<span class=\"hljs-keyword\">import</span> * <span class=\"hljs-keyword\">as</span> React <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'react'</span>;\n<span class=\"hljs-keyword\">import</span> { Anchor } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'../app/components/anchor'</span>;\n<span class=\"hljs-keyword\">import</span> { Button } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'../app/components/buttons'</span>;\n\nstory()\n  .demo(<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Anchor</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"https://twitter.com/basarat\"</span> <span class=\"hljs-attr\">target</span>=<span class=\"hljs-string\">\"_blank\"</span>&gt;</span>\n    As an example click here to open twitter\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Anchor</span>&gt;</span></span>)\n  .demo(<span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Anchor</span> <span class=\"hljs-attr\">href</span>=<span class=\"hljs-string\">\"https://github.com/basarat/eze\"</span> <span class=\"hljs-attr\">target</span>=<span class=\"hljs-string\">\"_blank\"</span>&gt;</span>\n    Or click here to open github\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">Anchor</span>&gt;</span></span>)\n  .demo(<span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">App</span> <span class=\"hljs-keyword\">extends</span> <span class=\"hljs-title\">React</span>.<span class=\"hljs-title\">Component</span> </span>{\n    state = {\n      <span class=\"hljs-attr\">count</span>: <span class=\"hljs-number\">0</span>\n    }\n    increment = <span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n      <span class=\"hljs-keyword\">this</span>.setState({ <span class=\"hljs-attr\">count</span>: <span class=\"hljs-keyword\">this</span>.state.count + <span class=\"hljs-number\">1</span> });\n    }\n    render() {\n      <span class=\"hljs-keyword\">return</span> <span class=\"xml\"><span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">Button</span> <span class=\"hljs-attr\">text</span>=<span class=\"hljs-string\">{</span>'<span class=\"hljs-attr\">Click</span> <span class=\"hljs-attr\">count:</span> ' + <span class=\"hljs-attr\">this.state.count</span>} <span class=\"hljs-attr\">onClick</span>=<span class=\"hljs-string\">{this.increment}/</span>&gt;</span>\n    }\n  })\n  .render();</span></div></code></pre></div>","collapsed":false,"pageSubDirName":"stories"},{"type":"html","pageSubDirName":"stories","html":"<div class=eze-markdown><p>Produces the following story:</p></div>"},{"type":"story","index":1,"htmlFileName":"story-1.html","code":"import { story } from '../client';\nimport * as React from 'react';\nimport { Anchor } from '../app/components/anchor';\nimport { Button } from '../app/components/buttons';\n\nstory()\n  .demo(<Anchor href=\"https://twitter.com/basarat\" target=\"_blank\">\n    As an example click here to open twitter\n  </Anchor>)\n  .demo(<Anchor href=\"https://github.com/basarat/eze\" target=\"_blank\">\n    Or click here to open github\n  </Anchor>)\n  .demo(class App extends React.Component {\n    state = {\n      count: 0\n    }\n    increment = () => {\n      this.setState({ count: this.state.count + 1 });\n    }\n    render() {\n      return <Button text={'Click count: ' + this.state.count} onClick={this.increment}/>\n    }\n  })\n  .render();\n","demoCodes":["<Anchor href=\"https://twitter.com/basarat\" target=\"_blank\">\n  As an example click here to open twitter\n</Anchor>","<Anchor href=\"https://github.com/basarat/eze\" target=\"_blank\">\n  Or click here to open github\n</Anchor>","class App extends React.Component {\n  state = {\n    count: 0\n  }\n  increment = () => {\n    this.setState({ count: this.state.count + 1 });\n  }\n  render() {\n    return <Button text={'Click count: ' + this.state.count} onClick={this.increment}/>\n  }\n}"],"pageSubDirName":"stories","entryPointPath":"/home/travis/build/basarat/eze/src/docs/story-1.tsx"},{"pageSubDirName":"apps","type":"html","html":"<a href=\"http://github.com/basarat/eze\" class=\"github-corner\" aria-label=\"Visit Project\"><svg width=\"80\" height=\"80\" viewBox=\"0 0 250 250\" style=\"fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;\" aria-hidden=\"true\"><path d=\"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z\"></path><path d=\"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2\" fill=\"currentColor\" style=\"transform-origin: 130px 106px;\" class=\"octo-arm\"></path><path d=\"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z\" fill=\"currentColor\" class=\"octo-body\"></path></svg></a><style>.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}</style>"},{"type":"html","pageSubDirName":"apps","html":"<div class=\"eze-markdown\">\n      <h1>\n      Applications\n      <a name=\"sample-subheading\" class=\"heading-anchor\" href=\"#apps\" aria-hidden=\"true\">\n        <svg aria-hidden=\"true\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"20\" height=\"20\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>\n      </a>\n    </h2></div>"},{"type":"html","pageSubDirName":"apps","html":"<div class=eze-markdown><p>You can easily show complete applications. This allows you to showcase application level layouts.</p></div>"},{"type":"app","index":1,"htmlFileName":"app-1.html","sources":[{"mode":"js","code":"import * as React from 'react';\nimport * as ReactDOM from 'react-dom';\nimport { colors } from '../internal/styles';\n\nReactDOM.render(\n  <h2 style={{color: colors.text}}>Hello World</h2>,\n  document.getElementById('root')\n);"}],"sourceUrl":"https://github.com/basarat/eze/blob/master/src/docs/app-1.tsx","height":"100px","pageSubDirName":"apps"},{"type":"html","pageSubDirName":"apps","html":"<div class=eze-markdown><p>Embedded applications can use <code>import {resize} from &#39;eze/lib/client&#39;</code> to \nrequest the containing iframe to be automatically resized.</p></div>"},{"type":"app","index":2,"htmlFileName":"app-2.html","sources":[{"mode":"js","code":"import * as React from 'react';\nimport * as ReactDOM from 'react-dom';\nimport { colors } from '../internal/styles';\nimport { resize } from '../client';\n\nReactDOM.render(\n  <div style={{ color: colors.text }}>\n    <h2>Example with lots of content</h2>\n    <h2>...</h2>\n    <h2>...</h2>\n    <h2>...</h2>\n    <h2>...</h2>\n  </div>,\n  document.getElementById('root')\n);\n\n/** Request eze app parent to resize */\nresize();"}],"sourceUrl":"https://github.com/basarat/eze/blob/master/src/docs/app-2.tsx","pageSubDirName":"apps"},{"type":"html","pageSubDirName":"apps","html":"<div class=eze-markdown><p>All applications can target the <code>root</code> element. The following is the HTML that is used:</p></div>"},{"type":"code","html":"<div class=eze-markdown><pre><code><div style=\"display: inline-block\"><span class=\"hljs-meta\">&lt;!DOCTYPE html&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">html</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">head</span>&gt;</span>\n    <span class=\"hljs-comment\">&lt;!-- Standard Meta --&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">meta</span> <span class=\"hljs-attr\">charset</span>=<span class=\"hljs-string\">\"utf-8\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">meta</span> <span class=\"hljs-attr\">http-equiv</span>=<span class=\"hljs-string\">\"X-UA-Compatible\"</span> <span class=\"hljs-attr\">content</span>=<span class=\"hljs-string\">\"IE=edge,chrome=1\"</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">meta</span> <span class=\"hljs-attr\">name</span>=<span class=\"hljs-string\">\"viewport\"</span> <span class=\"hljs-attr\">content</span>=<span class=\"hljs-string\">\"width=device-width\"</span>&gt;</span>\n\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">title</span>&gt;</span>Demo: 0<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">title</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">\"./data-0.js\"</span>&gt;</span><span class=\"undefined\"></span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">head</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">body</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">id</span>=<span class=\"hljs-string\">\"root\"</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span> <span class=\"hljs-attr\">type</span>=<span class=\"hljs-string\">\"text/javascript\"</span> <span class=\"hljs-attr\">src</span>=<span class=\"hljs-string\">\"./app-0.js\"</span>&gt;</span><span class=\"undefined\"></span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">body</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">html</span>&gt;</span></div></code></pre></div>","collapsed":false,"pageSubDirName":"apps"},{"pageSubDirName":"toc","type":"html","html":"<a href=\"http://github.com/basarat/eze\" class=\"github-corner\" aria-label=\"Visit Project\"><svg width=\"80\" height=\"80\" viewBox=\"0 0 250 250\" style=\"fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;\" aria-hidden=\"true\"><path d=\"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z\"></path><path d=\"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2\" fill=\"currentColor\" style=\"transform-origin: 130px 106px;\" class=\"octo-arm\"></path><path d=\"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z\" fill=\"currentColor\" class=\"octo-body\"></path></svg></a><style>.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}</style>"},{"type":"html","pageSubDirName":"toc","html":"<div class=\"eze-markdown\">\n      <h1>\n      Table on contents generation\n      <a name=\"sample-subheading\" class=\"heading-anchor\" href=\"#toc\" aria-hidden=\"true\">\n        <svg aria-hidden=\"true\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"20\" height=\"20\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>\n      </a>\n    </h2></div>"},{"type":"html","pageSubDirName":"toc","html":"<div class=eze-markdown><p>TOC is generated automatically based on the headings parsed from markdown.</p>\n<h2>\n      Sample subheading\n      <a name=\"sample-subheading\" class=\"heading-anchor\" href=\"#sample-subheading\" aria-hidden=\"true\">\n        <svg aria-hidden=\"true\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"20\" height=\"20\"><path fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg>\n      </a>\n    </h2><p>Yup. You guessed it. ^ It should be visible in the TOC.</p></div>"}],"tableOfContents":[{"type":"pageRoot","heading":"Welcome","pageSubDirName":"welcome"},{"type":"pageSub","id":"why-","level":1,"pageSubDirName":"welcome","text":"Why?"},{"type":"pageSub","id":"installation","level":1,"pageSubDirName":"welcome","text":"Installation"},{"type":"pageRoot","heading":"Stories","pageSubDirName":"stories"},{"type":"pageRoot","heading":"Applications","pageSubDirName":"apps"},{"type":"pageRoot","heading":"Table on contents generation","pageSubDirName":"toc"},{"type":"pageSub","id":"sample-subheading","level":2,"pageSubDirName":"toc","text":"Sample subheading"}]}