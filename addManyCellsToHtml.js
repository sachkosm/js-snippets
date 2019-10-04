// build up the row's HTML in a string
var htmlParts = [];
htmlParts.push('<div class="ag-row">');
cells.forEach( function(cell) {
    htmlParts.push('<div class="ag-cell">');
    htmlParts.push(cell.getValue());
    htmlParts.push('</div>');
});
htmlParts.push('</div>');

// append the string into the DOM, one DOM hit for the entire row
var rowHtml = htmlParts.join('');
eContainer.insertAdjacentHTML(rowHtml);
