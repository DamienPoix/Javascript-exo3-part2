//Pour intéragir
document.getElementById("lastname").oninput = function() {keyInfo()};
//description fonction/variables
function keyInfo() {
  var keyInfo = document.getElementById('lastname').value;
    alert(keyInfo);
}
