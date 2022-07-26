let collectDNSRecordsCSV = ({ numTablePages }) => {
  let csv = "";
  let headers = [];
  document
    .querySelectorAll("th.awsui-table-column-sortable")
    .forEach((header, index) => {
      headers.push(header.textContent);
      csv = `${csv}${header.textContent},`;
    });
  csv = csv.slice(0, -1);
  csv = `${csv}`;

  for (var i = 0; i < numTablePages; i++) {
    document.querySelectorAll("tr.awsui-table-row").forEach((row, i) => {
      let text_values_csv_record = "";
      row.querySelectorAll("td").forEach((cell, j) => {
        if (j != 0) {
          text_values_csv_record = `${text_values_csv_record}${cell.textContent},`;
        }
      });
      text_values_csv_record = text_values_csv_record.slice(0, -1);
      csv = `${csv}\n${text_values_csv_record}`;
    });
    document
      .querySelector("li.awsui-table-pagination-next-page button")
      .click();
  }
};

let csvdata = collectDNSRecordsCSV({
  numTablePages: 17,
});

copy(csvdata);
