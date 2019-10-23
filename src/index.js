import JsnlibDesEcb from "./JsnlibDesEcb";
export default JsnlibDesEcb;

// Test

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

// --
//
// let first = new JsnlibDesEcb({
//     key: 'custom-first'
// });
// let second = new JsnlibDesEcb({
//     key: 'custom-second'
// });
//
// let encrypt = first.encrypt({
//     id: 8,
//     title: '中文'
// });
//
// let decrypt = second.decrypt(encrypt);
// console.log(decrypt)