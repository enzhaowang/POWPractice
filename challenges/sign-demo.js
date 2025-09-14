import { generateKeyPairSync, publicEncrypt, privateDecrypt, createHash, privateEncrypt, publicDecrypt } from 'crypto';


//1. generate publicKey and privateKey
const { publicKey, privateKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding:  { type: 'spki',  format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
});



const nickName = 'GraceYin';
const nonce = 150811;
const hash = createHash('sha256').update(nickName + nonce).digest('hex');

//encrypted the hash
const encrypted = privateEncrypt(privateKey, Buffer.from(hash));


//verify with the public key
console.log(verifiedSigner(encrypted, publicKey, nickName + nonce));

function verifiedSigner(encrypted, publicKey, message) {
    const hash = createHash('sha256').update(message).digest('hex');

    const decrypted = publicDecrypt(publicKey, encrypted);
    if(decrypted.toString() === hash) {
        return true;
    }
    return false;
    
}