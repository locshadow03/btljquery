var excelFile = "kq.xlsx";
        

var req = new XMLHttpRequest();
req.open("GET", excelFile, true);
req.responseType = "arraybuffer";

req.onload = function(e) {
    var data = new Uint8Array(req.response);
    var workbook = XLSX.read(data, {type: 'array'});
    var sheetName = workbook.SheetNames[0];
    var worksheet = workbook.Sheets[sheetName];
    var jsonData = XLSX.utils.sheet_to_json(worksheet, {header:1});
    var html = '';

    for (var i = 1; i < jsonData.length; i++) {
        html += '<tr>';
        for (var j = 0; j < jsonData[i].length; j++) {
            var cellContent = jsonData[i][j] ? jsonData[i][j].toString().replace(/\n/g, '<br>') : '';
            if (j === 3) {
                html += '<td class="text-center">' + cellContent + '</td>';
            } else {
                html += '<td>' + cellContent + '</td>';
            }
        }
        html += '</tr>';
    }
    
    document.querySelector('#excelTable tbody').innerHTML = html;
};

req.send();