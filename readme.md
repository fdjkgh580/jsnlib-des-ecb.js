# jsnlib-des-ecb
使用 DES-ECB 配合 JSON 格式加解密

## npm 安裝
````javascript
npm i jsnlib-des-ecb.js
````


````javascript
import JsnlibDesEcb from 'jsnlib-des-ecb.js';

// Encrypt
let cipherText = JsnlibDesEcb.encrypt({
    id: 7,
    title: '中文'
});

// Decrypt
let obj = JsnlibDesEcb.decrypt(cipherText);
console.log(obj);
````