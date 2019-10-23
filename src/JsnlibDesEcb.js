import DesEcbCore from "./DesEcbCore";


/**
 * 將物件簡單的使用 DES-ECB 加解密
 *
 * 主要配合了使用 JSON 格式
 */
export default class JsnlibDesEcb {

    constructor(params){

        this.options = {
            key: params.key
        };

        this.core = new DesEcbCore(this.options.key);
    }

    getOptions(){
        return this.options;
    }

    /**
     * 設定鑰匙
     * @param key 使用者自定義
     * @returns {JsnlibDesEcb} 可以提供串接
     */
    static setKey(key) {
        // JS 在靜態方法中，確實可以使用 this
        this.coreStatic = new DesEcbCore(key);
        return JsnlibDesEcb;
    }

    /**
     * 將物件透過 JSON 轉換為字串進行加密
     *
     * @param obj
     */
    static encrypt(obj) {
        let str = JSON.stringify(obj);
        return this.coreStatic.encrypt(str);
    }

    /**
     * @see static encrypt
     * @param obj
     * @returns {*|CipherParams|string|PromiseLike<ArrayBuffer>}
     */
    encrypt(obj){
        let str = JSON.stringify(obj);
        return this.core.encrypt(str);
    }

    /**
     * 將加密文本解密後，透過 JSON 還原為物件
     *
     * @param cipherText
     * @returns string
     */
    static decrypt(cipherText) {
        let str = this.coreStatic.decrypt(cipherText);
        return JSON.parse(str);
    }

    /**
     * @see static decrypt
     * @param cipherText
     * @returns string
     */
    decrypt(cipherText){
        let str = this.core.decrypt(cipherText);
        return JSON.parse(str);
    }
}