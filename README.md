# tableToCsv
Simply convert a table into a CSV representation

## Example

```html
<table>
    <thead>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Eustache</td>
            <td>Beaugenoux</td>
            <td>65</td>
        </tr>
        <tr>
            <td>Aristide</td>
            <td>Rouquitourne</td>
            <td>46</td>
        </tr>
        <tr>
            <td>Gersande</td>
            <td>De Ronflefort</td>
            <td>78</td>
        </tr>
    </tbody>
</table>
```

```js
// ES module
import TableToCsv from 'tableToCsv.js';

// Common JS
const TableToCsv = require('tableToCsv.js');

const csv = new TableToCsv(document.querySelector('table'));
csv.download();
```

A few options are available:

```js
const csv = new TableToCsv(node, {
    filename: 'table.csv',
    cellSeparator: ',',
    rowSeparator: '\n',
});
```

If the table changes after initialization, you can refresh programmatically:

```js
const csv = new TableToCsv(…);

// table changes...

csv.refresh();
csv.download();
```
