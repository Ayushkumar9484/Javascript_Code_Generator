// Get element by 

Blockly.Blocks['dom_get_element_by'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("get element by ")
        .appendField(new Blockly.FieldDropdown([["id","Id"], ["classname","ClassName"], ["name","Name"], ["tagname","TagName"]]), "get_element_options");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setColour(230);
 this.setTooltip("write tag name");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['dom_get_element_by'] = function(block) {
  var dropdown_get_element_options = block.getFieldValue('get_element_options');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code
  if(dropdown_get_element_options==="Id") code='document.getElementBy'+dropdown_get_element_options+'('+value_name+')'
  else code = 'document.getElementsBy'+dropdown_get_element_options+'('+value_name+')'
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// Get element through selector

Blockly.Blocks['dom_selector'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("selctor")
        .appendField(new Blockly.FieldDropdown([["queryselector","querySelector"], ["querselectorall","querySelectorAll"]]), "selector");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['dom_selector'] = function(block) {
  var dropdown_selector = block.getFieldValue('selector');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'document.'+dropdown_selector+'('+value_name+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// EVENT HANDLER

Blockly.Blocks['dom_event_listeners'] = {
  init: function() {
    this.appendValueInput("listening element")
        .setCheck(null)
        .appendField("event")
        .appendField(new Blockly.FieldDropdown([["click","click"], ["double click","dblclick"], ["mouse move","mousemove"], ["focus","focus"], ["mouseover","mouseover"]]), "event")
        .appendField("Listening Element");
    this.appendStatementInput("NAME")
        .setCheck(null);
    this.setInputsInline(true);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['dom_event_listeners'] = function(block) {
  var dropdown_event = block.getFieldValue('event');
  var value_listening_element = Blockly.JavaScript.valueToCode(block, 'listening element', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
  // TODO: Assemble JavaScript into code variable.
  var code = value_listening_element+'.addEventListener("'+dropdown_event+'",()=>{\n'+statements_name+'\n})';
  return code;
};
addEventListener("click",()=>{

})

// CREATE ELEMENT

Blockly.Blocks['dom_create_element'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("create element");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['dom_create_element'] = function(block) {
  var value_element_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'document.createElement('+value_element_name+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

// STYLING 

Blockly.Blocks['dom_add_styling'] = {
  init: function() {
    this.appendValueInput("element")
        .setCheck(null)
        .appendField("element");
    this.appendValueInput("value")
        .setCheck(null)
        .appendField("property")
        .appendField(new Blockly.FieldDropdown([["Color","color"], ["Back ground colour","backgroundColor"], ["margin","margin"], ["margin-left","marginLeft"], ["margin-right","marginRight"], ["margin-bottom","marginBottom"], ["margin-top","marginTop"], ["border","border"], ["display","display"], ["font","font"], ["font-family","fontFamily"], ["font-size","fontSize"], ["height","height"], ["width","width"], ["padding","padding"], ["css-text","cssText"]]), "property")
        .appendField("value");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['dom_add_styling'] = function(block) {
  var value_element = Blockly.JavaScript.valueToCode(block, 'element', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_property = block.getFieldValue('property');
  var value_value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_element+'.style.'+dropdown_property+'='+value_value+'\n';
  return code;
};

// classList

Blockly.Blocks['dom_classlist'] = {
  init: function() {
    this.appendValueInput("element")
        .setCheck(null)
        .appendField("element");
    this.appendValueInput("classname")
        .setCheck(null)
        .appendField("function")
        .appendField(new Blockly.FieldDropdown([["add","add"], ["remove","remove"], ["toggle","toggle"]]), "selector");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.JavaScript['dom_classlist'] = function(block) {
  var value_element = Blockly.JavaScript.valueToCode(block, 'element', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_selector = block.getFieldValue('selector');
  var value_classname = Blockly.JavaScript.valueToCode(block, 'classname', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = value_element+'.classList.'+dropdown_selector+'('+value_classname+')';
  return code;
};