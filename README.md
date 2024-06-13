# Google Apps Script Program to Create Events from Google Sheet

This program reads data from a Google Sheet and creates events in a Google Calendar.

## Setup

1. Create a new Google Sheet and add the data you want to use to create events.
2. Create a new Google Calendar and note the calendar ID.
3. Create a new Google Apps Script project and paste the code into the editor.
4. Set the `SHEET_ID` and `CALENDAR_ID` variables to your sheet and calendar IDs.
5. Save the script and trigger the `onEdit` function to run on edit.

## How it works

The script reads data from the sheet and creates events in the calendar using the `createEventsFromSheet` function. The `onEdit` function triggers the `createEventsFromSheet` function to run on edit.

## Sequence Diagram

Here is a sequence diagram of the program: