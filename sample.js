// 

node_xj = require("xls-to-json");
node_xj({
  input: "sample.xlsx",  // input xls 
  output: "output.json"  // specific sheetname 
}, function(err, result) {
  if(err) {
    console.error(err);
  } else {
    console.log(result);
  }
});