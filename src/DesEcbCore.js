let CryptoJS = require('crypto-js');

// 紀錄使用者的 key
let desEcbKey = null;

export default class DesEcbCore {

    /**
     * 設定鑰匙
     * @param key {string} 加解密都需要透過這把鑰匙
     */
    static setKey(key){
        desEcbKey = key;
    }

    /**
     * 取得被 Hex 過後的鑰匙物件
     * 
     * 當使用加解密方法的時候，需要帶入的不是原始鑰匙字串，而是此物件
     * @returns {WordArray}
     */
    static getKeyHex(){
        if (desEcbKey === null) throw 'Des-Ecb Not Exists.';
        return CryptoJS.enc.Utf8.parse(desEcbKey);
    }

    /**
     * 加密
     * @param message {string} 任何欲加密的字串
     * @returns {string} 經過加密後的字串
     */
    static encrypt(message){
        let keyHex = this.getKeyHex();

        let encrypted = CryptoJS.DES.encrypt(message, keyHex, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });

        return encrypted.toString();
    }

    /**
     * 解密
     * @param cipherText 填入已被加密過的字串
     * @returns {string} 解密後的字串
     */
    static decrypt(cipherText) {
        let keyHex = this.getKeyHex();

        let decrypted = CryptoJS.DES.decrypt({
            ciphertext: CryptoJS.enc.Base64.parse(cipherText)
        }, keyHex, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });

        return decrypted.toString(CryptoJS.enc.Utf8);
    }
}