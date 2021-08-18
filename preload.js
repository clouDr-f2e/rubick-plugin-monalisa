const puppeteer = require('puppeteer-core');
const sharp = require('sharp');
const fs = require('fs');
const BlinkDiff = require('./lib/blink-diff/index');

window.puppeteer = puppeteer;
window.sharp = sharp;
window.BufferClone = Buffer;
window.fs = fs;
window.BlinkDiff = BlinkDiff;

window.readConfig = async function () {
  const path = await rubick.getPath('home');
  console.log(path);
}
window.hideMainWindow = function () {
  rubick.hideMainWindow()
}
window.showNotification = function (str) {
  rubick.showNotification(str)
}
rubick.onPluginReady((e) => {
  console.log('ready', e)
})
rubick.onPluginEnter((e) => {
  console.log('enter', e)
})
