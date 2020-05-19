<p align="center">
  <img src="/src/assests/pluraljs.svg" />
</p>
<h3 align="center">
  PluralJS
</h3>
<p  align="center">A micro library to produce any singular noun into plural
  
### 💡 Motive
---
I was curious to learn about how to build a library, what are the thought-processes behind it, what are the technical stuff you need to know etc. This was the primary reason PluralJS came into conception.

### 📥 Installation

---

**via npm**

```shell
npm install pluraljs --save
```

**via yarn**

```shell
yarn add pluraljs
```

**via CDN direct link**

```html
<script src="https://cdn.jsdelivr.net/npm/pluraljs/dist/pluraljs.umd.min.js"></script>
<!-- or -->
<script src="https://unpkg.com/pluraljs/dist/pluraljs.umd.min.js"></script>
```

**direct download**

```shell
curl -o https://unpkg.com/pluraljs/dist/pluraljs.umd.min.js
```

### 📑 Usage

---

The PluralJS is single responsibility library.
It takes only a noun and produce plural noun out of it.

#### Node

```node
const pluralJs = require('pluraljs');
console.log(pluralJs(cat)); // cats
```

#### ES6

```js
import pluraJs from 'pluraljs';
console.log(pluralJs(cat)); // cats
```

#### Browser

```html
<script src="https://cdn.jsdelivr.net/npm/pluraljs/dist/pluraljs.umd.min.js"></script>
<script>
	console.log(pluralJS(cat)); // cats
</script>
```

### 🧡 Show little more care in your product

---

| Product without words pluralization                                                                                   | Product using PluralJS                                                                                         |
| --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| <img width="300px" src="/src/assests/sample_without_pluralization.png" alt="Screenshot - Product not using PluralJS"> | <img width="300px" src="/src/assests/sample_with_pluralization.png" alt="Screenshot - Product using PluralJS"> |

### 💂‍♂️Maintainer

---

Kalpesh Singh ([@knowkalpesh](https://twitter.com/knowkalpesh))

### 🙇 Credits

---

- The core logic and testing file are borrowed from [Blake Embrey](https://github.com/blakeembrey)'s [Pluralize](https://github.com/blakeembrey/pluralize)
- Card screenshot used from [Chakra UI](https://chakra-ui.com/)
- Those lovely cats artwork used for branding is from [Undraw](https://undraw.co/)

### ⚖️ License
---
kalpeshsingh/PluralJS is licensed under the [MIT license](https://opensource.org/licenses/MIT).
