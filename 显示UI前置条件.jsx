var window = new Window("palette", "My Script", undefined);
window.orientation = "column";

var text = window.add("statictext", undefined, "Some sample Text");
var button = window.add("button", undefined, "Start");

main();

function main() {
  var scriptPath = $.fileName;
  scriptPath = scriptPath.slice(0, scriptPath.lastIndexOf("/")) + "/image.png";

  if (!File(scriptPath).exists) {
    alert("Required file not detected!");
    return false;
  } else {
    showUI();
  }
}

function showUI() {
  window.center();
  window.show();
}
