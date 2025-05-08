import XLSX from 'xlsx';
import path from 'path';

export function readExcelData(fileName) {
  const filePath = path.resolve('cypress/fixtures', fileName);  //excel file path
  const workbook = XLSX.readFile(filePath);                     //read excel
  const sheet = workbook.SheetNames[0];                         //get Sheet
  const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);    //Convert Sheet Data to Json
  return data;
}
