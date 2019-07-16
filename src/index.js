const c = require('chalk');
const os = require('os');
const {existsSync, mkdirSync} = require('fs');
const {join} = require('path');
const {execSync} = require('child_process');
const spawn = require('cross-spawn');

const pkg = require('../package');
const pkgName = 'puppeteer';
const cachePkg = join(getHomedir(), '.puppeteer');
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
    const pp = require(`${pkgName}/package`);
    log(`${pkgName}@${pp.version} already exists.`);
  } catch (e) {
    peerInstall();
  }
// }

function peerInstall() {
  log(`ready to download ${pkgName}.`);
  log(`use mirror: ${mirrorHost}.`);
  log(`use registry: ${registryHost}.`);
  spawn.sync('cd', [cachePkg, useCmd, 'run', 'setenv', useCmd, useInstall, pkgName, '--registry', registryHost], {stdio: 'inherit'});
  log(`${pkgName} has installed, enjoy your work.`);
}

function log(...msg) {
  msg.unshift(`${c.cyan(`[${pkg.name}]:`)}`);
  console.log.apply(console, msg);
}
