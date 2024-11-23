// Hashing dengan SHA-256
function hashText() {
    let text = $('#hashInput').val();
    let hash = CryptoJS.SHA256(text).toString();
    
    $('#hashOutput').val(hash);
}