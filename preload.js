const puppeteerCore = require('puppeteer-core');
const gm = require('gm');
const fs = require('fs');
const BlinkDiff = require('blink-diff');

window.puppeteer = puppeteerCore;
window.imageMagick = gm.subClass({imageMagick:true });
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
