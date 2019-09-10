import DesEcbCore from "./DesEcbCore";

/**
 * 將物件簡單的使用 DES-ECB 加解密
 *
 * 主要配合了使用 JSON 格式
 */
export default class JsnlibDesEcb {

    /**
     * 設定鑰匙
     * @param key 使用者自定義
     * @returns {JsnlibDesEcb} 可以提供串接
     */
    static setKey(key) {
        DesEcbCore.setKey(key);
        return JsnlibDesEcb;
    }

    /**
     * 將物件透過 JSON 轉換為字串進行加密
     *
     * @param obj
     */
    static encrypt(obj) {
        let str = JSON.stringify(obj);
        return DesEcbCore.encrypt(str);
    }

    /**
     * 將加密文本解密後，透過 JSON 還原為物件
     *
     * @param cipherText
     * @returns string
     */
    static decrypt(cipherText) {
        let str = DesEcbCore.decrypt(cipherText);
        return JSON.parse(str);
    }
}