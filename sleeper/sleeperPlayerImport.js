function sleeperPlayerImport(){
  // Fetch JSON object from Sleeper's API
  var json = JSON.parse(UrlFetchApp.fetch('https://api.sleeper.app/v1/players/nfl'));
  
  // Gets spreadsheet and sheet (creates if not existing)
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('PLAYERS');
  if (sheet == null) {
    ss.insertSheet('PLAYERS');
    sheet = ss.getSheetByName('PLAYERS');
  }
  
  // Initial variables -- look at notes to customize
  var arr = [];
  var keys = [];

  // remove any positions you're not interested in. Some RBs are categorized as FB and relying on 'fantasy_positions' entails players with multiple designations
  var positions = ['QB','RB','FB','WR','TE','K','DEF'] 
  
  // set to 'true' if you want players who are not on NFL teams to be included in table (will make it take a lot longer)
  var unrostered = false; 
  
  // Modify these as needed
  var dataPoints = {
    "player_id":{"width":50,"hide":false,"named_range":true},
    "full_name":{"width":170,"hide":false,"named_range":true},
    "last_name":{"width":100,"hide":false,"named_range":true},
    "first_name":{"width":100,"hide":false,"named_range":true},
    "team":{"width":50,"hide":false,"named_range":true},
    "position":{"width":50,"hide":true,"named_range":false},
    "fantasy_positions":{"width":50,"hide":false,"named_range":true},
    "depth_chart_position":{"width":50,"hide":true,"named_range":false},
    "depth_chart_order":{"width":50,"hide":false,"named_range":true},
    "number":{"width":50,"hide":true,"named_range":false},
    "height":{"width":50,"hide":false,"named_range":true},
    "weight":{"width":50,"hide":false,"named_range":true},
    "college":{"width":50,"hide":true,"named_range":false},
    "birth_date":{"width":50,"hide":false,"named_range":true},
    "years_exp":{"width":50,"hide":false,"named_range":true},
    "status":{"width":50,"hide":true,"named_range":false},
    "active":{"width":50,"hide":true,"named_range":false},
    "injury_status":{"width":50,"hide":false,"named_range":true},
    "injury_start_date":{"width":50,"hide":true,"named_range":false},
    "injury_body_part":{"width":50,"hide":true,"named_range":false},
    "injury_notes":{"width":50,"hide":true,"named_range":false},
    "espn_id":{"width":50,"hide":false,"named_range":true},
    "yahoo_id":{"width":50,"hide":false,"named_range":true},
    "rotowire_id":{"width":50,"hide":true,"named_range":false},
    "rotoworld_id":{"width":50,"hide":true,"named_range":false},
    "fantasy_data_id":{"width":50,"hide":true,"named_range":false},
    "gsis_id":{"width":50,"hide":true,"named_range":false},
    "sportradar_id":{"width":50,"hide":true,"named_range":false},
    "stats_id":{"width":50,"hide":true,"named_range":false},
    "news_updated":{"width":50,"hide":true,"named_range":false}
  };
  // Defense ESPN IDs (Sleeper API lacks these)
  var espnIds = {
    "ARI":-16022,"ATL":-16001,"BAL":-16033,"BUF":-16002,"CAR":-16029,"CHI":-16003,"CIN":-16004,"CLE":-16005,"DAL":-16006,"DEN":-16007,"DET":-16008,"GB":-16009,
    "HOU":-16034,"IND":-16011,"JAX":-16030,"KC":-16012,"LV":-16013,"LAC":-16024,"LAR":-16014,"MIA":-16015,"MIN":-16016,"NE":-16017,"NO":-16018,"NYG":-16019,
    "NYJ":-16020,"PHI":-16021,"PIT":-16023,"SF":-16025,"SEA":-16026,"TB":-16027,"TEN":-16010,"WAS":-16028
  };
  // Injury status shorthand for easier representation in cells
  var injuries = {
    "Questionable":"Q",
    "Doubtful":"D",
    "Out":"O",
    "IR":"IR",
    "PUP":"PUP",
    "COV":"COV",
    "NA":"NA",
    "Sus":"SUS",
    "DNR":"DNR"
  }
  
  // Creates an array of the header values to use
  var headers = [];
  for (var a = 0; a < Object.keys(dataPoints).length; a++){
    headers.push(Object.keys(dataPoints)[a]);
  }
  
  // Sets the header values to the first row of the array 'keys' to be written to the sheet
  keys.push(headers);
  
  // Loops through all 'key' entries (players) in the JSON object that was fetched
  for(var key in json){
    try {
      // First if statement checks if the player is one of the selected positions (other than DEF)
      if ( positions.indexOf(json[key]['position']) >= 0 ) {
        if ( (unrostered == true && json[key]['team'] == null) || json[key]['team'] != null ) {
          for ( var col = 0; col < Object.keys(dataPoints).length; col++ ) {
            if ( Object.keys(dataPoints)[col] == 'full_name' ) {
              // Creates the full name entry alongside the first/last entries in the JSON data
              arr.push(json[key]['first_name'] + ' ' + json[key]['last_name']);
            } else if ( json[key]['position'] == 'DEF' && Object.keys(dataPoints)[col] == 'espn_id' ) {
              // Adds ESPN id
              arr.push(espnIds[json[key]['player_id']]);
            } else if ( Object.keys(dataPoints)[col] == 'injury_status') {
              if ( json[key][Object.keys(dataPoints)[col]] == null ) {
                // Pushes a 'G' for 'good' to any player without an injury tag
                arr.push('G');
              } else {
                // If player has injury designation, assigns the shorthand to that player
                arr.push(injuries[json[key][Object.keys(dataPoints)[col]]]);
              }
            } else if ( json[key][Object.keys(dataPoints)[col]] != null ) {
              // Once the above conditions are not met, this part cycles through all the values in the 'headers' array above
              arr.push(json[key][Object.keys(dataPoints)[col]]);
            } else {
              // If there is a null value, it pushes a blank entry to the array
              arr.push('');
            }
          }    
        }
      }
      if (arr.length > 0) {
        // so long as the array mapped values, it pushes the array into the array ('keys') of arrays
        keys.push(arr);
        // resets the 'arr' variable to start over
        arr = [];
      }
    } catch (err) {
      ss.toast('Error bringing in data')
    }
  }

  // Clear the sheet for new data
  sheet.clear();
  // Gets range for setting data and headers
  var playerTable = sheet.getRange(1,1,keys.length,keys[0].length);
  // Sets data in place
  playerTable.setValues(keys);
  // Sorts based on 
  sheet.getRange(2,1,keys.length-1,keys[0].length).sort([{column: headers.indexOf('fantasy_positions')+1, ascending: true},{column: headers.indexOf('last_name')+1, ascending: true}]);
  
  // Creates named ranges for doing VLOOKUP functions in Google Sheets; only for keys in 'headers' object tagged with 'true' for 'named_range'
  for ( col = 0; col < Object.keys(dataPoints).length; col++ ) {
    if (dataPoints[Object.keys(dataPoints)[col]]['named_range'] == true) {
      ss.setNamedRange('SLPR_' + headers[col].toUpperCase(),sheet.getRange(2,col+1,keys.length-1,1));
    }
  }

  // Hides columns and aligns data in cells
  for (var col = 0; col < Object.keys(dataPoints).length; col++ ) {
    sheet.setColumnWidth(col+1,dataPoints[Object.keys(dataPoints)[col]]['width']);
    if (dataPoints[Object.keys(dataPoints)[col]]['hide'] == true){
      sheet.hideColumns(col+1,1);
    } else {
      sheet.unhideColumn(sheet.getRange(1,col+1,sheet.getMaxRows(),1));
    }
  }
  
  // Notification text creation
  var positionsString = '';
  if (positions.indexOf('FB') >= 0) {
    positions.splice(positions.indexOf('FB'),1);
  }
  for (var a = 0; a < positions.length; a++) {
    if (positions[a+1] == undefined) {
      positionsString = positionsString.concat('and ' + positions[a]);
    } else {
      positionsString = positionsString.concat(positions[a] + ', ');
    }
  }
  ss.toast('All Sleeper player data imported successfully for ' + positionsString);

  // Update for correct rows
  var maxRows = sheet.getMaxRows();
  var rows = keys.length;
  if (maxRows != rows) {
    try { 
      var lastRow = sheet.getLastRow();
      if (rows > maxRows) {
        sheet.insertRowsAfter(maxRows,rows-maxRows);
      } else if (lastRow < maxRows){
        sheet.deleteRows(lastRow+1, maxRows-lastRow);
      }
    } catch (err) {
      Logger.log('Error or the sheet is already sized correctly for rows')
    }
  }
  // Update for correct columns
  var maxCols = sheet.getMaxColumns();
  var columns = keys[0].length;
  if (maxCols != columns) {
    try { 
      var lastCol = sheet.getLastColumn();
      if (columns > maxCols) {
        sheet.insertColumnsAfter(maxCols,columns-maxCols);
      } else if (lastCol < maxCols){
        sheet.deleteColumns(lastCol+1, maxCols-lastCol);
      }
    } catch (err) {
      Logger.log('Error or the sheet is already sized correctly for columns')
    }
  }

  var alignments = sheet.getRange(1,1,keys.length,keys[0].length);
  alignments.setHorizontalAlignment('left');

  // Locks data on sheet
  sheet.protect();
  
  // 2022 - Created by Ben Powers
  // ben.powers.creative@gmail.com

}
