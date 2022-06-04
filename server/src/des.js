// import CryptoJS from "crypto-js";
const CryptoJS = require('crypto-js')

const desEncrypt = (message, seed) => {
  const SHA512 = CryptoJS.SHA512(seed).toString();
  const key = SHA512.substring(0, 8);
  const iv = SHA512.substring(SHA512.length - 8);
  const keyHex = CryptoJS.enc.Utf8.parse(key);
  const ivHex = CryptoJS.enc.Hex.parse(CryptoJS.enc.Utf8.parse(iv).toString(CryptoJS.enc.Hex));
  const encrypted = CryptoJS.DES.encrypt(message, keyHex, { iv: ivHex });
  const result = encrypted.toString();
  return result;
};

const desDecrypt = (message, seed) => {
  const SHA512 = CryptoJS.SHA512(seed).toString();
  const key = SHA512.substring(0, 8);
  const iv = SHA512.substring(SHA512.length - 8);
  const keyHex = CryptoJS.enc.Utf8.parse(key);
  const ivHex = CryptoJS.enc.Hex.parse(CryptoJS.enc.Utf8.parse(iv).toString(CryptoJS.enc.Hex));
  const decrypted = CryptoJS.DES.decrypt(message, keyHex, { iv: ivHex });
  const result = decrypted.toString(CryptoJS.enc.Utf8);
  return result;
};

module.exports = { desDecrypt, desEncrypt}