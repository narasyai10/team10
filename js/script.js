// Hashing dengan SHA-256
function hashText() {
    let text = $('#hashInput').val();
    let hash = CryptoJS.SHA256(text).toString();
    
    $('#hashOutput').val(hash);
}

// Enkripsi Simetris dengan AES
function encryptAES() {
    let text = document.getElementById("aesInput").value;
    let key = document.getElementById("aesKey").value;
    let encrypted = CryptoJS.AES.encrypt(text, key).toString();
    document.getElementById("aesEncrypted").textContent = encrypted;
}

function decryptAES() {
    let encryptedText = document.getElementById("aesEncrypted").textContent;
    let key = document.getElementById("aesKey").value;
    let decrypted = CryptoJS.AES.decrypt(encryptedText, key).toString(CryptoJS.enc.Utf8);
    document.getElementById("aesDecrypted").textContent = decrypted;
}

// Enkripsi Asimetris dengan RSA
let rsaEncrypt;
function generateRSAKeys() {
    rsaEncrypt = new JSEncrypt();
    let publicKey = rsaEncrypt.getPublicKey();
    let privateKey = rsaEncrypt.getPrivateKey();
    document.getElementById("rsaPublicKey").textContent = publicKey;
    document.getElementById("rsaPrivateKey").textContent = privateKey;
}

function encryptRSA() {
    let text = document.getElementById("rsaInput").value;
    let encrypted = rsaEncrypt.encrypt(text);
    document.getElementById("rsaEncrypted").textContent = encrypted;
}

function decryptRSA() {
    let encryptedText = document.getElementById("rsaEncrypted").textContent;
    let decrypted = rsaEncrypt.decrypt(encryptedText);
    document.getElementById("rsaDecrypted").textContent = decrypted;
}
