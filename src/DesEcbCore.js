var CryptoJS = require('crypto-js');

export default class DesEcbCore {
    static encrypt(message){
        let key = 'PEHHqvoHlmd6P98tqq0BIVjwZs2Bq2Yff6n19oWpXAMAJ88KIVROz6kUQDdgJ6NBEA6wLZRElLv8vQ3xBHsS2Q28Ft0tBjoHpfPyu3KPbjDtWZkVvVnnXCj3KdxH5gS8QV4EJyPvtuIQYxhi9PhDKOnioxdozygn';
        let keyHex = CryptoJS.enc.Utf8.parse(key);

        let encrypted = CryptoJS.DES.encrypt(message, keyHex, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });

        return encrypted.toString();
    }

    static decrypt(cipherText) {
        let key = 'PEHHqvoHlmd6P98tqq0BIVjwZs2Bq2Yff6n19oWpXAMAJ88KIVROz6kUQDdgJ6NBEA6wLZRElLv8vQ3xBHsS2Q28Ft0tBjoHpfPyu3KPbjDtWZkVvVnnXCj3KdxH5gS8QV4EJyPvtuIQYxhi9PhDKOnioxdozygn';
        let keyHex = CryptoJS.enc.Utf8.parse(key);

        let decrypted = CryptoJS.DES.decrypt({
            ciphertext: CryptoJS.enc.Base64.parse(cipherText)
        }, keyHex, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });

        return decrypted.toString(CryptoJS.enc.Utf8);
    }
}