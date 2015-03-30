<!DOCTYPE HTML>
<html>
<body>

  <p>Header...</p>

<script src="https://crypto-js.googlecode.com/svn/tags/3.1.2/build/rollups/md5.js"></script>
<script src="./algo.js"></script>
<script>
  function md5pass_salt_update(){
    document.getElementById('md5salt').innerHTML = document.getElementById('md5pass-salt').value;
    md5pass_update();
  }
  function md5pass_update(){
    document.getElementById('md5hash').innerHTML = document.getElementById('md5pass-pass').value;
  }
  function handler(t,c,s)
  {
    t.value += s;
    c.checked = true;
    return 0
  }
  function update(){
    var stringToEncode = document.getElementById('base64_str').value;
    document.getElementById('base64_encoded').innerHTML = window.btoa(stringToEncode);
    document.getElementById('md5_summed').innerHTML = CryptoJS.MD5("message");
  }
</script>

<form name="md5pass" action="javascript:void(0)">
  <fieldset>
    <legend>MD5 password</legend>

      <label for="salt">Salt:</label>
      <input type="text" size="16" name="salt" value="salt" id="md5pass-salt"
        onkeyup= "md5pass_salt_update()">
      </input>

      <label for="password">Password</label>
      <input type="text" size="32" name="password" value="my secret password" id="md5pass-pass"
        onkeyup= "md5pass_update()">
      </input>
<br>
  $1$<span id="md5salt">salt</span>$<span id="md5hash">hash</span>
  </fieldset>
</form>

<form name="base64" action="javascript:void(0)">
  <fieldset>
    <legend>Base64</legend>

      <label for="base64_str">String</label>
      <input type="text" size="32" name="base64_str" value="string to encode" id="base64_str"
        onkeyup= "update()">
      </input>
<br>
  <p id="base64_encoded">hash</p>
  <p id="md5_summed">hash</p>
  </fieldset>
</form>


  
<form name="formB">
  <!-- Event Handler Output: -->
  <textarea name="t1" rows="8" cols="45" wrap="soft"></textarea>
  <textarea name="t2" rows="8" cols="10" wrap="soft"></textarea>
</form>

</body>
</html>
