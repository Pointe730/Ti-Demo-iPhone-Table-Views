/**
 * app.js - Main application entry point.
 *
 * @author Blake Schwendiman <blake.schwendiman@gmail.com>
 */

Ti.include('/data.js');

var first = Ti.UI.createWindow({
  backgroundColor: "#fff",
  title: "Views"
});

var rows = AppData.getData();
var table = Titanium.UI.createTableView({data: rows});

var navGroup = Ti.UI.iPhone.createNavigationGroup({
	window: first
});

table.addEventListener('click', function(e) {
	var rowdata = e.rowData;
  
  if (rowdata) {
    var rowdata_string = JSON.stringify({title: rowdata.title, value: rowdata.value});
    var second = Titanium.UI.createWindow({
        url: '/item.js'
    });
    navGroup.open(second);
  }
});

first.add(table);

var main = Ti.UI.createWindow();
main.add(navGroup);
main.open();