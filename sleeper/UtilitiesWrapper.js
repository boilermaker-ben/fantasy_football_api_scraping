/**
 * NFL YEAR -----------------------------------------------------------------------
 * 
 * nflYear() - returns the likely active year of the NFL based on a 2 month negative shift to account for end of playoffs * 
 * 
 * OBJECT ------------------------------------------------------------------------ 
 * 
 * getKeyByValue(object, value) - searches an object for a specific key name and returns it
 * 
 * MATH ------------------------------------------------------------------------
 * 
 * getSum(array) - returns sum of an array with an array of numbers as input
 * 
 * getMean(array,sum) - returns average of an array with array and the array's sum (optional) as input
 * 
 * getStandardDeviation(array,average) - returns the standard deviation of an array with with the array and average (optional) of the array as input
 * 
 * COLORS ------------------------------------------------------------------------
 * 
 * renderPercentHex(type,percent,steps) - Function to convert a spectrum (positive, negative, or full) and a percent (0.0 to 1.0) to a HEX value
 * 
 * hexGradient(start, end, count, midpoint) - Provide a start and end and a count of values and this function generates a HEX gradient. Midpoint value is optional.
 * 
 * winColors(steps,invert) - Returns coloration for team win count as a HEX value
 * 
 * lossColors(steps,invert) - Returns coloration for team loss count as a HEX value
 * 
 * positiveColors(steps,invert) - Colors at 4 point intervals for coloration (green)
 * 
 * negativeColors(steps,invert) - Colors at 4 point intervals for coloration (red)
 * 
 * neutralColors(steps,invert) - Colors at 4 point intervals for coloration (yellow)
 * 
 * neutralGrayColors(steps,invert) - Colors at 4 point intervals for coloration (yellow)
 * 
 * fullColors(steps,invert) - Colors at 2 point intervals for coloration of positive to negative (green to red) with white in the middle
 * 
 * fullAltColors(steps,invert) - Colors at 2 point intervals for coloration of positive to negative (green to red) with white in the middle
 * 
 * SHEET ------------------------------------------------------------------------
 * 
 * adjustRows(sheet,rows,verbose) - reduces the rows to the minimal amount, or to the specified amount; verbose logging if desired
 * 
 * adjustColumns(sheet,columns,verbose) - reduces the columns to the minimal amount, or to the specified amount; verbose logging if desired
 * 
 * fetchSpreadsheet(ss) - Checks that the 'ss' variable passed into a script is not null, undefined, or a non-spreadsheet
 * 
 * fetchUi(ui) - Checks that the 'ui' variable passed into a script is not null, undefined, or a non-UI
 * 
 * removeNamedRangesByPrefix(input) - allows user to enter string that will be used to remove any named ranges that match, doesn't work for #REF ranges
 * 
 * STRING -----------------------------------------------------------------------
 * 
 * abbreviation(string) - starting capital character of each word in a string joined; if there is only one word (no spaces) all the consonants and joins them together as capitals
 * 
 * normalizeName(name) - smooths out variants in name
 * 
*/

function nflYear() {
  return SheetAndScriptUtilities.nflYear();
}

function getKeyByValue(object, value) {
  return SheetAndScriptUtilities.getKeyByValue(object, value);
}

function getSum(array) {
  return SheetAndScriptUtilities.getSum(array);
}

function getMean(array, sum) {
  return SheetAndScriptUtilities.getMean(array, sum);
}

function getStandardDeviation(array, average) {
  return SheetAndScriptUtilities.getStandardDeviation(array, average);
}

function renderPercentHex(type, percent, steps) {
  return SheetAndScriptUtilities.renderPercentHex(type, percent, steps);
}

function hexGradient(start, end, count, midpoint) {
  return SheetAndScriptUtilities.hexGradient(start, end, count, midpoint);
}

function winColors(steps, invert) {
  return SheetAndScriptUtilities.winColors(steps, invert);
}

function lossColors(steps, invert) {
  return SheetAndScriptUtilities.lossColors(steps, invert);
}

function positiveColors(steps, invert) {
  return SheetAndScriptUtilities.positiveColors(steps, invert);
}

function negativeColors(steps, invert) {
  return SheetAndScriptUtilities.negativeColors(steps, invert);
}

function neutralColors(steps, invert) {
  return SheetAndScriptUtilities.neutralColors(steps, invert);
}

function neutralGrayColors(steps, invert) {
  return SheetAndScriptUtilities.neutralGrayColors(steps, invert);
}

function fullColors(steps, invert) {
  return SheetAndScriptUtilities.fullColors(steps, invert);
}

function fullAltColors(steps, invert) {
  return SheetAndScriptUtilities.fullAltColors(steps, invert);
}

function adjustRows(sheet, rows, verbose) {
  return SheetAndScriptUtilities.adjustRows(sheet, rows, verbose);
}

function adjustColumns(sheet, columns, verbose) {
  return SheetAndScriptUtilities.adjustColumns(sheet, columns, verbose);
}

function fetchSpreadsheet(ss) {
  return SheetAndScriptUtilities.fetchSpreadsheet(ss);
}

function removeNamedRangesByPrefix(input) {
  return SheetAndScriptUtilities.removeNamedRangesByPrefix(input)
}

function abbreviation(string) {
  return SheetAndScriptUtilities.abbreviation(string);
}

function normalizeName(name) {
  return SheetAndScriptUtilities.normalizeName(name);
}

function removeSuffix(name) {
  return SheetAndScriptUtilities.removeSuffix(name);
}
