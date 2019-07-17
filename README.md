> a fast way to install puppeteer.

when we install puppeteer, will download a local-chromium from https://storage.googleapis.com, but most of time, we will get a timeout error, because our network can't connect to the host, unless you have a VPN, fortunately, there have some mirrors, we can use it download local-chromium successfully and fastly;

I strongly recommend that you should use 'yarn' rather than 'npm', if you have a try, I think you will fall in love with it;

* **Install**

```js
yarn add fast-install-puppeteer
// or
npm i fast-install-puppeteer
```

* **usage**

```js
const puppeteer = require('fast-install-puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  // ...
})();

```