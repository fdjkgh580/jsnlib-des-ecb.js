# jsnlib-des-ecb
使用 DES-ECB 配合 JSON 格式加解密

## npm 安裝
````javascript
npm i jsnlib-des-ecb.js
````

## 引用模組
````javascript
import JsnlibDesEcb from 'jsnlib-des-ecb.js';
````

## 使用方式

### 實例化
````javascript
// 設定加密鑰匙
let first = new JsnlibDesEcb({
    key: 'custom-first'
});

let second = new JsnlibDesEcb({
    key: 'custom-second'
});

// Encrypt
let encryptFirst = first.encrypt({
    id: 8,
    title: '中文'
});

let encryptSecond = first.encrypt({
    id: 9,
    title: 'English'
});

// Decrypt
let decryptFirst = first.decrypt(encryptFirst);
let decryptSecond = first.decrypt(encryptSecond);

console.log(decryptFirst, decryptSecond);
````

### 靜態方法
````javascript
// 設定加密鑰匙
let key = 'custom-key';
JsnlibDesEcb.setKey(key);

// Encrypt
let cipherText = JsnlibDesEcb.encrypt({
    id: 7,
    title: '中文'
});

// Decrypt
let obj = JsnlibDesEcb.decrypt(cipherText);

console.log(obj);
````