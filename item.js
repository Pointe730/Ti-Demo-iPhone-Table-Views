/**
 * item.js - Displays the page for a single item passed in from the main UI
 * table.
 *
 * @author Blake Schwendiman <blake.schwendiman@gmail.com>
 */

/*
  A very simple window. This is the view for the item that was clicked in
  the main table view.
*/

/*
  Get the item data from the app properties (stored on row click), then
  add a few elements to the current window based on that information.
*/
var item_data_str = Ti.App.Properties.getString('item_data');
var item_data = JSON.parse(item_data_str);
var win = Titanium.UI.currentWindow;

win.title = item_data.title;
win.backgroundColor = '#FFF';
win.layout = 'vertical';

win.add(Ti.UI.createLabel({text: item_data.title, height: 'auto', left: 4}));
win.add(Ti.UI.createLabel({text: item_data.value, height: 'auto', left: 4}));


