function sleeperPlayerImport(){
  var json = JSON.parse(UrlFetchApp.fetch('https://api.sleeper.app/v1/players/nfl'));
  Logger.log(JSON.stringify(json))
  
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
  var positions = ['QB','RB','FB','WR','TE','K','DEF'] // remove any positions you're not interested in. Some RBs are categorized as FB.
  var unrostered = false; // set to 'true' if you want players who are not on NFL teams to be included in table
  var headers = ['player_id','full_name','last_name','first_name','team','position','fantasy_positions','depth_chart_position','depth_chart_order',
                 'number','height','weight','college','birth_date','years_exp','status','active','injury_status','injury_start_date','injury_body_part','injury_notes',
                 'espn_id','yahoo_id','rotowire_id','rotoworld_id','fantasy_data_id','gsis_id','sportradar_id','stats_id','news_updated']; // if you remove one of these entries, remove the corresponding value in the "colWidths" variable and the "colHide" variable
  var colWidths = [50,170,100,100,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50];
  var columns = colWidths.length;
  var colHide = [false,false,false,false,false,true,false,true,false,true,false,false,true,true,true,true,true,false,true,true,true,false,false,true,true,true,true,true,true,true];
  // Pair of arrays for mapping ESPN defense IDs (these don't come in or aren't present in the JSON from Sleeper) -- should be converted to an object, rather than two arrays
  var espnId = ['-16022','-16001','-16033','-16002','-16029','-16003','-16004','-16005','-16006','-16007','-16008','-16009','-16034','-16011','-16030','-16012','-16013','-16024','-16014','-16015','-16016','-16017','-16018','-16019','-16020','-16021','-16023','-16025','-16026','-16027','-16010','-16028'];
  var espnTeams = ['ARI','ATL','BAL','BUF','CAR','CHI','CIN','CLE','DAL','DEN','DET','GB','HOU','IND','JAX','KC','LV','LAC','LAR','MIA','MIN','NE','NO','NYG','NYJ','PHI','PIT','SF','SEA','TB','TEN','WAS'];
  
  // Pair of arrays for modifying injruy tags to shorthand for easier use in a spreadsheet -- also should be converted to an object, rather than two arrays
  var injuriesAbbr = ['Q','D','O','IR','PUP','COV','NA','SUS','DNR'];
  var injuries = ['Questionable','Doubtful','Out','IR','PUP','COV','NA','Sus','DNR'];
  
  
  for(var key in json){
    try {
      // First if statement checks if the player is one of the selected positions (other than DEF)
      if ( positions.indexOf(json[key]['position']) >= 0 ) {
        if ( (unrostered == true && json[key]['team'] == null) || json[key]['team'] != null ) {
          for ( var col in headers) {
            if ( headers[col] == 'full_name' ) {
              // Creates the full name entry alongside the first/last entries in the JSON data
              arr.push(json[key][headers[3]] + " " + json[key][headers[2]]);            
            } else if ( headers[col] == 'injury_status') {
              if ( json[key][headers[col]] == null ) {
                // Pushes a "G" for "good" to any player without an injury tag
                arr.push('G');
              } else {
                // If player has injury designation, assigns the shorthand to that player
                arr.push(injuriesAbbr[injuries.indexOf(json[key][headers[col]])]);
              }
            } else if ( json[key][headers[col]] != null ) {
              // Once the above conditions are not met, this part cycles through all the values in the 'headers' array above
              arr.push(json[key][headers[col]]);
            } else {
              // If there is a null value, it pushes a blank entry to the array
              arr.push("");
            }
          }    
        }
      // Else statement for defenses
      } else if ( positions.indexOf('DEF') >= 0 && json[key]['position'] == 'DEF' && espnTeams.indexOf(json[key]['player_id']) > 0) {
        for ( var col in headers) {
          if ( headers[col] == 'espn_id' ) {
            // Adds ESPN id
            arr.push(espnId[espnTeams.indexOf(json[key]['player_id'])]);
          } else if ( headers[col] == 'full_name' ) {
            // Adds city/mascot single entry
            arr.push(json[key][headers[3]] + " " + json[key][headers[2]]);   
          } else if ( headers[col] == 'injury_status') {
            // Gives a 'G', 'good', health status for each defense
            if ( json[key][headers[col]] == null ) {
              arr.push('G');
            } else {
              arr.push(injuriesAbbr[injuries.indexOf(json[key][headers[col]])]);
            }
          } else if ( json[key][headers[col]] != null ) {
            // Once the above conditions are not met, this part cycles through all the values in the 'headers' array above
            arr.push(json[key][headers[col]]);
          } else {
            // If there is a null value, it pushes a blank entry to the array
            arr.push("");
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
  
  // WEIRD ISSUE WITH ARI DEFENSE
  for ( var col in headers) {
    if ( headers[col] == 'espn_id' ) {
      arr.push(espnId[espnTeams.indexOf(json['ARI']['player_id'])]);
    } else if ( headers[col] == 'full_name' ) {
      arr.push(json['ARI'][headers[3]] + " " + json['ARI'][headers[2]]);   
    } else if ( headers[col] == 'injury_status') {
            if ( json[key][headers[col]] == null ) {
              arr.push('G');
            } else {
              arr.push(injuriesAbbr[injuries.indexOf(json[key][headers[col]])]);
            }
    } else if ( json['ARI'][headers[col]] != null ) {
      arr.push(json['ARI'][headers[col]]);
    } else {
      arr.push("");
    }
  }
  keys.push(arr);

  // Clear the sheet for new data
  sheet.clear();
  // Gets range and sets values of the headers
  sheet.getRange(1,1,1,headers.length).setValues([headers]);
  // Gets range for setting data
  var playerTable = sheet.getRange(2,1,keys.length,keys[0].length);
  // Sets data in place
  playerTable.setValues(keys);
  // Sorts based on 
  playerTable.sort([{column: headers.indexOf('fantasy_positions')+1, ascending: true},{column: headers.indexOf('last_name')+1, ascending: true}]);

  // Creates named ranges for doing VLOOKUP functions in Google Sheets, among other things
  ss.setNamedRange('PLAYER_ID',sheet.getRange(2,headers.indexOf('player_id')+1,keys.length,1));
  ss.setNamedRange('PLAYER_FULL',sheet.getRange(2,headers.indexOf('full_name')+1,keys.length,1));
  ss.setNamedRange('PLAYER_FIRST',sheet.getRange(2,headers.indexOf('first_name')+1,keys.length,1));  
  ss.setNamedRange('PLAYER_LAST',sheet.getRange(2,headers.indexOf('last_name')+1,keys.length,1));
  ss.setNamedRange('PLAYER_POSITION',sheet.getRange(2,headers.indexOf('fantasy_positions')+1,keys.length,1));
  ss.setNamedRange('PLAYER_TEAM',sheet.getRange(2,headers.indexOf('team')+1,keys.length,1));
  ss.setNamedRange('PLAYER_DEPTH',sheet.getRange(2,headers.indexOf('depth_chart_order')+1,keys.length,1));
  ss.setNamedRange('PLAYER_HEIGHTS',sheet.getRange(2,headers.indexOf('height')+1,keys.length,1));
  ss.setNamedRange('PLAYER_WEIGHTS',sheet.getRange(2,headers.indexOf('weight')+1,keys.length,1));
  ss.setNamedRange('PLAYER_EXPERIENCE',sheet.getRange(2,headers.indexOf('years_exp')+1,keys.length,1));
  ss.setNamedRange('PLAYER_BIRTHDAYS',sheet.getRange(2,headers.indexOf('birth_date')+1,keys.length,1));
  ss.setNamedRange('PLAYER_INJURY',sheet.getRange(2,headers.indexOf('injury_status')+1,keys.length,1));
  ss.setNamedRange('PLAYER_ESPN',sheet.getRange(2,headers.indexOf('espn_id')+1,keys.length,1));
  ss.setNamedRange('PLAYER_FANTASY_DATA_ID',sheet.getRange(2,headers.indexOf('fantasy_data_id')+1,keys.length,1));

  // Hides columns and aligns data in cells
  for (var cols = 0 ; cols < columns ; cols++) {
    sheet.setColumnWidth(cols+1,colWidths[cols]);
    if (colHide[cols] == true){
      sheet.hideColumns(cols+1,1);
    } else {
      sheet.unhideColumn(sheet.getRange(1,cols+1,sheet.getMaxRows(),1));
    }
  }
  var alignments = sheet.getRange(1,1,keys.length+1,keys[0].length);
  alignments.setHorizontalAlignment('left');

  var positionsString = '';
  for (var a = 0; a < positions.length; a++) {
    if (positions[a+1] == undefined) {
      positionsString = positionsString.concat('and ' + positions[a]);
    } else {
      positionsString = positionsString.concat(positions[a] + ', ');
    }
  }
  ss.toast('All Sleeper player data imported successfully for ' + positionsString )

  // 2022 - Created by Ben Powers
  // ben.powers.creative@gmail.com

}
