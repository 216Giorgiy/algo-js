
function md5pass_salt_update(){
  document.getElementById('md5salt').innerHTML = document.getElementById('md5pass-salt').value;
  md5pass_update();
}
function md5pass_update(){
  document.getElementById('md5hash').innerHTML = document.getElementById('md5pass-pass').value;
}

function update(){
  var stringToEncode = document.getElementById('string').value;
  document.getElementById('base64_encoded').innerHTML = window.btoa(stringToEncode);
  document.getElementById('hexa').innerHTML   = stringToEncode.toString(CryptoJS.enc.Hex);
  document.getElementById('md5_summed').innerHTML  = CryptoJS.MD5(stringToEncode);
  document.getElementById('sha1_hash').innerHTML   = CryptoJS.SHA1(stringToEncode);
  document.getElementById('sha2_hash').innerHTML   = CryptoJS.SHA256(stringToEncode);
  document.getElementById('sha512_hash').innerHTML = CryptoJS.SHA512(stringToEncode);
  document.getElementById('sha3_hash').innerHTML   = CryptoJS.SHA3(stringToEncode);
  var ripemd = document.getElementById('ripemd').innerHTML   = CryptoJS.RIPEMD160(stringToEncode);
  document.getElementById('ripemd64').innerHTML   = ripemd.toString(CryptoJS.enc.Latin1);
}