function onEdit(e) {
  var row = SpreadsheetApp.getActiveSheet().getActiveCell().getRow();
 var value = SpreadsheetApp.getActiveSheet().getRange(row,11).getValue(); //must know the column number
  if(value == "Email already taken"){
      showAlert(value)
  }
}

function showAlert(value) {
  var ui = SpreadsheetApp.getUi(); // Same variations.

  ui.alert(value); 
}
