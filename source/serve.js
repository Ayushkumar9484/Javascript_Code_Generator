// Resize Window
  var blocklyArea = document.getElementById('blocklyArea');
  var blocklyDiv = document.getElementById('blocklyDiv');
  var workspace = Blockly.inject(blocklyDiv,
      {toolbox: toolbox});
  var onresize = function(e) {
    // Compute the absolute coordinates and dimensions of blocklyArea.
    var element = blocklyArea;
    var x = 0;
    var y = 0;
    do {
      x += element.offsetLeft;
      y += element.offsetTop;
      element = element.offsetParent;
    } while (element);
    // Position blocklyDiv over blocklyArea.
    blocklyDiv.style.left = x + 'px';
    blocklyDiv.style.top = y + 'px';
    blocklyDiv.style.width = (blocklyArea.offsetWidth -500) + 'px';
    blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
    Blockly.svgResize(workspace);
  };
  window.addEventListener('resize', onresize, false);
  onresize();
  Blockly.svgResize(workspace);
  
  


// Code generator

  var code;
  function myUpdateFunction() {
    Blockly.JavaScript.addReservedWords('code');
    code = Blockly.JavaScript.workspaceToCode(workspace);
    document.getElementById('text_content').textContent = code;
    console.log(code)
}
workspace.addChangeListener(myUpdateFunction);











// RUN CODE

var run_code=document.getElementById("run_code")
run_code.addEventListener("click",()=>{
    try {
        eval(code);
      } catch (e) {
        alert(e);
      }
})


var d=document.getElementsByTagName('button')
var k=0;
let v=document.getElementById("navbarSupportedContent")
d[0].addEventListener("click",()=>{
  v.collapse()
})