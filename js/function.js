$(document).ready(function(){
    let rsaEncrypt = '';

    // Function to encryption using SHA
    $("#btnHash").click(function(){
        var text = $('#hashInput').val();
        if(text == '' ) {
            Swal.fire({
                title: "Oopss!",
                text: "Text cannot be empty!",
                icon: "warning",
                confirmButtonColor: '#f38383',
            });
        } else {
            var hash = CryptoJS.SHA256(text).toString();
            $('#hashOutput').val(hash);
        }
    });

    // Function to encryption using RSA
    $("#encryptAES").click(function(){
        var text = $('#aesInput').val();
        var key = $('#aesKey').val();
        if(text == '' ||  key == '') {
            Swal.fire({
                title: "Oopss!",
                text: "Text or Key cannot be empty!",
                icon: "warning",
                confirmButtonColor: '#f38383',
            });
        } else {
            var encrypted = CryptoJS.AES.encrypt(text, key).toString();
            $('#encryptedText').val(encrypted);
        }
    });

    // Function to decryption using RSA
    $("#decryptAES").click(function(){
        var encryptedText = $('#encryptedText').val();
        var key = $('#aesKey').val();

        if(key == '') {
            Swal.fire({
                title: "Oopss!",
                text: "Key cannot be empty!",
                icon: "warning",
                confirmButtonColor: '#f38383',
            });
        } else {
            var decrypted = CryptoJS.AES.decrypt(encryptedText, key).toString(CryptoJS.enc.Utf8);
            
            if(decrypted == '') {
                Swal.fire({
                    title: "Oopss!",
                    text: "Aes key is wrong!",
                    icon: "warning",
                    confirmButtonColor: '#f38383',
                });
            } else {
                $('#decryptedText').val(decrypted);
            }
        }

        
    });

        // Function to generate private and public keys
    $("#generateRSAKeys").click(function(){
        rsaEncrypt = new JSEncrypt();
        let publicKey = rsaEncrypt.getPublicKey();
        let privateKey = rsaEncrypt.getPrivateKey();
        
        $('#rsaPubliceKey').val(publicKey);
        $('#rsaPrivateKey').val(privateKey);
    });

    // Function to encryption using RSA
    $("#encryptRSA").click(function(){
        var text = $('#rsaInput').val();
        
        if(text == '' || rsaEncrypt == '') {
            Swal.fire({
                title: "Oopss!",
                text: "Text or Key cannot be empty!",
                icon: "warning",
                confirmButtonColor: '#f38383',
            });
        } else {
            var encrypted = rsaEncrypt.encrypt(text);
            $('#rsaEncrypted').val(encrypted);
        }
    });

        // Function to decryption using RSA
    $("#decryptRSA").click(function(){
        var encryptedText = $('#rsaEncrypted').val();
        if(rsaEncrypt == '') {
            Swal.fire({
                title: "Oopss!",
                text: "Key cannot be empty!",
                icon: "warning",
                confirmButtonColor: '#f38383',
            });
        } else {
            var decrypted = rsaEncrypt.decrypt(encryptedText);
            $('#rsaDecrypted').val(decrypted);
        }
    });

    //Function to remove space
    $(".stripspaces").keyup(function() {
        $(this).val($(this).val().replace(/\s/g, ""));
    });
});