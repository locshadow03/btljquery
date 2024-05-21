var excelFile = "lichtrinh1.xlsx";
        

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
            if (j === 3 || j === 4) {
                html += '<td>' + cellContent + '</td>';
            } else {
                html += '<td>' + cellContent + '</td>';
            }
        }
        html += '</tr>';
    }
    
    document.querySelector('#excelTable1 tbody').innerHTML = html;
};

req.send();

var excelFile1 = "lichtrinh2.xlsx";

var req1 = new XMLHttpRequest();
req1.open("GET", excelFile1, true);
req1.responseType = "arraybuffer";

req1.onload = function(e) {
    var data1 = new Uint8Array(req1.response);
    var workbook1 = XLSX.read(data1, {type: 'array'});
    var sheetName1 = workbook1.SheetNames[0];
    var worksheet1 = workbook1.Sheets[sheetName1];
    var jsonData1 = XLSX.utils.sheet_to_json(worksheet1, {header:1});
    var html1 = '';

    for (var i = 1; i < jsonData1.length; i++) {
        html1 += '<tr>';
        for (var j = 0; j < jsonData1[i].length; j++) {
            var cellContent1 = jsonData1[i][j] ? jsonData1[i][j].toString().replace(/\n/g, '<br>') : '';
            if (j === 3 || j === 4) {
                html1 += '<td>' + cellContent1 + '</td>';
            } else {
                html1 += '<td>' + cellContent1 + '</td>';
            }
        }
        html1 += '</tr>';
    }
    
    document.querySelector('#excelTable2 tbody').innerHTML = html1;
};

req1.send();

var excelFile2 = "lichtrinh3.xlsx";

var req2 = new XMLHttpRequest();
req2.open("GET", excelFile2, true);
req2.responseType = "arraybuffer";

req2.onload = function(e) {
    var data2 = new Uint8Array(req2.response);
    var workbook2 = XLSX.read(data2, {type: 'array'});
    var sheetName2 = workbook2.SheetNames[0];
    var worksheet2 = workbook2.Sheets[sheetName2];
    var jsonData2 = XLSX.utils.sheet_to_json(worksheet2, {header:1});
    var html2 = '';

    for (var i = 1; i < jsonData2.length; i++) {
        html2 += '<tr>';
        for (var j = 0; j < jsonData2[i].length; j++) {
            var cellContent2 = jsonData2[i][j] ? jsonData2[i][j].toString().replace(/\n/g, '<br>') : '';
            if (j === 3 || j === 4) {
                html2 += '<td>' + cellContent2 + '</td>';
            } else {
                html2 += '<td>' + cellContent2 + '</td>';
            }
        }
        html2 += '</tr>';
    }
    
    document.querySelector('#excelTable3 tbody').innerHTML = html2;
};

req2.send();
