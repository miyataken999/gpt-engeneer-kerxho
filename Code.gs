/**
 * Reads data from a Google Sheet and creates events in a Google Calendar.
 */

// Set up the sheet and calendar IDs
var SHEET_ID = 'your_sheet_id';
var CALENDAR_ID = 'your_calendar_id';

// Set up the sheet and calendar objects
var sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
var calendar = CalendarApp.getCalendarById(CALENDAR_ID);

/**
 * Reads data from the sheet and creates events in the calendar.
 */
function createEventsFromSheet() {
  var dataRange = sheet.getDataRange();
  var data = dataRange.getValues();
  
  // Skip the header row
  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    var title = row[0];
    var startDate = row[1];
    var endDate = row[2];
    var description = row[3];
    
    // Create a new event
    var event = calendar.createEvent(title, startDate, endDate, {
      description: description
    });
  }
}

/**
 * Triggers the createEventsFromSheet function on edit.
 */
function onEdit(e) {
  createEventsFromSheet();
}