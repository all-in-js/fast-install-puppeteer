> a fast way to install puppeteer.

when we install puppeteer, will download a local-chromium from https://storage.googleapis.com, but most of time, we will get a timeout error, because our network can't connect to the host, unless you have a VPN, fortunately, there have some mirrors, we can use it download local-chromium successfully and fastly;

I strongly recommend that you should use 'yarn' rather than 'npm', if you have a try, I think you will fall in love with it;

* **Install**

I will install a latest version by the default, if you want to a specified version, you can set a property 'puppeteer_version' in your local package.json file.

```js
yarn add @all-in-js/fast-install-puppeteer
// or
npm i @all-in-js/fast-install-puppeteer
```

* **usage**

```js
const puppeteer = require('@all-in-js/fast-install-puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  // ...
})();

```