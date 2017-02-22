// import React...
import React from 'react';

// ... Handsontable with its main dependencies...

// import moment from 'moment';
// import numbro from 'numbro';
// import pikaday from 'pikaday';
// import Zeroclipboard from 'zeroclipboard';
// import Handsontable from 'handsontable';

// ... and HotTable
import HotTable from 'react-handsontable';

const handsontableData = [
      ["", "Ford", "Volvo", "Toyota", "Honda"],
      ["2016", 10, 11, 12, 13],
      ["2017", 20, 11, 14, 13],
      ["2018", 30, 15, 12, 13]
    ];

const DataEntry = () => {
    return (
      <div id="example-component">
        {/*<HotTable root="hot" data={handsontableData} colHeaders={true} rowHeaders={true} width="600" height="300" stretchH="all" />*/}
      </div>
    );
}

export default DataEntry;