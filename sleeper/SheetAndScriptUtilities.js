/**
 * NFL YEAR -----------------------------------------------------------------------
 * 
 * nflYear() - returns the likely active year of the NFL based on a 2 month negative shift to account for end of playoffs * 
 * 
 * OBJECT ------------------------------------------------------------------------ 
 * 
 * getKeyByValue(object, value) - searches an object for a specific key name and returns it
 * 
 * function objectToArray(obj) - convert an object into a sheets capable 2D array
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
 * normalizeName(name) - turns a string into lowercase and removes periods, apostrophes, and ensures no double-spaces+ exist
 * 
 * removeSuffix(name) - removes any trailing qualifiers to player names to ensure matching functions work correctly
 * 
 * FORMULAS ----------------------------------------------------------------------
 * 
 * copyFormulasDown(sheet,sourceRow) - provide a sheet and which row (first row = 1) to check for the presence of formulas, then copy down across all columns with formulas
 * 
**/

//------------------------------------------------------------------------
// NFL SEASON YEAR - Gets the year and shifts back if still January/February (playoffs)
function nflYear() {
  const date = new Date();
  const month = date.getMonth();
  let year = date.getFullYear();
  if (month < 2) {
    year--;
  } 
  return year;
}

//------------------------------------------------------------------------
// GET KEY BY VALUE - Inverse lookup based on input of object and value for key
function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

//------------------------------------------------------------------------
// OBJECT TO ARRAY - convert an object into a sheets capable 2D array
function objectToArray(obj) {
  if (!obj) return [];
  
  if (Array.isArray(obj) && obj.length > 0 && typeof obj[0] === 'object') {
    // Get headers from first object
    const headers = Object.keys(obj[0]);
    
    const result = [headers];
    
    obj.forEach(row => {
      const dataRow = headers.map(header => row[header] ?? '');
      result.push(dataRow);
    });
    
    return result;
  } 
  // If it's a single object, create key-value pairs
  else if (typeof obj === 'object') {
    const result = [['Key', 'Value']]; // Header row
    
    Object.entries(obj).forEach(([key, value]) => {
      // Handle nested objects/arrays by stringifying them
      const displayValue = typeof value === 'object' ? JSON.stringify(value) : value;
      result.push([key, displayValue]);
    });
    
    return result;
  }
  
  return [];
}

// SUM - function to return the sum of an array of values
function getSum(array) {
  const n = array.length;
  if (array != null) {
    if (n > 1) {
      let value = Number.parseFloat(array[0]);
      for (let a = 1; a < n; a++) {
        value = value + Number.parseFloat(array[a]);
      }
      return value;
    } else if (array != null && n == 1) {
      return Number.parseFloat(array[0]);
    } else {
      return 0;
    }
  } else {
    return '';
  }
}

//------------------------------------------------------------------------
// MEAN - function to return the mean of an array of values
function getMean (array,sum) {
  const n = array.length;
  if (array != null) {
    if (n > 1) {
      sum = sum == null ? getSum(array) : sum;
      let mean = sum / n
      return mean;
    } else if (n == 1) {
      return array[0];
    } else {
      return 0;
    }
  } else {
    return '';
  }
}

//------------------------------------------------------------------------
// STANDARD DEVIATION - function to return the standard deviation of an array of values
function getStandardDeviation (array,avg) {
  if (array != null) {
    const n = array.length
    if (n > 0) {
      avg = avg == null ? getMean(array) : avg;
      array = array.map(x => Math.pow(x - avg, 2));
      let value = array[0];
      for (let a = 1; a < n; a++) {
        value = value + array[a];
      }
      let stdev = Math.sqrt(value/(n-1));
      return stdev;
    } else {
      return null;
    }
  } else {
    return '';
  }
}

//------------------------------------------------------------------------
// PERCENT COLORS - Function to convert a spectrum (positive, negative, or full) and a percent (0.0 to 1.0) to a HEX value
function renderPercentHex(type,percent,steps) {
  let colors = {};
  let cont = true;
  type = type.toLowerCase();
  if (type == 'positive') {
    colors = positiveColors(steps);
  } else if (type == 'negative') {
    colors = negativeColors(steps);
  } else if (type == 'wins') {
    colors = winColors(steps);
  } else if (type == 'losses') {
    colors = negativeColors(steps);
  } else if (type == 'neutral') {
    colors = neutralColors(steps);
  } else if (type == 'neutral_gray') {
    colors = neutralGrayColors(steps);   
  } else if (type == 'full') {
    colors = fullAltColors(steps);
  } else if (type == 'full_alt') {
    colors = fullColors(steps);    
  } else if (type == 'positive_invert') {
    colors = positiveColors(steps,1);
  } else if (type == 'negative_invert') {
    colors = negativeColors(steps,1);
  } else if (type == 'neutral_invert') {
    colors = neutralColors(steps,1);
  } else if (type == 'neutral_gray_invert') {
    colors = neutralGrayColors(steps,1);    
  } else if (type == 'full_invert') {
    colors = fullColors(steps,1);
  } else if (type == 'full_alt_invert') {
    colors = fullAltColors(steps,1);
  } else {
    Logger.log('ERROR: Provide first variable of \'positive\', \'negative\', \'neutral\', \'full\', \'positive_invert\', \'negative_invert\', \'neutral_invert\', or \'full_invert\'');
    cont = false;
    return null
  }
  // Break if color type not give correctly
  if (cont == true) {
    if(percent==undefined || percent==null || percent.isNaN===true) {
      Logger.log('ERROR: No value submitted. Provide a value between 1.0 and 0.0');
      return null;
    } else if (percent < 0 || percent > 1.0) {
      Logger.log('ERROR: You submitted ' + percent + '. Provide a value between 1.0 and 0.0');
      return null;
    } else if (percent == 0) {
      return colors[colors.length-1];
    } else if (percent < 1/(colors.length-1)) {
      return colors[colors.length];
    } else if (percent > (1-1/(colors.length-1))) {
      return colors[0];
    } else {
      percent = Math.round((1-percent)*(colors.length-1));
      return (colors[percent])
    }
  }
}

//------------------------------------------------------------------------
// GENERATES HEX GRADIENT - Provide a start and end and a count of values and this function generates a HEX gradient. Midpoint value is optional.
function hexGradient(start, end, count, midpoint) { // start and end in either 3 or 6 digit hex values, count is total values in array to return
  if (count < 2 || count.isNaN) {
    Logger.log('ERROR: Please provide a \'count\' value of 2 or greater');
    return null;
  } else {
    count = Math.ceil(count);
    if (midpoint == null || midpoint == undefined) {
      // strip the leading # if it's there
      start = start.replace(/^\s*#|\s*$/g, '');
      end = end.replace(/^\s*#|\s*$/g, '');

      // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
      if(start.length == 3){
        start = start.replace(/(.)/g, '$1$1');
      }

      if(end.length == 3){
        end = end.replace(/(.)/g, '$1$1');
      }

      let arr = ['#'+start];
      let tmpRed, tmpGreen, tmpBlue;

      // get colors
      let startRed = parseInt(start.substr(0, 2), 16),
          startGreen = parseInt(start.substr(2, 2), 16),
          startBlue = parseInt(start.substr(4, 2), 16);
      let endRed = parseInt(end.substr(0, 2), 16),
          endGreen = parseInt(end.substr(2, 2), 16),
          endBlue = parseInt(end.substr(4, 2), 16);
      let stepRed = (endRed-startRed)/(count-1),
          stepGreen = (endGreen-startGreen)/(count-1),
          stepBlue = (endBlue-startBlue)/(count-1);
      

      for (let a = 1; a < count-1; a++) {
        // calculate the step differential for each color
        tmpRed = ((stepRed * a) + startRed).toString(16).split('.')[0];
        tmpGreen = ((stepGreen * a) + startGreen).toString(16).split('.')[0];
        tmpBlue = ((stepBlue * a) + startBlue).toString(16).split('.')[0];
        // ensure 2 digits by color
        if( tmpRed.length == 1 ) tmpRed = '0' + tmpRed
        if( tmpGreen.length == 1 ) tmpGreen = '0' + tmpGreen
        if( tmpBlue.length == 1 ) tmpBlue = '0' + tmpBlue
        arr.push(('#' + tmpRed + tmpGreen + tmpBlue).toUpperCase());
      }
      arr.push('#'+end);
      return arr;
    } else {
      count = Math.ceil(count);
      if (count % 2 == 0) {
        count++
        // Logger.log('Even number provided with midpoint, increasing count to ' + count);
      }
      let half = Math.ceil(count/2);
      let arr = hexGradient(start,midpoint,half);
      arr.pop();
      let arr2 = hexGradient(midpoint,end,half);
      arr = arr.concat(arr2);
      return arr;
    }
  }
};

//------------------------------------------------------------------------
// WIN COLORS - Returns coloration for team win count as a HEX value
function winColors(steps,invert) {
  if (invert == null) {
    return hexGradient('#00F3FF','#FFFFFF',steps == null ? 18 : steps);
  } else {
    return hexGradient('#FFFFFF','#00F3FF',steps == null ? 18 : steps);
  }
}

//------------------------------------------------------------------------
// LOSS COLORS - Returns coloration for team loss count as a HEX value
function lossColors(steps,invert) {
  if (invert == null) {
    return hexGradient('#FFFFFF','#FF9700',steps == null ? 18 : steps);
  } else {
    return hexGradient('#FF9700','#FFFFFF',steps == null ? 18 : steps);
  }
}

//------------------------------------------------------------------------
// POSITIVE PERCENT COLORS - Colors at 4 point intervals for coloration (green)
function positiveColors(steps,invert) {
  if (invert == null) {
    return hexGradient('#75FF3A','#FFFFFF',steps == null ? 25 : steps);
  } else {
    return hexGradient('#FFFFFF','#75FF3A',steps == null ? 25 : steps);
  }
}

//------------------------------------------------------------------------
// NEGATIVE PERCENT COLORS - Colors at 4 point intervals for coloration (red)
function negativeColors(steps,invert) {
  if (invert == null) {
    return hexGradient('#FF344F','#FFFFFF',steps == null ? 25 : steps);
  } else {
    return hexGradient('#FFFFFF','#FF344F',steps == null ? 25 : steps);
  }
}

//------------------------------------------------------------------------
// NEUTRAL PERCENT COLORS - Colors at 4 point intervals for coloration (yellow)
function neutralColors(steps,invert) {
  if (invert == null) {
    return hexGradient('#FFE62F','#FFFFFF',steps == null ? 25 : steps);
  } else {
    return hexGradient('#FFFFFF','#FFE62F',steps == null ? 25 : steps);
  }
}

//------------------------------------------------------------------------
// NEUTRAL PERCENT COLORS - Colors at 4 point intervals for coloration (yellow)
function neutralGrayColors(steps,invert) {
  if (invert == null) {
    return hexGradient('#A2A2A2','#FFFFFF',steps == null ? 25 : steps)
  } else {
    return hexGradient('#FFFFFF','#A2A2A2',steps == null ? 25 : steps);
  }
}

//------------------------------------------------------------------------
// FULL PERCENT COLORS - Colors at 2 point intervals for coloration of positive to negative (green to red) with white in the middle
function fullColors(steps,invert) {
  if (steps,invert == null) {
    return hexGradient('#75FF3A','#FF344F',steps == null ? 49 : steps,'#FFFFFF');
  } else {
    return hexGradient('#FF344F','#75FF3A',steps == null ? 49 : steps,'#FFFFFF');
  }
}

//------------------------------------------------------------------------
// FULL PERCENT COLORS - Colors at 2 point intervals for coloration of positive to negative (green to red) with white in the middle
function fullAltColors(steps,invert) {
  if (steps,invert == null) {
    return hexGradient('#54ACFF','#E58FFF',steps == null ? 49 : steps,'#FFFFFF');
  } else {
    return hexGradient('#E58FFF','#54ACFF',steps == null ? 49 : steps,'#FFFFFF');
  }
}


//------------------------------------------------------------------------
// ADJUST ROWS - Cleans up rows of a sheet by providing the total rows that currently exist with data
function adjustRows(sheet,rows,verbose){
  var maxRows = sheet.getMaxRows(); 
  if (rows == undefined || rows == null) {
    rows = sheet.getLastRow();
  }
  if (rows > 0 && rows > maxRows) {
    if(verbose) return Logger.log(maxRows,rows-maxRows);
    sheet.insertRowsAfter(maxRows,(rows-maxRows));
    if(verbose) return Logger.log('Added ' + (rows-maxRows) + ' rows');
  } else if (rows < maxRows && rows != 0){
    sheet.deleteRows((rows+1), (maxRows-rows));
    if(verbose) return Logger.log('Removed ' + (maxRows - rows) + ' rows');
  } else {
    if(verbose) return Logger.log('Rows not adjusted');
  }
}

//------------------------------------------------------------------------
// ADJUST COLUMNS - Cleans up columns of a sheet by providing the total columns that currently exist with data
function adjustColumns(sheet,columns,verbose){
  var maxColumns = sheet.getMaxColumns(); 
  if (columns == undefined || columns == null) {
    columns = sheet.getLastColumn();
  }
  if (columns > 0 && columns > maxColumns) {
    if(verbose) return Logger.log('maxColumns=' + maxColumns + ' columns-maxColumns=' + (columns-maxColumns))
    sheet.insertColumnsAfter(maxColumns,(columns-maxColumns));
    if(verbose) return Logger.log('Added ' + (columns-maxColumns) + ' columns');
  }  else if (columns < maxColumns && columns != 0){
    sheet.deleteColumns((columns+1), (maxColumns-columns));
    if(verbose) return Logger.log('Removed ' + (maxColumns - columns) + ' column(s)');
  } else {
    if(verbose) return Logger.log('Columns not adjusted');
  }
}

// FETCH SPREADSHEET - Checks that the 'ss' variable passed into a script is not null, undefined, or a non-spreadsheet
function fetchSpreadsheet(ss) {
  try {
    if (ss && typeof ss.getSheets === 'function' && typeof ss.getId === 'function') {
      return ss;
    } else {
      throw new Error('Invalid Spreadsheet object');
    }
  } catch (err) {
    if (ss !== null && ss !== undefined) {
      Logger.log('ALERT: The function \'' + (new Error()).stack.split('\n')[2].trim().split(' ')[1] + '\' passed ' + typeof ss + ' \'' + ss + '\' to the \'fetchSpreadsheet\' function.');
      Logger.log(err.stack);
    }
    ss = SpreadsheetApp.getActiveSpreadsheet();
  }
  return ss;
}

// FETCH UI - Checks that the 'ui' variable passed into a script is not null, undefined, or a non-UI
function fetchUi(ui) {
  try{
    if (typeof ui.showModalDialog !== 'function') {
      throw new Error('Non-UI passed');
    }
  }
  catch (err) {
    if (ui !== null && ui !== undefined) {
      Logger.log('ALERT: The function \'' + (new Error()).stack.split('\n')[2].trim().split(' ')[1] + '\' passed ' + typeof ui + ' \'' + ui + '\' to the \'fetchUi\' function.')
    }
    ui = SpreadsheetApp.getUi();
  }
  return ui;
}

// WEB OBJECT PARSE
// Fetches content from a URL and extracts/parses a specific JSON object
function webObjectParse(url, objectName) {
  try {
    const response = UrlFetchApp.fetch(url, { muteHttpExceptions: true }); //

    // Check if the request was successful
    if (response.getResponseCode() !== 200) { //
      Logger.log(`Error fetching URL: ${url}, Status Code: ${response.getResponseCode()}`); //
      return null;
    }

    const htmlContent = response.getContentText(); //

    // Construct a regular expression to find the JSON object by its name
    // This looks for 'objectName = { ... };' or 'objectName: { ... }'
    const regex = new RegExp(`${objectName}\\s*=\\s*(\\{[\\s\\S]*?\\});|${objectName}:\\s*(\\{[\\s\\S]*?\\})`);
    const match = htmlContent.match(regex);

    if (match) {
      // Prioritize the '=' assignment match (group 1).
      // If group 1 is null, it means the ':' assignment matched (group 2).
      let jsonString = match[1] || match[2];

      try {
        const parsedObject = JSON.parse(jsonString); //
        return parsedObject;
      } catch (jsonError) {
        Logger.log(`Error parsing JSON for object "${objectName}": ${jsonError}`); //
        return null;
      }
    } else {
      Logger.log(`Object "${objectName}" not found on the page.`); //
      return null;
    }
  } catch (error) {
    Logger.log(`Error fetching or processing URL: ${error}`); //
    return null;
  }
}

// REMOVES NAMED RANGES BY PREFIX
function removeNamedRangesByPrefix(input) {
  if (!input) {
    Logger.log("No input provided.");
    return;
  }  
  const ss = fetchSpreadsheet();
  const namedRanges = ss.getNamedRanges();
  const regex = new RegExp('^' + input);
  namedRanges.forEach(function(namedRange) {
    if (regex.test(namedRange.getName())) {
      namedRange.remove();
      Logger.log("Removed named range: " + namedRange.getName());
    }
  });
}

// ABBREVIATION
// Uses first letter of each word in a provided string; uses only consonants if only one word provided
function abbreviation(string) {
    const words = string.split(" "); // Split the string into words

    if (words.length > 1) {
        // Multiple words: extract and capitalize the first letter of each word.
        const capitalizedFirstLetters = words.map(word => {
            if (word.length > 0) { // Check if the word is not empty
                return word.charAt(0).toUpperCase(); // Get the first letter and capitalize it
            }
            return ""; // Return empty string for empty words to avoid errors
        });
        return capitalizedFirstLetters.join(""); // Join the capitalized first letters
    } else {
        // Single word: extract consonants and capitalize them.
        const vowels = "aeiouAEIOU";
        let result = "";
        for (let i = 0; i < string.length; i++) {
            const char = string[i];
            // Check if the character is an alphabet letter and not a vowel.
            if (/[a-zA-Z]/.test(char) && !vowels.includes(char)) {
                result += char.toUpperCase(); // Add the capitalized consonant to the result
            }
        }
        return result;
    }
}

// NORMALIZE NAME
// Turns a string into lowercase and removes periods, apostrophes, and ensures no double-spaces+ exist
function normalizeName(name) {
  if (!name) return '';
  return name
    .toLowerCase()
    .trim()
    .replace(/[.']/g, '') // Remove periods and apostrophes
    .replace(/\s+/g, ' '); // Multiple spaces to single
}

// REMOVE SUFFIX
// Removes any trailing qualifiers to player names to ensure matching functions work correctly
function removeSuffix(name) {
  if (!name) return '';
  return name.replace(/\s+(jr\.?|sr\.?|ii+|iii|iv|v)$/i, '').trim();
}

// COPY FORMULAS DOWN
// Copies all formulas across an entire row (if not static) and fills sheet with those formulas
function copyFormulasDown(sheet,sourceRow) {
    let formula;
    let firstRowFormulas = sheet.getRange(sourceRow,1,1,sheet.getMaxColumns()).getFormulas().flat();
    let formulaCols = firstRowFormulas.map(x => x != '');

    formulaCols.unshift('false');
    for ( let a = 1; a <= formulaCols.length; a++ ) {
      if ( formulaCols[a] == true ) {
        formula = sheet.getRange(sourceRow,a).getFormulaR1C1();
        for ( let b = sourceRow; b <= sheet.getLastRow(); b++ ) {
          sheet.getRange(b,a).setFormulaR1C1(formula);
        }
      }
    }
}
