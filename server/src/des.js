const crypto = require('crypto')
var secret_key = "I am the secret key"
var secret_iv = "smslt"
var encryptionMethod = 'des-ecb'

var key = crypto.createHash('sha512').update(secret_key, 'utf-8').digest('hex').substring(0,32)

var iv = crypto.createHash('sha512').update(secret_key, 'utf-8').digest('hex').substring(0,16)


// const encrypt_string(plain_text, encryptionMethod, secret, iv){ 

// }