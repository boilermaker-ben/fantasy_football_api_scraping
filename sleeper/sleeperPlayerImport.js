function sleeperPlayerImport(){
  // Fetch JSON object from Sleeper's API
  let json = JSON.parse(UrlFetchApp.fetch('https://api.sleeper.app/v1/players/nfl'));
  
  // Gets spreadsheet and sheet (creates if not existing)
  let ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('PLAYERS');
  if (sheet == null) {
    ss.insertSheet('PLAYERS');
    sheet = ss.getSheetByName('PLAYERS');
  }
  
  // Initial variables -- look at notes to customize
  let arr = [];
  let keys = [];

  // remove any positions you're not interested in. Some RBs are categorized as FB and relying on 'fantasy_positions' entails players with multiple designations
  let positions = ['QB','RB','FB','WR','TE','K','DEF'] 
  
  // set to 'true' if you want players who are not on NFL teams to be included in table (will make it take a lot longer)
  let unrostered = false; 
  
  // Modify these as needed
  let dataPoints = {
    'player_id':{'width':50,'hide':false,'named_range':true},
    'full_name':{'width':170,'hide':false,'named_range':true},
    'last_name':{'width':100,'hide':false,'named_range':true},
    'first_name':{'width':100,'hide':false,'named_range':true},
    'team':{'width':50,'hide':false,'named_range':true},
    'height':{'width':50,'hide':false,'named_range':true},
    'weight':{'width':50,'hide':false,'named_range':true},
    'age':{'width':50,'hide':false,'named_range':true},
    'birth_date':{'width':50,'hide':false,'named_range':true},
    'years_exp':{'width':50,'hide':false,'named_range':true},
    'position':{'width':50,'hide':true,'named_range':false},
    'fantasy_positions':{'width':50,'hide':false,'named_range':true},
    'depth_chart_position':{'width':50,'hide':true,'named_range':false},
    'depth_chart_order':{'width':50,'hide':false,'named_range':true},
    'number':{'width':50,'hide':true,'named_range':false},
    'college':{'width':50,'hide':true,'named_range':false},
    'status':{'width':50,'hide':true,'named_range':false},
    'active':{'width':50,'hide':true,'named_range':false},
    'injury_status':{'width':50,'hide':false,'named_range':true},
    'injury_start_date':{'width':50,'hide':true,'named_range':false},
    'injury_body_part':{'width':50,'hide':true,'named_range':false},
    'injury_notes':{'width':50,'hide':true,'named_range':false},
    'espn_id':{'width':50,'hide':false,'named_range':true},
    'fp_id':{'width':50,'hide':false,'named_range':true}, // Not in Sleeper API Data Set by default
    'yahoo_id':{'width':50,'hide':false,'named_range':true},
    'rotowire_id':{'width':50,'hide':true,'named_range':false},
    'rotoworld_id':{'width':50,'hide':true,'named_range':false},
    'fantasy_data_id':{'width':50,'hide':false,'named_range':true},
    'gsis_id':{'width':50,'hide':true,'named_range':false},
    'sportradar_id':{'width':50,'hide':true,'named_range':false},
    'stats_id':{'width':50,'hide':true,'named_range':false},
    'news_updated':{'width':50,'hide':true,'named_range':false}
  };
  // Defense ESPN IDs (Sleeper API lacks these)

  // Injury status shorthand for easier representation in cells
  let injuries = {
    'Questionable':'Q',
    'Doubtful':'D',
    'Out':'O',
    'IR':'IR',
    'PUP':'PUP',
    'COV':'COV',
    'NA':'NA',
    'Sus':'SUS',
    'DNR':'DNR'
  }
  
  // Creates an array of the header values to use
  let headers = [];
  for (let a = 0; a < Object.keys(dataPoints).length; a++){
    headers.push(Object.keys(dataPoints)[a]);
  }
  
  // Sets the header values to the first row of the array 'keys' to be written to the sheet
  keys.push(headers);
  
  // Loops through all 'key' entries (players) in the JSON object that was fetched
  for(let key in json){
    //try {
      // First if statement checks if the player is one of the selected positions (other than DEF)
      if (positions.indexOf(json[key]['position']) >= 0 ) {
        if ((unrostered == true && json[key]['team'] == null) || json[key]['team'] != null ) {
          for (let col = 0; col < Object.keys(dataPoints).length; col++ ) {
            if (Object.keys(dataPoints)[col] == 'full_name' ) {
              // Creates the full name entry alongside the first/last entries in the JSON data
              arr.push(json[key]['first_name'] + ' ' + json[key]['last_name']);
            } else if ( Object.keys(dataPoints)[col] == 'injury_status') {
              if (json[key][Object.keys(dataPoints)[col]] == null ) {
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
              if (Object.keys(dataPoints)[col] == 'espn_id') {
                let id = espnId(json[key]['player_id']);
                if (espnId != null){
                  arr.push(id);
                } else {
                  arr.push('');
                }
              } else if (Object.keys(dataPoints)[col] == 'fp_id') {
                let id = fantasyProsId(json[key]['player_id']);
                if (fantasyProsId != null){
                  arr.push(id);
                } else {
                  arr.push('');
                }                
              } else {
                // If there is a null value, it pushes a blank entry to the array
                arr.push('');
              }
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
    //} catch (err) {
      //ss.toast('Error bringing in data')
    //}
  }

  // Clear the sheet for new data
  sheet.clear();
  // Gets range for setting data and headers
  let playerTable = sheet.getRange(1,1,keys.length,keys[0].length);
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
  for (let col = 0; col < Object.keys(dataPoints).length; col++ ) {
    sheet.setColumnWidth(col+1,dataPoints[Object.keys(dataPoints)[col]]['width']);
    if (dataPoints[Object.keys(dataPoints)[col]]['hide'] == true){
      sheet.hideColumns(col+1,1);
    } else {
      sheet.unhideColumn(sheet.getRange(1,col+1,sheet.getMaxRows(),1));
    }
  }
  
  // Notification text creation
  let positionsString = '';
  if (positions.indexOf('FB') >= 0) {
    positions.splice(positions.indexOf('FB'),1);
  }
  for (let a = 0; a < positions.length; a++) {
    if (positions[a+1] == undefined) {
      positionsString = positionsString.concat('and ' + positions[a]);
    } else {
      positionsString = positionsString.concat(positions[a] + ', ');
    }
  }
  ss.toast('All Sleeper player data imported successfully for ' + positionsString);

  // Update for correct rows
  let maxRows = sheet.getMaxRows();
  let rows = keys.length;
  if (maxRows != rows) {
    try { 
      let lastRow = sheet.getLastRow();
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
  let maxCols = sheet.getMaxColumns();
  let columns = keys[0].length;
  if (maxCols != columns) {
    try { 
      let lastCol = sheet.getLastColumn();
      if (columns > maxCols) {
        sheet.insertColumnsAfter(maxCols,columns-maxCols);
      } else if (lastCol < maxCols){
        sheet.deleteColumns(lastCol+1, maxCols-lastCol);
      }
    } catch (err) {
      Logger.log('Error or the sheet is already sized correctly for columns')
    }
  }

  let alignments = sheet.getRange(1,1,keys.length,keys[0].length);
  alignments.setHorizontalAlignment('left');
  
  // Sets the top row to be frozen
  sheet.setFrozenRows(1);
  
  // Sets the left two columns to be frozen
  sheet.setFrozenColumns(2);

  // Locks data on sheet
  sheet.protect();

  // 2023 - Created by Ben Powers
  // ben.powers.creative@gmail.com

}

// ===========================



//------------------------------------------------------------------------
// ESPN ID - Provides Sleeper scripts with ESPN ID to match with Sleeper ID
function espnId(id){
  let espnId = { 17:11122,49:9354,59:10636,96:8439,312:11387,345:12477,391:12731,421:12483,503:12460,533:13199,
    650:10621,827:14163,829:14012,862:13987,928:14053,956:13981,1034:15478,1049:14876,1067:15072,1166:14880,
    1234:14881,1264:15683,1266:14993,1338:15948,1339:15835,1346:15839,1348:15965,1352:15880,1373:15864,1379:16002,
    1426:15795,1433:16339,1466:15847,1476:15920,1479:15818,1535:15807,1689:16460,1837:16760,1945:17372,1992:16799,
    2020:17427,2028:16757,2073:17315,2078:16733,2133:16800,2161:16782,2197:16731,2216:16737,2251:16813,2306:2969939,
    2307:2576980,2309:2976499,2319:2576623,2320:2576434,2325:2971618,2331:2972460,2334:2579604,2359:2576336,2374:2577327,2381:2578533,
    2390:2582410,2399:2577134,2422:2514206,2449:2976212,2460:2574576,2463:2979590,2471:2515270,2505:2576925,2549:2511109,2673:2577667,
    2711:2565969,2747:2473037,2749:2576414,2750:2580216,3048:2531358,3155:3051889,3163:3046779,3164:3051392,3198:3043078,3199:2976316,
    3200:2976592,3202:3043275,3214:3046439,3225:3045144,3242:2979843,3257:2578570,3269:2576581,3271:2573401,3286:3043116,3294:2577417,
    3312:2980077,3321:3116406,3342:2577641,3343:2979501,3357:2574511,3362:2574630,3423:2574808,3451:2971573,3634:2973405,3664:2572861,
    3678:2985659,3832:4012556,3852:2978308,3969:3115364,3976:3039707,4017:3122840,4018:3116385,4029:3116593,4033:3123076,4034:3117251,
    4035:3054850,4036:3042778,4037:3116165,4039:2977187,4040:3120348,4046:3139477,4054:2998565,4055:3043080,4066:3051876,4068:3045138,
    4080:3059722,4082:3121427,4089:3918639,4098:3059915,4111:3125116,4127:2979520,4137:3045147,4144:3054212,4147:3116389,4149:2980453,
    4171:3115306,4177:2991662,4179:3044720,4183:2972236,4189:2975863,4195:3050478,4197:3128724,4198:3061612,4199:3042519,4217:3040151,
    4218:3040569,4226:4212884,4227:3055899,4229:2972331,4233:3043234,4234:3121409,4274:4212909,4314:3052096,4319:2978109,4335:3051308,
    4351:3134353,4353:2975417,4381:2468609,4435:3049698,4454:3045523,4455:3049916,4464:3059989,4491:3046399,4574:2972515,4602:2975674,
    4651:3045260,4663:3068267,4666:3049899,4718:2983509,4741:4212989,4854:3052056,4866:3929630,4881:3916387,4892:3052587,4943:3912547,
    4950:3895856,4951:3115394,4958:16486,4973:3924365,4981:3925357,4983:3915416,4984:3918298,4985:3139925,4988:3128720,4993:3116164,
    4995:4045305,5000:3119195,5001:3117256,5008:3052897,5010:3127292,5012:3116365,5022:3121023,5024:3122449,5026:3128451,5032:3128452,
    5038:4036348,5045:3128429,5052:3912550,5076:3915381,5086:3051738,5089:3051381,5095:3051909,5096:3728262,5110:3115378,5111:4035019,
    5113:4036335,5119:3124679,5121:3123075,5122:3051439,5127:3115293,5133:3915486,5134:3046401,5137:3122899,5154:3122168,5171:3049290,
    5185:3128390,5189:4034949,5209:3139033,5230:3123052,5235:3047536,5248:3051926,5272:3975763,5284:3122976,5285:3120303,5323:3932442,
    5347:3916430,5374:3118892,5409:3050481,5536:3126246,5565:3116158,5695:3115255,5773:3047876,5781:3115928,5823:3127313,5844:4036133,
    5846:4047650,5848:4241372,5849:3917315,5850:4047365,5854:3924327,5857:4036131,5859:4047646,5870:3917792,5872:3126486,5880:3121410,
    5890:3925347,5892:4035538,5902:3917546,5906:3930086,5916:4039359,5917:4035004,5927:3121422,5937:3932905,5947:3916433,5955:3135321,
    5965:3932423,5967:3916148,5970:4037235,5973:3921690,5980:3886818,5985:3843945,5987:4048244,5995:4038441,6001:3127310,6011:4038524,
    6012:4037457,6018:3929924,6074:3912092,6083:4249087,6109:3917668,6126:4040980,6130:4040761,6136:3892775,6144:4035222,6149:3916945,
    6151:4045163,6181:4039253,6185:3120590,6202:3115349,6208:3048898,6233:3121378,6234:4411193,6271:3917914,6323:3125107,6395:4422214,
    6402:3917960,6421:3932430,6427:4061956,6528:3124084,6588:3126997,6598:3931391,6650:3150744,6659:4421446,6662:3144991,6665:4408854,
    6699:4424106,6768:4241479,6770:3915511,6783:4241463,6786:4241389,6790:4259545,6794:4262921,6797:4038941,6798:4241802,6801:4239993,
    6803:4360438,6804:4036378,6805:4240380,6806:4241985,6813:4242335,6814:4243160,6819:4035687,6820:4242214,6824:4258195,6826:4258595,
    6828:4239934,6843:4035115,6845:4035676,6847:4039050,6849:4035403,6850:4040774,6853:3930066,6865:4242557,6869:3911853,6870:4038818,
    6878:4241941,6885:3917612,6886:4046692,6895:4035793,6904:4040715,6918:4243315,6920:4242540,6926:3918003,6927:4050373,6931:4240631,
    6938:4240021,6943:4243537,6945:4360294,6951:4242873,6955:4052042,6956:4046522,6957:3916204,6963:4039358,6964:4036275,6970:4035426,
    6973:4039607,6984:4046676,6996:3928925,7002:3929645,7042:3917232,7045:3910544,7049:3886598,7050:3914151,7066:3916566,7075:4035020,
    7083:4035671,7090:4040655,7098:3895827,7106:3917849,7107:4040790,7131:3914240,7204:4039505,7210:3700815,7233:3886809,7404:3930298,
    7427:3916587,7436:4057082,7496:3929785,7523:4360310,7525:4241478,7526:4372016,7527:4241464,7528:4241457,7529:4245645,7530:4047836,
    7535:4239944,7536:4244049,7537:4362452,7538:4361259,7540:4239992,7543:4239996,7547:4374302,7551:4240455,7553:4360248,7554:4240023,
    7561:4241555,7562:4360797,7564:4362628,7565:4362630,7567:4371733,7568:4362504,7569:4258173,7571:4360939,7574:4241205,7585:4242546,
    7587:4361577,7588:4361579,7591:4362887,7594:4241416,7596:4372414,7599:4374033,7600:4361411,7601:4372485,7602:4039160,7603:4259499,
    7605:4034946,7606:4240600,7607:4240657,7608:4035886,7610:4383351,7611:4569173,7612:4043016,7670:4242433,7694:4372780,7716:4048228,
    7720:4035537,7741:4244732,7751:4373642,7757:4035656,7793:4242231,7794:4046530,7812:4360739,7828:4240472,7839:4360234,7842:4040612,
    7867:4239768,7891:4242392,7922:4243371,7943:4746079,7946:4034862,7956:4031033,8013:4245131,8025:3929914,8038:3957439,8041:4608362,
    8058:4820592,8110:4242355,8111:4243331,8112:4426502,8114:4362186,8116:4249836,8117:4249417,8118:4570409,8119:4361409,8121:4361432,
    8122:4427728,8123:4372071,8125:4243389,8126:4569587,8127:4241263,8129:4360238,8130:4361307,8131:4361050,8132:4373626,8134:4373678,
    8135:4567156,8136:4697815,8137:4426354,8138:4379399,8139:4361777,8140:4360306,8142:4360078,8143:4372019,8144:4361370,8145:4361372,
    8146:4569618,8147:4567096,8148:4426388,8150:4430737,8151:4567048,8153:4426891,8154:4241474,8155:4427366,8157:4250360,8159:4239086,
    8160:4240703,8162:4426875,8167:4248528,8168:4430191,8170:4361988,8171:4367175,8172:4367209,8174:4570674,8176:4689546,8177:4241374,
    8179:4567246,8180:4382466,8181:4241961,8182:4035526,8183:4361741,8188:4362921,8195:4243003,8197:4258248,8205:4361529,8208:4362748,
    8210:4360635,8211:4426475,8214:4361438,8219:4241410,8221:4362087,8223:4035693,8225:4361516,8227:4374045,8228:4569987,8230:4242431,
    8235:4027873,8253:4374187,8254:4367567,8255:4259308,8258:4428963,8259:4362081,8408:4360569,8414:3926231,8428:4260406,8435:4035912,
    8475:4248822,8484:4034779,8500:4379401,8523:4249624,8527:4401805,8536:4036146,8583:4250764,8676:4032473,8745:4247812,8800:4240603,
    8820:4274040,8885:4242558,8917:3676833,9220:4569609,9221:4429795,9222:4685035,9224:4362238,9225:4429013,9226:4429160,9227:4429202,
    9228:4685720,9229:4429084,9479:4430802,9480:4430539,9481:4428085,9482:4429086,9483:4361417,9484:4572680,9486:4428850,9487:4432620,
    9488:4430878,9489:4361426,9490:4565908,9493:4426515,9494:4686472,9497:4692590,9500:4688813,9501:4427095,9502:4366031,9504:4429022,
    9505:4431453,9506:4430871,9508:4428557,9509:4430807,9510:4428119,9512:4430388,9753:4426385,9754:4429025,9756:4429205,9757:4599739,
    9758:4432577,9997:4429615,9998:4240858,9999:4361418,10210:4372026,10212:4360086,10213:4428718,10214:4426553,10216:4427391,10220:4362523,
    10222:4362249,10223:4570561,10225:4426485,10227:4372505,10228:4257188,10229:4428331,10231:4426844,10232:4360761,10234:4362477,10235:4426386,
    10236:4385690,10444:4369863,10857:4259553,10858:5125287,10859:4430027,10871:4372096,10937:4372066,10955:4363538,10983:4259592,11008:4242519,
    11024:4879650,11077:4379410,11146:4361665,11201:4362018,11224:4239691,11231:4360199,11380:4363098,11447:4243475,'ARI':-16022,'ATL':-16001,
    'BAL':-16033,'BUF':-16002,'CAR':-16029,'CHI':-16003,'CIN':-16004,'CLE':-16005,'DAL':-16006,'DEN':-16007,'DET':-16008,'GB':-16009,
    'HOU':-16034,'IND':-16011,'JAX':-16030,'KC':-16012,'LAC':-16024,'LAR':-16014,'LV':-16013,'MIA':-16015,'MIN':-16016,'NE':-16017,
    'NO':-16018,'NYG':-16019,'NYJ':-16020,'PHI':-16021,'PIT':-16023,'SEA':-16026,'SF':-16025,'TB':-16027,'TEN':-16010,'WAS':-16028
  };

  if (id == 'obj') {
    return espnId;
  } else {
    var res = espnId[id];
    if (res == null){
      res = getKeyByValue(espnId,id);
    }
    return res;
  }

  // 2023 - Created by Ben Powers
  // ben.powers.creative@gmail.com

}

//------------------------------------------------------------------------
// FANTASY PROS ID - Provides Sleeper scripts with Fantasy Pros ID to match with Sleeper ID
function fantasyProsId(id){
  let fantasyProsId = { 17:9443,49:9534,59:9433,96:9001,345:9078,391:9549,421:9451,503:9232,533:9702,650:9491,
    829:9907,928:9902,947:9867,956:9872,1034:11410,1049:11174,1067:11215,1166:11177,1234:11180,1264:11465,
    1266:11345,1339:11689,1346:11599,1348:11818,1352:11610,1373:11687,1379:11798,1426:11606,1433:13274,1466:11594,
    1476:11821,1479:11616,1535:11613,1689:13429,1825:12128,1837:12208,1945:13029,1992:12126,2020:13731,2028:12092,
    2078:12127,2133:12123,2161:12209,2197:12122,2216:12119,2251:12095,2306:13891,2309:13894,2319:13897,2320:13903,
    2325:13969,2359:13924,2374:13971,2399:13977,2449:13981,2460:14084,2505:14104,2711:13932,2747:14003,2749:14338,
    2750:14103,3161:15520,3163:15501,3164:15498,3198:15514,3199:15528,3200:15569,3202:15581,3214:15561,3225:15547,
    3242:15637,3257:15642,3269:15654,3271:15623,3286:15665,3294:15600,3321:15802,3423:15688,3451:15756,3634:16081,
    3664:16230,3678:16026,3969:16378,4017:16398,4018:16420,4029:16374,4033:16399,4034:16393,4035:16421,4036:16385,
    4037:16406,4039:16433,4040:16427,4046:16413,4054:16579,4055:16380,4066:16411,4068:16377,4080:16431,4082:16434,
    4089:16459,4098:16425,4111:16407,4137:16447,4144:16460,4147:16423,4149:16424,4171:16439,4177:16489,4195:16540,
    4197:16604,4198:16666,4199:16673,4217:16499,4227:16712,4233:16548,4234:16443,4351:16556,4381:17115,4454:17066,
    4455:17058,4464:16726,4602:16502,4651:16446,4663:16483,4666:16910,4741:17143,4866:17240,4881:17233,4892:17237,
    4943:17236,4950:17268,4951:17292,4958:12378,4973:17283,4981:17258,4983:17265,4984:17298,4985:17308,4988:17246,
    4993:17272,5000:17496,5001:17349,5008:17508,5010:18049,5012:17269,5022:17270,5026:17261,5032:17415,5038:17259,
    5045:17253,5052:17243,5086:17528,5089:17447,5095:17420,5110:17606,5113:17262,5119:17533,5121:17289,5122:17612,
    5131:17300,5133:17598,5137:17303,5154:17888,5185:17301,5189:17575,5209:17813,5230:17693,5248:17687,5272:17647,
    5284:18026,5323:17307,5347:17297,5374:17603,5536:18037,5823:18670,5844:18290,5846:18219,5848:18226,5849:18600,
    5850:18269,5857:17527,5859:18218,5870:18232,5872:18244,5880:18463,5890:18230,5892:18239,5906:18631,5916:18588,
    5917:18587,5927:18466,5937:18615,5947:18598,5955:18345,5967:18705,5970:18585,5973:18487,5980:17251,5985:18397,
    5987:18621,5995:18256,6011:18562,6012:18616,6074:18835,6083:18545,6126:18610,6130:18280,6136:18604,6144:18607,
    6149:18706,6151:18283,6208:18672,6234:18876,6271:18864,6421:18941,6427:18656,6528:19028,6598:18726,6650:19058,
    6659:19074,6665:18831,6694:19111,6768:19198,6770:19196,6783:19201,6786:19202,6790:19210,6794:19236,6797:18635,
    6798:19219,6801:19211,6803:19252,6804:19246,6805:19267,6806:19245,6813:19217,6814:19221,6819:19278,6820:19325,
    6824:19298,6826:19229,6828:19358,6843:18246,6845:19263,6847:19270,6850:19389,6853:19483,6865:19372,6869:19423,
    6878:19366,6885:19351,6886:18627,6895:19396,6904:19275,6918:19449,6920:19375,6927:19715,6931:19521,6938:19268,
    6943:19398,6945:19624,6951:19361,6955:19631,6984:19482,6989:19505,6996:19627,7002:19562,7021:19647,7042:19760,
    7045:19445,7049:19590,7050:19456,7066:19708,7083:19297,7090:19810,7131:17635,7496:19747,7523:19780,7525:19222,
    7526:19790,7527:20156,7528:19302,7529:23293,7538:22679,7543:19231,7547:19799,7551:20097,7553:20164,7561:22813,
    7562:20126,7564:19788,7565:23242,7567:23310,7568:20162,7569:20130,7571:19794,7587:20113,7588:22739,7591:19781,
    7593:19425,7594:19792,7596:20114,7600:20163,7601:19796,7602:22841,7603:20127,7605:19800,7606:20119,7607:22728,
    7608:22763,7610:20082,7611:22726,7612:22785,7670:22845,7694:22795,7716:22833,7720:23249,7741:19368,7757:22843,
    7794:22797,7828:19539,7839:23297,7891:23341,7922:23370,8110:22718,8111:23181,8112:23163,8116:24173,8117:23770,
    8118:23108,8119:23101,8121:23794,8122:24901,8123:23798,8125:23739,8126:22985,8129:22947,8130:22936,8131:23781,
    8132:24172,8134:23748,8135:22905,8136:23891,8137:22963,8138:22958,8139:20095,8140:19798,8142:23791,8143:22921,
    8144:20111,8145:23742,8146:23072,8147:22895,8148:23677,8150:23059,8151:23021,8153:23143,8154:20094,8155:22982,
    8157:24027,8159:20080,8160:22722,8161:23499,8162:23045,8167:23886,8168:23905,8170:23174,8171:23896,8172:23153,
    8174:23117,8179:23027,8183:19797,8188:22913,8197:22971,8205:24333,8210:23982,8211:22992,8214:23727,8219:23829,
    8221:23162,8223:24214,8225:24238,8228:24209,8230:19471,8235:23883,8255:20100,8258:24549,8259:23901,8408:22969,
    8536:24588,8676:24687,8800:24205,9220:25325,9221:22968,9222:23122,9224:25324,9225:22908,9226:23136,9227:24352,
    9228:22900,9229:24347,9479:22967,9480:25345,9481:25282,9482:23056,9483:25347,9484:25298,9486:24354,9487:23106,
    9488:23070,9489:24083,9490:25442,9492:25331,9493:23180,9494:23080,9497:25251,9500:24706,9502:25361,9504:22989,
    9505:22984,9506:23679,9508:25323,9509:23133,9512:25265,9753:23152,9754:23123,9756:23107,9757:24360,9758:23071,
    9997:22916,9998:24332,9999:22987,10210:24331,10213:25337,10216:25329,10218:25332,10219:22986,10222:23020,10223:23075,
    10225:23030,10226:25335,10228:25336,10229:23113,10231:23119,10232:25333,10235:25322,10236:25247,10444:25287,10859:22978,
    10863:24353,10870:25770,10871:25267,10937:24009,10955:25354,11008:25465,11145:25616,'ARI':8000,'ATL':8010,'BAL':8020,
    'BUF':8030,'CAR':8040,'CHI':8050,'CIN':8060,'CLE':8070,'DAL':8080,'DEN':8090,'DET':8100,'GB':8110,'HOU':8120,
    'IND':8130,'JAX':8140,'KC':8150,'LAC':8250,'LAR':8280,'LV':8220,'MIA':8160,'MIN':8170,'NE':8180,'NO':8190,
    'NYG':8200,'NYJ':8210,'PHI':8230,'PIT':8240,'SEA':8260,'SF':8270,'TB':8290,'TEN':8300,'WAS':8310
  }

  if (id == 'obj') {
    return fantasyProsId;
  } else {
    var res = fantasyProsId[id];
    if (res == null){
      res = getKeyByValue(fantasyProsId,id);
    }
    return res;
  }
  
  // 2023 - Created by Ben Powers
  // ben.powers.creative@gmail.com

}
