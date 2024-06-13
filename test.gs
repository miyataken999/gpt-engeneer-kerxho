/**
 * Test function to verify the script
 */
function testRegisterSheetContentsToCalendar() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = [
    ['Event 1', new Date('2023-03-01 10:00:00'), new Date('2023-03-01 11:00:00')],
    ['Event 2', new Date('2023-03-02 14:00:00'), new Date('2023-03-02 15:00:00')]
  ];
  
  sheet.getRange(1, 1, data.length, data[0].length).setValues(data);
  
  registerSheetContentsToCalendar();
}