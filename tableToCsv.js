;(function (that) {

    function TableToCsv(table, options) {
        var _options = Object.assign({
            'filename': 'table.csv',
            'cellSeparator': ',',
            'rowSeparator': '\n',
            'insertBOM': true,
        }, options);

        var _textContent = '';
        var _table = table;

        function escape(text) {
            return text
                .replace('"','""')
                .replace(/[\r\n]+/g,' ');
        }

        function downloadCSVFile(csv, filename) {
            var csv_file = new Blob([csv], {type: 'text/csv'});
            var anchor = document.createElement('a');
            anchor.download = filename;
            anchor.href = window.URL.createObjectURL(csv_file);
            document.body.appendChild(anchor);

            anchor.click();
        }

        var interface = {
            refresh() {
                var tableRows = _table.querySelectorAll('tr');

                var textRows = [].slice.call(tableRows).map(function (tableRow) {
                    var row = [];
                    var tableCells = tableRow.querySelectorAll('td, th');

                    var textCells = [].slice.call(tableCells).map(function (tableCell) {
                        return '"'+escape(tableCell.innerText)+'"';
                    });

                    return textCells.join(_options.cellSeparator);
                });

                _textContent = textRows.join(_options.rowSeparator);
                if (_options.insertBOM) {
                    _textContent = "\ufeff"+_textContent;
                }
            },
            download(filename) {
                return downloadCSVFile(_textContent, filename || _options.filename);
            },
        };

        interface.refresh();

        return interface;
    }

    var loadedModule = TableToCsv;

    loadedModule['default'] = loadedModule.TableToCsv = loadedModule;

    // AMD
    if (typeof define === 'function' && define.amd) {
        define(function() {
            return loadedModule;
        });
    }
    // Node and other CommonJS-like environments that support module.exports
    else if (typeof module !== 'undefined' && module.exports) {
        module.exports = loadedModule;
    }
    // Browser
    else {
        that.TableToCsv = loadedModule;
    }
})(this);
