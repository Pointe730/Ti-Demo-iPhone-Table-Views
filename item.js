/**
 * item.js - Displays the page for a single item passed in from the main UI
 * table.
 *
 * @author Blake Schwendiman <blake.schwendiman@gmail.com>
 */

Titanium.API.debug('in item.js');

var item_data_str = Ti.App.Properties.getString('item_data');
Ti.API.debug(item_data_str);
var item_data = JSON.parse(item_data_str);
var win = Titanium.UI.currentWindow;

Titanium.API.debug(item_data);

win.title = item_data.title;
win.backgroundColor = '#FFF';
win.layout = 'vertical';

win.add(Ti.UI.createLabel({text: item_data.title, height: 'auto', left: 4}));
win.add(Ti.UI.createLabel({text: item_data.value, height: 'auto', left: 4}));


