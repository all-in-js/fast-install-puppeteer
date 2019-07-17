const c = require('chalk');
const {execSync} = require('child_process');
const spawn = require('cross-spawn');
const pkg = require('../package');

let pkgVersion = 'latest';

try {
  const {puppeteer_version} = require('../../../package.json');
  if(puppeteer_version) {
    pkgVersion = puppeteer_version;
  }
}catch(e) {}
const pkgName = `puppeteer@${pkgVersion}`;
const mirrorHost = process.env.PUPPETEER_DOWNLOAD_HOST || 'https://npm.taobao.org/mirrors';
const registryHost = 'https://registry.npm.taobao.org/';
const useCmd = (() => {
  try {
    execSync('yarn -v', {stdio: 'ignore'});
    return 'yarn';
  } catch(e) {
    return 'npm';
  }
})();
const useInstall = useCmd === 'yarn' ? 'add' : 'install';

// function tryInstall() {
  try {
    const pp = require(`puppeteer/package`);
    log(`${pkgName}@${pp.version} already exists.`);
  } catch (e) {
    peerInstall();
  }
// }

function peerInstall() {
  log(`I will use ${useCmd}.`);
  log(`ready to download ${pkgName}.`);
  log(`use mirror: ${mirrorHost}.`);
  log(`use registry: ${registryHost}.`);
  spawn.sync(useCmd, ['run', 'setenv', useCmd, useInstall, pkgName, '--registry', registryHost, '--prefer-offline'], {stdio: 'inherit'});
  log(`${pkgName} has installed, enjoy your work.`);
}

function log(...msg) {
  msg.unshift(`${c.cyan(`[${pkg.name}]:`)}`);
  console.log.apply(console, msg);
}
