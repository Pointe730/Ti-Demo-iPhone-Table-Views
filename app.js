/**
 * app.js - Main application entry point.
 *
 * @author Blake Schwendiman <blake.schwendiman@gmail.com>
 */

// include the data management object
Ti.include('/data.js');

/*
  create the first/main window. this is what will be seen when the application
  first launches
*/
var first = Ti.UI.createWindow({
  backgroundColor: "#fff",
  title: "Views"
});

/*
  get the data rows and add them to a table view, then add the table to
  the main window
*/
var rows = AppData.getData();
var table = Titanium.UI.createTableView({data: rows});
first.add(table);

/*
  Create a navigation group. This is the Titanium magic that makes
  all of the window navigation happen.
*/
var navGroup = Ti.UI.iPhone.createNavigationGroup({
	window: first
});

/*
  respond to taps/clicks on the table rows here. this function is the main
  dispatcher for the table rows. basically it sets an application property
  containing relevent information about which row was clicked, then creates
  an instance of the item window and opens that window.
*/
table.addEventListener('click', function(e) {
	var rowdata = e.rowData;
  
  if (rowdata) {
    var rowdata_string = JSON.stringify({title: rowdata.title, value: rowdata.value});
    Ti.App.Properties.setString('item_data', rowdata_string);
    var second = Titanium.UI.createWindow({
        url: '/item.js'
    });
    navGroup.open(second);
  }
});

/*
  Create a primary window for the application and add the navigation group to
  that window, then open it.
*/
var main = Ti.UI.createWindow();
main.add(navGroup);
main.open();