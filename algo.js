function update_no_salt() {
  var stringToEncode = document.getElementById('string').value;
  document.getElementById('base64_encoded').innerHTML = window.btoa(stringToEncode);
  document.getElementById('md5_summed').innerHTML  =  CryptoJS.MD5(stringToEncode);
  document.getElementById('sha1_hash').innerHTML   =  CryptoJS.SHA1(stringToEncode);
  document.getElementById('sha2_hash').innerHTML   =  CryptoJS.SHA256(stringToEncode);
  document.getElementById('sha512_hash').innerHTML =  CryptoJS.SHA512(stringToEncode);
  document.getElementById('sha3_hash').innerHTML   =  CryptoJS.SHA3(stringToEncode);
  document.getElementById('ripemd').innerHTML      =  CryptoJS.RIPEMD160(stringToEncode);
}

function update_msg() {
  var msg  = document.getElementById('msg').value;
  var pass = document.getElementById('pass').value;
  document.getElementById('hmac_md5').innerHTML    = CryptoJS.HmacMD5(msg, pass);
  document.getElementById('hmac_sha1').innerHTML   = CryptoJS.HmacSHA1(msg, pass);
  document.getElementById('hmac_sha256').innerHTML = CryptoJS.HmacSHA256(msg, pass);
  document.getElementById('hmac_sha512').innerHTML = CryptoJS.HmacSHA512(msg, pass);
  document.getElementById('hmac_sha3').innerHTML   = CryptoJS.HmacSHA3(msg, pass);
  document.getElementById('aes').innerHTML   = CryptoJS.AES.encrypt(msg, pass);
  document.getElementById('des').innerHTML   = CryptoJS.DES.encrypt(msg, pass);
  document.getElementById('t-des').innerHTML   = CryptoJS.TripleDES.encrypt(msg, pass);
}

function update_salt() {
  var pssp = document.getElementById('pssp').value;
  var salt = document.getElementById('salt').value;
  document.getElementById('pbkdf').innerHTML = CryptoJS.HmacMD5(pssp, salt, { keySize: 128/32});

}

function d_update_msg() {
  var d_msg  = document.getElementById('d_msg').value;
  var d_pass = document.getElementById('d_pass').value;
  document.getElementById('d_aes').innerHTML   = CryptoJS.AES.decrypt(d_msg, d_pass);
  document.getElementById('d_des').innerHTML   = CryptoJS.DES.decrypt(d_msg, d_pass);
  document.getElementById('d_t-des').innerHTML   = CryptoJS.TripleDES.decrypt(d_msg, d_pass);

}