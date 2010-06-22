/**
 * data.js
 *   This is basically a simple data management object in JS. Right now it
 *   just returns dummy data, but it could be expanded to return data from
 *   a database, file, Ajax, etc.
 *
 * @author Blake Schwendiman <blake.schwendiman@gmail.com>
 */

var AppData = function() {
  return {
    getData: function() {
      return [{title: 'Row 1', hasChild: true, value: 'row-1'},
              {title: 'Row 2', hasChild: true, value: 'row-2'},
              {title: 'Row Delta', hasChild: true, value: 'Gamma'}];
    }
  };
}();