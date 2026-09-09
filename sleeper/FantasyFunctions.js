/** /** FANTASY FUNCTIONS - 12.04.2025
 * 
 * Key Function List:
 * 
 * sleeperScoring(ppr) - Sleeper formatted scoring object with PPR input
 * 
 * sleeperScoringSpecific(leagueId) - Sleeper formatted scoring object based on league ID input
 * 
 * seasonInfo(query) - input of 'year', 'week', or 'display_week' (or null) to output desired query; outputs [year,week] if null
 * 
 * sleeperLeagueInfo(league,info) - 'info' can be provided as a single value or array to return any or all of the information:'name','status','teams','completed_weeks','divisions','starters','starters_indexed','roster','roster_indexed','scoring','managers','usernames','usernames_by_roster','roster_ids','rostered_players','rosters_by_roster','rosters_by_manager','fpts','fpts_by_roster','fpts_against','fpts_against_by_roster','fpts_per_game','fpts_per_game_by_roster','fpts_against_per_game','fpts_against_per_game_by_roster','record','record_by_roster','record_array','record_array_by_roster','streak','streak_by_roster','usernames_by_manager','season','scoring_type','starter_size','bench_size','draft','picks_object','picks','picks_by_roster','picks_by_user','picks_array','playoff_teams','playoff_start', 'playoff_byes';
 * 
 * leagueByes(league) - gives count of byes in league playoffs (winners_bracket)
 * 
 * sleeperLeagueMembers(league) - simply gives a numerical value of the total teams per league
 * 
 * sleeperDisplayName(id,external) - Retrieves display name for a member based on ID provided, first checks for script properties, then fetches remotely
 * 
 * sleeperIdByName(id) - Function to first try fetching from script properties, then from an API pull
 * 
 * sleeperPlayerImport(fantasyProsIds,ESPN_TO_SLEEPER_ID) - import Sleeper players and data points for spreadsheet use
 * 
 * sleeperScoreObject(year,week,league,partial) - Function to pull down players' scoring for a week in Sleeper (returns OBJECT with format player_id:points scored)
 * 
 * sleeperScoreRecord(year,week,altLeague,complete) - Function to take inputted JSON values and recording
 * 
 * sleeperScoreCalculations(sheet) - Takes in all data from scoring and from stats fetch to calculate values for player metrics ('SUM','MIN','MAX','AVG','STDEV','CONST','SPLIT','AVG_5','AVG_3')
 * 
 * sleeperScoreBaselines(scoring,players) - Gathers all the highest scores per position for evaluating when a player meets or exceeds their position groups' performances
 * 
 * sleeperADPImport(year,backedUp) - Pulls in and places ADP information current from Sleeper for all positions in "positions" array
 * 
 * sleeperADPBackup() - Grabs most recent ADP sheet and adds a numeric suffix, shifts all other numeric suffixes by 1
 * 
 * sleeperExistingTableData(sheetname) - Pulls a table based on input name and then outputs an object; Requires that there are week values (1,2,3,etc.) as well as other headers and an ID column
 * 
 * sleeperLeagueOverview(league,abbrev,regularSeasonOnly,specificLeague) - 
 * 
 * sleeperPlayoffData(league,week,year) - Grabs winners and loser brackets and creates an array output of the outcomes of all games and if available, the rank each team finished with; Format: {<team_id>:{"record":[<array>],"rank":<place>},...}
 * 
 * sleeperADPImport() - Gathers ADP (for preseason / drafting) of all players in Sleeper
 * 
 * sleeperTrending() - Gathers all trending players
 * 
 * sleeperMatchup(year,week,specificLeague) - All matchup data for the provided leagues (in code) for the specified year/week; also provide abbreviation for one of the leagueIdsAll to selectively import one league
 * 
 * sleeperStats() - All matchup data for the provided league (in code) for the specified year/week(s) (arr)
 * 
 * sleeperStatsLogging() - Writes data from sleeperStats function from and object to a table within the sheet / no color formatting - for lookups
 * 
 * sleeperSeasonStatsLogging(startYear, endYear, maxWeek) - Aggregates season totals across multiple years and writes to sheet
 * 
 * sleeperStatsPrompt() - prompts the user for a year and week(s) for which to gather statistics, then loops through the given weeks
 * 
 * sleeperSeasonStatsPrompt() - Prompt function to fetch inputs: start year, end year, and max week.
 * 
 * sleeperWeeklyNFL(year,week,query) - Gathers all matchups for a given week of a certain type; Queries: 'all','matchups','count','not_pre_game','remaining','active','complete' (complete is default);
 * 
 * sleeperNFL(year,query) - Gathers all matchups of a certain type; Queries: 'all','matchups','count','not_pre_game','remaining','active','complete' (complete is default);
 * 
 * sleeperTransactions(league, week) - Gathers all transaction data for a league for a given week
 * 
 * sleeperTransactionsRecord(league,week) - records gathered transactions
 * 
 * sleeperPriorLeague(league) - Reports the prior season to the current season of a specific league 
 * 
 * sleeperKeeperStatus(league) - Returns the players from the most recent draft and the number of years they've been kept (0 = no kept seasons but drafted in the prior)
 * 
 * sleeperAvailableKeepers(league) - Provides reduced sleeperKeeperStatus object with only free agents
 * 
 * sleeperLoops(leagueId,abbrev,year,week) - L.O.O.P.S. - Lineup Opportunities Over Projected Starters; Iterates over each week's starters and possible tweaks to provide an understanding of where outcomes could have been different
 * 
 * sleeperPlayerMatchingObject() - Returns object of Sleeper players based on an array (pre-defined) that is then in object format of Pos { Team { Last { First:Id}}}
 * 
 * sleeperPlayerSimpleObject() - Returns an object with key sets of {last_name, first_name, id, pos, team}
 * 
 * PROJECTIONS
 * 
 * projectionLoggingAll()
 * 
 * projectionLogging(platform,ppr,year,week,)
 * 
 * sleeperSeasonProjections()
 * 
 * sleeperRestOfSeasonProjections()
 * 
 * sleeperRestOfSeasonSumming(week,endWeek)
 * 
 * sleeperProjectionFetch(ppr,year,week)
 * 
 * sleeperProjectionFetchGeneric(format,year,week)
 * 
 * OTHER PLATFORM PROJECTION FETCHING
 * 
 * espnProjectionFetch(ppr,year,week)
 * 
 * fantasyProsWeeklyProjections(details) - normally just provides projections, but "details" being present gives matching and other info as part of object 
 * 
 * fanduelProjectionFetch(justPoints) - Input to return additional object details but "justPoints" is triggered by default to return player IDs with matching points
 * 
 * ESPN =================================================================================
 * 
 * current(query) - input of 'year', 'week', or 'weeks' (or null) to output desired query by referencing spreadsheet first, then pulls ESPN API if needed
 * 
 * yearWeekFetch() - grabs ESPN 'year','week','weeks' and records them, returns them as an array ['year','week','weeks']
 * 
 * fetchTeamsESPN() - fetches the NFL teams' data in an array of objects that also has schedule data
 * 
 * nflByeWeeksESPN() - returns object in the format: {"IND":14,"KC":6,"LV":10, ... ,"GB":10,"TEN":5}
 * 
 * nflDataESPN() - ESPN DATA For Fetching object of notable values
 * 
 * nflDataFullESPN() - ESPN DATA For Fetching object of notable values
 * 
 * nflOverviewSheetESPN(year) - creates a simple sheet of ID, ABBR, LOCATION, MASCOT, and BYE with named ranges in the spreadsheet
 *  
 * nflOverviewMatchupSheetESPN(year) - creates a more complex sheet for NFL scheduling of ABBR, ID (ESPN), LOCATION, MASCOT, FULL NAME, BYE WEEK, and all weekly matchups as a table
 * 
 * nflBettingLines() - fetches betting lines array from object for the current week, using ESPN API for scoreboard
 * 
 * nflBettingLinesRecord() - takes input from nflBettingLines() and records to sheet
 * 
 * searchAolForIdESPN(input) - outputs ID from top search result (hopefully ESPN) if player name is the 'input'
 * 
 * FANTASY PROS FUNCTIONS =================================================================================
 * 
 * fantasyProsUrl(type, position, format)
 * 
 * fetchFantasyProsObjects()
 * 
 * fantasyProsObject(url,request)
 * 
 * fantasyProsLookupMaps(fantasyProsPlayers)
 * 
 * fantasyProsPlayerMatch(searchPlayer, lookupMaps, details)
 * 
 * fantasyProsMatchupFetch(NAMES_TO_SLEEPER_ID,format)
 * 
 * fantasyProsMatchupLogging(NAMES_TO_SLEEPER_ID)
 * 
 * fantasyProsPointsAllowed()
 * 
 * fantasyProsPointsAllowedLogging()
 * 
 * FANTASY CALC =====================================================================================
 * 
 * fantasyCalcFetchData()
 * 
 * fantasyCalcUpdateAllValues() 
 * 
 * HARRIS FOOTBALL FUNCTIONS =================================================================================
 * 
 * harrisRanksImport(format)
 * 
 * harrisRanks(NAMES_TO_SLEEPER_ID)
 * 
 * harrisHalfDraft(NAMES_TO_SLEEPER_ID)
 * 
 * DRAFT KICK FUNCTIONS ===========================================================================
 * 
 * function draftKickDump() - runs through both Offense and Defense of the CSV content and records them all
 * 
 * draftKickWrite(pos,ss) - records the CSV file to a sheet with the uppercase, three-letter start to the position group, assigns a named range for the headers and content
 * 
 * draftKickPull(positionGroup) - gets the csv for the respective position groups
 * 
 * draftKickParseCsv(content) - joins all the content (provide either defense or offense) and creates a usable JSON object of key/value pairs for each player/defense
 * 
 * FIRST DOWN STUDIO FUNCTIONS =======================================================================
 * 
 * firstDownProjectionFetch(ppr) - fetches object of player projections for QB, RB, WR, TE from FirstDown.Studio, only available after Wednesday evening, usually; provide 0, 0.5, or 1 as input to get specific ppr format
 * 
 *  */

const sleeperBaseURL = 'https://api.sleeper.app/';
const sleeperSeasonSchedule = 'https://api.sleeper.com/schedule/nfl/regular/';
const adpHeaders = ['player_id','full_name','last_name','first_name','position','team','adp_std','adp_half_ppr','adp_ppr','adp_2qb','pts_std','pts_half_ppr','pts_ppr',
                'pass_yd','pass_td','pass_2pt','pass_att','pass_cmp','pass_fd','cmp_pct', // passing
                'rush_yd','rush_td','rush_2pt','rush_att','rush_fd', // rushing
                'rec_yd','rec_td','rec_2pt','rec','rec_fd','rec_0_4','rec_5_9','rec_10_19','rec_20_29','rec_30_39','rec_40p','bonus_rec_rb','bonus_rec_wr','bonus_rec_te', // receiving
                'yds_allow_0_100','safe','sack','pts_allow_0','pass_int_td','int','fum_rec','def_fum_td','blk_kick', // defense
                'fum_lost']; // 'gp','adp_idp','adp_rookie','adp_dynasty_std','adp_dynasty_ppr','adp_dynasty_half_ppr','adp_dynasty_2qb','adp_dynasty'];


/**
ADDITIONAL ENDPOINTS
https://api.sleeper.com/players/nfl
https://api.sleeper.com/stats/nfl/2023?season_type=regular&position=TEAM&order_by=
https://api.sleeper.com/stats/nfl/2023?season_type=regular&position=DEF&order_by=fan_pts_allow
https://api.sleeper.com/stats/nfl/2023?season_type=regular&position[]=TEAM&order_by=pts_half
https://api.sleeper.com/schedule/nfl/regular/2023


var url = 'https://api.sleeper.app/stats/nfl/2023?season_type=regular&position=DEF&order_by=fan_pts_allow'
var url2 = 'https://api.sleeper.app/stats/nfl/2023?season_type=regular&position[]=TEAM&order_by=pts_half_ppr'
var url3 = 'https://api.sleeper.app/projections/nfl/2023/2?season_type=regular&position[]=DEF&position[]=FLEX&position[]=QB&position[]=RB&position[]=TE&position[]=WR&order_by=half_ppr'
var url4 = 'https://api.sleeper.app/stats/nfl/2023/2?season_type=regular&position[]=DEF&position[]=FLEX&position[]=QB&position[]=RB&position[]=TE&position[]=WR&order_by=pts_ppr'
var url5 = 'https://api.sleeper.app/projections/nfl/2023/2?season_type=regular&position[]=DEF&position[]=FLEX&position[]=QB&position[]=RB&position[]=TE&position[]=WR&order_by=half_ppr'
var url6 = 'https://sleeper.app/graphql'
*/

//------------------------------------------------------------------------
// LEAGUE SCORING - Sleeper formatted scoring object with PPR input
function sleeperScoring(ppr) {
  ppr = (ppr == 1.0 || ppr == 0.5 || ppr == 0.0) ? ppr : ppr === 'PPR' ? 1.0 : ppr === 'HALF' ? 0.5 : ppr === 'STANDARD' ? 0.0 : 0.5
  return {
  "sack": 1,
  "pass_int": -2,
  "pass_2pt": 2,
  "st_td": 6,
  "rec_td": 6,
  "fgm_30_39": 3,
  "xpmiss": -1,
  "rush_td": 6,
  "rec_2pt": 2,
  "st_fum_rec": 1,
  "fgmiss": -1,
  "ff": 1,
  "rec": ppr, // MODIFIED BASED ON INPUT
  "int": 2,
  "fum_lost": -2,
  "pts_allow_1_6": 7,
  "xpm": 1,
  "rush_2pt": 2,
  "fum_rec": 2,
  "def_st_td": 6,
  "fgm_50p": 5,
  "def_td": 6,
  "safe": 2,
  "pass_yd": 0.05, // FUTURE MODIFICATION OPTION
  "blk_kick": 2,
  "pass_td": 4,
  "rush_yd": 0.1,
  "fum": 0,
  "pts_allow_0": 10,
  "pts_allow_7_13": 4,
  "pts_allow_14_20": 1,
  "pts_allow_21_27": 0,
  "pts_allow_28_34": -1,
  "pts_allow_35p": -3,
  "def_st_fum_rec": 1,
  "fgm_0_19": 3,
  "fgm_20_29": 3,
  "fgm_40_49": 4,
  "fum_rec_td": 6,
  "rec_yd": 0.1,
  "def_st_ff": 1,
  "st_ff": 1
  };
}

function sleeperScoringSpecific(leagueId) {
  if (leagueId) {
    try {
      leagueId = String(leagueId).trim();
      const obj = JSON.parse(UrlFetchApp.fetch(`${sleeperBaseURL}v1/league/${leagueId.trim()}`));
      if (obj) {
        Logger.log(`✅ Successfully fetched scoring parameters for league ID "${leagueId}"`);
        return obj.scoring_settings;
      } else {
        Logger.log(`⚠️ Failed to fetch for league ID "${leagueId}" provided, returning generic scoring object`);   
      }
    } catch (err) {
      Logger.log(`⚠️ Issue fetching league information with league ID "${leagueId} provided, returning generic scoring object`);
    }
  } else {
    Logger.log(`🚫 No league ID provided, returning generic scoring object`);
  }
  return sleeperScoring();
}

//------------------------------------------------------------------------
// SEASON INFO - Function to quickly fetch year or week (or both) from the Sleeper API
function seasonInfo(query){
  let urlText = UrlFetchApp.fetch(`${sleeperBaseURL}v1/state/nfl`).getContentText();
  let obj = JSON.parse(urlText);
  let year = obj['season'];
  let week = obj['week'];
  let display_week = obj['display_week'];
  // Logger.log(JSON.stringify(obj));
  if (query == 'year') { 
    // Logger.log(year);
    return parseInt(year);
  } else if (query == 'week'){
    // Logger.log(week);
    return parseInt(week);
  } else if (query == 'display_week'){
    // Logger.log(display_week);
    return parseInt(display_week);
  } else {
    // Logger.log([parseInt(year),parseInt(week)])
    return [year,week,display_week];
  }
}

//------------------------------------------------------------------------
// LEAGUE INFO - Pulls league information to give an array of the non-indexed roster based on the most recent draft for a league
// Provide league ID (or object) and also give single value or array of the following to return an array of the information desired: 'name','status','teams','completed_weeks','divisions','starters','starters_indexed','roster','roster_indexed','scoring','managers','usernames','usernames_by_roster','roster_ids','rostered_players','rosters_by_roster','rosters_by_manager','fpts','fpts_by_roster','fpts_against','fpts_against_by_roster','fpts_per_game','fpts_per_game_by_roster','fpts_against_per_game','fpts_against_per_game_by_roster','record','record_by_roster','record_array','record_array_by_roster','streak','streak_by_roster','usernames_by_manager','season','scoring_type','starter_size','bench_size','draft','picks_object','picks','picks_by_roster','picks_by_user','picks_array','playoff_teams','playoff_start', 'playoff_byes', 'league_average_match';
function sleeperLeagueInfo(league,info) {
  const leagueURL = `${sleeperBaseURL}v1/league/${league}`;
  const rostersURL = leagueURL + '/rosters';
  const draftsURL = leagueURL + '/drafts';
  let picksURL = `${sleeperBaseURL}v1/draft/`;
  const perGame = new RegExp(/_per_game/,'g');

  if(typeof league != 'string') {
      return ('Enter league id as a string, then declare fetch request as array as second variable');
  } else {
    if (typeof info != 'array' && typeof info != 'object') {
      info = [info];
    }
    let results = {}; // Object to return
    let leagueObj = {}, rostersObj = {}, picksObj = {}, draftObj = {}, usernamesObj = {};
    try {
      leagueObj = JSON.parse(UrlFetchApp.fetch(leagueURL));
    } catch (err) {
      return ('Invalid input, no league data fetched, enter league ID as a string');
    }
    const ids = Array.from({length : leagueObj.total_rosters}, (_,v) => v + 1);
    const completed_weeks = parseInt(leagueObj.settings.last_scored_leg);
    const needRosters = ['usernames_by_roster','rostered_players','rosters_by_roster','rosters_by_manager','fpts','fpts_by_roster','fpts_against','fpts_against_by_roster','fpts_per_game','fpts_per_game_by_roster','fpts_against_per_game','fpts_against_per_game_by_roster','record','record_by_roster','record_array','record_array_by_roster','streak','streak_by_roster'];
    const needPicks = ['picks_object','picks','picks_by_roster','picks_by_user','picks_array','scoring_type'];
    const needUsernames = ['usernames','usernames_by_roster','usernames_by_manager'];
    const needDraft = ['draft','managers','scoring_type'].concat(needUsernames,needPicks);

    for (let a = 0; a < info.length; a++){
      // Fetch rosters API info if needed
      if (needRosters.indexOf(info[a]) >= 0 && Object.keys(rostersObj).length === 0) {
        rostersObj = JSON.parse(UrlFetchApp.fetch(rostersURL));
      }
      
      // Draft API info needed
      if (needDraft.indexOf(info[a]) >= 0 && Object.keys(draftObj).length === 0) {
        draftObj = {'start_time':0};
        draftsObj = {};
        try {
          draftsObj = JSON.parse(UrlFetchApp.fetch(draftsURL));
        } catch (err) {
          return ('No drafts for league indicated, change request to avoid draft information (\"picks\",\"picks_by_roster\",\"picks_by_user\",\"picks_array\",\"scoring_type\")');
        }
        if (draftsObj.length > 1) {
          for (let b = 0; b < fullDraftsObj.length; b++) {
            draftsObj[b].start_time > draftObj.start_time ? draftObj = draftsObj[b] : null;
          }
        } else {
          draftObj = draftsObj[0];
        }
      }
      if (needUsernames.indexOf(info[a]) >= 0 && Object.keys(usernamesObj).length === 0) {
        for (let id in draftObj.draft_order) {
          try {
            let user = JSON.parse(UrlFetchApp.fetch(`${sleeperBaseURL}v1/user/${id}`))['username'];
            usernamesObj[id] = user;
          } catch (err) {
            return ('No information for user ID indicated, ' + id);
          }
        }
      }

      // Fetch picks API info if needed
      if (needPicks.indexOf(info[a]) >= 0 && Object.keys(picksObj).length === 0) {
        picksObj = JSON.parse(UrlFetchApp.fetch(`${picksURL}${draftObj.draft_id}/picks`));
      }
      
      // Large conditional check for which value to return (could be changed to "switch" programming)
      if (info[a] == 'starters' || info[a] == 'starters_indexed') {
        let starters = leagueObj.roster_positions.filter(x => x != 'BN');
        if (info[a] == 'starters_indexed') {
          let index = 1;
          let indexed = [];
          for (let c = 0; c < starters.length; c++) {
            indexed[c] = starters[c] != 'BN' ? starters[c]+index : starters[c];
            starters[c] == starters[c+1] ? index++ : index = 1;            
          }
          results[info[a]] = indexed;
        } else {
          results[info[a]] = starters;
        }
      } else if (info[a] == 'roster' || info[a] == 'roster_indexed') {
        let reserve = 0;
        try {
          reserve = leagueObj.settings.reserve_slots;
        } catch (err) {
          // No reserve slots indicated
        }
        let roster = (leagueObj.roster_positions).concat(Array(reserve).fill('IR'));
        if (info[a] == 'roster_indexed') {
          let index = 1;
          let indexed = [];
          for (let c = 0; c < roster.length; c++) {
            indexed[c] = roster[c]+index;
            //indexed[c] = roster[c] != 'BN' ? roster[c]+index : roster[c]; // Alternative if preferred no bench numbering
            roster[c] == roster[c+1] ? index++ : index = 1;
          }
          results[info[a]] = indexed;
        } else {
          results[info[a]] = roster;
        }
      } else if (info[a] == 'divisions') {
        let divisions = {};
        try {
          let meta = leagueObj.metadata;
          for (let key in meta) {
            key.match(/division\_[0-9]{1,3}/) ? divisions[parseInt(key.replace(/division\_/g, ''))] = meta[key] : null
          }
        } catch (err) {
          // No divisions found
        }
        results[info[a]] = divisions;
      } else if (info[a] == 'playoff_teams') {
        results[info[a]] = leagueObj.settings.playoff_teams;
      } else if (info[a] == 'playoff_start') {
        results[info[a]] = leagueObj.settings.playoff_week_start;
      } else if (info[a] == 'playoff_byes') {
        results[info[a]] = leagueByes(league);
      } else if (info[a] == 'league_average_match') {
        results[info[a]] = leagueObj.settings.league_average_match == 1;
      } else if (info[a] == 'scoring') {
        results[info[a]] = leagueObj.scoring_settings;
      } else if (info[a] == 'starter_size') {
        results[info[a]] = leagueObj.roster_positions.filter(x => x != 'BN').length;
      } else if (info[a] == 'bench_size') {
        results[info[a]] = leagueObj.roster_positions.filter(x => x == 'BN').length;
      } else if (info[a] == 'managers') {
        let managers = [];
        for (let key in draftObj.draft_order) {
          managers.push(key);
        }
        results.managers = managers;
      } else if (info[a] == 'usernames') {
        let users = [];
        for (let key in draftObj.draft_order) {
          try {
            const obj = JSON.parse(UrlFetchApp.fetch(`${sleeperBaseURL}v1/user/${key}`));
            const user = obj.username;
            users[key] = user;
          } catch (err) {
            return ('No information for user ID indicated, ' + key);
          }
        }
        results.usernames = users;                
      } else if (info[a] == 'usernames_by_manager') {
        results[info[a]] = usernamesObj;
      } else if (info[a] == 'roster_ids') {
        results[info[a]] = ids;
      } else if (info[a] == 'rostered_players') {
        results[info[a]] = rostersObj.map(x => x.players).flat();
      } else if (info[a] == 'rosters_by_roster') {
        results[info[a]] = rostersObj.reduce((obj, key) => ({ ...obj, [key.roster_id]: key.players }), {});
      } else if (info[a] == 'rosters_by_manager') {
        results[info[a]] = rostersObj.reduce((obj, key) => ({ ...obj, [key.owner_id]: key.players }), {});
      } else if (info[a] == 'usernames_by_roster') {
        let usernames = {};
        Object.keys(usernamesObj).forEach(key => {
          usernames[rostersObj.filter(x => x.owner_id == key)[0].roster_id] = usernamesObj[key];
        });
        results[info[a]] = usernames;
      } else if (info[a] == 'teams') {
        results[info[a]] = leagueObj.total_rosters;
      } else if (info[a] == 'name') {
        results[info[a]] = leagueObj.name;
      } else if (info[a] == 'status') {
        results[info[a]] = leagueObj.status;        
      } else if (info[a] == 'season') {
        results[info[a]] = leagueObj.season;
      } else if (info[a] == 'completed_weeks') {
         results[info[a]] = completed_weeks;
      } else if (info[a] == 'fpts' || info[a] == 'fpts_against' || info[a] == 'fpts_per_game' || info[a] == 'fpts_against_per_game') {
        const divisor = perGame.test(info[a]) ? completed_weeks : 1;
        let arr = [];
        for (let c = 0; c < rostersObj.length; c++) {
          arr.push(parseFloat(((rostersObj[c].settings[info[a].replace('_per_game','')] + '.' + rostersObj[c].settings[info[a].replace('_per_game','') + '_decimal'])/divisor).toFixed(2)));
        }
        results[info[a]] = arr;
      } else if (info[a] == 'fpts_by_roster' || info[a] == 'fpts_against_by_roster' || info[a] == 'fpts_per_game_by_roster' || info[a] == 'fpts_against_per_game_by_roster') {
        const divisor = perGame.test(info[a]) ? completed_weeks : 1;
        let obj = {};
        for (let c = 0; c < rostersObj.length; c++) {
          obj[ids[c]] = parseFloat(((rostersObj[c].settings[info[a].replace('_per_game','').replace('_by_roster','')] + '.' + rostersObj[c].settings[info[a].replace('_per_game','').replace('_by_roster','') + '_decimal'])/divisor).toFixed(2));
        }
        results[info[a]] = obj;
      } else if (info[a] == 'record') {
        let arr = [];
        for (let c = 0; c < rostersObj.length; c++) {
          arr.push(rostersObj[c].metadata.record);
        }
        results[info[a]] = arr;
      } else if (info[a] == 'record_by_roster') {
        let obj = {};
        for (let c = 0; c < rostersObj.length; c++) {
          obj[ids[c]] = rostersObj[c].metadata.record;
        }
        results[info[a]] = obj;
      } else if (info[a] == 'record_array') {
        let arr = [];
        for (let c = 0; c < rostersObj.length; c++) {
          arr.push([rostersObj[c].settings.wins,rostersObj[c].settings.losses,rostersObj[c].settings.ties]);
        }
        results[info[a]] = arr;
      } else if (info[a] == 'record_array_by_roster') {
        let obj = {};
        for (let c = 0; c < rostersObj.length; c++) {
          obj[ids[c]] = [rostersObj[c].settings.wins,rostersObj[c].settings.losses,rostersObj[c].settings.ties];
        }
        results[info[a]] = obj;
      } else if (info[a] == 'streak') {
        let arr = [];
        for (let c = 0; c < rostersObj.length; c++) {
          arr.push(rostersObj[c].metadata.streak);
        }
        results[info[a]] = arr;
      } else if (info[a] == 'streak_by_roster') {
        let obj = {};
        for (let c = 0; c < rostersObj.length; c++) {
          obj[ids[c]] = rostersObj[c].metadata.streak;
        }
        results[info[a]] = obj;
      } else if (info[a] == 'draft') {
        results[info[a]] = draftObj;
      } else if (info[a] == 'draft_id') {
        results[info[a]] = draftObj.draft_id;
      } else if (info[a] == 'scoring_type') {
        results[info[a]] = draftObj.metadata.scoring_type;
      } else if (info[a] == 'picks_object' || info[a] == 'picks' || info[a] == 'picks_by_roster' || info[a] == 'picks_by_user' || info[a] == 'picks_array' || info[a] == 'scoring_type') {
        if (info[a] == 'picks_object') {
          results[info[a]] = picksObj;
        } else if (info[a] == 'picks') {
          let arr = [];
          for (let c = 0; c < picksObj.length; c++) {
            arr.push(picksObj[c].metadata.player_id);
          }
          results[info[a]] = arr;
        } else if (info[a] == 'picks_by_roster') {
          let rosters = {};
          for (let c = 0; c < picksObj.length; c++) {
            rosters[picksObj[c].roster_id] == undefined ? rosters[picksObj[c].roster_id] = [] : null
            rosters[picksObj[c].roster_id].push(picksObj[c].metadata.player_id);
          }
          results[info[a]] = rosters;             
        } else if (info[a] == 'picks_by_user') {
          let rosters = {};
          for (let c = 0; c < picksObj.length; c++) {
            rosters[picksObj[c].picked_by] == undefined ? rosters[picksObj[c].picked_by] = [] : null
            rosters[picksObj[c].picked_by].push(picksObj[c].metadata.player_id);
          }
          results[info[a]] = rosters;
        } else if (info[a] == 'picks_array') {
          let round = [];
          let all = [];
          for (let c = 0; c < picksObj.length; c++) {
            round.push(picksObj[c].metadata.player_id);
            if (picksObj[c].round > 1) {
              if (picksObj[c].round > picksObj[c-1].round) {
                all.push(round);
                round = [];
              }
            }
          }
          results[info[a]] = all;          
        }
      } else {
        results[info[a]] == 'INVALID REQUEST';
      }
    }
    if (Object.keys(results).length == 0) {
      return (`No values found based on user input, use one or more of the following: 'name','status','teams','completed_weeks','divisions','starters','starters_indexed','roster','roster_indexed','scoring','managers','usernames','usernames_by_roster','roster_ids','rostered_players','rosters_by_roster','rosters_by_manager','fpts','fpts_by_roster','fpts_against','fpts_against_by_roster','fpts_per_game','fpts_per_game_by_roster','fpts_against_per_game','fpts_against_per_game_by_roster','record','record_by_roster','record_array','record_array_by_roster','streak','streak_by_roster','usernames_by_manager','season','scoring_type','starter_size','bench_size','draft','picks_object','picks','picks_by_roster','picks_by_user','picks_array','playoff_teams','playoff_start','playoff_byes','league_average_match'`);
    } else if (Object.keys(results).length == 1) {
      return results[Object.keys(results)[0]];
    } else {
      return results;
    }
  }
}

//------------------------------------------------------------------------
// LEAGUE BYES - Pulls league bye count
function leagueByes(league) {
  if(typeof league != 'string') {
    return ('Enter league id as a string, then declare fetch request as array as second variable');
  } else {
    let json = {};
    try {
      json = JSON.parse(UrlFetchApp.fetch(`${sleeperBaseURL}v1/league/${league}/winners_bracket`));
    } catch (err) {
      return ('Invalid input, no league data fetched, enter league ID as a string');
    }
    let count = 0;
    for (let match in json) {
      if (Number.isInteger(json[match].t1) && Number.isInteger(json[match].t2)) {
      } else if (Number.isInteger(json[match].t1) && json[match].t2 == null) {
        if (typeof json[match].t2_from == 'object') {
          count++;
        }
      } else if (Number.isInteger(json[match].t2) && json[match].t1 == null) {
        if (typeof json[match].t1_from == 'object') {      
          count++;
        }
      }
    }
    return count;
  }
}

//------------------------------------------------------------------------
// LEAGUE MEMBERS - Pulls draft information to give number of teams
function sleeperLeagueMembers(league){
  if(typeof league != 'string' && typeof league != 'object') {
    Logger.log('Enter league id as a string or provide draft object');
  } else {
    let recent = {'start_time':0};
    if(typeof league === 'string') {
      let json = JSON.parse(UrlFetchApp.fetch(`${sleeperBaseURL}v1/league/${league}/drafts`));
      if (json.length > 1) {
        for (let a = 0; a < json.length; a++) {
          json[a].start_time > recent.start_time ? recent = json[a] : null;
        }
      } else {
      recent = json[0];
      }
    } else {
      recent = league;
    }
    return recent.settings.teams;
  }
}

//------------------------------------------------------------------------
// DISPLAY NAME - Retrieves display name for a member based on ID provided, first checks for script properties, then fetches remotely
function sleeperDisplayName(id,external) {
  let data;
  if (id) {
    const scriptProperties = PropertiesService.getScriptProperties();
    let propertyValue = scriptProperties.getProperty('ids');
    if (propertyValue) {
      data = JSON.parse(propertyValue);
    } else {
      data = {};
    }
    try{ 
      if (data[id] && !external) {
        return data[id];
      } else {
        try {
          const name = JSON.parse(UrlFetchApp.fetch(`${sleeperBaseURL}v1/user/${id}`)).display_name;
          data[id] = name;
          scriptProperties.setProperty('ids',JSON.stringify(data));
          return name;
        }
        catch (err) {
          Logger.log('No display name found for ' + id);
          return id;
        }
      }
    }
    catch (err) {
      const name = JSON.parse(UrlFetchApp.fetch(`${sleeperBaseURL}v1/user/${id}`)).display_name;
      data[id] = name;
      scriptProperties.setProperty('ids',JSON.stringify(data));
      return name;
    }
  } else {
    return id;
  }
}

// SLEEPER ID NAME
// Function to first try fetching from script properties, then from an API pull
function sleeperIdByName(name) {
  let data, id;
  if (name == undefined || name == null) {
    Logger.log('No name provided. Exiting');
  } else {
    const scriptProperties = PropertiesService.getScriptProperties();
    let propertyValue = scriptProperties.getProperty('ids');
    if (propertyValue) {
      data = JSON.parse(propertyValue);
    } else {
      data = {};
    }
    try{
      id = getKeyByValue(data, name);
      return id;
    }
    catch (err) {
      return false;
    }
  }
}

// SLEEPER PLAYER IMPORT - 2025.07.30
// Function to import Sleeper players and data points for spreadsheet use
function sleeperPlayerImport(fantasyProsIds){
  try { 
    // Fetch JSON object from Sleeper's API
    const json = JSON.parse(UrlFetchApp.fetch(`${sleeperBaseURL}v1/players/nfl`));
    
    // Initial variables
    let arr = [], keys = [], espnMissing = [], fpMissing = [];

    // remove any positions you're not interested in. Some RBs are categorized as FB and relying on 'fantasy_positions' entails players with multiple designations
    const positions = ['QB','RB','FB','WR','TE','K','DEF','LB','DB','DL'];
    
    // set to 'true' if you want players who are not on NFL teams to be included in table (will make it take a lot longer)
    let unrostered = false; 
    
    // Modify these as needed
    const dataPoints = {
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
      'news_updated':{'width':50,'hide':true,'named_range':false},
      'headshot':{'width':300,'hide':false,'named_range':true}
    };

    // Injury status shorthand for easier representation in cells
    const injuries = {
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
    const headers = Object.keys(dataPoints);
    
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    // Sets the header values to the first row of the array 'keys' to be written to the sheet
    keys.push(headers);
    // Loops through all 'key' entries (players) in the JSON object that was fetched
    for(const key in json){
      try {
        // First if statement checks if the player is one of the selected positions (other than DEF)
        if ( positions.indexOf(json[key].position) >= 0 ) {
          if ( (unrostered == true && json[key].team == null) || json[key].team != null ) {
            const fullName = `${json[key].first_name} ${json[key].last_name}`;
            for ( let col = 0; col < Object.keys(dataPoints).length; col++ ) {
              if ( Object.keys(dataPoints)[col] == 'full_name' ) {
                // Creates the full name entry alongside the first/last entries in the JSON data
                arr.push(fullName);
              } else if ( Object.keys(dataPoints)[col] == 'injury_status') {
                if ( json[key][Object.keys(dataPoints)[col]] == null ) {
                  // Pushes a 'G' for 'good' to any player without an injury tag
                  arr.push('G');
                } else {
                  // If player has injury designation, assigns the shorthand to that player
                  arr.push(injuries[json[key][Object.keys(dataPoints)[col]]]);
                }
              } else if ( Object.keys(dataPoints)[col] == 'headshot') {
                if (json[key].position == 'DEF') {
                  arr.push(`https://sleepercdn.com/images/team_logos/nfl/${json[key].player_id.toLowerCase()}.png`)
                } else {
                  arr.push(`https://sleepercdn.com/content/nfl/players/thumb/${json[key].player_id}.jpg`)
                }
              } else if (Object.keys(dataPoints)[col] == 'espn_id') {
                let id = ESPN_TO_SLEEPER_ID[json[key].player_id];
                if (id != null){
                  arr.push(id);
                } else {
                  arr.push('');
                  espnMissing.push(`${fullName}: ${json[key].player_id}`);
                }
              } else if (Object.keys(dataPoints)[col] == 'fp_id') {
                let id = fantasyProsIds[json[key].player_id];
                if (id != null){
                  arr.push(id);
                } else {
                  arr.push(''); 
                  fpMissing.push(`${fullName}: ${json[key].player_id}`);
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
        ss.toast('Error bringing in data');
        Logger.log('Error bringing in data: ' + err.stack);
      }
    }
    
    if (espnMissing.length > 0 && fpMissing.length > 0) {
      ss.toast(`Unable to find ${espnMissing.length} ESPN IDs & ${fpMissing.length} FantasyPros IDs.`);
    } else if (espnMissing.length > 0) {
      ss.toast(`Unable to find ESPN IDs for ${espnMissing.length} players`);
    } else if (fpMissing.length > 0) {
      ss.toast(`Unable to find FantasyPros IDs for ${fpMissing.length} players`);
    }

    if (espnMissing.length > 0) {
      Logger.log(`Missing the ESPN IDs for these players:\r\n${espnMissing}`);
    }
    if (fpMissing.length > 0) {
      Logger.log(`Missing the FantasyPros IDs for these players:\r\n${fpMissing}`);
    }

    const sheet = ss.getSheetByName('PLAYERS') == null ? ss.insertSheet('PLAYERS') : ss.getSheetByName('PLAYERS');
      
    try {
      sheet.getFilter().remove();
    }
    catch (err) {
      Logger.log('No existing filter to remove');
    }
    sheet.getRange(1,1,keys.length,keys[0].length).createFilter();
    sheet.setTabColor('333333');
    sheet.clear();

    // Gets range for setting data and headers
    const playerTable = sheet.getRange(1,1,keys.length,keys[0].length);
    // Sets data in place
    playerTable.setValues(keys);
    // Sorts based on 
    sheet.getRange(2,1,keys.length-1,keys[0].length).sort([{column: headers.indexOf('fantasy_positions')+1, ascending: true},{column: headers.indexOf('last_name')+1, ascending: true}]);
    
    // Creates named ranges for doing VLOOKUP functions in Google Sheets; only for keys in 'headers' object tagged with 'true' for 'named_range'
    for ( col = 0; col < Object.keys(dataPoints).length; col++ ) {
      if (dataPoints[Object.keys(dataPoints)[col]].named_range == true) {
        ss.setNamedRange('SLPR_' + headers[col].toUpperCase(),sheet.getRange(2,col+1,keys.length-1,1));
      }
    }

    // Hides columns and aligns data in cells
    for (let col = 0; col < Object.keys(dataPoints).length; col++ ) {
      sheet.setColumnWidth(col+1,dataPoints[Object.keys(dataPoints)[col]].width);
      if (dataPoints[Object.keys(dataPoints)[col]].hide == true){
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

    adjustRows(sheet);
    adjustColumns(sheet);

    sheet.getRange(1,1,keys.length,keys[0].length).setHorizontalAlignment('left');
    
    // Sets the top row to be frozen
    sheet.setFrozenRows(1);
    
    // Sets the left two columns to be frozen
    sheet.setFrozenColumns(2);

    // Locks data on sheet
    sheet.protect();
    
    // 2025 - Created by Ben Powers
    // ben.powers.creative@gmail.com
  } catch (err) {
    Logger.log(`Error running the player database import | ERROR: ${err.stack}`);
  }

}

//=======================================
// SLEEPER SCORE OBJECT
// Dependencies: seasonInfo()
// Function to pull down players' scoring for a week in Sleeper (returns OBJECT with format player_id:points scored)
function sleeperScoreObject(year,week,league,partial) {
  const offDefPts = false; // Change to true to credit offensive players with defensive plays
  league = league || leagues('PH');
  let info;
  if (!year || !week) {
    info = seasonInfo();
  }
  year = year || info[0];
  week = week || info[1];

  let incomplete = [];
  if (partial) { // Case where input of partial is 'true' and week is not a previous week, brings in array of teams of incomplete or not started games
    incomplete = sleeperWeeklyNFL(year,week,'remaining');
  }

  let scores = {league,week,year};
  const positions = ['QB','RB','FB','WR','TE','K','DEF','LB','DB','DL'];
  const offPositions = positions.slice(0,positions.indexOf('K')+1);
  const positionString = positions.map(pos => '&position[]=' + pos).join('');
  const data = JSON.parse(UrlFetchApp.fetch(`${sleeperBaseURL}stats/nfl/${year}/${week}?season_type=regular${positionString}&order_by=player_id`));
  const format = sleeperLeagueInfo(league,'scoring');

  const idpRegex = new RegExp(/idp\_/,'g');
  data.forEach(entry => {
    if (incomplete.indexOf(entry.team) == -1) {
      let score = 0;
      const id = entry.player_id;
      Object.keys(format).forEach(key => {
        // Evaluates scoring settings for all points if "offDefPts" is "true", otherwise it scores non-IDP values and IDP values if not an offensive player
        if (offDefPts || !idpRegex.test(key) || (idpRegex.test(key) && offPositions.indexOf(entry.fantasy_positions) == -1)) {
          if ( isNaN(parseFloat(entry.stats[key])*parseFloat(format[key])) == false && parseFloat(entry.stats[key]) != null ) {
            score = score + parseFloat(entry.stats[key])*parseFloat(format[key]);
          }
        }
      });
      scores[id] = Number.parseFloat(score.toFixed(2));
    }
  });
  return scores;
}

//=======================================
// SLEEPER SCORING RECORD
// Dependencies: seasonInfo(), sleeperWeeklyNFL(), sleeperScoreObj()
// Function to take inputted JSON values and recording
function sleeperScoreRecord(year,week,altLeague,complete) {
  const sheetname = 'SLPR_SCORING';
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let info;
  if (!year || !week) {
    info = seasonInfo();
  }
  year = year || info[0];
  week = week || info[1];
  complete = complete || false;
  incomplete = [];
  const any = sleeperWeeklyNFL(null,week,'not_pre_game');
  if (any.length > 0) {
    if (complete) {
      incomplete = sleeperWeeklyNFL(null,week,'remaining');
    }
    let scores = sleeperScoreObject(year,week,altLeague,incomplete);
    if (scores != null) {
      const headers = ['id','sum','min','max','avg','std','cst','spl','av5','av3',
          ...Array.from({ length: 18 }, (_,i) => i+1)];
          // Using extra metrics to offset colums to make index 10+ desired week in vlookups

      const wk = scores.week;
      delete scores.week;
      delete scores.year;
      delete scores.league;
          
      let sheet = ss.getSheetByName(sheetname);
      sheet = sheet || ss.insertSheet(sheetname);
      
      let players = Object.keys(scores).length;

      let lastRow = sheet.getLastRow();
      let maxRows = sheet.getMaxRows();

      if (maxRows < (players + 1)) {
        sheet.insertRows(maxRows, (players + 1) - maxRows);
      }

      let ids = [], pts = [];
      if (lastRow > 1) {
        ids = sheet.getRange(2, 1, lastRow - 1, 1).getValues();
      }
      
      const regex = /[0-9]+/g;
      const found = ids.find(id => regex.test(id));
      let blank = found == null ? true : false;
      if (blank) {
        Object.keys(scores).forEach(player => {
          ids.push([player]);
          pts.push([scores[player]]);
        });
      } else {
        idsFlat = ids.flat().map(x => x.toString());
        pts = Array.from({ length : ids.length }, () => ['']);
        Object.keys(scores).forEach(player => {
          let key = idsFlat.indexOf(player);
          if ( key == -1 ) {
            ids.push([player]);
            pts.push([scores[player]]);
            if (wk > 1) {
              Logger.log('🔎 Did not find ' + player + ' in data, who scored ' + (scores[player] == 0 ? 0 : scores[player]));
            }
          } else {
            pts[key] = [scores[player]];
          }
        });
      }
      if (ids.indexOf('') >= 0) {
        pts.splice(ids.indexOf(''),1);
        ids.splice(ids.indexOf(''),1);
      }
    
      sheet.getRange(1,1,1,headers.indexOf(1)+wk).setValues([headers.slice(0,headers.indexOf(1)+wk)]);

      sheet.getRange(2,1,ids.length,1).setValues(ids);
      sheet.getRange(2,headers.indexOf(wk)+1,pts.length,1).setValues(pts);
      sheet.setColumnWidths(1,sheet.getMaxColumns(),50);

      sheet.getRange(1,1,sheet.getMaxRows(),1).setHorizontalAlignment('left');
      sheet.getRange(1,2,sheet.getMaxRows(),sheet.getLastColumn()-1).setHorizontalAlignment('right');
      sheet.getRange(2,2,sheet.getMaxRows()-1,sheet.getLastColumn()-1).setNumberFormat('0.00');    

      sheet.getRange(1,1,1,sheet.getMaxColumns()).setBackground('black')
        .setFontColor('white');
      sheet.getRange(2,headers.indexOf(wk)+1,sheet.getMaxRows()-1,1).setFontColor('black').setBackground('white');
      sheet.setFrozenRows(1);
      sheet.setFrozenColumns(headers.indexOf(1));
      
      ss.setNamedRange(sheetname,sheet.getRange(2,1,sheet.getLastRow()-1,sheet.getLastColumn()));
      ss.setNamedRange(sheetname+'_H',sheet.getRange(1,1,1,sheet.getLastColumn()));
      let string = `✔️ Scoring imported for week ${wk} successfully!`;
      if (complete) {
        if (incomplete.length > 0) {
          string = string.concat(`
          These teams were excluded as they are incomplete: ${incomplete}`);    
        } else {
          string = string.concat(`
          All matchups were completed upon import`);
        }
      }
      ss.toast(string);
      if (wk > 1) {
        const calcs = sleeperScoreCalculations(sheet);
        ss.toast('🧮 Completed scoring evaluations');
        let metrics = [];
        for (let a = 0; a < ids.length; a++) {

          let arr = Array.from({length : (headers.indexOf(1) - 1) - headers.indexOf('id')}, () => '');
          if (calcs.hasOwnProperty(ids[a])) {
            for (let b = 1; b <= arr.length; b++) {
              if (calcs[ids[a]].hasOwnProperty(headers[b])) {
                arr[b-1] = calcs[ids[a]][headers[b]];
              }
            }
          }
          metrics.push(arr);
        }
        const rangeMetrics = sheet.getRange(2,headers.indexOf('sum')+1,ids.length,metrics[0].length);
        rangeMetrics.setValues(metrics)
          .setHorizontalAlignment('right');
        ss.toast(`📝 Placed all calculated values based on imported scoring from week ${wk}`);
      }
      sheet.getRange(2,1,ids.length,sheet.getLastColumn()).sort({column: (headers.indexOf('sum')+1), ascending: false});;
    }
  } else {
    ss.toast(`⭕ No games have begun yet for week ${week}`)
  }
}

//=======================================
// SLEEPER SCORING CALCULATIONS
// Dependencies: sleeperStats(), sleeperExistingTableData(), sleeperScoreBaselines()
// Takes in all data from scoring and from stats fetch to calculate values for player metrics ('SUM','MIN','MAX','AVG','STDEV','CONST','SPLIT','AVG_5','AVG_3')
function sleeperScoreCalculations(sheet) {
  const sheetname = 'SLPR_SCORING';
  sheet = sheet || SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetname);
  const scoring = sleeperExistingTableData(sheetname);
  const players = JSON.parse(UrlFetchApp.fetch(`${sleeperBaseURL}v1/players/nfl`));
  const stats = sleeperStats().data;
  const baselines = sleeperScoreBaselines(scoring,players);

  let arr = [];
  Object.keys(scoring).forEach(player => {
    try {
      const pos = players[player].fantasy_positions[players[player].fantasy_positions.length-1];
      let data = scoring[player].data;
      let normal = 0;
      let n = data.length;
      if (stats.hasOwnProperty(player)) {
        let pcts = [...stats[player].pct.filter(entry => typeof entry === 'number')];
        pcts.splice(pcts.indexOf(Math.min(...pcts)),1).splice(pcts.indexOf(Math.max(...pcts)),1);
        normal = !Number.isNaN(Number.parseFloat((getSum(pcts)/pcts.length).toFixed(2))) ? Number.parseFloat((getSum(pcts)/pcts.length).toFixed(2)) : normal;
        let _data = [];
        let _pcts = [];
        data.forEach((entry, index) => {
          if (typeof entry === 'number' && isFinite(entry)) {
            _data.push(entry);
            _pcts.push(stats[player].pct[index]);
          }
        });
        data = _data;
        stats[player].pct = _pcts;
      } else {
        data = data.filter(entry => typeof entry === 'number');
      }
      n = data.length;
      if (n > 0) {
        scoring[player].sum = Number.parseFloat(getSum(data).toFixed(2));
        if (stats.hasOwnProperty(player) && normal > 0) {
          data = data.filter((entry, index) => stats[player].pct[index] > normal/2);
        }
        n = data.length;
        scoring[player].min = Number.parseFloat(Math.min(...data).toFixed(2));
        scoring[player].max = Number.parseFloat(Math.max(...data).toFixed(2));
        scoring[player].avg = Number.parseFloat((scoring[player].sum/n).toFixed(2));
        if ( n > 1 ) {
          if ( n >= 3 ) {
            scoring[player].av3 = Number.parseFloat(getMean(data.slice(-3)).toFixed(2));
          }
          if ( n >= 4 ) {
            scoring[player].std = Number.parseFloat(getStandardDeviation(data,scoring[player].avg).toFixed(2));
            scoring[player].spl = Number.parseFloat((getMean(data.slice(Math.ceil(n/2)-1)) - getMean(data.slice(0,Math.floor(n/2)))).toFixed(2));
          }
          if ( n >= 5 ) {
            scoring[player].av5 = Number.parseFloat(getMean(data.slice(-5)).toFixed(2));
            scoring[player].cst = Number.parseFloat((data.filter(score => score > baselines[pos].target).length / n).toFixed(2));
          }
        }
        let found = 0;
        for (let a = 0; a < arr.length; a++) {
          if (Number.isNaN(arr[a])) {
            arr[a] = '';
            found++;
          }
        }
        if (found > 0) {
          Logger.log('Error with player id ' + id + ' with ' + found + ' value(s)\r\nData: ' + data + '\r\nData Length: ' + data.length);
        }
      }
    }
    catch (err) {
      Logger.log(`Issue identifying a position for ${player} with data of ${JSON.stringify(scoring[player])}`);
      Logger.log(err.stack);
    }
  });
  return scoring;
}

// SLEEPER SCORE TOPS
// Gathers all the highest scores per position for evaluating when a player meets or exceeds their position groups' performances
// Dependencies: sleeperExistingTableData()
function sleeperScoreBaselines(scoring,players) {
  const weeks = 18;
  scoring = scoring || sleeperExistingTableData('SLPR_SCORING');
  players = players || JSON.parse(UrlFetchApp.fetch(`${sleeperBaseURL}v1/players/nfl`));
  let obj = {};
  let array = Array.from({ length: weeks }, () => []);
  Object.keys(scoring).forEach(player => {
    try {
      const pos = players[player].fantasy_positions[players[player].fantasy_positions.length-1]; // Gets position of player that's last index of the position array
      if (pos) {
        if (!obj.hasOwnProperty(pos)) {
          obj[pos] = { scores: array.map(() => []), avg_1_weekly: array.map(() => []), avg_2_weekly: array.map(() => []), avg_3_weekly: array.map(() => []), end_1_weekly: array.map(() => []), end_2_weekly: array.map(() => []), end_3_weekly: array.map(() => [])};
        }
        for (let a = 0; a < scoring[player].data.length; a++) {
          if (scoring[player].data[a]) {
            obj[pos].scores[a].push(scoring[player].data[a]);
          }
        }
      }
    } catch (err) {
      Logger.log(`Couldn't find value for ${player}.`);
    }
  });
  Object.keys(obj).forEach(pos => {
    try {
      for (let a = 0; a < weeks; a++) {
        obj[pos].scores[a] = obj[pos].scores[a].sort((a,b) => b - a).slice(0,36);
      }
      for (let a = 0; a < weeks; a++) {
        obj[pos].avg_1_weekly[a] = parseFloat(getMean(obj[pos].scores[a].slice(0,11)).toFixed(2));
        obj[pos].avg_2_weekly[a] = parseFloat(getMean(obj[pos].scores[a].slice(12,23)).toFixed(2));
        obj[pos].avg_3_weekly[a] = parseFloat(getMean(obj[pos].scores[a].slice(24,35)).toFixed(2));
        obj[pos].end_1_weekly[a] = obj[pos].scores[a][11] || 0;
        obj[pos].end_2_weekly[a] = obj[pos].scores[a][23] || 0;
        obj[pos].end_3_weekly[a] = obj[pos].scores[a][35] || 0;
      }
      obj[pos].avg_1 = parseFloat(getMean(obj[pos].avg_1_weekly.filter(x => x != 0)).toFixed(2));
      obj[pos].avg_2 = parseFloat(getMean(obj[pos].avg_2_weekly.filter(x => x != 0)).toFixed(2));
      obj[pos].avg_3 = parseFloat(getMean(obj[pos].avg_3_weekly.filter(x => x != 0)).toFixed(2));
      obj[pos].end_1 = parseFloat(getMean(obj[pos].end_1_weekly.filter(x => x != 0)).toFixed(2));
      obj[pos].end_2 = parseFloat(getMean(obj[pos].end_2_weekly.filter(x => x != 0)).toFixed(2));
      obj[pos].end_3 = parseFloat(getMean(obj[pos].end_3_weekly.filter(x => x != 0)).toFixed(2));
      obj[pos].target = parseFloat(((obj[pos].avg_1 + obj[pos].avg_2) / 2).toFixed(2));      
    }
    catch (err) {
      Logger.log(`sleeperScoreBaseline issue ${err.stack}`);
    }
  })
  return obj;
}

// ==============================================
// SLEEPER ADP IMPORT
// Dependencies: none
// Pulls in and places ADP information current from Sleeper for all positions in "positions" array
function sleeperADPImport(year,backedUp) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ui = SpreadsheetApp.getUi();
  
  const positions = ['QB','RB','FB','WR','TE','K','DEF','LB','DB','DL'];
  
  let arr = [], keys = [];
  let replaceValues;

  if (!backedUp) {
    replaceValues = ui.alert('Replace previous values?', ui.ButtonSet.YES_NO);
  } else {
    replaceValues == 'YES';
  }

  if (replaceValues == 'YES') {
    if (year == null) {
      year= seasonInfo('year');
    }
    
    const positionString = positions.map(pos => '&position[]=' + pos).join('');
    const data = JSON.parse(UrlFetchApp.fetch(`${sleeperBaseURL}projections/nfl/${year}?season_type=regular${positionString}&order_by=player_id`));

    for(const key in data){
      if ( data[key].team != null && data[key].stats.adp_half_ppr < 999 && data[key].stats.pts_ppr > 40) {
        if ( positions.indexOf(data[key].player.position) >= 0 ) {
          for ( var col in adpHeaders) {
            if ( data[key][adpHeaders[col]] != null ) {
              arr.push(data[key][adpHeaders[col]]);
            } else if (adpHeaders[col] === 'full_name') {
              arr.push(`${data[key].player.first_name} ${data[key].player.last_name}`); // First + ' ' + Last
            } else if (data[key].player[adpHeaders[col]] != null) {
              arr.push(data[key].player[adpHeaders[col]]);
            } else if (data[key].stats[adpHeaders[col]] != null) {
              arr.push(data[key].stats[adpHeaders[col]]);
            } else {
              arr.push('');
            }
          }
          keys.push(arr);
          arr = [];
        }
      }
    }

    const sheet = ss.getSheetByName('ADP') == null ? ss.insertSheet('ADP') : ss.getSheetByName('ADP');
    
    sheet.clear();

    const headerRange = sheet.getRange(1,1,1,adpHeaders.length)
    headerRange.setValues([adpHeaders]);
    ss.setNamedRange('ADP_HEADER',headerRange);
    
    ss.setNamedRange('ADP',sheet.getRange(2,1,keys.length,adpHeaders.length));
    ss.setNamedRange('ADP_NAME',sheet.getRange(2,adpHeaders.indexOf('full_name')+1,keys.length,1));
    ss.setNamedRange('ADP_POS',sheet.getRange(2,adpHeaders.indexOf('position')+1,keys.length,1));
    ss.setNamedRange('ADP_TEAM',sheet.getRange(2,adpHeaders.indexOf('team')+1,keys.length,1));
    ss.setNamedRange('ADP_ID',sheet.getRange(2,adpHeaders.indexOf('player_id')+1,keys.length,1));
    ss.setNamedRange('ADP_HALF',sheet.getRange(2,adpHeaders.indexOf('adp_half_ppr')+1,keys.length,1));
    ss.setNamedRange('ADP_2QB',sheet.getRange(2,adpHeaders.indexOf('adp_2qb')+1,keys.length,1));
    ss.setNamedRange('ADP_PTS_STD',sheet.getRange(2,adpHeaders.indexOf('pts_std')+1,keys.length,1));
    ss.setNamedRange('ADP_PTS_HALF',sheet.getRange(2,adpHeaders.indexOf('pts_half_ppr')+1,keys.length,1));
    ss.setNamedRange('ADP_PTS_PPR',sheet.getRange(2,adpHeaders.indexOf('pts_ppr')+1,keys.length,1));
        
    const playerTableRange = sheet.getRange(2,1,keys.length,keys[0].length);
    playerTableRange.setValues(keys);
    if (sheet.getMaxRows()-keys.length-1 > 0){
      sheet.deleteRows(keys.length+2,sheet.getMaxRows()-keys.length-1);
    }
    ss.setNamedRange('SLPR_ALL',playerTableRange);
    sheet.getRange('A2:A').setHorizontalAlignment('left');

    playerTableRange.sort([{column: 7, ascending: true},{column: 12, ascending: false}]);

    sheet.setFrozenRows(1);
    ss.toast('Completed import of ADP and recorded values');

  } else {
    Logger.log('Values not fetched due to no confirmation or no prior backup made');
  }
}

// ==============================================
// SLEEPER ADP BACKUP
// Dependencies: sleeperADPImport(), 
// Grabs most recent ADP sheet and adds a numeric suffix, shifts all other numeric suffixes by 1
function sleeperADPBackup(){
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ui = SpreadsheetApp.getUi();
  let response = ui.alert('Shift existing data to new sheet?', ui.ButtonSet.YES_NO);
  
  if (response == 'YES') {
    let sheetArr = [],sheetArrNames = [],namedRangesArr = [],countArr = [];
    let sheet, index;
    let namesRanges = ss.getNamedRanges();
    
    for (let a = 0; a < namesRanges.length; a++) {
      rangeName = namesRanges[a].getName();
      if (rangeName.substring(0,3) === 'ADP') {
        index = parseInt(rangeName.substring(4,5));
        rangeName = namesRanges[a].getName();
        sheet = ss.getRangeByName(rangeName).getSheet();
        if (countArr.length == 0 || index < countArr[countArr.length-1]) {
          countArr.push(index);
          namedRangesArr.push(namesRanges[a]);
          sheetArr.push(sheet);
          sheetArrNames.push(sheet.getName());
        } else {
          for (b = 0; b < countArr.length; b++) {
            if (index > countArr[b]){
              countArr.splice(b,0,index);
              namedRangesArr.splice(b,0,namesRanges[a]);
              sheetArr.splice(b,0,sheet);
              sheetArrNames.splice(b,0,sheet.getName())
              break;
            }
          } 
        }
      }
    }
    
    for (a = 0; a < sheetArr.length; a++) {
      index = countArr[a]++;
      index++;
      namedRangesArr[a].setName('ADP' + index);
      sheetArr[a].setName('ADP' + index);
    }
    
    let sourceSheet = ss.getSheetByName('ADP');
    let sourceSheetIndex = sourceSheet.getIndex();
    let backupSheet = ss.insertSheet(sourceSheetIndex,{'template':sourceSheet});
    backupSheet.setName('ADP2');

    backupSheet.deleteColumns(adpHeaders.indexOf('pts_ppr')+2,(backupSheet.getMaxColumns() - (adpHeaders.indexOf('pts_ppr')+1)));
    backupRange = backupSheet.getRange(2,1,backupSheet.getMaxRows()-1,backupSheet.getMaxColumns());
    ss.setNamedRange('ADP2',backupRange);
  }
  
  let getNext = ui.alert('Fetch updated ADP data?', ui.ButtonSet.YES_NO)
  if ( getNext == 'YES' ){
    Logger.log('Fetching new ADP now...');
    sleeperADPImport(undefined,true);
  } else {
    Logger.log('Backed up previous ADP');
    ss.toast('Backed up previous ADP');
  }
}

// ==============================================
// SLEEPER TABLE DATA GATHER
// Dependencies: none
// Pulls a table based on input name and then outputs an object
// Requires that there are week values (1,2,3,etc.) as well as other headers and an ID column
function sleeperExistingTableData(sheetname) {
  sheetname = sheetname || 'SLPR_SCORING';
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(sheetname) || ss.insertSheet('SLPR_SCORING');
  const headers = sheet.getRange(1,1,1,Math.max(sheet.getLastColumn(),1)).getValues().flat();
  
  const regId = new RegExp(/^(id|ID|PLAYER_ID|SLPR_PLAYER_ID)$/,'g');
  const colId = headers.findIndex(x => regId.test(x));
  const regWeek = new RegExp(/^[0-9]{1,2}$/,'g');
  const colFirstWeek = headers.findIndex(x => regWeek.test(x));
  const colLastWeek = headers.findLastIndex(x => regWeek.test(x));
  let obj = {};
  if (colId >= 0 && colFirstWeek >= 0) {
    const ids = sheet.getRange(2,colId+1,sheet.getLastRow()-1,1).getValues().flat().filter(x => x != '');
    const all = sheet.getRange(2,1,sheet.getLastRow()-1,sheet.getLastColumn()).getValues();
    for (let a = 0; a < all.length; a++) {
      obj[ids[a]] = obj[ids[a]] || {};
      let weeks = [];
      for (let b = 0; b < headers.length; b++) {
        if (b != colId) {
          if (b >= colFirstWeek && b <= (colLastWeek+1)) {
            weeks.push(all[a][b]);
          } else {
            obj[ids[a]][headers[b]] = all[a][b];
          }
        }
      }
      obj[ids[a]].data = weeks;
    }
    return obj;
  } else {
    return null;
  }
}

// ==============================================
// SLEEPER LEAGUE OVERVIEWS - 2024.10.08
// Dependencies: fetchSpreadsheet(); renderPercentHex(); adjustRows(); adjustColumns();
function sleeperLeagueOverview(league,abbrev,color,regularSeasonOnly,specificLeague) {
  if(typeof league != 'string') {
      return ('Enter league id as a string, then declare fetch request as array as second variable');
  } else {
  
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const suffix = '_OVERVIEW'; // Change this value if you'd like your sheet name to be something else following the left values of the 'leagueIds' const above
    const weeks = 17;

    // These values will not be included if removed from an array. Do not remove "settings", "h2h", or "metadata" unless you intend to eliminate all values from the child arrays
    const top = ['roster_id','team_name','name','username','owner_id','co_owner_name','co_owner_username','co_owner_id','settings','h2h','metadata','keepers','players'];
    const settings = ['division','division_name','waiver_type','waiver_position','waiver_budget','waiver_budget_percent','total_moves','rank','rank_div','playoffs','seed','bye','wins','losses','ties','fpts','fpts_weekly','fpts_rnk','ppts','ppts_weekly','ppts_rnk','fpts_against','fpts_against_weekly','fpts_against_rnk'];
    const h2h = ['h2h_wins','h2h_losses','h2h_ties','h2h_rnk'];
    const metadata = ['streak','record','record_expanded'];
    const charWidths = {'W':13.3,'L':8.1,'T':8.8};
    
    const objLeague = sleeperLeagueInfo(league,['name','teams','divisions','starters','starters_indexed','roster','roster_indexed','scoring','managers','usernames_by_manager','season','scoring_type','starter_size','bench_size','playoff_start','playoff_teams','playoff_byes']);
    Logger.log('Fetching overview for ' + objLeague.name);
    abbrev = (abbrev == undefined ? abbreviation(objLeague.name) : abbrev);
    Logger.log('League abbreviation is ' + abbrev);
    ss.toast('Fetching overview for ' + objLeague.name);
    const leagueUrl = `${sleeperBaseURL}v1/league/${league}`;
    const objSettings = JSON.parse(UrlFetchApp.fetch(leagueUrl));
    const objUsers = JSON.parse(UrlFetchApp.fetch(`${leagueUrl}/users`));
    const objRosters = JSON.parse(UrlFetchApp.fetch(`${leagueUrl}/rosters`));
    const objH2H = {};

    let matchupWeek = objSettings.settings.start_week; // Gets the league start week
    const divisions = objRosters[0].settings.hasOwnProperty('division');
    const keepers = objSettings.settings.type == 1 ? true : false;
    const keeperCount = objSettings.settings.max_keepers;
    if (keepers) ss.toast(`The ${abbrev} league uses keepers.`,`🔒 KEEPERS PRESENT`,-1);
    const medianMatchup = objSettings.settings.league_average_match == 1;
    const waiverTypes = ['rolling','standings','faab','unknown'];
    const waiverType = waiverTypes[parseInt(objSettings.settings.waiver_type) > 3 ? 3 : parseInt(objSettings.settings.waiver_type)];
    const waiverIcon = waiverType == 'rolling' ? '🔄' : (waiverType == 'standings' ? '🔢' : (waiverType == 'faab' ? '🧑‍⚖️' : '❔'));
    ss.toast(`Waiver type of '${waiverType}' used for the ${abbrev} league`,`${waiverIcon} ${abbrev} WAIVERS`, 5);
    const waiverBudget = waiverType == 'faab' ? objSettings.settings.waiver_budget : 100;
    let medianHeaderRegex = new RegExp(/[0-9]{1,2}M/);
    let limit = 25; // Arbitrary max number of games to check for
    if (regularSeasonOnly) {
      limit = parseInt(objSettings.settings.playoff_week_start) - 1; // Sets limit to regular-season games only if desired (regularSeasonOnly = true when calling function)
    }
    let end = false;
    while (!end) { // Loop through API calls until hit an empty response, then ends loop (or ends at end of regular season)
      try {
        let objWeek = JSON.parse(UrlFetchApp.fetch(`${sleeperBaseURL}v1/league/${league}/matchups/${matchupWeek}`));
        if (objWeek.length > 0 && matchupWeek <= limit) {
          const points = objWeek.map(x => x.points).sort((a,b) => a-b);
          const sum = points.reduce((acc, val) => acc + val, 0);
          // Only checks for h2h if points recorded for week;
          if (sum > 0) {
            const pointsReverse = objWeek.map(x => x.points).sort((a,b) => b-a);
            for (let b = 0; b < objWeek.length; b++) {
              if (objH2H[objWeek[b].roster_id] == null) {
                objH2H[objWeek[b].roster_id] = {'wins':0,'losses':0,'ties':0};
              }
              objH2H[objWeek[b].roster_id].wins = objH2H[objWeek[b].roster_id].wins + points.indexOf(objWeek[b].points); 
              objH2H[objWeek[b].roster_id].losses = objH2H[objWeek[b].roster_id].losses + pointsReverse.indexOf(objWeek[b].points);
              if (objH2H[objWeek[b].roster_id].wins + objH2H[objWeek[b].roster_id].losses == 0) {
                objH2H[objWeek[b].roster_id].ties = 0; // This catches week 1 or other weeks where no scores are reported.
              } else {
                objH2H[objWeek[b].roster_id].ties = objH2H[objWeek[b].roster_id].ties + (points.filter(x => x === objWeek[b].points).length - 1);
              }
            }
          }
          matchupWeek++;
        } else {
          end = true;
        }
      } catch (err) {
        Logger.log(`No data for week ${matchupWeek} | ERROR: ${err.stack}`);
        end = true;
      }
    }
    // These are all required for calculating coloration of cells
    const h2hEntries = Object.values(objH2H);
    let h2h_wins_max = h2hEntries.length ? Math.max(...Object.entries(objH2H).map(x => x[1]).map(x => x.wins)) : 0;
    let h2h_wins_min = h2hEntries.length ? Math.min(...Object.entries(objH2H).map(x => x[1]).map(x => x.wins)) : 0;
    let h2h_losses_max = h2hEntries.length ? Math.max(...Object.entries(objH2H).map(x => x[1]).map(x => x.losses)) : 0;
    let h2h_losses_min = h2hEntries.length ? Math.min(...Object.entries(objH2H).map(x => x[1]).map(x => x.losses)) : 0;
    let h2h_ties_max = h2hEntries.length ? Math.max(...Object.entries(objH2H).map(x => x[1]).map(x => x.ties)) : 0;
    let h2h_ties_min = h2hEntries.length ? Math.min(...Object.entries(objH2H).map(x => x[1]).map(x => x.ties)) : 0;
    let wins_max = Math.max(...objRosters.map(x => x.settings.wins));
    let losses_max = Math.max(...objRosters.map(x => x.settings.losses));
    let ties_max = Math.max(...objRosters.map(x => x.settings.ties));

    let sortColWins,sortColLosses,sortColFpts;

    let headers = top.map(x => x);
    headers.splice(headers.indexOf('settings'),1,...settings);
    headers.splice(headers.indexOf('metadata'),1,...metadata);
    let record_expanded = 0;
    headers.splice(headers.indexOf('h2h'),1,...h2h);

    let teamsLen = objRosters.length;
    let irSize = objLeague.roster.filter(x => x == 'IR').length;
    let coowner = false;
    let record = [];
    let recordMax = 0, recordMaxMedian = 0;
    
    // Removes 'division' header if not present =====================================
    if (!divisions) {
      headers.splice(headers.indexOf('division'),1);
      headers.splice(headers.indexOf('division_name'),1);
      Logger.log('⭕ No divisions established in ' + objLeague.name + ' league');
      ss.toast(`No divisions detected or present in the ${abbrev} league.`,`⭕ NO ${abbrev} DIVISIONS`)
    }
    
    // Removes budget headers if no FAAB =====================================
    if (waiverType != 'faab') {
      headers.splice(headers.indexOf('waiver_budget'),2);
      settings.splice(settings.indexOf('waiver_budget'),2);
    }
    
    // Removes 'keepers' header if no keepers =====================================
    if (!keepers) headers.splice(headers.indexOf('keepers'),1);
    
    // Adds split out 1v1 vs median wins/losses/ties and expanded records and median distinguishing data if needed ==============
    if (medianMatchup) {
      headers.splice(headers.indexOf('ties')+1,0,...['wins_1v1','losses_1v1','ties_1v1','wins_median','losses_median','ties_median']);
      headers.splice(headers.indexOf('record_expanded')+1,0,...['streak_median','record_median',...Array.from({length:weeks}, (_,x) => (x+1)+'M')]);
    }
    const recordHeaders = medianMatchup ? ['streak_1v1','record',...Array.from({length:weeks}, (_,x) => (x+1))] : ['record',...Array.from({length:weeks}, (_,x) => (x+1))];
    headers.splice(headers.indexOf('record_expanded')-1,2,...recordHeaders);

    let roster = objLeague.roster;
    let starters = objRosters.map(x => x.starters);
    let nonStarters = [];
    let ir = [];
    for (let a = 0; a < objRosters.length; a++) {
      let bench;
      try {
        bench = objRosters[a].players.filter(x => !objRosters[a].starters.includes(x));
        objRosters[a].hasOwnProperty.reserve ? (objRosters[a].reserve != null ? bench = bench.filter(x => !objRosters[a].reserve.includes(x)) : null ) : null;
      } catch (err) {
        bench = [];
        // No non-starters in IR
      }
      nonStarters.push(bench.length);
    }
    // let benchSize = nonStarters.sort((a,b) => b-a)[0];
    let benchSize = Math.max(...nonStarters);
    if (benchSize > objLeague.bench_size) {
      roster.splice(roster.indexOf('BN'),1,...(Array.from({length:benchSize - objLeague.bench_size + 1}, (v,i) => 'BN')));
    }

    let fpts = objRosters.map(x => parseFloat(x.settings.fpts + '.' + x.settings.fpts_decimal)).sort((a,b) => a-b);
    let ppts = objRosters.map(x => parseFloat(x.settings.ppts + '.' + x.settings.ppts_decimal)).sort((a,b) => a-b);
    let fpts_against = objRosters.map(x => parseFloat(x.settings.fpts_against + '.' + x.settings.fpts_against_decimal)).sort((a,b) => a-b);
    let fpts_pct = [];
    let ppts_pct = [];
    let fpts_against_pct = [];
    let h2h_wins_pct = [];
    let h2h_losses_pct = [];
    let h2h_ties_pct = [];
    
    // Logger.log(leagueNames[a] + ' = Starters: ' + starterSize + '; Bench: ' + benchSize + '; IR: ' + irSize);

    // End roster creation =====================================
    headers.splice(headers.indexOf('players'),1,...roster);
    data = [];
    let pts = 0;
    let ptsArr = [], allIssues = [];
    for (a = 0; a < teamsLen; a++) {
      let teamName;
      if ( objUsers.find(x => x.user_id == objRosters[a].owner_id).metadata.team_name != null && objUsers.find(x => x.user_id == objRosters[a].owner_id).metadata.team_name != '') {
        teamName = objUsers.find(x => x.user_id == objRosters[a].owner_id).metadata.team_name;
      } else {
        teamName = 'Team ' + objUsers.find(x => x.user_id == objRosters[a].owner_id).display_name;
      }
      let issues = [];
      //ss.toast('Fetching values for ' + teamName);
      //Logger.log('Fetching values for ' + teamName);
      let arr = [];
      let recordLen = 0;
      for (b = 0; b < top.length; b++) {
        if (top[b] === 'settings') {
          for (c = 0; c < settings.length; c++) {
            if (['rank','rank_div','playoffs','seed','bye'].indexOf(settings[c]) >= 0) {
              arr.push(''); // placeholders for season-long finish, playoff inclusion, playoff seed, bye, current rank/end of season rank, playoff seed (pending)
            } else if (settings[c] == 'waiver_type') {
              arr.push(waiverIcon);
            } else if (settings[c] == 'waiver_budget') {
              arr.push(waiverBudget - objRosters[a].settings.waiver_budget_used);
            } else if (settings[c] == 'waiver_budget_percent') {
              arr.push(Math.round((waiverBudget - objRosters[a].settings.waiver_budget_used)/waiverBudget * 100)/100);
            } else if (settings[c] === 'fpts_rnk' || settings[c] === 'ppts_rnk' || settings[c] === 'fpts_against_rnk') {
              ptsArr = eval(settings[c].replace('_rnk', '')); // Assigns the correct pre-created points array as the working 'ptsArr' for eval
              pts = parseFloat(objRosters[a].settings[settings[c].replace('_rnk', '')] + '.' + objRosters[a].settings[settings[c].replace('_rnk', '')+'_decimal']); // Temp variable of the points in question (combines integer and decimal)
              if (parseFloat(pts) > 0) {
                eval(settings[c].replace('_rnk', '') + '_pct.push(' + parseFloat((pts-ptsArr[0])/(ptsArr[teamsLen-1]-ptsArr[0])).toFixed(3) + ')'); // Pushes a percentage of pts relative to min and max to an array
                arr.push(teamsLen-ptsArr.indexOf(pts)); // Appends the rank to the player array
              } else {
                arr.push(''); // Appends empty cell if no pts accumulated
              }
            } else if (settings[c] === 'fpts_weekly' || settings[c] === 'ppts_weekly' || settings[c] === 'fpts_against_weekly') {
              try {
                pts = parseFloat(objRosters[a].settings[settings[c].replace('_weekly', '')] + '.' + objRosters[a].settings[settings[c].replace('_weekly', '')+'_decimal']);
                const rawRecord = (objRosters[a].metadata && objRosters[a].metadata.record) ? objRosters[a].metadata.record : '';
                const gamesPlayed = rawRecord.length / (medianMatchup ? 2 : 1);
                if (parseFloat(pts) > 0 && gamesPlayed > 0) {
                  arr.push(pts / gamesPlayed);
                } else {
                  arr.push('');
                }
              } catch (err) {
                issues.push(settings[c]);
                arr.push('');
              }
            } else if (typeof objRosters[a].settings[settings[c]+'_decimal'] === 'number') {
              sortColFpts = (settings[c] == 'fpts' && sortColFpts === undefined) ? arr.length : sortColFpts; // Final sort column established for sorting array based on fantasy points scored
              arr.push(parseFloat(objRosters[a].settings[settings[c]] + '.' + objRosters[a].settings[settings[c]+'_decimal']));
            } else if (settings[c] === 'division_name' && divisions)  {
              arr.push(objLeague.divisions[objRosters[a].settings.division]);
            } else if (settings[c] != 'division' || (settings[c] === 'division' && divisions)) {
              sortColWins = (settings[c] == 'wins' && sortColWins === undefined) ? arr.length : sortColWins; // First sort column established to sort by (wins)
              sortColLosses = (settings[c] == 'losses' && sortColLosses === undefined) ? arr.length : sortColLosses; // Second column to sort by (losses)
              arr.push(objRosters[a].settings[settings[c]]);
              if (medianMatchup && settings[c] == 'ties') { // Adding this after the push of value for "ties" is completed
                let detailedRecord = [0,0,0,0,0,0]; // Record breakdown: [1v1 wins, 1v1 losses, 1v1 ties, median wins, median losses, median ties]
                try { 
                  const rawRecord = (objRosters[a].metadata && objRosters[a].metadata.record) ? objRosters[a].metadata.record : '';
                  const splitRecord = rawRecord ? rawRecord.split('') : [];
                  for (let e = 0; e < splitRecord.length; e++) {
                    let outcome = splitRecord[e];
                    let outcomeOffset = outcome == 'W' ? 0 : outcome == 'L' ? 1 : outcome == 'T' ? 2 : -10;
                    let typeOffset = (e % 2 === 0) ? 0 : 3;
                    let index = outcomeOffset + typeOffset;
                    if (index >= 0) detailedRecord[index]++;
                  }
                } catch (err) {
                  Logger.log(`Pre-season or issue recording record`);
                }
                arr.push(...detailedRecord);                        
              }
            }
          }
        } else if (top[b] == 'metadata') {
          for (c = 0; c < metadata.length; c++) {
            const rawRecord = (objRosters[a].metadata && objRosters[a].metadata.record) ? objRosters[a].metadata.record : '';
            const splitRecord = rawRecord ? rawRecord.split('') : [];

            if (metadata[c] == 'record') {
              let record = [];
              try {
                if (medianMatchup) {
                  for (let e = 0; e < splitRecord.length; e++) {
                    if (e % 2 === 0) record.push(splitRecord[e]);
                  }
                  const filtered = record.filter(x => x != null && x !== '');
                  const lastValue = filtered.length > 0 ? filtered[filtered.length - 1] : '';
                  let count = 0;
                  for (let i = filtered.length - 1; i >= 0 && filtered[i] === lastValue; i--) {
                    count++;
                  }
                  arr.push(lastValue ? (count + lastValue) : '');
                  arr.push(record.join(''));
                } else {
                  arr.push(rawRecord);
                  record = splitRecord;
                }

                for (let e = 0; e < record.length; e++) {
                  if (charWidths[record[e]]) recordLen += charWidths[record[e]];
                }
                if (recordLen > recordMax) recordMax = recordLen;
              } catch (err) {
                Logger.log(`No record for ${teamName} | ERROR: ${err.stack}`);
                arr.push('');
              }
            } else if (metadata[c] == 'record_expanded') {
              let expanded = [], expandedMedian = [], medianStreak = '';
              let record = Array.from({length: weeks}, () => '');
              let recordMedian = Array.from({length: weeks}, () => '');
              try {
                if (medianMatchup) {
                  for (let i = 0; i < splitRecord.length; i++) {
                    if (i % 2 === 0) expanded.push(splitRecord[i]);
                    else expandedMedian.push(splitRecord[i]);
                  }
                } else {
                  expanded = splitRecord;
                }

                for (let e = 0; e < weeks; e++) {
                  record[e] = expanded[e] == null ? '' : expanded[e];
                }

                if (medianMatchup) {
                  let recLenMed = 0;
                  for (let e = 0; e < weeks; e++) {
                    recordMedian[e] = expandedMedian[e] == null ? '' : expandedMedian[e];
                    if (charWidths[recordMedian[e]]) recLenMed += charWidths[recordMedian[e]];
                  }
                  if (recLenMed > recordMaxMedian) recordMaxMedian = recLenMed;

                  const filtered = recordMedian.filter(x => x !== '');
                  const lastValue = filtered.length > 0 ? filtered[filtered.length - 1] : '';
                  let count = 0;
                  for (let i = filtered.length - 1; i >= 0 && filtered[i] === lastValue; i--) {
                    count++;
                  }
                  medianStreak = lastValue ? (count + lastValue) : '';
                }
              } catch (err) {
                issues = issues.concat(['expanded wins', 'expanded losses']);
              }

              arr.push(...record);
              if (medianMatchup) {
                arr.push(medianStreak);
                arr.push(recordMedian.join(''));
                arr.push(...recordMedian);
              }
            } else {
              // streak or general metadata
              try {
                const val = (objRosters[a].metadata && objRosters[a].metadata[metadata[c]]) ? objRosters[a].metadata[metadata[c]] : '';
                arr.push(val);
              } catch (err) {
                issues.push('streak');
                arr.push('');
              }
            }
          }
        } else if (top[b] == 'h2h') {
          for (c = 0; c < h2h.length; c++) {
            if (h2h[c] == 'h2h_wins' || h2h[c] == 'h2h_losses' || h2h[c] == 'h2h_ties') {
              try {
                arr.push(objH2H[objRosters[a].roster_id][h2h[c].replace('h2h_','')]);
                eval(h2h[c] + '_pct.push(' + (objH2H[objRosters[a].roster_id][h2h[c].replace('h2h_','')] - eval(h2h[c]+'_min')) / (eval(h2h[c]+'_max') - eval(h2h[c]+'_min')) + ')'); // Pushes a percentage of pts relative to min and max to an array
              }
              catch (err) {
                // Logger.log(err.stack);
                issues.push(h2h[c]);
              }
            } else if (h2h[c] == 'h2h_rnk') {
              let rnk = 1;
              let tying = 0;
              for (let team in objH2H) {
                team != objRosters[a].roster_id ? (objH2H[team].wins > objH2H[objRosters[a].roster_id].wins ? rnk++ : (objH2H[team].wins == objH2H[objRosters[a].roster_id].wins && objH2H[team].losses < objH2H[objRosters[a].roster_id].losses) ? rnk++ : null) : null;
              }
              try {
                if (objH2H[objRosters[a].roster_id].ties > 0) {
                }
              }
              catch (err) {
                issues.push('ties');
              }
              arr.push(rnk);
            }
          }
        } else if (top[b] == 'players') {
          let starters = objRosters[a].starters;
          let players = [];
          try {
            players = objRosters[a].players.filter(x => !starters.includes(x));
          } catch (err) {
            // No players on team
          }
          objRosters[a].hasOwnProperty('reserve') ? (objRosters[a].reserve != null ? players = players.filter(x => !objRosters[a].reserve.includes(x)) : null) : null;
          let ir = objRosters[a].reserve;
          if(ir == null) {
            ir = Array.from({length:irSize}, (v,i) => '');
          } else if (ir.length < irSize) {
            for (c = irSize; c > 0; c--) {
              ir[c] == null ? ir.push('') : null;
            }
          }
          for (c = 0; c < roster.length; c++) {
            if (roster[c] != 'BN' && roster[c] != 'IR' && starters[c] != 0) {
              arr.push(starters[c]);
            } else if (roster[c] != 'BN' && roster[c] != 'IR' && starters[c] == 0) {
              arr.push('');
            }
          }
          players.length == benchSize ? null : players.push(...(Array.from({length:benchSize - players.length}, (v,i) => '')));
          arr.push(...players);
          if (ir.length > 0) {
            arr.push(...ir);
          }
        } else if (top[b] == 'keepers' && keepers) {
          try {
            arr.push(objRosters[a].keepers.join(', '));
          } catch (err) {
            //Logger.log('No kept players on roster id ' + objRosters[a].roster_id);
            arr.push('');
          }
        } else {
          if (top[b] == 'team_name') {
            arr.push(teamName);
          } else if (top[b] == 'co_owner_username') { // Finds co-owner and places display name (or creates display name based on username) -- doesn't work for more than 1 co_owner
            if ( objRosters[a]['co_owners'] != null) {
              if(coowner == false) {
                coowner = true;
              }
              arr.push(objUsers.find(x => x.user_id == objRosters[a]['co_owners'][0]).display_name);
            } else {
              arr.push('');
            }
          } else if (top[b] == 'co_owner_id') { // Finds co-owner and places display name (or creates display name based on username) -- doesn't work for more than 1 co_owner
            if ( objRosters[a]['co_owners'] != null) {
              if(coowner == false) {
                coowner = true;
              }
              arr.push(objRosters[a]['co_owners'][0]);
            } else {
              arr.push('');
            }            
          } else if (top[b] == 'username') {
            arr.push(objUsers.find(x => x.user_id == objRosters[a].owner_id).display_name);
          } else if (objRosters[a][top[b]] != null) {
            arr.push(objRosters[a][top[b]]);
          }
        }
      }
      // arr.splice(headers.indexOf('fpts'),1,arr[headers.indexOf('fpts')]/recordLen);
      // arr.splice(headers.indexOf('fpts_against'),1,arr[headers.indexOf('fpts_against')]/recordLen);
      data.push(arr);
      if (issues.length > 1) {
        allIssues.push([teamName,issues.join(', ')]);
      }
    }

    if (allIssues.length > 0) {
      let condensedIssues = [allIssues[0]];
      allIssues.splice(0,1);
      for (let a = allIssues.length - 1; a >= 0; a--) {
        // Logger.log(allIssues[a][1] == condensedIssues[0][1]);
        let matched = false;
        for (let b = 0; b < condensedIssues.length; b++) {  
          if (allIssues[a][1] == condensedIssues[b][1]) {
            condensedIssues[b][0] = condensedIssues[b][0].concat(", " + allIssues[a][0]);
            matched = true;
            break;
          }
        }
        if (!matched) {
          condensedIssues.push(allIssues[a]);
        }
      }
      let string = '';
      for (let a = 0; a < condensedIssues.length; a++) {
        if (a == 0) {
          string = string.concat(condensedIssues[a][0] + ' had issues with: ' + condensedIssues[a][1]);
        } else {
          string = string.concat('\r\n' + condensedIssues[a][0] + ' had issues with: ' + condensedIssues[a][1]);
        }
      }
    }
    
    // Log original indices (IDs of teams)
    const indices = data.map(row => row[0]);

    // Sort data by fpts, then losses, then wins
    data.sort((a, b) => b[sortColFpts] - a[sortColFpts]); // fpts
    data.sort((a, b) => a[sortColLosses] - b[sortColLosses]); // losses
    data.sort((a, b) => b[sortColWins] - a[sortColWins]); // wins

    // Create a sorted indices array (map) to use for sorting the pct arrays
    const sorted = data.map(row => indices.findIndex(index => index === row[0]));

    fpts_pct = sorted.map((_, i) => fpts_pct[sorted[i]]);
    ppts_pct = sorted.map((_, i) => ppts_pct[sorted[i]]);
    fpts_against_pct = sorted.map((_, i) => fpts_against_pct[sorted[i]]);
    h2h_wins_pct = sorted.map((_, i) => h2h_wins_pct[sorted[i]]);
    h2h_losses_pct = sorted.map((_, i) => h2h_losses_pct[sorted[i]]);
    h2h_ties_pct = sorted.map((_, i) => h2h_ties_pct[sorted[i]]);

    // if (week >= objLeague['playoff_start']) {
      // ['finish','playoffs','seed','bye',]
    

    // Prep sheet to minimize cells and also ensure there are enough cells
    let sheet = ss.getSheetByName(abbrev + suffix);
    if (sheet == null){
      ss.insertSheet(abbrev + suffix);
      sheet = ss.getSheetByName(abbrev + suffix);
    }
    sheet.clearFormats();
    if (color) {
      sheet.setTabColor(color)
    }
    
    // Set Header Values
    let columns = headers.length;
    sheet.getRange(1,1,1,columns).setValues([headers]);
    
    // Fetch Existing Given Team Names
    
    let eOwnerId =  sheet.getRange(2,headers.indexOf('roster_id')+1,teamsLen,1).getValues().flat(); // Existing Owner IDs
    let eNicknames = sheet.getRange(2,headers.indexOf('name')+1,teamsLen,1).getValues().flat(); // Existing manually entered nicknames
    let eCoOwnerNicknames = sheet.getRange(2,headers.indexOf('co_owner_name')+1,teamsLen,1).getValues().flat(); // Existing manually entered co-owner nicknames

    for (let a = 0; a < data.length; a++) {
      try {
        data[a].splice(headers.indexOf('name'),0,eNicknames[eOwnerId.indexOf(data[a][headers.indexOf('roster_id')])]);
        data[a].splice(headers.indexOf('co_owner_name'),0,eCoOwnerNicknames[eOwnerId.indexOf(data[a][headers.indexOf('roster_id')])]);

      } catch (err) {
        data[a].splice(headers.indexOf('name'),0,'');
        data[a].splice(headers.indexOf('co_owner_name'),0,'');
      }
    }
    // Replace the values in the original object with the new array
    
    
    // Assign rank to each team based on wins/losses
    
    let divisionNumbers = Object.keys(objLeague.divisions).map(x => parseInt(x));
    const divisionCount = divisionNumbers.length;
    const divSize = parseInt(teamsLen/divisionCount);
    for (let div in objLeague.divisions) {
        objLeague.divisions[div] = Array.from({length:divSize}, (_,x) => x+1);
    }
    const rankCol = headers.indexOf('rank');
    const rankDivCol = headers.indexOf('rank_div');
    const seedCol = headers.indexOf('seed');
    const playoffCol = headers.indexOf('playoffs');
    const byeCol = headers.indexOf('bye');
    for (let a = 0; a < data.length; a++) {
      data[a][rankCol] = a + 1;
      let division = data[a][headers.indexOf('division')];
      data[a][rankDivCol] = objLeague.divisions[division][0];
      objLeague.divisions[division].shift();
      if (divisionNumbers.indexOf(division) >= 0) {
        divisionNumbers.splice(divisionNumbers.indexOf(division),1);
        data[a][seedCol] = divisionCount - divisionNumbers.length;
        data[a][playoffCol] = 1;
      } else {
        data[a][seedCol] = a + 1 + divisionNumbers.length;
        if ((a + 1 + divisionNumbers.length) <= parseInt(objLeague['playoff_teams'])) {
          data[a][playoffCol] = 1;
        } else {
          data[a][playoffCol] = 0;
        }
      }
      data[a][byeCol] = 0;
    }
    let divRank = 1;
    let byes = parseInt(objLeague['playoff_byes']);
    let byeGiven = 0;
    while (byes > 0) {
      for (let a = 0; a < data.length; a++) {
        if (data[a][rankDivCol] == divRank && data[a][byeCol] == 0) {
          data[a][byeCol] = 1;
          byes--;
          byeGiven++;
          break;
        }
      }
      if (byes > 0 && byeGiven > divisionCount) {
        divRank++;
        byeGiven = 0;
      }
    }

    // Declare ranges and insert values
    sheet.getRange(2,1,teamsLen,data[0].length).setValues(data);
    ss.setNamedRange(abbrev + suffix,sheet.getRange(2,1,teamsLen,columns));
    ss.setNamedRange(abbrev + suffix + '_HEADERS',sheet.getRange(1,1,1,columns));
    ss.setNamedRange(abbrev + '_OUTCOMES',sheet.getRange(2,headers.indexOf(1)+1,teamsLen,weeks));
    ss.setNamedRange(abbrev + '_STARTERS',sheet.getRange(2,headers.indexOf('QB')+1,teamsLen,starters.length));
    ss.setNamedRange(abbrev + '_ROSTERS',sheet.getRange(2,headers.indexOf('QB')+1,teamsLen,roster.length));
    
    adjustRows(sheet,teamsLen+1);
    adjustColumns(sheet,columns);

    // Sheet formatting
    sheet.setColumnWidths(1,headers.length,40);
    sheet.setColumnWidths(headers.indexOf('waiver_position')+1,headers.indexOf('wins')-headers.indexOf('waiver_position'),40);    
    sheet.getRange(1,1,teamsLen+1,headers.length).setHorizontalAlignment('left');

    const format = {
      'roster_id':{'align':'center','format':'0','name':'IDS','named':true,'width':30},
      'team_name':{'align':'left','format':'@','name':'NAMES','named':true,'width':160}, // '@' designates a cell with text using "setNumberFormat" function
      'name':{'align':'left','format':'@','name':'NICKNAMES','named':true,'width':100},
      'username':{'align':'left','format':'@','name':'USERNAMES','named':true,'width':120},
      'owner_id':{'align':'left','format':'@','name':null,'named':false,'width':145},
      'co_owner_name':{'align':'left','format':'@','name':'CO_OWNER_NICKNAMES','named':false,'width':100},
      'co_owner_username':{'align':'left','format':'@','name':'CO_OWNER_USERNAMES','named':false,'width':120},
      'co_owner_id':{'align':'left','format':'@','name':null,'named':false,'width':145},
      'division':{'align':'center','format':'0','name':null,'named':true,'width':25},
      'division_name':{'align':'left','format':'@','name':null,'named':true,'width':90},
      'waiver_type':{'align':'center','format':'0','name':null,'named':false,'width':25},
      'waiver_position':{'align':'center','format':'0','name':null,'named':false,'width':25},
      'waiver_budget':{'align':'center','format':'0','name':null,'named':false,'width':25},
      'waiver_budget_percent':{'align':'center','format':'0%','name':null,'named':false,'width':40},
      'total_moves':{'align':'center','format':'0','name':null,'named':false,'width':25},
      'rank':{'align':'center','format':'0','name':null,'named':true,'width':25},
      'rank_div':{'align':'center','format':'0','name':null,'named':true,'width':25},
      'playoffs':{'align':'center','format':'0','name':null,'named':true,'width':25},
      'seed':{'align':'center','format':'0','name':null,'named':true,'width':25},
      'bye':{'align':'center','format':'0','name':null,'named':true,'width':25},
      'wins':{'align':'center','format':'0','name':null,'named':true,'width':25},
      'losses':{'align':'center','format':'0','name':null,'named':true,'width':25},
      'ties':{'align':'center','format':'0','name':null,'named':true,'width':25},
      'wins_1v1':{'align':'center','format':'0','name':null,'named':true,'width':25},
      'losses_1v1':{'align':'center','format':'0','name':null,'named':true,'width':25},
      'ties_1v1':{'align':'center','format':'0','name':null,'named':true,'width':25},
      'wins_median':{'align':'center','format':'0','name':null,'named':true,'width':25},
      'losses_median':{'align':'center','format':'0','name':null,'named':true,'width':25},
      'ties_median':{'align':'center','format':'0','name':null,'named':true,'width':25},      
      'fpts':{'align':'right','format':'0.00','name':null,'named':true,'width':55},
      'ppts':{'align':'right','format':'0.00','name':null,'named':false,'width':55},
      'fpts_against':{'align':'right','format':'0.00','name':null,'named':true,'width':55},
      'fpts_weekly':{'align':'right','format':'0.00','name':null,'named':false,'width':48},
      'ppts_weekly':{'align':'right','format':'0.00','name':null,'named':false,'width':48},
      'fpts_against_weekly':{'align':'right','format':'0.00','name':null,'named':false,'width':48},
      'fpts_rnk':{'align':'center','format':'0','name':null,'named':true,'width':25},
      'ppts_rnk':{'align':'center','format':'0','name':null,'named':false,'width':25},
      'fpts_against_rnk':{'align':'center','format':'0','name':null,'named':true,'width':25},
      'h2h_wins':{'align':'center','format':'0','name':null,'named':true,'width':30},
      'h2h_losses':{'align':'center','format':'0','name':null,'named':true,'width':30},
      'h2h_ties':{'align':'center','format':'0','name':null,'named':true,'width':30},
      'h2h_rnk':{'align':'center','format':'0','name':null,'named':true,'width':25},
      'streak':{'align':'center','format':'@','name':null,'named':true,'width':25},
      'streak_1v1':{'align':'center','format':'@','name':null,'named':true,'width':25},
      'record':{'align':'left','format':'@','name':null,'named':true,'width':Math.ceil(recordMax)+5},
      'record_expanded':{'align':'center','format':'@','name':null,'named':false,'width':18},
      'streak_median':{'align':'center','format':'@','name':null,'named':true,'width':25},
      'record_median':{'align':'left','format':'@','name':null,'named':true,'width':Math.ceil(recordMaxMedian)+5},
      'record_expanded_median':{'align':'center','format':'@','name':null,'named':false,'width':18},
      'keepers':{'align':'left','format':'@','name':null,'named':false,'width':(38*keeperCount)}
    };
    if (!medianMatchup) {
      delete format.wins_1v1;
      delete format.losses_1v1;
      delete format.ties_1v1;
      delete format.wins_median;
      delete format.losses_median;
      delete format.ties_median;
      delete format.streak_1v1;
      delete format.streak_median;
      delete format.record_median;
      delete format.record_expanded_median;
    }
    if (!keepers) {
      delete format.keepers;
    }
    if (waiverType != 'faab') {
      delete format.waiver_budget;
      delete format.waiver_budget_percent;
    }

    // Applies formatting to columns matching above header names
    Object.keys(format).forEach(key => {
      const index = headers.indexOf(key);
      if (index >= 0) {
        sheet.getRange(2,index+1,teamsLen,1).setHorizontalAlignment(format[key]['align']);
        sheet.setColumnWidth(index+1,format[key]['width']);
        sheet.getRange(2,index+1,teamsLen,1).setNumberFormat(format[key]['format']);
        if (format[key].named) {
          let name = format[key].name;
          if (name == null) {
            name = key.toUpperCase();
          }
          ss.setNamedRange(abbrev + '_' + name,sheet.getRange(2,index+1,teamsLen,1));
        }
      } else if (key == 'record_expanded' || key == 'record_expanded_median') {
        for (let a = 0; a < headers.length; a++) {
          if (typeof headers[a] === 'number' || medianHeaderRegex.test(headers[a])) {
            sheet.getRange(2,a+1,teamsLen,1).setHorizontalAlignment(format[key]['align']);
            sheet.setColumnWidth(a+1,format[key]['width']);
          }
        }
      }
    });

    // Hides some columns if not needed
    if (headers.indexOf('owner_id') >= 0) {
      sheet.hideColumn(sheet.getRange(1,headers.indexOf('owner_id')+1));
    }
    if (headers.indexOf('co_owner_id') >= 0) {
      sheet.hideColumn(sheet.getRange(1,headers.indexOf('co_owner_id')+1));
    }
    
    if (!coowner && headers.indexOf('co_owner_name') >= 0) {
      sheet.hideColumn(sheet.getRange(1,headers.indexOf('co_owner_name')+1));
    }
    if (!coowner && headers.indexOf('co_owner_username') >= 0) {
      sheet.hideColumn(sheet.getRange(1,headers.indexOf('co_owner_username')+1));
    }
    if (!coowner && headers.indexOf('co_owner_id') >= 0) {
      sheet.hideColumn(sheet.getRange(1,headers.indexOf('co_owner_id')+1));
    }
        
    // Color formatting 
    sheet.getRange(1,1,1,headers.length).setFontColor('white');
    let colorArrRow = [];
    let colorArr = [];
    const byeColor = '#F2FFED';
    const missedPlayoffsColor = '#E8E8E8';
    for (a = 0; a < teamsLen+1; a++) {
      colorArrRow = [];
      for (b = 0; b < headers.length; b++) {
        const positions = ['QB','RB','WR','TE','FLEX','SUPER_FLEX','DEF','K','IDP_FLEX','LB','DL','DB']; // All possible positions within Sleeper to see if header matches
        const value = sheet.getRange(a+1,b+1).getValue();
        if (typeof value == 'number') Logger.log(`${headers[b]} being evaluated with value of ${value}`);
        const notPlayoffs = sheet.getRange(a+1,headers.indexOf('playoffs')+1).getValue() == 0;
        const hasBye = sheet.getRange(a+1,headers.indexOf('bye')+1).getValue() == 1;
        if (a == 0) {
          if (positions.indexOf(headers[b]) >= 0) {
            colorArrRow.push('#36576F');
          } else if (headers[b] == 'BN') {
            colorArrRow.push('#82878A');
          } else if (headers[b] == 'IR') {
            colorArrRow.push('#9B7474');   
          } else {
            colorArrRow.push('#000000');
          }
        } else {
          if (!value && !(value === 0)) {
            if (notPlayoffs) {
              colorArrRow.push(missedPlayoffsColor);
            } else if (hasBye) {
              colorArrRow.push(byeColor);
            } else {
              colorArrRow.push('');
            }
          } else if (positions.indexOf(headers[b]) >= 0) {
            colorArrRow.push('#C0D7E8');
          } else if (headers[b] == 'BN') {
            colorArrRow.push('#D4D4D4');
          } else if (headers[b] == 'IR') {
            colorArrRow.push('#F0DFDF');
          } else if (typeof headers[b] === 'number' || medianHeaderRegex.test(headers[b])) {
            value == 'W' ? colorArrRow.push('#A1FBFF') : value == 'L' ? colorArrRow.push('#FFDAA5') : value == 'T' ? colorArrRow.push('#C8C8C8') : colorArrRow.push('');
          } else if (headers[b] == 'name' || headers[b] == 'co_owner_name') {
            colorArrRow.push('#FFF39F');
          } else if (headers[b] == 'playoffs' && notPlayoffs) {
            colorArrRow.push('#ADADAD');
          } else if (headers[b] == 'bye' && value == 1) {
            colorArrRow.push('#9FFF7A')
          } else if (headers[b] == 'waiver_budget_percent') {
            try {
              colorArrRow.push(renderPercentHex('full_alt',value,20));
            }
            catch (err) {
              colorArrRow.push('');
              Logger.log(`${headers[b]} being evaluated; renderPercentHex issue: ${err.stack}`);
            }
          } else if (headers[b] == 'rank' || headers[b] == 'seed') {
            try {
              colorArrRow.push(renderPercentHex('full_alt_invert',(value-1)/(teamsLen-1),teamsLen));
            }
            catch (err) {
              colorArrRow.push('');
              Logger.log(`${headers[b]} being evaluated; renderPercentHex issue: ${err.stack}`);
            }
          } else if (headers[b] == 'wins' || headers[b] == 'wins_1v1' || headers[b] == 'wins_median' || headers[b] == 'rank_div') {
            try {
              colorArrRow.push(renderPercentHex('wins',wins_max > 0 ? value/wins_max : value/10,null));
            }
            catch (err) {
              colorArrRow.push('');
              Logger.log(`${headers[b]} being evaluated; renderPercentHex issue: ${err.stack}`);
            }
          } else if (headers[b] == 'losses' || headers[b] == 'losses_1v1' || headers[b] == 'losses_median') {
            try {
              colorArrRow.push(renderPercentHex('losses',losses_max > 0 ? value/losses_max : value/10,null));
            }
            catch (err) {
              colorArrRow.push('');
              Logger.log(`${headers[b]} being evaluated; renderPercentHex issue: ${err.stack}`);
            }            
          } else if (headers[b] == 'ties' || headers[b] == 'ties_1v1' || headers[b] == 'ties_median') {
            try{ 
              colorArrRow.push(renderPercentHex('neutral_gray',ties_max > 0 ? value/ties_max : 0,null));       
            }
            catch (err) {
              colorArrRow.push('');
              Logger.log(`${headers[b]} being evaluated; renderPercentHex issue: ${err.stack}`);
            }       
          } else if (headers[b] == 'streak' || headers[b] == 'streak_1v1' || headers[b] == 'streak_median') {
            if (!value || typeof value !== 'string' || value.trim() === '') {
              colorArrRow.push('');
            } else {
              let numMatches = value.match(/[0-9]+/g);
              let typeMatches = value.match(/[WLT]/g);
              let len = numMatches ? Math.max(parseInt(numMatches[0]), 1) : 1;
              let type = typeMatches ? typeMatches[0] : null;
              try {
                type == 'W' ? colorArrRow.push(renderPercentHex('wins', len / 10, null)) :
                type == 'L' ? colorArrRow.push(renderPercentHex('losses', len / 10, null)) :
                type == 'T' ? colorArrRow.push(renderPercentHex('neutral_gray', len / 10, null)) : colorArrRow.push('');
              } catch (err) {
                Logger.log(`${headers[b]} being evaluated; renderPercentHex issue: ${err.stack}`);
                colorArrRow.push('');
              }
            }
          } else if (headers[b] == 'fpts' || headers[b] == 'fpts_weekly') {
            try{
              colorArrRow.push(renderPercentHex('positive',fpts_pct[a-1],null));
            }
            catch (err) {
              colorArrRow.push('');
              Logger.log(`${headers[b]} being evaluated; renderPercentHex issue: ${err.stack}`);
            } 
          } else if (headers[b] == 'ppts' || headers[b] == 'ppts_weekly') {
            try{ 
              colorArrRow.push(renderPercentHex('neutral',ppts_pct[a-1],null));
            }
            catch (err) {
              colorArrRow.push('');
              Logger.log(`${headers[b]} being evaluated; renderPercentHex issue: ${err.stack}`);
            }              
          } else if (headers[b] == 'fpts_against' || headers[b] == 'fpts_against_weekly') {
            try{ 
              colorArrRow.push(renderPercentHex('negative',fpts_against_pct[a-1],null));
            }
            catch (err) {
              colorArrRow.push('');
              Logger.log(`${headers[b]} being evaluated; renderPercentHex issue: ${err.stack}`);
            }
          } else if (headers[b] == 'fpts_rnk' || headers[b] == 'ppts_rnk') {
            if (value == 0 || value == '') {
              colorArrRow.push('');
            } else {
              try{
                colorArrRow.push(renderPercentHex('full_alt_invert',(value-1)/(teamsLen-1),teamsLen)); 
              }
              catch (err) {
                colorArrRow.push('');
                Logger.log(`${headers[b]} being evaluated; renderPercentHex issue: ${err.stack}`);
              } 
            }   
          } else if (headers[b] == 'fpts_against_rnk') {
            if (value == 0 || value == '') {
              colorArrRow.push('');
            } else {
              try{ 
                colorArrRow.push(renderPercentHex('full_alt',(value-1)/(teamsLen-1),teamsLen));
              }
              catch (err) {
                colorArrRow.push('');
                Logger.log(`${headers[b]} being evaluated; renderPercentHex issue: ${err.stack}`);
              }
            }
          } else if (headers[b] == 'h2h_wins') {
            try{ 
              colorArrRow.push(renderPercentHex('positive',h2h_wins_pct[a-1],20));
            }
            catch (err) {
              colorArrRow.push('');
              Logger.log(`${headers[b]} being evaluated; renderPercentHex issue: ${err.stack}`);
            }
          } else if (headers[b] == 'h2h_losses') {
            try{ 
              colorArrRow.push(renderPercentHex('negative',h2h_losses_pct[a-1],20));
            }
            catch (err) {
              colorArrRow.push('');
              Logger.log(`${headers[b]} being evaluated; renderPercentHex issue: ${err.stack}`);
            }
          } else if (headers[b] == 'h2h_ties') {
            try{ 
              colorArrRow.push(renderPercentHex('neutral_gray',h2h_ties_pct[a-1],20));
            }
            catch (err) {
              colorArrRow.push('');
              Logger.log(`${headers[b]} being evaluated; renderPercentHex issue: ${err.stack}`);
            }        
          } else if (headers[b] == 'h2h_rnk') {
            try{ 
              colorArrRow.push(renderPercentHex('full_alt_invert',(value-1)/(teamsLen-1),null));
            }
            catch (err) {
              colorArrRow.push('');
              Logger.log(`${headers[b]} being evaluated; renderPercentHex issue: ${err.stack}`);
            }
          } else {
            if (notPlayoffs) {
              colorArrRow.push(missedPlayoffsColor);
            } else if (hasBye) {
              colorArrRow.push(byeColor);
            } else {
              colorArrRow.push('');
            }
          }
        }
      }
      colorArr.push(colorArrRow);
    }
    sheet.getRange(1,1,teamsLen+1,headers.length).setBackgrounds(colorArr);
    sheet.setFrozenRows(1);
    sheet.setFrozenColumns(0);
    sheet.setFrozenColumns(5);
    //sheet.getRange(2,1,data.length,data[0].length).sort([{column: sortColWins, ascending: false},{column: sortColLosses, ascending: false}, {column: sortColFpts, ascending:false}]);
    Logger.log(`✅ Imported overview for ${objLeague.name}`);
    ss.toast(`Imported overview for ${objLeague.name}`, `✅ ${objLeague.name} SUCCESS!`);
  }
}

// SLEEPER PLAYOFF FETCHING
// Dependencies: seasonInfo(), sleeperLeagueInfo()
// Grabs winners and loser brackets and creates an array output of the outcomes of all games and if available, the rank each team finished with. 
// Format: {<team_id>:{"record":[<array>],"rank":<place>},...}
function sleeperPlayoffData(league,week,year) {
  const info = seasonInfo();
  year = year == null ? info[0] : year;
  week = week == null ? info[1] : week;
  let leagueId = league == null ? leagues('BB') : leagues(league);
  const objLeague = sleeperLeagueInfo(leagueId,['teams','playoff_start','playoff_end','playoff_teams']);

  let playoffs = {};
  if (parseInt(objLeague.playoff_start) <= week) {
    let bracketWinners = JSON.parse(UrlFetchApp.fetch(`${sleeperBaseURL}v1/league/${leagueId}/winners_bracket`))
    let bracketLosers = JSON.parse(UrlFetchApp.fetch(`${sleeperBaseURL}v1/league/${leagueId}/losers_bracket`));
    let array = [bracketWinners,bracketLosers];
    const arrayWin = ['W','L'];
    const placesWin = Array(objLeague.playoff_teams).fill('').map((_, i) => i+1);
    //[1,2,3,4,5,6];
    const arrayLoss = ['L','W'];
    const placesLoss = Array(teamsLen - objLeague.playoff_teams).fill('').map((_, i) => teamsLen-i);
    const places = [placesWin,placesLoss];
    try {  
      let round = 1;
      for (let a = 1; a < bracketWinners.length; a++) {
        if (bracketWinners[a].r > round) {
          round = bracketWinners[a].r;
        }
      }
      for (let a = 0; a < 2; a++) {
        let bracket = array[a];
        for (let b = 1; b <= round; b++) {
          for (let c = 0; c < bracket.length; c++) {
            if (bracket[c].r == b) {
              if (bracket[c].w >= 0) {
                if (b > 1 && playoffs[bracket[c].t1] === undefined) {
                  playoffs[bracket[c].t1] = {record:['B']};
                }
                if (b > 1 && playoffs[bracket[c].t1] === undefined) {
                  playoffs[bracket[c].t2] = {record:['B']};
                }
                if (playoffs.hasOwnProperty(bracket[c].w)) {
                  playoffs[bracket[c].w].record.push(arrayWin[a]);
                } else {
                  playoffs[bracket[c].w] = {record:[arrayWin[a]]};
                }
                if (playoffs.hasOwnProperty(bracket[c].l)) {
                  playoffs[bracket[c].l].record.push(arrayLoss[a]);
                } else {
                  playoffs[bracket[c].l] = {record:[arrayLoss[a]]};
                }
                if (bracket[c].hasOwnProperty('p')) {
                  playoffs[bracket[c].w].rank = places[a][bracket[c].p-1];
                  playoffs[bracket[c].l].rank = places[a][bracket[c].p];
                  
                }
              }
            }
          }
        }
      }
      Object.keys(playoffs).forEach(team => {
        if (playoffs[team].record.length < round) {
          playoffs[team].record = playoffs[team].record.concat(Array(round-playoffs[team].record.length).fill(''));
        }
      })
      return playoffs;
    }
    catch (err) {
      Logger.log(err.stack);
      // Logger.log('Completely nothing going on in week ' + a);
    }
  } else {
    Logger.log('Playoffs have yet to start this season');
  }
}

// ==============================================
// SLEEPER TRENDING PLAYERS
// Dependencies: NONE
// Gathers all trending players
function sleeperTrending(){
  const type = ['add','drop'];
  const urlHead = `${sleeperBaseURL}v1/players/nfl/trending/`
  const hours = 24;
  const limit = 100;
  let json = {};
  for (let a = 0; a < type.length; a++) {
    const url = urlHead + type[a] + '?lookback_hours=' + hours + '&limit=' + limit;
    json = JSON.parse(UrlFetchApp.fetch(url));  
  }
  return json;
}

//=======================================
// SLEEPER MATCHUP IMPORT
// Dependencies: seasonInfo(), sleeperLeagueInfo(), sleeperProjectionFetch(), renderPercentHex()
// All matchup data for the provided leagues (in code) for the specified year/week
// also provide abbreviation for one of the leagueIdsAll to selectively import one league
function sleeperMatchup(year,week,leagueIds) {
  Logger.log(`Received ID(s): ${leagueIds}`);
  const  ss = SpreadsheetApp.getActiveSpreadsheet();
  let info;
  if (!year || !week) {
    info = seasonInfo();
  }
  year = year || info[0];
  week = week || info[1];
  if (typeof leagueIds === 'string') {
    leagueIds = [leagueIds];
  }
  Logger.log(`Using year of ${year}...`)
  // const complete = (week < activeWeek || year < YEAR) ? true : false;
  const complete = true;
  
  let suffix = '_DATA';
  if (year < new Date().getFullYear()) {
    suffix = suffix.concat('_'+year);
  }
  const top = ['week','matchup_id','location','roster_id','owner_name','owner_team_name','opponent_roster_id','opponent_owner_name','opponent_team_name','points','points_rank','opponent_points','opponent_points_rank','margin','outcome','proj_points','proj_points_rank','proj_opponent_points','proj_opponent_points_rank','proj_margin','proj_outcome','expected','division','division_name','divisional','h2h_wins','h2h_losses','h2h_ties','proj_h2h_wins','proj_h2h_losses','proj_h2h_ties','issue_count','issue_players','empty_count','empty_slots','zero_count','zero_players','ir_count','ir_players','o_count','o_players','d_count','d_players','q_count','q_players','starters','non-starters'];

  let data = [];
  let points = [];
  let projections = [];
  const objPlayers = JSON.parse(UrlFetchApp.fetch(`${sleeperBaseURL}v1/players/nfl`));
  Logger.log(`Begin processing loops`);
  // Loop to process data for all leagueIds =====================================
  leagueIds.forEach(leagueId => {
    
    const objProj = sleeperProjectionFetch(sleeperScoringSpecific(leagueId),year,week);
    const objLeague = sleeperLeagueInfo(leagueId,['name','teams','divisions','starters','starters_indexed','roster','roster_indexed','scoring','managers','season','scoring_type','starter_size','bench_size','picks','picks_by_roster','picks_by_user','picks_array'])
    headers = [];
    for (b = 0; b < top.length; b++) {
      headers.push(top[b]);
    }

    let abbrev = abbreviation(objLeague.name); // from SheetAndScriptUtilities
    Logger.log(`Working on ${abbrev}`);
    // Fetch object data from SLEEPER]
    Logger.log(`Attempting to pull from: ${sleeperBaseURL}v1/league/${leagueId.toString()}/matchups/${week}`)
    const obj = JSON.parse(UrlFetchApp.fetch(`${sleeperBaseURL}v1/league/${leagueId.toString()}/matchups/${week}`))
    const objUsers = JSON.parse(UrlFetchApp.fetch(`${sleeperBaseURL}v1/league/${leagueId.toString()}/users`));
    const objRosters = JSON.parse(UrlFetchApp.fetch(`${sleeperBaseURL}v1/league/${leagueId.toString()}/rosters`));
    const teams = parseInt(objLeague.teams);
    const divisions = Object.keys(objLeague.divisions).length > 0;
    
    // Removes 'division' header if not present =====================================
    if (divisions === false) {
      headers.splice(headers.indexOf('divisional'),1);
      headers.splice(headers.indexOf('division'),1);
      headers.splice(headers.indexOf('division_name'),1);
      Logger.log('No divisions established in ' + objLeague.name + ' league');
    }
    
    // Prep sheet to minimize cells and also ensure there are enough cells
    let sheet = ss.getSheetByName(abbrev + suffix);
    if (sheet == null){
      ss.insertSheet(abbrev + suffix);
      sheet = ss.getSheetByName(abbrev + suffix);
    }
    const existingHeaders = sheet.getRange(1,1,1,sheet.getMaxColumns()).getValues().flat();
    
    // Compare existing headers with recently created players array and add columns if needed

    data = {};
    points = obj.map(x => x.points);
    // sort(points);
    points.sort((a, b) => b - a);
    
    let missing = [], missingNames = [];
    let roster = objLeague.starters;
    //desc(points);
    for (b = 0; b < obj.length; b++) {
      try {
        let starters = obj[b].starters;
        let projection = 0;
        if (starters.length > 0) {
          for (let c = 0; c < starters.length; c++) {
            if (starters[c] in objProj) {
              projection = projection + parseFloat(objProj[starters[c]]);
            }
          }
        }
        obj[b].projection = projection.toFixed(2);
      }
      catch (err) {
        Logger.log('No starters assigned yet for team ID ' + (b+1));
        missing.push(b);
      }
    }

    if (missing.length > 0) {
      for (let b = 0; b < missing.length; b++) {
        let projection = 0;
        let rosterArr = [];
        let fullRoster = obj[missing[b]].players;        
        for (let c = 0; c < fullRoster.length; c++) {
          rosterArr[c] = {};
          rosterArr[c].id = fullRoster[c];
          if (fullRoster[c] in objPlayers) {
            rosterArr[c].position = objPlayers[fullRoster[c]].fantasy_positions[0];
          } else {
            rosterArr[c].position =  '';
          }
          if (fullRoster[c] in objProj) {
            rosterArr[c].projection = parseFloat(objProj[fullRoster[c]]);
          } else {
            rosterArr[c].projection = 0;
          }
        }
        for (let c = 0; c < roster.length; c++) {
          let eligible = [];
          if (roster[c] == 'FLEX') {
            eligible = rosterArr.filter(x => (x.position == 'RB' || x.position == 'WR' || x.position == 'TE'));
          } else if (roster[c] == 'SPFLX') {
            eligible = rosterArr.filter(x => (x.position == 'QB' || x.position == 'RB' || x.position == 'WR' || x.position == 'TE'));
          } else if (roster[c] == 'IDP_FLEX') {
            eligible = rosterArr.filter(x => (x.position == 'LB' || x.position == 'DB' || x.position == 'DL'));
          } else {
            eligible = rosterArr.filter(x => x.position == roster[c]);
          }
          eligible.sort((a, b) => b.projection - a.projection);
          try{ 
            projection = projection + eligible[0].projection;
          }
          catch (err) {
            Logger.log('No eligible players found for ' + roster[c] + ' on roster of ' + (missing[b]+1));
          }
        }
        obj[missing[b]].starters = [];
        obj[missing[b]].projection = projection.toFixed(2);
      }
    }

    projections = obj.map(x => x.projection);
    // sort(projection);
    projections.sort((a, b) => b - a);

    for (b = 0; b < obj.length; b++) {
      ownerId = objRosters.filter(x => x.roster_id == obj[b].roster_id)[0].owner_id;
      let opponent,arr = [];
      let owner = objUsers.filter(x => x.user_id == ownerId)[0].display_name;
      if (missing.indexOf(obj[b].roster_id) >= 0) {
        missingNames.push(owner);
      }
      
      if (obj[b].matchup_id != null) {
        opponent = obj.filter(x => x.matchup_id == obj[b].matchup_id).filter(x => x.roster_id != obj[b].roster_id)[0];
        let opponentId = objRosters.filter(x => x.roster_id == opponent.roster_id)[0].owner_id;
        let opponentTeamName = objUsers.filter(x => x.user_id == opponentId)[0].metadata.team_name == null ? 'Team ' + objUsers.filter(x => x.user_id == opponentId)[0].display_name : objUsers.filter(x => x.user_id == opponentId)[0].metadata.team_name;
        let opponentOwnerName = objUsers.filter(x => x.user_id == opponentId)[0].display_name;
        
        let projPoints = parseFloat(obj[b].projection) == 0 ? '' : parseFloat(obj[b].projection)
        let projPointsRank = obj[b].projection > 0 ? projections.indexOf(obj[b].projection)+1 : '';

        let oppProjPoints = parseFloat(opponent.projection) == 0 ? '' : parseFloat(opponent.projection);
        let oppProjPointsRank = opponent.projection > 0 ? projections.indexOf(opponent.projection)+1 : '';

        let teamName = objUsers.filter(x => x.user_id == ownerId)[0].metadata.team_name == null ? 'Team ' + owner : objUsers.filter(x => x.user_id == ownerId)[0].metadata.team_name
        arr = [week,
              obj[b].matchup_id, // matchup_id
              obj[b].roster_id, // roster_id
              owner,
              teamName,
              opponent.roster_id, // opponent_roster_id
              opponentOwnerName,
              opponentTeamName,
              obj[b].points == 0 ? '' : obj[b].points, // points
              (complete == false ? '' : obj[b].points > 0 ? points.indexOf(obj[b].points)+1 : ''), // points_rank
              opponent.points == 0 ? '' : opponent.points, // opponent_points
              (complete == false ? '' : opponent.points > 0 ? points.indexOf(opponent.points)+1 : ''), // opponent_points_rank
              (complete == false ? '' : (obj[b].points != 0 && opponent.points != 0) ? obj[b].points-opponent.points : ''), // margin
              (complete == false ? '' : (obj[b].points != 0 && opponent.points != 0) ? (obj[b].points > opponent.points ? 'W' : (obj[b].points < opponent.points ? 'L' : (obj[b].points == opponent.points && obj[b].points > 0 ? 'T' : ''))) : ''),
              projPoints,
              projPointsRank,
              oppProjPoints,
              oppProjPointsRank,
              (projPoints != 0 && oppProjPoints != 0) ? projPoints - oppProjPoints : '', // proj_margin
              (projPoints != 0 && oppProjPoints != 0) ? (projPoints > oppProjPoints ? 'W' : (projPoints < oppProjPoints ? 'L' : (projPoints == oppProjPoints && projPoints > 0 ? 'T' : ''))) : '', // proj_outcome
              (complete == false ? '' : (obj[b].points != 0 && opponent.points != 0) ? ((obj[b].points > opponent.points && projPoints > oppProjPoints) ? 1 : ((obj[b].points < opponent.points && projPoints < oppProjPoints) ? 1 : 0)) : '')] // expected
        // Divisions and divisional matchup appending
        if (divisions === true) {
          arr.push(objRosters.filter(x => x.roster_id == obj[b].roster_id)[0].settings.division); // division
          arr.push(objLeague.divisions[objRosters.filter(x => x.roster_id == obj[b].roster_id)[0].settings.division]); // division_name   
          arr.push((objRosters.filter(x => x.roster_id == obj[b].roster_id)[0].settings.division) == (objRosters.filter(x => x.roster_id == opponent.roster_id)[0].settings.division) ? 1 : 0); // divisional
        } 
      } else {
        opponent = null; // bye
        arr = [week, // week
              '', // matchup_id
              obj[b].roster_id, // roster_id
              owner, // owner_name
              objUsers.filter(x => x.user_id == ownerId)[0].metadata.team_name == null ? 'Team ' + owner : objUsers.filter(x => x.user_id == ownerId)[0].metadata.team_name, // team_name
              '', // opponent_roster_id
              '', // opponent_owner_name
              '', // opponent_team_name
              obj[b].points == 0 ? '' : obj[b].points, // points
              (complete == false ? '' : obj[b].points > 0 ? points.indexOf(obj[b].points)+1 : ''), // points_rank
              '', // opponent_points
              '', // opponent_points_rank
              '', // margin
              'B', // outcome - B for Bye
              obj[b].projection == 0 ? '' : obj[b].projection, // proj_points
              (complete == false ? '' : obj[b].projection > 0 ? projections.indexOf(obj[b].projection)+1 : ''), // proj_points_rank
              '', // proj_opponent_points
              '', // proj_opponent_points_rank
              '', // proj_opponent_points_margin
              'B', // proj_outcome - B for Bye
              ''] // expected
        // Divisions and divisional matchup appending
        if (divisions === true) {
          arr.push(objRosters.filter(x => x.roster_id == obj[b].roster_id)[0].settings.division); // division
          arr.push(objLeague.divisions[objRosters.filter(x => x.roster_id == obj[b].roster_id)[0].settings.division]); // division_name   
          arr.push(''); // divisional
        }               
      }
      
      // Head to head record appending
      arr.push(obj[b].points == 0 ? '' : points.filter(x => x < obj[b].points).length); // h2h_wins
      arr.push(obj[b].points == 0 ? '' : points.filter(x => x > obj[b].points).length); // h2h_losses
      arr.push(obj[b].points == 0 ? '' : points.filter(x => x == obj[b].points).length - 1); // h2h_ties
      // Head to head projected record appending
      arr.push(obj[b].projection == 0 ? '' : projections.filter(x => x < obj[b].projection).length); // h2h_wins
      arr.push(obj[b].projection == 0 ? '' : projections.filter(x => x > obj[b].projection).length); // h2h_losses
      arr.push(obj[b].projection == 0 ? '' : projections.filter(x => x == obj[b].projection).length - 1); // h2h_ties      
      // Additions for team starter and roster issues
      let emptySlots = [];
      for (let c = 0; c < roster.length; c++) {
        if (obj[b].starters[c] == 0) {
          emptySlots.push(roster[c]);
        }
      }
      let zeros = [],
          q = [],
          d = [],
          o = [],
          ir = [];
      for (let c = 0; c < obj[b].starters.length; c++) {
        let player = obj[b].starters[c]
        if (player != 0){
          let proj = objProj[player];
          (proj == 0 || proj == null || proj == undefined) ? zeros.push(player) : null;

          try {
            let status = objPlayers[player].injury_status;
            status == 'Questionable' ? q.push(player) : status == 'Doubtful' ? d.push(player) : status == 'Out' ? o.push(player) : status == 'IR' ? ir.push(player) : null;

          } catch (err) {
            Logger.log('No player information for id ' + player);
          }
        } else {
          obj[b].starters[c] = '';
        }
      }

      let starters = obj[b].starters;
      let bench = [];
      try {
        bench = obj[b].players.filter(x => !obj[b].starters.includes(x));
      } catch (err) {
        // No Bench
      }
      try { 
        bench = bench.filter(x => !obj[b].reserve);
      } catch (err) {
        // Logger.log('No injured reserve');
      }

      let injured = [...new Set(zeros.concat(ir,o,d,q))];
      let arrIssues = [injured.length + emptySlots.length, // issue_count
            '\'' + injured.toString(), // issue_players
            emptySlots.length, // empty_count
            emptySlots.join(','), // empty_slots
            zeros.length, // zero_count
            '\'' + zeros.toString(), // zero_players
            ir.length, // ir_count
            '\'' + ir.toString(), // ir_players
            o.length, // o_count
            '\'' + o.toString(), // o_players
            d.length, // d_count
            '\'' + d.toString(), // d_players
            q.length, // q_count
            '\'' + q.toString(), // q_players
            starters.join(';'), // starters
            bench.join(';')] // non-starters
      arr = arr.concat(arrIssues);
      data[obj[b].matchup_id] == null ? data[obj[b].matchup_id] = {0:null,1:null} : null;
      if (opponent != null) {
        obj[b].roster_id < opponent.roster_id ? data[obj[b].matchup_id][0] = arr : data[obj[b].matchup_id][1] = arr;
      } else {
        if (data.bye == undefined) {
          data.bye = [arr];
        } else {
          data.bye.push(arr);
        }
      }
    }
    arr = [];
    for(let b = 1; b <= Object.keys(data).length; b++) {
      try {
        arr.push(data[b][0]);
        arr.push(data[b][1]);
      } catch (err) {
      }
    }
    if (data.bye != undefined) {
      for(let b = 0; b < data.bye.length; b++) {
        arr.push(data.bye[b]);
      }
    }

    try {
      sheet.getFilter().remove();
    }
    catch (err) {
      Logger.log('No existing filter to remove');
    }

    let range = sheet.getRange(1,1,1,headers.length);
    range.setValues([headers]);
    range.setBackground('black');
    range.setFontColor('white');
    if (headers.indexOf('location')>0) {
      let locationCol = headers.indexOf('location');
      for (let b = 0; b < arr.length; b++) {
        arr[b].splice(locationCol,0,b%2 == 0 ? 'away' : 'home');
      }
    }
    range = sheet.getRange(teams*(week-1)+2,1,teams,arr[0].length)
    range.setValues(arr);
    range.setHorizontalAlignment('left');
    sheet.setColumnWidths(1,headers.length,35);

    let format = {
      'week':{'align':'right','format':'0','width':20},
      'matchup_id':{'align':'right','format':'0','width':20},
      'location':{'align':'middle','format':'@','width':40},
      'roster_id':{'align':'right','format':'0','width':20},
      'opponent_roster_id':{'align':'right','format':'0','width':20},
      'owner_name':{'align':'left','format':'@','width':120},
      'owner_team_name':{'align':'left','format':'@','width':120},
      'opponent_owner_name':{'align':'left','format':'@','width':120},
      'opponent_team_name':{'align':'left','format':'@','width':120},
      'points':{'align':'right','format':'0.00','width':50},
      'points_rank':{'align':'center','format':'0','width':30},
      'opponent_points':{'align':'right','format':'0.00','width':50},
      'opponent_points_rank':{'align':'center','format':'0','width':30},
      'margin':{'align':'right','format':'0.00','width':50},
      'outcome':{'align':'center','format':'@','width':30},
      'proj_points':{'align':'right','format':'0.00','width':50},
      'proj_points_rank':{'align':'center','format':'0','width':30},
      'proj_opponent_points':{'align':'right','format':'0.00','width':50},
      'proj_opponent_points_rank':{'align':'center','format':'0','width':30},
      'proj_margin':{'align':'right','format':'0.00','width':50},
      'proj_outcome':{'align':'center','format':'@','width':30},
      'expected':{'align':'center','format':'0','width':30},
      'division':{'align':'right','format':'0','width':20},
      'division_name':{'align':'left','format':'@','width':80},
      'divisional':{'align':'right','format':'0','width':20},
      'h2h_wins':{'align':'center','format':'0','width':30},
      'h2h_losses':{'align':'center','format':'0','width':30},
      'h2h_ties':{'align':'center','format':'0','width':30},
      'proj_h2h_wins':{'align':'center','format':'0','width':30},
      'proj_h2h_losses':{'align':'center','format':'0','width':30},
      'proj_h2h_ties':{'align':'center','format':'0','width':30},
      'issue_count':{'align':'right','format':'0','width':20},
      'issue_players':{'align':'left','format':'@','width':35},
      'empty_count':{'align':'right','format':'0','width':20},
      'empty_slots':{'align':'left','format':'@','width':35},
      'zero_count':{'align':'right','format':'0','width':20},
      'ir_players':{'align':'left','format':'@','width':35},
      'ir_count':{'align':'right','format':'0','width':20},
      'o_count':{'align':'right','format':'0','width':20},
      'o_players':{'align':'left','format':'@','width':35},
      'd_count':{'align':'right','format':'0','width':20},
      'd_players':{'align':'left','format':'@','width':35},
      'q_count':{'align':'right','format':'0','width':20},
      'q_players':{'align':'left','format':'@','width':35},
      'starters':{'align':'left','format':'@','width':320},
      'non-starters':{'align':'left','format':'@','width':210}};

    // Applies formatting to columns matching above header names
    Object.keys(format).forEach(key => {
      if (headers.indexOf(key) >= 0) {
        sheet.setColumnWidth(headers.indexOf(key)+1,format[key].width);
        sheet.getRange(2,headers.indexOf(key)+1,teams*(week-1)+1+teams,1).setNumberFormat(format[key].format)
          .setHorizontalAlignment(format[key].align)
      }
    });

    let colorArrRow = [];
    let colorArr = [];
    
    if (complete == true) {
      // Actual arrays
      let pointsScored = sheet.getRange(teams*(week-1)+2,headers.indexOf('points')+1,teams,1).getValues().flat();
      var pointsScoredPct = pointsScored.map(a => (a-points[teams-1])/(points[0]-points[teams-1]));
      let pointsAgainst = sheet.getRange(teams*(week-1)+2,headers.indexOf('opponent_points')+1,teams,1).getValues().flat();
      var pointsAgainstPct = pointsAgainst.map(a => (a-Math.min(...pointsAgainst))/(Math.max(...pointsAgainst)-Math.min(...pointsAgainst)));
      let margin = sheet.getRange(teams*(week-1)+2,headers.indexOf('margin')+1,teams,1).getValues().flat();
      var marginPct = margin.map(a => (a-Math.min(...margin))/(Math.max(...margin)-Math.min(...margin)));
    }
    // Projected arrays
    let projPointsScored = sheet.getRange(teams*(week-1)+2,headers.indexOf('proj_points')+1,teams,1).getValues().flat();
    var projPointsScoredPct = projPointsScored.map(a => (a-projections[teams-1])/(projections[0]-projections[teams-1]));
    let projPointsAgainst = sheet.getRange(teams*(week-1)+2,headers.indexOf('proj_opponent_points')+1,teams,1).getValues().flat();
    var projPointsAgainstPct = projPointsAgainst.map(a => (a-Math.min(...projPointsAgainst))/(Math.max(...projPointsAgainst)-Math.min(...projPointsAgainst)));
    let projMargin = sheet.getRange(teams*(week-1)+2,headers.indexOf('proj_margin')+1,teams,1).getValues().flat();
    var projMarginPct = projMargin.map(a => (a-Math.min(...projMargin))/(Math.max(...projMargin)-Math.min(...projMargin)));

    for (let b = 0; b < teams; b++) {
      colorArrRow = [];
      let matchup = sheet.getRange(teams*(week-1)+2+b,headers.indexOf('matchup_id')+1).getValue();
      for (c = 0; c < headers.length; c++) {
        if (headers[c] == 'starters') {
          colorArrRow.push('#C3ECFA');
        } else if (headers[c] == 'non-starters') {
          colorArrRow.push('#EAEAEA');
        } else {
          let value = sheet.getRange(teams*(week-1)+2+b,c+1).getValue();
          if ((headers[c] == 'o_count' || headers[c] == 'empty_count') && value > 0 && complete == false) {
            colorArrRow.push('#FFA2AF');
          } else if (headers[c] == 'q_count' && value > 0 && complete == false) {
            colorArrRow.push('#FFF18E');
          } else if (headers[c] == 'ir_count' && value > 0 && complete == false) {
            colorArrRow.push('#E2A9C5');
          } else if (['points','points_rank','opponent_points','opponent_points_rank','margin','outcome','expected','h2h_wins','h2h_losses','h2h_ties',].indexOf(headers[c]) >= 0 && complete == true) {
            switch (headers[c]) {
              case 'points':
                colorArrRow.push(renderPercentHex('positive',pointsScoredPct[b]));
                break;
              case 'points_rank':
                colorArrRow.push(value > 0 ? renderPercentHex('positive',(teams-value)/teams) : '');
                break;                
              case 'opponent_points':
                colorArrRow.push(renderPercentHex('negative',pointsAgainstPct[b]));
                break;
              case 'opponent_points_rank':
                colorArrRow.push(value > 0 ? renderPercentHex('negative',(teams-value)/teams) : '');
                break;
              case 'margin':
                colorArrRow.push(renderPercentHex('full',marginPct[b]));
                break;                
              case 'outcome':
                colorArrRow.push(value == 'W' ? '#D3FFC3' : value == 'L' ? '#FFC6BB' : value == 'T' ? '#E5E5E5' : '');
                break;
              case 'expected':
                colorArrRow.push(value == '1' ? '#9EFFEF' : value == '0' ? '#FFF69E' : '');
                break;                 
              case 'h2h_wins':
                colorArrRow.push(renderPercentHex('positive',value/teams));
                break;
              case 'h2h_losses':
                colorArrRow.push(renderPercentHex('negative',value/teams));
                break;
              case 'h2h_ties':
                colorArrRow.push(value > 0 ? '#D8D8D8' : '');
                break;
            }
          }  else if (['proj_points','proj_points_rank','proj_opponent_points','proj_opponent_points_rank','proj_margin','proj_outcome','proj_h2h_wins','proj_h2h_losses','proj_h2h_ties'].indexOf(headers[c]) >= 0) {
            switch (headers[c]) {
              case 'proj_points':
                colorArrRow.push(renderPercentHex('positive',projPointsScoredPct[b]));
                break;
              case 'proj_points_rank':
                colorArrRow.push(value > 0 ? renderPercentHex('positive',(teams-value)/teams) : '');
                break;             
              case 'proj_opponent_points':
                colorArrRow.push(renderPercentHex('negative',projPointsAgainstPct[b]));
                break;
              case 'proj_opponent_points_rank':
                colorArrRow.push(value > 0 ? renderPercentHex('negative',(teams-value)/teams) : '');
                break;
              case 'proj_margin':
                colorArrRow.push(renderPercentHex('full',projMarginPct[b]));
                break;                
              case 'proj_outcome':
                colorArrRow.push(value == 'W' ? '#D3FFC3' : value == 'L' ? '#FFC6BB' : value == 'T' ? '#E5E5E5' : '');
                break;
              case 'proj_h2h_wins':
                colorArrRow.push(renderPercentHex('positive',value/teams));
                break;                
              case 'proj_h2h_losses':
                colorArrRow.push(renderPercentHex('negative',value/teams));
                break;
              case 'proj_h2h_ties':
                colorArrRow.push(renderPercentHex('negative',value/teams));
                break; 

            }
          } else if (headers[c] == 'location') {
            colorArrRow.push(value == 'away' ? '#FFF69E' : value == 'home' ? '#9EFFEF' : '');
          } else if ((Math.floor(b/2)+1) % 2 == 0) {
            colorArrRow.push(week % 2 == 0 ? '#CCCCCC' : '#F3F3F3');
          } else {
            colorArrRow.push(week % 2 == 0 ? '#D8D8D8' : 'white');
          }
        }
      }
      colorArr.push(colorArrRow);
    }
    sheet.getRange(teams*(week-1)+2,1,teams,headers.length).setBackgrounds(colorArr);
    ss.setNamedRange(abbrev + suffix + '_HEADERS',sheet.getRange(1,1,1,headers.length)); // Creates named range that matches the sheet name of all data
    ss.setNamedRange(abbrev + suffix,sheet.getRange(1,1,sheet.getLastRow(),headers.length)); // Creates named range that matches the sheet name of all data
    sheet.setFrozenColumns(4);
    sheet.setFrozenRows(1);
    sheet.getRange(1,1,teams*week+1,sheet.getMaxColumns()).createFilter();
    
    ss.toast('Week ' + week + ' imported successfully for ' + objLeague.name);
    if (missing.length > 0) {
      let text = '';
      for (let a = 0; a < missingNames.length; a++) {
        text = text + missingNames[a] + '\r\n';
      }
      Logger.log('Idealized projections used for ' + missing.length + ' member(s):\r\n' + text);
      Utilities.sleep(500);
      ss.toast('Idealized projections used for ' + missing.length + ' member(s):\r\n' + text);
    }
  });
  ss.toast('Done with week '  + week + ' for all leagueIds submitted');
}

//=======================================
// SLEEPER STATS IMPORT
// Dependencies: seasonInfo()
// All matchup data for the provided leagues (in code) for the specified year/week
// @param {number} userYear - The year to fetch (e.g. 2024)
// @param {number[]} userWeeks - Array of weeks to fetch (e.g. [1, 2, 3] or [14])
function sleeperStats(userYear, userWeeks) {
  const info = seasonInfo();
  
  const year = userYear || info[0];
  const targetWeeks = (userWeeks && userWeeks.length > 0) ? userWeeks : [info[1]];
  
  const totalSeasonWeeks = 18;
  const urlBase = `${sleeperBaseURL}stats/nfl/`;
  const urlTail = '?season_type=regular&position[]=QB&position[]=RB&position[]=TE&position[]=WR&position[]=K';
  
  let data = {};
  const metrics = ['tm_off_snp', 'off_snp',
      'rec_tgt', 'rec_rz_tgt', 'rec_air_yd', 'rec_yd', 'rec', 'rec_fd', 'rec_td', 'rec_2pt',
      'rush_att', 'rush_rz_att', 'rush_yd', 'rush_fd', 'rec_td','rec_2pt',
      'fum_lost'];
  
  // Template for the full season (indices 0-18)
  const template = Array(totalSeasonWeeks).fill(null);

  // Loop through each week requested in the userWeeks array
  targetWeeks.forEach(wk => {
    // Ensure week is within NFL bounds
    if (wk < 1 || wk > totalSeasonWeeks) return;

    const url = `${urlBase}${year}/${wk}${urlTail}`;

    try {
      const response = UrlFetchApp.fetch(url);
      const json = JSON.parse(response.getContentText());
      json ? Logger.log(`Fetched ${year}, week ${wk}.`) : Logger.log(`Issue fetching ${year}, week ${wk}!`)
      Object.keys(json).forEach(key => {
        const p = json[key];
        const id = p.player_id;
        
        // Handle cases where player or position data might be missing
        if (!p.player || !p.player.fantasy_positions) return;
        
        const pos = p.player.fantasy_positions[p.player.fantasy_positions.length - 1];
        const stats = p.stats || {};

        // Calculate specific derived metrics
        const teamSnaps = stats.tm_off_snp || 0;
        const playerSnaps = stats.off_snp || 0;
        const percent = teamSnaps > 0 ? Number.parseFloat((playerSnaps / teamSnaps).toFixed(2)) : 0;
        const played = playerSnaps > 0 ? 1 : 0;

        // 3. Initialize player object if not already in data
        if (!data.hasOwnProperty(id)) {
          data[id] = {
            'name': p.player.first_name + ' ' + p.player.last_name,
            'pos': pos,
            'pct': [...template],
            'binary': [...template] 
          };
          // Initialize all metric arrays with nulls
          metrics.forEach(m => {
            data[id][m] = [...template];
          });
        }

        // 4. Assign data to the specific index (Week - 1)
        const idx = wk - 1;
        data[id].pct[idx] = percent;
        data[id].binary[idx] = played;

        metrics.forEach(m => {
          // Use 0 as default for volume metrics if player exists in the fetch but has no stat for that metric
          data[id][m][idx] = stats[m] ? stats[m] : 0;
        });
      });
    } catch (e) {
      console.error(`Failed to fetch stats for Year: ${year}, Week: ${wk}. Error: ${e}`);
    }
  });

  return {
    data: data,
    weeks: totalSeasonWeeks,
    yearProcessed: year,
    weeksProcessed: targetWeeks
  };
}

//=======================================
// SLEEPER STATS LOGGING
// Dependencies: sleeperStats(), adjustRows(), adjustColumns()
// Writes data from sleeperStats function from and object to a table within the sheet / no color formatting - for lookups
function sleeperStatsLogging(userYear,userWeeks, addYear) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const platform = 'SLPR';
  const name = 'STATS' + (addYear ? '_' + userYear : '');  
  let headers = ['id','name','pos'];
  const sheetName = platform + '_' + name;
  const inputs = sleeperStats(userYear,userWeeks);
  const data = inputs.data;
  const weeks = inputs.weeks;

  let dataPoints = {
    'id':{'range_name':platform + '_STATS_ID','width':50,'hide':false,'named_range':true,'columns':1,'align':'left'},
    'name':{'range_name':platform + '_STATS_NAME','width':170,'hide':false,'named_range':true,'columns':1,'align':'left'},
    'pos':{'range_name':platform + '_STATS_POS','width':30,'hide':false,'named_range':true,'columns':1,'align':'left'},
    'pct':{'range_name':platform + '_STATS_PCT','width':30,'hide':false,'named_range':true,'columns':weeks,'align':'center'},
    'binary':{'width':15,'hide':false,'named_range':true,'columns':weeks,'align':'center'},
    'off_snp':{'width':30,'hide':false,'named_range':true,'columns':weeks,'align':'center'},
    'tm_off_snp':{'width':30,'hide':false,'named_range':true,'columns':weeks,'align':'center'},
    'rec_tgt':{'width':20,'hide':false,'named_range':true,'columns':weeks,'align':'center'},
    'rec_rz_tgt':{'width':20,'hide':false,'named_range':true,'columns':weeks,'align':'center'},
    'rec_air_yd':{'width':20,'hide':false,'named_range':true,'columns':weeks,'align':'center'},
    'rec':{'width':20,'hide':false,'named_range':true,'columns':weeks,'align':'center'},
    'rec_yd':{'width':25,'hide':false,'named_range':true,'columns':weeks,'align':'center'},
    'rec_fd':{'width':20,'hide':false,'named_range':true,'columns':weeks,'align':'center'},
    'rec_td':{'width':20,'hide':false,'named_range':true,'columns':weeks,'align':'center'},
    'rec_2pt':{'width':20,'hide':false,'named_range':true,'columns':weeks,'align':'center'},
    'rush_att':{'width':20,'hide':false,'named_range':true,'columns':weeks,'align':'center'},
    'rush_rz_att':{'width':20,'hide':false,'named_range':true,'columns':weeks,'align':'center'},
    'rush_yd':{'width':25,'hide':false,'named_range':true,'columns':weeks,'align':'center'},
    'rush_fd':{'width':20,'hide':false,'named_range':true,'columns':weeks,'align':'center'},
    'rush_td':{'width':20,'hide':false,'named_range':true,'columns':weeks,'align':'center'},
    'rush_2pt':{'width':20,'hide':false,'named_range':true,'columns':weeks,'align':'center'},
    'fum_lost':{'width':20,'hide':false,'named_range':true,'columns':weeks,'align':'center'}
  };

  let weeksArr = [];
  Object.keys(dataPoints).forEach(key => {
    if (headers.indexOf(key) == -1) {
      weeksArr.push(...Array.from({length:weeks}, (_,w) => key+'_'+(w+1)))
    }
  });

  headers = headers.concat(weeksArr);
  let sheet = ss.getSheetByName(sheetName) || ss.insertSheet(sheetName);
  sheet.getRange(1,1).setValue(platform);
  sheet.clear();

  let table = [];
  Object.keys(data).forEach(player => {
    let arr = [player,data[player].name,data[player].pos];
    Object.keys(dataPoints).forEach(key => {
      if (headers.indexOf(key) == -1) {
        arr = arr.concat(data[player][key]);
      }
    });
    table.push(arr);
  });
  
  sheet.getRange(1,1,1,headers.length).setValues([headers]);  
  sheet.getRange(2,1,table.length,table[0].length).setValues(table);

  Object.keys(dataPoints).forEach(entry => {
    let range;
    let colIdx = headers.indexOf(dataPoints[entry].columns > 1 ? entry+'_1' : entry) + 1;
    range = sheet.getRange(2, colIdx, table.length, dataPoints[entry].columns);
    sheet.setColumnWidths(colIdx, dataPoints[entry].columns, dataPoints[entry].width);
    ss.setNamedRange(platform + '_' + name + '_' + entry.toUpperCase(), range);
    range.setHorizontalAlignment(dataPoints[entry].align);
  });

  adjustRows(sheet);
  adjustColumns(sheet);
  ss.toast('Imported updated statistics table');
}

//=======================================
// SLEEPER SEASON STATS LOGGING
// Dependencies: sleeperStats(), adjustRows(), adjustColumns()
// Aggregates season totals across multiple years and writes to sheet SLPR_SEASON_STATS.
function sleeperSeasonStatsLogging(startYear, endYear, maxWeek) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const platform = 'SLPR';
  const name = 'SEASON_STATS';  
  const sheetName = platform + '_' + name;
  
  // Build array of target years
  let years = [];
  for (let yr = startYear; yr <= endYear; yr++) {
    years.push(yr);
  }
  const yearsCount = years.length;

  // Build target weeks array
  const userWeeks = Array.from({ length: maxWeek }, (_, i) => i + 1);

  let headers = ['id', 'name', 'pos'];

  let dataPoints = {
    'id': {'width': 50, 'hide': false, 'named_range': true, 'columns': 1, 'align': 'left'},
    'name': {'width': 170, 'hide': false, 'named_range': true, 'columns': 1, 'align': 'left'},
    'pos': {'width': 30, 'hide': false, 'named_range': true, 'columns': 1, 'align': 'left'},
    'pct': {'width': 30, 'hide': false, 'named_range': true, 'columns': yearsCount, 'align': 'center'},
    'binary': {'width': 15, 'hide': false, 'named_range': true, 'columns': yearsCount, 'align': 'center'},
    'off_snp': {'width': 30, 'hide': false, 'named_range': true, 'columns': yearsCount, 'align': 'center'},
    'tm_off_snp': {'width': 30, 'hide': false, 'named_range': true, 'columns': yearsCount, 'align': 'center'},
    'rec_tgt': {'width': 20, 'hide': false, 'named_range': true, 'columns': yearsCount, 'align': 'center'},
    'rec_rz_tgt': {'width': 20, 'hide': false, 'named_range': true, 'columns': yearsCount, 'align': 'center'},
    'rec_air_yd': {'width': 20, 'hide': false, 'named_range': true, 'columns': yearsCount, 'align': 'center'},
    'rec': {'width': 20, 'hide': false, 'named_range': true, 'columns': yearsCount, 'align': 'center'},
    'rec_yd': {'width': 25, 'hide': false, 'named_range': true, 'columns': yearsCount, 'align': 'center'},
    'rec_fd': {'width': 20, 'hide': false, 'named_range': true, 'columns': yearsCount, 'align': 'center'},
    'rec_td': {'width': 20, 'hide': false, 'named_range': true, 'columns': yearsCount, 'align': 'center'},
    'rec_2pt': {'width': 20, 'hide': false, 'named_range': true, 'columns': yearsCount, 'align': 'center'},
    'rush_att': {'width': 20, 'hide': false, 'named_range': true, 'columns': yearsCount, 'align': 'center'},
    'rush_rz_att': {'width': 20, 'hide': false, 'named_range': true, 'columns': yearsCount, 'align': 'center'},
    'rush_yd': {'width': 25, 'hide': false, 'named_range': true, 'columns': yearsCount, 'align': 'center'},
    'rush_fd': {'width': 20, 'hide': false, 'named_range': true, 'columns': yearsCount, 'align': 'center'},
    'rush_td': {'width': 20, 'hide': false, 'named_range': true, 'columns': yearsCount, 'align': 'center'},
    'rush_2pt': {'width': 20, 'hide': false, 'named_range': true, 'columns': yearsCount, 'align': 'center'},
    'fum_lost': {'width': 20, 'hide': false, 'named_range': true, 'columns': yearsCount, 'align': 'center'}
  };

  // Group headers by metric first (e.g., pct_2022, pct_2023, pct_2024...)
  let statHeaders = [];
  Object.keys(dataPoints).forEach(key => {
    if (headers.indexOf(key) === -1) {
      years.forEach(yr => {
        statHeaders.push(key + '_' + yr);
      });
    }
  });

  headers = headers.concat(statHeaders);

  // Fetch stats for each year and aggregate totals
  let allPlayers = {};

  years.forEach(yr => {
    const inputs = sleeperStats(yr, userWeeks);
    const data = inputs.data;

    Object.keys(data).forEach(id => {
      const p = data[id];
      
      // Initialize or update player info
      if (!allPlayers[id]) {
        allPlayers[id] = {
          name: p.name,
          pos: p.pos,
          yearsData: {}
        };
      } else {
        // Keeps player name and position updated to the most recent season data
        allPlayers[id].name = p.name;
        allPlayers[id].pos = p.pos;
      }

      // Helper function to sum metric arrays across weeks
      const sumArr = (arr) => arr ? arr.slice(0, maxWeek).reduce((sum, val) => sum + (Number(val) || 0), 0) : 0;

      const totalOffSnp = sumArr(p.off_snp);
      const totalTmOffSnp = sumArr(p.tm_off_snp);
      const seasonPct = totalTmOffSnp > 0 ? Number.parseFloat((totalOffSnp / totalTmOffSnp).toFixed(2)) : 0;

      allPlayers[id].yearsData[yr] = {
        'pct': seasonPct,
        'binary': sumArr(p.binary),
        'off_snp': totalOffSnp,
        'tm_off_snp': totalTmOffSnp,
        'rec_tgt': sumArr(p.rec_tgt),
        'rec_rz_tgt': sumArr(p.rec_rz_tgt),
        'rec_air_yd': sumArr(p.rec_air_yd),
        'rec': sumArr(p.rec),
        'rec_yd': sumArr(p.rec_yd),
        'rec_fd': sumArr(p.rec_fd),
        'rec_td': sumArr(p.rec_td),
        'rec_2pt': sumArr(p.rec_2pt),
        'rush_att': sumArr(p.rush_att),
        'rush_rz_att': sumArr(p.rush_rz_att),
        'rush_yd': sumArr(p.rush_yd),
        'rush_fd': sumArr(p.rush_fd),
        'rush_td': sumArr(p.rush_td),
        'rush_2pt': sumArr(p.rush_2pt),
        'fum_lost': sumArr(p.fum_lost)
      };
    });
  });

  // Prepare sheet
  let sheet = ss.getSheetByName(sheetName) || ss.insertSheet(sheetName);
  sheet.clear();
  sheet.getRange(1, 1).setValue(platform);

  // Assemble row dataset
  let table = [];
  Object.keys(allPlayers).forEach(id => {
    const p = allPlayers[id];
    let row = [id, p.name, p.pos];

    Object.keys(dataPoints).forEach(key => {
      if (headers.indexOf(key) === -1) {
        years.forEach(yr => {
          const val = (p.yearsData[yr] && p.yearsData[yr][key] !== undefined) ? p.yearsData[yr][key] : 0;
          row.push(val);
        });
      }
    });

    table.push(row);
  });

  if (table.length === 0) {
    ss.toast('No player data found for the selected timeframe.');
    return;
  }

  // Write headers & table values
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);  
  sheet.getRange(2, 1, table.length, table[0].length).setValues(table);

  // Apply column widths, horizontal alignments, and named ranges
  Object.keys(dataPoints).forEach(entry => {
    let colIdx = headers.indexOf(dataPoints[entry].columns > 1 ? entry + '_' + years[0] : entry) + 1;
    let range = sheet.getRange(2, colIdx, table.length, dataPoints[entry].columns);
    
    sheet.setColumnWidths(colIdx, dataPoints[entry].columns, dataPoints[entry].width);
    ss.setNamedRange(platform + '_' + name + '_' + entry.toUpperCase(), range);
    range.setHorizontalAlignment(dataPoints[entry].align);
  });

  if (typeof adjustRows === 'function') adjustRows(sheet);
  if (typeof adjustColumns === 'function') adjustColumns(sheet);

  ss.toast('Imported updated season statistics table');
}


//=======================================
// SLEEPER STATS TIMEFRAME POPUP
// Dependencies: sleeperStats(), sleeperStatsLogging
// Writes data from sleeperStats function from and object to a table within the sheet / no color formatting - for lookups
function sleeperStatsPrompt() {
  const ui = SpreadsheetApp.getUi();
  const info = seasonInfo();
  const currentYear = info[0];
  const currentWeek = info[1];

  // 1. Get the Year
  const yearResponse = ui.prompt(
    'Import Stats: Year',
    'Enter the season year (current: ' + currentYear + ')',
    ui.ButtonSet.OK_CANCEL
  );

  if (yearResponse.getSelectedButton() !== ui.Button.OK) return;
  const inputYear = parseInt(yearResponse.getResponseText());

  if (isNaN(inputYear)) {
    ui.alert('Invalid Year', 'Please enter a numeric year.', ui.ButtonSet.OK);
    return;
  }

  // 2. Get the Ending Week
  // If input year is current, suggest current week. Otherwise suggest 18.
  const suggestedWeek = (inputYear === currentYear) ? currentWeek : 18;
  
  const weekResponse = ui.prompt(
    'Import Stats: Max Week',
    'Import from Week 1 up to which week?\n' + inputYear == info[0] ? ('Current ' + inputYear + ' Week is ' + currentWeek) : inputYear + ' season is complete and all weeks should be available',
    ui.ButtonSet.OK_CANCEL
  );

  if (weekResponse.getSelectedButton() !== ui.Button.OK) return;
  const endWeek = parseInt(weekResponse.getResponseText()) || suggestedWeek;

  if (isNaN(endWeek) || endWeek < 1 || endWeek > 18) {
    ui.alert('Invalid Week', 'Please enter a week between 1 and 18', ui.ButtonSet.OK);
    return;
  }

  // 3. Build the Array [1, 2, 3... endWeek]
  const userWeeks = [];
  for (let i = 1; i <= endWeek; i++) {
    userWeeks.push(i);
  }
  
  // 4. Confirm and Run
  const addYearPrompt = ui.alert(
    'Add Year to Named Ranges?',
    'Would you like the named ranges for these statistics to include the year?',
    ui.ButtonSet.YES_NO
  );

  // 4. Confirm and Run
  const confirm = ui.alert(
    'Confirm Import',
    'Importing ' + inputYear + ' stats for Weeks 1 through ' + endWeek + '.\nProceed?',
    ui.ButtonSet.YES_NO
  );

  if (confirm === ui.Button.YES) {
    sleeperStatsLogging(inputYear, userWeeks, addYearPrompt === ui.Button.YES);    
    // Close status and toast
    SpreadsheetApp.getActiveSpreadsheet().toast("Import Complete for " + inputYear);
  }
}

//=======================================
// SLEEPER SEASON STATS TIMEFRAME POPUP
// Dependencies: sleeperSeasonStatsLogging()
// Prompt function to fetch inputs: start year, end year, and max week.
function sleeperSeasonStatsPrompt() {
  const ui = SpreadsheetApp.getUi();
  const info = seasonInfo();
  const currentYear = info[0];
  const currentWeek = info[1];

  // 1. Get Start Year
  const startYearResponse = ui.prompt(
    'Import Season Stats: Start Year',
    'Enter the start season year (e.g. ' + (currentYear - 2) + '):',
    ui.ButtonSet.OK_CANCEL
  );

  if (startYearResponse.getSelectedButton() !== ui.Button.OK) return;
  const startYear = parseInt(startYearResponse.getResponseText());

  if (isNaN(startYear)) {
    ui.alert('Invalid Year', 'Please enter a valid numeric start year.', ui.ButtonSet.OK);
    return;
  }

  // 2. Get End Year
  const endYearResponse = ui.prompt(
    'Import Season Stats: End Year',
    'Enter the end season year (current: ' + currentYear + '):',
    ui.ButtonSet.OK_CANCEL
  );

  if (endYearResponse.getSelectedButton() !== ui.Button.OK) return;
  const endYear = parseInt(endYearResponse.getResponseText());

  if (isNaN(endYear) || endYear < startYear) {
    ui.alert('Invalid Year', 'Please enter a valid end year greater than or equal to start year.', ui.ButtonSet.OK);
    return;
  }

  // 3. Get Max Week
  const suggestedWeek = (endYear === currentYear) ? currentWeek : 18;
  const weekResponse = ui.prompt(
    'Import Season Stats: Max Week',
    'Enter max week to include for each season (1 - 18, default: ' + suggestedWeek + '):',
    ui.ButtonSet.OK_CANCEL
  );

  if (weekResponse.getSelectedButton() !== ui.Button.OK) return;
  const maxWeek = parseInt(weekResponse.getResponseText()) || suggestedWeek;

  if (isNaN(maxWeek) || maxWeek < 1 || maxWeek > 18) {
    ui.alert('Invalid Week', 'Please enter a week between 1 and 18.', ui.ButtonSet.OK);
    return;
  }

  // 4. Confirm and Run
  const confirm = ui.alert(
    'Confirm Season Stats Import',
    'Importing season stats from ' + startYear + ' to ' + endYear + ' (Weeks 1-' + maxWeek + ').\nProceed?',
    ui.ButtonSet.YES_NO
  );

  if (confirm === ui.Button.YES) {
    sleeperSeasonStatsLogging(startYear, endYear, maxWeek);
  }
}

//=======================================
// SLEEPER WEEKLY NFL
// Dependencies: seasonInfo()
// Gathers all matchups for a given week of a certain type
// Queries: 'all','matchups','count','not_pre_game','remaining','active','complete' (complete is default);
function sleeperWeeklyNFL(year,week,query) {
  let info;
  if (!year || !week) {
    info = seasonInfo();
  }
  year = year || info[0];
  week = week || info[1];
  const obj = JSON.parse(UrlFetchApp.fetch(`${sleeperSeasonSchedule}${year}`));
  const matchups = obj.filter(x => x.week === week);
  switch (query) {
    case 'all':
      return matchups.map(x => [x.away,x.home]).flat();
    case 'matchups':
      return matchups.map(x => x.away + '@' + x.home);      
    case 'count':
      return matchups.map(x => [x.away,x.home]).flat().length;
    case 'not_pre_game':
      return matchups.filter(x => x.status != 'pre_game').map(y => [y.away,y.home]).flat(); 
    case 'remaining':
      return matchups.filter(x => x.status != 'complete').map(y => [y.away,y.home]).flat();
    case 'active':
      return matchups.filter(x => x.status != 'pre_game' && x.status != 'complete').map(y => [y.away,y.home]).flat();      
    default: // also 'completed' case, so removed as switch case
      return matchups.filter(x => x.status === 'complete').map(y => [y.away,y.home]).flat();
  }
}

//=======================================
// SLEEPER FULL SEASON NFL
// Dependencies: seasonInfo()
// Gathers all matchups for a given week of a certain type
// Queries: 'all','matchups','count','not_pre_game','remaining','active','complete' (complete is default);
function sleeperNFL(year,query) {
  year = year || seasonInfo('year');
  const matchups = JSON.parse(UrlFetchApp.fetch(`${sleeperSeasonSchedule}${year}`));
  switch (query) {
    case 'all':
      const all = matchups.reduce((acc, game) => {
        const weekIndex = game.week - 1; // Weeks start from 1, array indices from 0
        if (!acc[weekIndex]) {
          acc[weekIndex] = [];
        }
        acc[weekIndex].push([game.away, game.home]); 
        return acc;
      }, []);
      return all;
    case 'count':
      return matchups.map(x => [x.away,x.home]).length;      
    case 'remaining':
      const remaining = matchups.reduce((acc, game) => {
        const weekIndex = game.week - 1; // Weeks start from 1, array indices from 0
        if (!acc[weekIndex]) {
          acc[weekIndex] = [];
        }
        if (game.status != 'complete') {
          acc[weekIndex].push([game.away, game.home]); 
        }
        return acc;
      }, []);
      return remaining;
    case 'active':
      const active = matchups.reduce((acc, game) => {
        const weekIndex = game.week - 1; // Weeks start from 1, array indices from 0
        if (!acc[weekIndex]) {
          acc[weekIndex] = [];
        }
        if (game.status != 'pre_game' && game.status != 'complete') {
          acc[weekIndex].push([game.away, game.home]); 
        }
        return acc;
      }, []);
      return active;   
    default: // also 'completed' case, so removed as switch case
      return matchups.filter(x => x.status === 'complete').map(y => [y.away,y.home]).flat();
  }
}

//=======================================
// SLEEPER TRANSACTION FETCH
// Dependencies: NONE
// Gathers all transaction data for a league for a given week
function sleeperTransactions(league, week) {
  let url = `${sleeperBaseURL}v1/league/${league}/transactions/${week}`;
  return JSON.parse(UrlFetchApp.fetch(url));
}

//=======================================
// SLEEPER RECORD TRANSACTIONS
// Dependencies: seasonInfo()
// Reports out the Sleeper transactions
function sleeperRecordTransactions(league,week) {
  const current = week == undefined ? seasonInfo('week') : week;
  for (let week = 1; week < current; week++) {
    const data = sleeperTransactions(league,week)
    Logger.log(JSON.stringify(data));
  }
  return data
}

//=======================================
// SLEEPER PRIOR SEASON
// Reports the prior season to the current season of a specific league 
function sleeperPriorLeague(league) {
  const leagueObj = JSON.parse(UrlFetchApp.fetch(`${sleeperBaseURL}v1/league/${league}`));
  const id = leagueObj.previous_league_id;
  if (id === null) {
    Logger.log(`No prior Sleeper season to ${leagueObj.season} of the ${leagueObj.name}`);
  }
  return id;
}

//=======================================
// SLEEPER KEEPER STATUS
// Dependencies: seasonInfo(), sleeperPriorLeague()
// Returns the players from the most recent draft and the number of years they've been kept (0 = no kept seasons but drafted in the prior)
function sleeperKeeperStatus(league) {
  let keepers = true;
  let keepable = {};
  let kept = {}
  let first = true;
  let mostRecent = null;
  while (keepers) {
    keepers = false;
    let data = sleeperLeagueInfo(league,['season','picks_object']);
    let year = data.season;
    let draft = data.picks_object;
    if (draft.length == 0 && first) {
      Logger.log(`Attempting to roll back one season since no draft was found for ${year}.`)
      league = sleeperPriorLeague(league);
      data = sleeperLeagueInfo(league,['season','picks_object']);
      year = data.season;
      draft = data.picks_object;
      first = false;
    }
    mostRecent = mostRecent == null ? year : mostRecent;
    if (draft == null || draft == [] || draft.length == 0) {
      Logger.log(`No draft or league info for the ${year} season. Exiting.`);
      keepers = false;
    } else {
      Logger.log(`Scanning data from the ${year} season...`);
      for (let pick = 0; pick < draft.length; pick++) {
        if (!keepers) {
          if (draft[pick].is_keeper != null) {
            keepers = true;
            league = sleeperPriorLeague(league);
          }
        }
      }
      if (keepers) { // Only review for prior year if there was at least a player kept from the year before
        for (let pick = 0; pick < draft.length; pick++) {
          if (year == mostRecent) {
            kept[draft[pick].metadata.player_id] = [draft[pick].round,0,1];
            keepable[draft[pick].metadata.player_id] = true;
          }
          if (draft[pick].is_keeper != null && keepable[draft[pick].metadata.player_id] && kept.hasOwnProperty(draft[pick].metadata.player_id)) {
            kept[draft[pick].metadata.player_id][1]++;
          } else if (keepable.hasOwnProperty(draft[pick].metadata.player_id)) {
            keepable[draft[pick].metadata.player_id] = false;
          }
        }
      } else {
        Logger.log(`No keepers found for the ${year} season. Exiting.`);
      }
    }
  }
  return kept;
}

//=======================================
// SLEEPER AVAILABLE KEEPERS
// Dependencies: seasonInfo(), sleeperKeeperStatus(), sleeperPriorLeague()
// Provides reduced sleeperKeeperStatus object with only free agents
function sleeperAvailableKeepers(league) {
  const data = sleeperLeagueInfo(league,['status','rostered_players']);
  if (data.status == 'complete') {
    Logger.log('Prior season -- no available moves to make');
    return null;
  } else if (data.status == 'pre_draft') {
    Logger.log('Upcoming season, no free agent moves allowed');
    return null;
  } else {
    let keepers = sleeperKeeperStatus(league);
    Object.keys(keepers).forEach(player => {
      if (data.rostered.indexOf(player)) {
        delete keepers[player];
      }
    });
    Logger.log(JSON.stringify(keepers));
    return keepers;
  }
}

function sleeperLoopsMultiple(leagues,abbrev,year,week) {
  for (let a = 0; a < leagues.length; a++) {
    Logger.log(`Fetching LOOPS for league ID ${leagues[a]}`);
    sleeperLoops(leagues[a],abbrev,year,week);
  }
}

//=======================================
// SLEEPER HYPOTHETICAL CALCULATIONS
// Dependencies: seasonInfo(), sleeperPriorLeague()
// L.O.O.P.S. - Lineup Opportunities Over Projected Starters; Iterates over each week's starters and possible tweaks to provide an understanding of where outcomes could have been different
function sleeperLoops(leagueId,abbrev,year,week) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let info;
  if (!year || !week) {
    info = seasonInfo();
  }
  year = year || info[0];
  week = week || info[1];
  
  let suffix = '_LOOPS'; // Lineup Opportunities Over Projected Starters

  const top = ['week','matchup_id','location','roster_id',
                'opponent_roster_id','opponent_projection_used','opponent_projection','opponent_projection_rank','opponent_score','opponent_score_rank','opponent_max_score','opponent_max_score_rank',
                'projection_used'];

  let headers = [];
  let inactive = [];
  for (b = 0; b < top.length; b++) {
    headers.push(top[b]);
    inactive.push(top[b]);
  }

  let scoreCols = ['projection','actual','ideal_projection','ideal_projection_score','max_score_projection','max_score','opponent_ideal_projection_score','max_both'];
  let rankCols = scoreCols.map(a => a + '_rank');
  let marginCols = scoreCols.map(a => a + '_margin');
  let outcomeCols = scoreCols.map(a => a + '_outcome');
  let changeCols = scoreCols.map(a => a + '_outcome_change');
  Object.keys(scoreCols).forEach(category => {
    headers.push(scoreCols[category]);
    inactive.push('');
    headers.push(rankCols[category]);
    inactive.push('');
    headers.push(marginCols[category]);
    inactive.push('');
    headers.push(outcomeCols[category]);
    inactive.push('');
    if(changeCols[category] != 'projection_outcome_change' && changeCols[category] != 'actual_outcome_change') {
      headers.push(changeCols[category]);
      inactive.push('');
    }
  });

  let data = [];

  const objPlayers = JSON.parse(UrlFetchApp.fetch(`${sleeperBaseURL}v1/players/nfl`));

  let guillotine = 0;
  
  const objProj = sleeperProjectionFetch(sleeperScoringSpecific(leagueId),year,week);
  const objScores = sleeperScoreObject(year,week,leagueId,false);
  const objLeague = sleeperLeagueInfo(leagueId,['name','teams','starters','starters_indexed','roster','roster_indexed','scoring','managers','season','scoring_type','starter_size'])
  abbrev = (abbrev == undefined ? abbreviation(objLeague.name) : abbrev);
  
  // Fetch object data from SLEEPER
  Logger.log(`Fetching from: ${sleeperBaseURL}v1/league/${leagueId}/matchups/${week}`);
  let obj = JSON.parse(UrlFetchApp.fetch(`${sleeperBaseURL}v1/league/${leagueId}/matchups/${week}`)).filter(x => x.matchup_id != null)
  let objRosters = JSON.parse(UrlFetchApp.fetch(`${sleeperBaseURL}v1/league/${leagueId}/rosters`));
  let teams = parseInt(objLeague.teams);

  for (let b = obj.length-1; b >= 0 ; b--) {
    let bench = [];
    try {
      bench = obj[b].players.filter(x => !obj[b].starters.includes(x));
      obj[b].bench = bench;
      if (obj[b].players == 0) {
        Logger.log('Team ' + (obj[b].roster_id) + ' has no roster and/or has been eliminated');
        obj.splice(b,1);
        guillotine = 1;
      }
    } catch (err) {
      Logger.log('Team ' + (obj[b].roster_id) + ' has no roster and/or has been eliminated');
      obj.splice(b,1);
      guillotine = 1;
    }
  }

  if (guillotine != 1) {
    // Prep sheet to minimize cells and also ensure there are enough cells
    let sheet = ss.getSheetByName(abbrev + suffix);
    if (sheet == null){
      sheet = ss.insertSheet(abbrev + suffix);
    }
    // sheet.setTabColor(leagues(abbrev,'color'));

    
    // Calculate the best projected starting roster
    let roster = objLeague.starters;
    for (let b = 0; b < obj.length; b++) {
      obj[b].actual = obj[b].points;
      obj[b].opponent_ideal_projection_score = obj[b].points;
      let players = obj[b].players;
      let bench = obj[b].bench;
      if (players.length > 0 && bench.length > 0) {
        let players = obj[b].players;
        let ideal = [];
        for (let c = 0; c < roster.length; c++) {
          let pos = roster[c];
          let possibles = {};
          for (let d = 0; d < players.length; d++) {
            if (ideal.indexOf(players[d]) == -1 && objProj.hasOwnProperty(players[d]) && ((objPlayers[players[d]].fantasy_positions.indexOf(pos) > -1) ||
                (pos == 'SUPER_FLEX' && objPlayers[players[d]].fantasy_positions.indexOf('QB') > -1) ||
                ((pos == 'SUPER_FLEX' || pos == 'FLEX') && objPlayers[players[d]].fantasy_positions.indexOf('RB') > -1) ||
                ((pos == 'SUPER_FLEX' || pos == 'FLEX') && objPlayers[players[d]].fantasy_positions.indexOf('WR') > -1) ||
                ((pos == 'SUPER_FLEX' || pos == 'FLEX') && objPlayers[players[d]].fantasy_positions.indexOf('TE') > -1))) {
              possibles[players[d]] = parseFloat(objProj[players[d]]);
            }
          }
          let selection = '';
          if (Object.keys(possibles).length == 1) {
            selection = Object.keys(possibles)[0];
          } else if (Object.keys(possibles).length > 0) {
            selection = Object.keys(possibles).reduce((a, b) => possibles[a] > possibles[b] ? a : b);
          }
          ideal.push(selection);
        }
        obj[b].ideal = ideal;
        
        let max = [];
        for (let c = 0; c < roster.length; c++) {
          let pos = roster[c];
          let possibles = {};
          for (d = 0; d < players.length; d++) {
            if (max.indexOf(players[d]) == -1 && objScores.hasOwnProperty(players[d]) && ((objPlayers[players[d]].fantasy_positions.indexOf(pos) > -1) ||
                (pos == 'SUPER_FLEX' && objPlayers[players[d]].fantasy_positions.indexOf('QB') > -1) ||
                ((pos == 'SUPER_FLEX' || pos == 'FLEX') && objPlayers[players[d]].fantasy_positions.indexOf('RB') > -1) ||
                ((pos == 'SUPER_FLEX' || pos == 'FLEX') && objPlayers[players[d]].fantasy_positions.indexOf('WR') > -1) ||
                ((pos == 'SUPER_FLEX' || pos == 'FLEX') && objPlayers[players[d]].fantasy_positions.indexOf('TE') > -1))) {
              possibles[players[d]] = parseFloat(objScores[players[d]]);
            }
          }
          let selection = '';
          if (Object.keys(possibles).length == 1) {
            selection = Object.keys(possibles)[0];
          } else if (Object.keys(possibles).length > 0) {
            selection = Object.keys(possibles).reduce((a, b) => possibles[a] > possibles[b] ? a : b);
          }
          max.push(selection);
        }
        obj[b].max = max;
      }
    }


    // Calculate projections, max projections, and ideal projection actual outcome of starting rosters
    for (let b = 0; b < obj.length; b++) {
      let starters = obj[b].starters;
      let projection = 0;
      if (starters.length > 0) {
        for (let c = 0; c < starters.length; c++) {
          if (starters[c] in objProj) {
            projection = projection + parseFloat(objProj[starters[c]]);
          }
        }
      }
      obj[b].projection = projection.toFixed(2);
      
      let ideal = obj[b].ideal;
      let idealProjection = 0;
      let idealScore = 0;
      if (ideal.length > 0) {
        for (let c = 0; c < ideal.length; c++) {
          let key = ideal[c];
          if (ideal[c] in objProj) {
            idealProjection = idealProjection + parseFloat(objProj[ideal[c]]);
          }
          if (ideal[c] in objScores) {
            idealScore = idealScore + parseFloat(objScores[ideal[c]]);
          }
        }
      }
      obj[b].ideal_projection = idealProjection.toFixed(2);
      obj[b].ideal_projection_score = idealScore.toFixed(2);
      
      let max = obj[b].max;
      let maxProjection = 0;
      let maxScore = 0;
      if (max.length > 0) {
        for (let c = 0; c < max.length; c++) {
          if (max[c] in objProj) {
            maxProjection = maxProjection + parseFloat(objProj[max[c]]);
          }
          if (max[c] in objScores) {
            maxScore = maxScore + parseFloat(objScores[max[c]]);
          }
        }
      }
      obj[b].max_score_projection = maxProjection.toFixed(2);
      obj[b].max_score = maxScore.toFixed(2);
      obj[b].max_both = maxScore.toFixed(2);    
    }
    
    // Sort all types for ranking
    for (let c = 0; c < scoreCols.length; c++) {
      eval('var ' + scoreCols[c] + ' = (obj.map(x => x[\'' + scoreCols[c] + '\'])).sort((a, b) => b - a)');
    }

    data = {};
    let matches = obj.length;
    Object.keys(obj).forEach(b => {
      ownerId = objRosters.filter(x => x.roster_id == obj[b].roster_id)[0].owner_id;
      opponent = obj.filter(x => x.matchup_id == obj[b].matchup_id).filter(x => x.roster_id != obj[b].roster_id)[0];
      opponentId = objRosters.filter(x => x.roster_id == opponent.roster_id)[0].owner_id;
      let projectedLine = opponent.projection;
      obj[b].opponent_projection = projectedLine;
      let line = opponent.actual;
      obj[b].opponent_actual = line;
      let maxLine = opponent.max_score;
      obj[b].opponent_max_score = maxLine;
      let idealLine = opponent.ideal_projection_score;
      let result = (obj[b].points > line ? 1 : (obj[b].points < line ? -1 : (obj[b].points == line && obj[b].points > 0 ? 0 : '')));
      let arr = [week, // week
        obj[b].matchup_id, // matchup_id
        obj[b].roster_id, // roster_id

        opponent.roster_id, // opponent_roster_id
        (opponent.projection - opponent.ideal_projection > -0.05 && opponent.projection - opponent.ideal_projection < 0.05) ? 1 : 0, // opponent_projection_used
        projectedLine == 0 ? '' : projectedLine, // opponent_projection
        projectedLine > 0 ? projection.indexOf(projectedLine)+1 : '', // opponent_projection_rank
        line == 0 ? '' : line, // opponent_score
        line > 0 ? actual.indexOf(line)+1 : '', // opponent_score_rank
        maxLine == 0 ? '' : maxLine , // opponent_max_score
        maxLine > 0 ? max_score.indexOf(maxLine)+1 : '', // opponent_max_score_rank

        (obj[b].projection - obj[b].ideal_projection > -0.05 && obj[b].projection - obj[b].ideal_projection < 0.05) ? 1 : 0 // projection_used
      ]
      
      for (let c = 0; c < scoreCols.length; c++) {
        let points = obj[b][scoreCols[c]]; // points
        let rank = eval(scoreCols[c]).indexOf(obj[b][scoreCols[c]])+1; // rank
        let margin = (obj[b][scoreCols[c]] - (scoreCols[c] == 'opponent_ideal_projection_score' ? idealLine : (scoreCols[c] == 'max_both' ? maxLine : line))).toFixed(2); // projected_margin
        obj[b][marginCols[c]] = margin;
        let outcome = margin > 0 ? 1 : margin < 0 ? -1 : 0;
        if (scoreCols[c] != 'projection' && scoreCols[c] != 'actual') {
          let change = outcome - result > 0 ? 1 : outcome - result == 0 ? 0 : outcome - result < 0 ? -1 : ''; // outcome_change
          outcome = (outcome == 1 ? 'W' : outcome == -1 ? 'L' : 'T')
          arr.push(points,rank,margin,outcome,change);
        } else {
          outcome = (outcome == 1 ? 'W' : outcome == -1 ? 'L' : 'T')
          arr.push(points,rank,margin,outcome);
        }
      }
      
      data[obj[b].matchup_id] = data[obj[b].matchup_id] == null ? {0:null,1:null} : data[obj[b].matchup_id];
      obj[b].roster_id < opponent.roster_id ? data[obj[b].matchup_id][0] = arr : data[obj[b].matchup_id][1] = arr;

    });

    // Evaluates object to create an array of all margins for each margin type
    for (let c = 0; c < marginCols.length; c++) {
      eval('var ' + marginCols[c] + ' = obj.map(a => a[\'' + marginCols[c] + '\'])');
    }

    arr = [];
    Object.keys(data).forEach(b  => {
      arr.push(data[b][0]);
      arr.push(data[b][1]);
    });
    let range = sheet.getRange(1,1,1,headers.length);
    range.setValues([headers]);
    range.setBackground('black');
    range.setFontColor('white');
    if (headers.indexOf('location')>0) {
      for (let b = 0; b < arr.length; b++) {
        arr[b].splice(headers.indexOf('location'),0,b%2 == 0 ? 'away' : 'home');
      }
    }

    range = sheet.getRange(teams*(week-1)+2,1,matches,arr[0].length)
    range.setValues(arr);
    let col = arr.map(a => a[headers.indexOf('actual')]);

    range.setHorizontalAlignment('left');
    sheet.setColumnWidths(1,headers.length,35);
    
    let allScores = [];
    let allMargins = [];
    let format = {
      'week':{'align':'right','format':'0','width':20},
      'matchup_id':{'align':'right','format':'0','width':20},
      'location':{'align':'middle','format':'@','width':40},
      'roster_id':{'align':'right','format':'0','width':20},

      'opponent_roster_id':{'align':'right','format':'0','width':20},
      'opponent_projection_used':{'align':'center','format':'0','width':20},
      'opponent_projection':{'align':'right','format':'0.00','width':50},
      'opponent_projection_rank':{'align':'center','format':'0','width':30},
      'opponent_score':{'align':'right','format':'0.00','width':50},
      'opponent_score_rank':{'align':'center','format':'0','width':30},
      'opponent_max_score':{'align':'right','format':'0.00','width':50},
      'opponent_max_score_rank':{'align':'center','format':'0','width':30},
      
      'projection_used':{'align':'center','format':'0','width':20}}

    for (let c = 0; c < scoreCols.length; c++) {
      format[scoreCols[c]] = {'align':'right','format':'0.00','width':50};
      format[rankCols[c]] = {'align':'center','format':'0','width':30};
      format[marginCols[c]] = {'align':'right','format':'0.00','width':50};
      format[outcomeCols[c]] = {'align':'center','format':'@','width':30};
      format[changeCols[c]] = {'align':'center','format':'0','width':20};
      allScores = allScores.concat(eval(scoreCols[c]));
      allMargins = allMargins.concat(eval(marginCols[c]));
    }
    
    let minScore = Math.min(...allScores);
    let maxScore = Math.max(...allScores);
    let minMargin = Math.min(...allMargins);
    let maxMargin = Math.max(...allMargins);

    // Applies formatting to columns matching above header names
    Object.keys(format).forEach(key => {
      if (headers.indexOf(key) >= 0) {
        sheet.setColumnWidth(headers.indexOf(key)+1,format[key]['width']);
        sheet.getRange(2,headers.indexOf(key)+1,teams*(week-1)+1+teams,1).setNumberFormat(format[key]['format'])
          .setHorizontalAlignment(format[key]['align'])
      }
    });

    let colorArrRow = [];
    let colorArr = [];

    for (let b = 0; b < matches; b++) {
      colorArrRow = [];
      let matchup = arr[b][1];
      for (c = 0; c < headers.length; c++) {
        let value = arr[b][c];
        if (headers[c] == 'location') {
          colorArrRow.push(value == 'away' ? '#FFF69E' : value == 'home' ? '#9EFFEF' : '');
        } else if (headers[c] == 'opponent_projection') {
          colorArrRow.push(renderPercentHex('negative',((value-minScore)/(maxScore-minScore)).toFixed(2)));
        } else if (headers[c] == 'opponent_projection_rank') {
          colorArrRow.push(renderPercentHex('negative',(matches-value)/matches));
        } else if (headers[c] == 'opponent_score' || headers[c] == 'opponent_max_score') {
          colorArrRow.push(renderPercentHex('negative',((value-minScore)/(maxScore-minScore)).toFixed(2)));
        } else if (headers[c] == 'opponent_score_rank' || headers[c] == 'opponent_max_score_rank') {
          colorArrRow.push(renderPercentHex('negative',(matches-value)/matches));
        } else if (headers[c] == 'opponent_projection_used' || headers[c] == 'projection_used') {
          colorArrRow.push(value == 1 ? '#D3FFC3' : value == -1 ? '#FFC6BB' : value == 0 ? '#E5E5E5' : '');
        } else if (scoreCols.indexOf(headers[c]) >= 0) {
          colorArrRow.push(renderPercentHex('positive',((value-minScore)/(maxScore-minScore)).toFixed(2)));
        } else if (rankCols.indexOf(headers[c]) >= 0) {
          colorArrRow.push(renderPercentHex('positive',(matches-value)/matches));
        } else if (marginCols.indexOf(headers[c]) >= 0) {
          colorArrRow.push(renderPercentHex('full',((value-minMargin)/(maxMargin-minMargin)).toFixed(2)));
        } else if (outcomeCols.indexOf(headers[c]) >= 0) {
          colorArrRow.push(value == 'W' ? '#D3FFC3' : value == 'L' ? '#FFC6BB' : value == 'T' ? '#E5E5E5' : '');
        } else if (changeCols.indexOf(headers[c]) >= 0) {
          colorArrRow.push(value == 1 ? '#D3FFC3' : value == -1 ? '#FFC6BB' : value == 0 ? '#E5E5E5' : '');
        } else if (matchup % 2 == 0) {
          week % 2 == 0 ? colorArrRow.push('#CCCCCC') : colorArrRow.push('#F3F3F3');
        } else {
          week % 2 == 0 ? colorArrRow.push('#D8D8D8') : colorArrRow.push('white');
        }
      }
      colorArr.push(colorArrRow);
    }
    sheet.getRange(teams*(week-1)+2,1,matches,headers.length).setBackgrounds(colorArr);
    ss.setNamedRange(abbrev + suffix + '_HEADERS',sheet.getRange(1,1,1,headers.length)); // Set a named range of the header row to lookup values
    ss.setNamedRange(abbrev + suffix,sheet.getRange(1,1,sheet.getLastRow(),headers.length)); // Creates named range that matches the sheet name of all data
    sheet.setFrozenColumns(4);
    sheet.setFrozenRows(1);
    ss.toast('Week ' + week + ' LOOPS imported successfully for ' + objLeague['name']);
  } else {
    Logger.log('Guillotine play is underway and matchup comparisons aren\'t relevant');
  }
}


function sleeperPlayerMatchingObject(){
  // Fetch JSON object from Sleeper's API
  const players = JSON.parse(UrlFetchApp.fetch(`${sleeperBaseURL}v1/players/nfl`));
  Logger.log(players);
  // remove any positions you're not interested in. Some RBs are categorized as FB and relying on 'fantasy_positions' entails players with multiple designations
  const positions = ['QB','RB','FB','WR','TE','K','DEF','LB','DB','DL'];
  
  const map = positions.reduce((obj, position) => {
    obj[position] = {}; // Assign an empty object as the value for each position key
    return obj;
  }, {});

  // set to 'true' if you want players who are not on NFL teams to be included in table (will make it take a lot longer)
  let unrostered = false; 
  
  Object.keys(players).forEach((player) => {
    try {
      if ( (unrostered == true && players[player].team == null) || players[player].team != null ) {
        players[player].fantasy_positions.forEach((position) => {
          // Only proceed if the position exists in our initial 'map'
          if (map[position]) {
            // 1. Check if the team exists within the position in 'map'. If not, create it as an empty object.
            if (!map[position][players[player].team]) {
              map[position][players[player].team] = {};
            }

            // 2. Check if the last name exists within the team in 'map'. If not, create it as an empty object.
            if (!map[position][players[player].team][players[player].last_name.toLowerCase()]) {
              map[position][players[player].team][players[player].last_name.toLowerCase()] = {};
            }

            // 3. Map first_name: player_id at the final level.
            map[position][players[player].team][players[player].last_name.toLowerCase()][players[player].first_name.toLowerCase()] = players[player].player_id;
          }
        });
      }
    } catch (err) {
    Logger.log(`Error bringing in data for ${players[player].first_name} ${players[player].last_name} - ERROR: ${err.stack}`);
    }
  });

  return map;
}

function sleeperPlayerSimpleObject(){
  // Fetch JSON object from Sleeper's API
  const players = JSON.parse(UrlFetchApp.fetch(`${sleeperBaseURL}v1/players/nfl`));
  // remove any positions you're not interested in. Some RBs are categorized as FB and relying on 'fantasy_positions' entails players with multiple designations
  const positions = ['QB','RB','FB','WR','TE','K','DEF','LB','DB','DL'];
  const simple = [];
  // set to 'true' if you want players who are not on NFL teams to be included in table (will make it take a lot longer)
  let unrostered = false; 
  
  Object.keys(players).forEach((player) => {
    let include = false;
    let index = 0;
    try{ 
      while (!include && players[player].fantasy_positions.length > index && index < 10) {
        if (positions.indexOf(players[player].fantasy_positions[0]) >= 0) {
          include = true;
        } else {
          index++;
        }
      }
      if (include) {
        try {
          if ((unrostered == true && players[player].team == null) || players[player].team != null ) {
            const position = players[player].fantasy_positions[index];
            const first_name = players[player].first_name;
            const last_name = players[player].last_name;
            const team = players[player].team;
            const id = player;
            simple.push({
              id,
              first_name,
              last_name,
              position,
              team
            });
          }
        } catch (err) {
          Logger.log(`Error bringing in data for ${players[player].first_name} ${players[player].last_name} - ERROR: ${err.stack}`);
        }
      }
    } catch (err) {
      // Logger.log(`No player position for ${players[player].first_name} ${players[player].last_name}`);
    }
  });
  return simple;
}



// PROJECTION FETCHING
//-------------------------------------------------------------
// WRITE FOR ALL PLATFORMS FOR SPECIFIC WEEK
function projectionLoggingAll(ppr){
  let info = seasonInfo()
  let year = info[0];
  let week = info[1];
  ppr = ppr || 0.5;

  try{
    Logger.log('Fetching projections from Sleeper...');
    projectionLogging('SLPR',ppr,year,week,null);
  }
  catch (err){
    Logger.log('SLPR Failed ' + err.stack)
  }
  try {
    Logger.log('Fetching projections from ESPN...');
    projectionLogging('ESPN',ppr,year,week);
  }
  catch (err){
    Logger.log('ESPN Failed ' + err.stack)
  }
  try{
    Logger.log('Fetching projections from Fantasy Pros...');
    projectionLogging('FP',ppr,year,week);
  }
  catch (err){
    Logger.log('FP Failed ' + err.stack)
  }
  try{
    Logger.log('Fetching projections from FanDuel...');
    projectionLogging('FANDUEL',ppr,year,week);
  }
  catch (err){
    Logger.log('FanDuel Failed ' + err.stack)
  }
  try{
    Logger.log('Fetching projections from Fantasy Data...');
    projectionLogging('FANTASYDATA',ppr,year,week);
  }
  catch (err){
    Logger.log('Fantasy Data Failed ' + err.stack)
  }
}

//-------------------------------------------------------------
// GENERAL WRITE FUNCTION BASED ON FETCHED PROJECTION OBJECTS
function projectionLogging(platform,ppr,year,week) {
  let season;
  if (!year || !week) season = seasonInfo();
  year = year || season[0];
  week = week || season[1];
  ppr = ppr || 0.5;
  formats = {0:'non',0.5:'half',1:'full'};
  const format = formats[ppr];
  Logger.log(`Fetching projections for '${platform}, ${year}, week ${week}, ${format ? format + '-ppr if available' : ''}`);
  
  let obj = {}, arr = [], arrNames = [];
  switch (platform) {
    case 'SLPR':
      arr = [sleeperProjectionFetch(ppr,year,week)];
      break;
    case 'ESPN':
      arr = [espnProjectionFetch(ppr,year,week,false)];
      break;
    case 'FP':
      arr = [fantasyProsWeeklyProjections()]; // fantasyProsProjectionFetch('HALF');
      break;
    case 'FANTASYDATA':
      arr = [fantasyDataProjectionFetch(ppr)];
      break;
    case 'FANDUEL':
      arr = [fanduelProjectionFetch(true)]; // Points only
      break;      
    case 'FIRSTDOWN':
      arr = [firstDownProjectionFetch(ppr,true)];
      break;
    case null:
      ss.toast('No format/source provided');
      break;
  }
  
  let ss = SpreadsheetApp.getActiveSpreadsheet(); 
  for (let a = 0; a < arr.length; a++) {  
    let sheet = ss.getSheetByName(`${arrNames.length == 0 ? platform : arrNames[a]}_PROJ`) || ss.insertSheet(`${arrNames.length == 0 ? platform : arrNames[a]}_PROJ`);
    sheet.getRange(1,1).setValue(arrNames.length == 0 ? platform : arrNames[a]);
    
    obj = arr[a];
    let idRange, pivot = [], data = [];
    let ids = sheet.getRange(2,1,sheet.getMaxRows()-1,1).getValues();
    if (ids[0] == ''){
      idRange = sheet.getRange(2,1,Object.keys(obj).length,1);
      ids = Object.keys(obj);
      for (let a = 0; a < ids.length; a++){
        pivot.push([ids[a]]);
      }
      idRange.setValues(pivot);
      idRange.setHorizontalAlignment('left');
      sheet.setColumnWidth(1,50);
      ids = pivot;
    }
    for (a = 0; a < ids.length; a++){
      if (obj.hasOwnProperty(ids[a])){
        data.push([obj[ids[a]]]);
        delete obj[ids[a]]
      } else {
        data.push(['']);
      }
    }
    Object.keys(obj).forEach(key => {
      ids.push([key]);
      data.push([obj[key]])
    });
    sheet.getRange(2,1,ids.length,1).setValues(ids)
      .setHorizontalAlignment('left');
    sheet.getRange(1,week+1).setValue(week);
    sheet.getRange(2,week+1,data.length,1).setValues(data)
      .setHorizontalAlignment('right');
    sheet.setColumnWidth(week+1,50);
    let lastRow = sheet.getLastRow();
    let lastColumn = sheet.getLastColumn();
    adjustRows(sheet);
    adjustColumns(sheet); // adjust for 18 weeks in season + id column

    ss.setNamedRange(platform+'_PROJ',sheet.getRange(2,1,lastRow-1,sheet.getLastColumn()));
    sheet.getRange(2,1,lastRow-1,lastColumn).sort({column: (week+1), ascending: false});
    
    adjustRows(sheet);
    adjustColumns(sheet);

    ss.toast(`Imported ${arrNames.length == 0 ? platform : arrNames[a]} projections for week ${week}`,`✅ ${arrNames.length == 0 ? platform : arrNames[a]} SUCCESS`);
  }
}

function sleeperSeasonProjections(){
  const year = seasonInfo('year');
  
  for (let a = 8; a <= 18; a++){
    try {
      projectionLogging('SLPR',year,a,leagueId)
    }
    catch (err){
      Logger.log(`Sleeper season-long projections failed for week ${a}`);
    }
  }
}

function sleeperRestOfSeasonProjections() {
  const info = seasonInfo();
  const year = info[0];
  const week = info[1];
  
  let weeks = 17
  let arr = [];
  for (let a = week; a <= weeks; a++) {
    try {
      projectionLogging('SLPR',year,a,leagueId)
      arr.push(a);
    }
    catch (err){
      Logger.log('Sleeper rest of season projections failed for week ' + a);
    }
  }
  Logger.log('Rest of season projections gathered for weeks ' + (arrayToString(arr,false,true)) + '.');

  sleeperRestOfSeasonSumming(week,weeks);
  
}

function sleeperRestOfSeasonSumming(week,endWeek) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('SLPR_PROJ_ROS') == null ? ss.insertSheet('SLPR_PROJ_ROS') : ss.getSheetByName('SLPR_PROJ_ROS');

  const info = seasonInfo();
  const year = info[0];
  if (week == null) {
    week = info[1];
  }
  if (endWeek == null) {
    endWeek = 17;
  }

  let data = ss.getRangeByName('SLPR_PROJ').getValues();
  let arr = [];
  for (let a = 0; a < data.length; a++) {
    let sum = 0;
    for (let b = week; b < data[a].length; b++) {
      let value = parseFloat(data[a][b]) > 0 ? parseFloat(data[a][b]) : 0;
      sum = sum + value;
    }
    arr.push([data[a][0],sum.toFixed(2)]);  
  }
  
  sheet.clear();
  adjustRows(sheet,arr.length+1);
  adjustColumns(sheet,2);

  const headers = ['id',week + '-17'];
  sheet.getRange(1,1,1,2).setValues([headers]);
  let range = sheet.getRange(2,1,arr.length,2);
  range.setValues(arr);
  range.sort({column: 2, ascending: false});
  
  sheet.setColumnWidths(1,2,60);
  sheet.getRange(1,1,1,2).setHorizontalAlignment('center');
  sheet.getRange(1,2,arr.length,1).setHorizontalAlignment('left');
  sheet.getRange(2,2,arr.length,1).setHorizontalAlignment('right');

  ss.setNamedRange('SLPR_PROJ_ROS',range);

  Logger.log(`Completed summing ROS projections from week ${week} to week ${endWeek}`);

}

//-------------------------------------------------------------
// SLEEPER League-Specific Projections
function sleeperProjectionFetch(format,year,week) {
  // Format to be provided as specific league scoring object (Sleeper formatted) or 0, 0.5, 1.0
  if (typeof format != 'object' && [0,0.5,1.0,'0','0.0','0.5','.5','1.0','1'].indexOf(format) >= 0) {
    format = sleeperScoring(format); 
  } else if (typeof format === 'object') {
    if (format.rec) {
      Logger.log(`🧮 Scoring object provided for projection fetching, using league-specific settings.`)
    }
  } 
  
  if (typeof format != 'object') {
    Logger.log(`‼️ Please provide first input as numeric (0, 0.5, 1.0) for PPR request of scoring object. Defaulting to half-PPR`);
    format = sleeperScoring();
  }

  let info = seasonInfo();
  if ( year == undefined || year == null ){
    year = info[0];
  }
  if ( week == undefined || week == null ){
    week = info[1];
  }

  const obj = JSON.parse(UrlFetchApp.fetch( `https://api.sleeper.app/projections/nfl/${year}/${week}?season_type=regular&position[]=DEF&position[]=FLEX&position[]=QB&position[]=RB&position[]=TE&position[]=WR&order_by=player_id`));

  const players = obj.length;
  let sleeperProjections = {};
  for (let a = 0; a < players; a++) {
    let score = 0;
    let id = obj[a].player_id;
    for (let keys in format) {
      if ( isNaN(parseFloat(obj[a].stats[keys])*parseFloat(format[keys])) == false && parseFloat(obj[a].stats[keys]) != null ) {
        score = score + parseFloat(obj[a].stats[keys])*parseFloat(format[keys]);
      }
    }
    sleeperProjections[id] = score.toFixed(2);
  }
  // Logger.log(sleeperProjections);
  return sleeperProjections;
}

//-------------------------------------------------------------
// FUNCTION TO FETCH OBJECT OF SLPR PROJECTIONS
function sleeperProjectionFetchGeneric(format,year,week){
  if (format == undefined || format == 'HALF'){
    format = 'pts_half_ppr';
  } else if (format == 'FULL'){
    format = 'pts_ppr';
  } else {
    format = 'pts';
  }
  
  let players = JSON.parse(UrlFetchApp.fetch('https://api.sleeper.app/v1/players/nfl'));
  let obj = JSON.parse(UrlFetchApp.fetch('https://api.sleeper.app/v1/projections/nfl/regular/' + year + '/' + week));
  let sleeperProjections = {};
  Object.keys(obj).forEach(key => {
    pos = players[key]['position'];
    if (players[key]['position'] == 'QB' || players[key]['position'] == 'RB' || players[key]['position'] == 'WR' || players[key]['position'] == 'TE' || players[key]['position'] == 'DEF'){
      points = obj[key][format];
      try {
        if (obj[key][format] > 0){ 
          sleeperProjections[key] = obj[key][format];
        }
      }
      catch (err) {
        name = players[key]['first_name'] + ' ' + playersObj[key]['last_name'];
        Logger.log('SLPR Projection Fetch ' + err + " : " + name + " " + key);
      }
    }
  });
  // Logger.log(sleeperProjections);
  return sleeperProjections;
}


//-------------------------------------------------------------
// FUNCTION TO FETCH OBJECT OF ESPN PROJECTIONS
function espnProjectionFetch(ppr,year,week,details,limit) {
  pprId = ppr == 0.5 ? 2 : ppr == 1.0 ? 3 : ppr == 0 ? 1 : 2; // default to half (2)
  let half = true;
  year = year || 2025;
  week = week || 12;
  if (pprId == 2) { // HALF
    pprId = 1;
  } else { // 1 or 3 removes "half"
    half = false;
  }
  limit = limit || 1000;

  const injuryStatuses = {
    "ACTIVE": "G",
    "SUSPENSION": "S",
    "QUESTIONABLE": "Q",
    "OUT": "O",
    "INJURY_RESERVE": "IR",
    "DOUBTFUL":"D",
    "null": "NA",
  }
  // ESPN PROJECTION FETCHING
  let espnProjections = {};
  let data = {};  
  const projectionId = '11' + year + week;
  const url = `https://lm-api-reads.fantasy.espn.com/apis/v3/games/ffl/seasons/${year}/segments/0/leaguedefaults/${parseInt(pprId).toFixed(0)}?view=kona_player_info`;
  
  const headers = {
    'X-Fantasy-Filter': JSON.stringify({
      "players": {
        "limit": limit,
        "sortPercOwned": {
          "sortPriority": 4,
          "sortAsc": false
        }
      }
    })
  };
  
  const options = {
    'method': 'get',
    'headers': headers,
    'muteHttpExceptions': true
  };
  
  try {
    const response = UrlFetchApp.fetch(url, options);
    data = JSON.parse(response.getContentText()).players;
  } catch (err) {
    Logger.log('⚠️ Error fetching data: ' + err.stack);
    return [];
  }
  
  let bye = [], error = [], injuryOptions = [];
  for (let a = 0; a < data.length; a++) {
    pos = espnPositionId[data[a].player.defaultPositionId];
    if (pos == "QB" || pos == "RB" || pos == "WR" || pos == "TE" || pos == "DEF" || pos == "K"){
      team = espnProTeamId[data[a].player.proTeamId];
      idEspn = data[a].player.id;
      name = data[a].player.fullName.replace(/D\/ST/g,'defense');    
      if (pos === 'DEF'){
        id = team;
      } else {
        id = NAMES_TO_SLEEPER_ID[name];
      }
      if (id != null) {
        if (data[a].player.stats.some(item => item.id === projectionId)) {
          const proj = (data[a].player.stats).find(x => x.id === ('11'+year+week));
          if (proj) {
            const rec = parseFloat(proj.stats["53"]) || 0; // Identifier for receptions
            let points;
            if (half) { // Rounded to the nearest, ignored if full ppr or non, since API returns those two
              points = parseInt(10*(proj.appliedTotal+(rec*0.5)))/10; // Rounding to 10ths
            } else {
              points = parseInt(10*proj.appliedTotal)/10; // Rounding to 10ths
            }
            
            // Get injury if available
            let injury = null;
            if (data[a].player.injuryStatus && data[a].player.injuryStatus !== 'ACTIVE') {
              injury = injuryStatuses[data[a].player.injuryStatus];
            }

            // Get outlook if available
            let outlook = null;
            if (data[a].player.outlooks && data[a].player.outlooks.outlooksByWeek[week]) {
              outlook = data[a].player.outlooks.outlooksByWeek[week];
            }
            
            if (details) {
              // Build the object with points and injury
              espnProjections[id] = {
                points: points
              };
              
              espnProjections[id].injured = data[a].player.injured;

              // Only add injury if it exists
              if (injury) {
                espnProjections[id].injury = injury;
              }

              // Only add outlook if it exists
              if (outlook) {
                espnProjections[id].outlook = outlook;
              }
            } else {
              espnProjections[id] = points;
            }
          } else {
            error.push(name);
          }
        } else {
          bye.push(name);
        }
      }
    }
  }
  if (bye.length > 0) {
    Logger.log('❔ ESPN - Likely on bye: ' + bye);
  }
  if (error.length > 0) {
    Logger.log('⚠️ ESPN - Error getting projection: ' + error);
  }
  // Logger.log(JSON.stringify(espnProjections));
  return espnProjections;
}
/**
//-------------------------------------------------------------
// FUNCTION TO FETCH OBJECT OF ESPN PROJECTIONS
function espnProjectionFetch(leagueId,year,week){
  if (!leagueId) {
    Logger.log('No ESPN league ID provided, exiting...')
    return {};
  }
  year = year || seasonInfo('year');
  week = week || seasonInfo('week');
  const playersObj = Object.values(JSON.parse(UrlFetchApp.fetch('https://api.sleeper.app/v1/players/nfl')));
  let playersNames = [];
  let playersIds = [];
  let pos, team, id, name, idEspn, nameSearch;
  Object.keys(playersObj).forEach(key => {
    if ( playersObj[key].position == 'DEF'){
      playersNames.push(playersObj[key].first_name + ' ' + playersObj[key].last_name);
      playersIds.push(playersObj[key].player_id);
    } else if ( playersObj[key].position == 'QB' ||  playersObj[key].position == 'RB' ||  playersObj[key].position == 'WR' ||  playersObj[key].position == 'TE' ) {
      playersNames.push(playersObj[key].team + playersObj[key].first_name + ' ' + playersObj[key].last_name);
      playersIds.push(playersObj[key].player_id);
    }
  });

  // ESPN PROJECTION FETCHING
  let espnProjections = {};
  let urlBase = 'https://lm-api-reads.fantasy.espn.com/apis/v3/games/ffl/seasons/' + year + '/segments/0/leagues/';
  let urlTail = '?&view=kona_player_info&scoringPeriodId=';
  const projectionId = '11' + year + week;
  let options = { "headers": {"x-fantasy-filter": JSON.stringify({ "players": { "limit": 1500, "sortDraftRanks": { "sortPriority": 100, "sortAsc": true, "value": "PPR" } } })}};
  let obj = JSON.parse(UrlFetchApp.fetch(urlBase + leagueId + urlTail + week,options).getContentText()).players; 
  let bye = [];
  Object.keys(obj).forEach(key => {   
    pos = espnPositionId[obj[key].player.defaultPositionId];
    if (pos == "QB" || pos == "RB" || pos == "WR" || pos == "TE" || pos == "DEF"){
      team = espnProTeamId[obj[key].player.proTeamId];
      idEspn = obj[key].player.id;
      name = obj[key].player.fullName.replace(/D\/ST/g,'defense');
      if (pos === 'DEF'){
        id = team;
      } else {
        id = NAMES_TO_SLEEPER_ID[name];
      }
      if (id == null) {
        try{
          id = playersObj.find(x => x.espn_id === idEspn).player_id;
        }
        catch (err){
          try{
            id = getKeyByValue(ESPN_TO_SLEEPER_ID,parseInt(idEspn));
            if (id == null) {
              nameSearch = name.replace(/(\ III)|(\ II)|(\ IV)|(Jr\.)|(Sr\.)/g,'');
              nameSearch = nameSearch.toLowerCase().replace(/(\ )|(\-)|(\\)|(\.)|(\')/g,'');
              for (let player in playersObj) {
                if (playersObj[player].search_full_name == nameSearch) {
                  id = playersObj[player].player_id;
                }
              }
              if (id == null || id == undefined) {
                Logger.log('ESPN Projection fetch: Could not find value for ' + name + ' and search ' + nameSearch + ' ' + id + ' and searchable is ' + playersObj[player].search_full_name);
              }
            }
          }
          catch (err){
            Logger.log('ESPN Projection Fetch ' + err + ' ' + name + ' ' + key)
          }
        }
      }
      if (id != null) {
        if (obj[key].player.stats.some(item => item.id === projectionId)) {
          points = parseInt(100*(obj[key].player.stats).find(x => x.id === ('11'+year+week)).appliedTotal)/100;
          espnProjections[id] = points;
        } else {
          bye.push(name);
        }
      }
    }
  });
  if (bye.length > 0) {
    Logger.log('ESPN - Likely on bye: ' + bye);
  }
  //Logger.log(espnProjections);
  return espnProjections;
}
*/

/** 
 * DEPRECATED - USE fantasyProsWeeklyProjections function instead
// FANTASY PROS PROJECTION DATA IMPORT
function fantasyProsProjectionFetch(format) {
  format = format || 'HALF';
  let obj = {};

  let url, table, count, output = [], values = [], missed = [], name, id, points, len;
  // let baseUrl = 'https://www.fantasypros.com/nfl/projections';
  let baseUrl = `https://www.fantasypros.com/nfl/rankings/half-point-ppr-rb.php`
  let fpIds = fantasyProsPlayerBatchMatch();
  let positionList = ['qb', 'rb', 'wr', 'te', 'dst']; //, 'k']

  for (let b = 0 ; b < positionList.length ; b++) {
    //https://www.fantasypros.com/nfl/projections/qb.php
    url = (baseUrl+'/'+positionList[b]+'.php');
    if (['rb','wr','te'].indexOf(positionList[b]) >= 0) {
      url = url.concat('?scoring=' + format );
    }
    table = UrlFetchApp.fetch(url).getContentText();
    table = table.substring(table.indexOf('<table cellpadding="0" cellspacing="0" border="0" id="data"') - 1).split('</table>')[0].split('<tbody>')[1].split('</tbody>')[0].split('<tr class=').slice(1);
    Logger.log(table)
    count = table.length;
    for (let c = 0 ; c < count ; c++) {
      arr = [];
      id = table[c].match(/fp\-id\-[0-9]+/g);
      id = id[0].substring(6);
      values = table[c].split('<td class');
      len = values.length;
      values = values[len-1].split('"');
      len = values.length;
      points = values[len-1].match(/[0-9\.]+/g)[0];
      name = table[c].split('fp-player-name="')[1].split('</a>')[0];
      name = name.split('">')[1];
      
      let skip = false;
      nameFound = fpIds[name];
      if ( nameFound == null ) {
          missed.push(name);
          skip = true;
      }
      if (positionList[b] != 'dst'){
        nameFound = parseInt(nameFound);
      }
      if ( skip == false) {
        obj[nameFound] = points;
      }
    }
  }
    
  if ( output.length > 0 ) {
    Logger.log('These players missed: ' + output);
  } else {
    Logger.log('All FP Players matched');
  }
  Logger.log(JSON.stringify(obj));
  return obj;
}
*/

//-------------------------------------------------------------
// FUNCTION TO FETCH FANTASYDATA PROJECTIONS FOR CURRENT WEEK
function fantasyDataProjectionFetch() {
  try {
    const url = `https://fantasydata.com/nfl/half-ppr-rankings`;
    const response = UrlFetchApp.fetch(url);
    const html = response.getContentText();
    
    const playerProjections = {};
    
    // Split into individual table rows
    const rows = html.match(/<tr[^>]*>.*?<\/tr>/gs) || [];
    
    for (const row of rows) {
      // Extract player name
      const nameMatch = row.match(/<a href='\/nfl\/[^']*-fantasy\/[^']*'>([^<]+)<\/a>/);
      if (!nameMatch) continue;
      
      const playerName = nameMatch[1].trim();
      
      // Extract projected points (last td with 'sorted' class)
      const pointsMatch = row.match(/<td[^>]*class='sorted[^']*'>([0-9.]+)<\/td>/);
      if (!pointsMatch) continue;
      
      const projectedPoints = parseFloat(pointsMatch[1]);
      
      // Map to player ID
      const playerId = NAMES_TO_SLEEPER_ID[playerName];
      
      if (playerId) {
        playerProjections[playerId] = projectedPoints;
      } else {
        Logger.log(`Player not mapped: ${playerName}`);
      }
    }
    Logger.log(JSON.stringify(playerProjections));
    return playerProjections;
    
  } catch (err) {
    Logger.log(`Error in parsing the Fantasy Data projections: ${err.stack}`);
    throw err;
  }
}
//-------------------------------------------------------------
// FUNCTION TO FETCH OBJECT OF THE FANDUEL PROJECTIONS - Provide format as "HALF", "FULL", "STANDARD"
 /**
 * Fetches FanDuel projections from BlueCollarDFS.
 * Automatically selects the slate with the most players (The "Classic" / Main Slate).
 * Returns an Array of Objects.
 */
function fanduelProjectionFetch(justPoints) {
  if (justPoints == undefined) {
    justPoints = true;
  }
  // 1. Get the raw FanDuel data (Classic Slate)
  // We use the function we built in the previous step
    let rawPlayers = [];
  try {
    rawPlayers = getFanDuelMainSlate();
  } catch (e) {
    Logger.log("Error fetching/parsing FanDuel data: " + e.message);
    return justPoints ? {} : { found: {}, unfound: [] };
  }

  const pointsMap = {};
  const foundMap = {};
  const unfoundList = [];

  rawPlayers.forEach(p => {
    // 1. Clean the name (BlueCollar sometimes leaves trailing spaces)
    const cleanName = p.name.trim();

    // 2. Lookup ID
    const sleeperId = NAMES_TO_SLEEPER_ID[cleanName];

    if (sleeperId) {
      // --- MATCH ---
      if (justPoints) {
        // Just return the projection (Float)
        pointsMap[sleeperId] = p.projection;
      } else {
        // Return the full player object with the ID injected
        p.sleeper_id = sleeperId;
        foundMap[sleeperId] = p;
      }
    } else {
      // --- NO MATCH ---
      if (!justPoints) {
        unfoundList.push(cleanName);
      }
    }
  });
  if (justPoints) {
    return pointsMap;
  } else {
    // Debug log for audit
    if (unfoundList.length > 0) Logger.log(`Mapping Report: ${Object.keys(foundMap).length} matched. ${unfoundList.length} missing.`);
    return { found: foundMap, unfound: unfoundList };
  }
  
  function getFanDuelMainSlate(ppr) {
    const url = "https://bluecollardfs.com/api/nfl_fanduel";
    const response = UrlFetchApp.fetch(url, {muteHttpExceptions: true});
    
    if (response.getResponseCode() !== 200) throw new Error("BlueCollar API returned error: " + response.getResponseCode());
    const json = JSON.parse(response.getContentText());
    
    if (!json.slates || json.slates.length === 0) throw new Error("No slate data found in API.");

    // --- LOGIC TO FIND MAIN SLATE ---
    let mainSlate = null;
    let maxCount = -1;

    json.slates.forEach(s => {
      // Based on your inspection, the label is in the key 'slate'
      const currentLabel = s.slate || "Unknown Slate"; 
      if (s.info && Array.isArray(s.info)) {
        const count = s.info.length;   
        // Logger.log(`Slate Found: [${currentLabel}] - Players: ${count}`);
        if (count > maxCount) {
          maxCount = count;
          mainSlate = s;
        }
      }
    });

    if (!mainSlate) throw new Error("Could not identify a main slate.");

    Logger.log(`Selected Main Slate: "${mainSlate.slate}" with ${maxCount} players.`);

    // --- MAP OUTPUT ---
    return mainSlate.info.map(p => ({
      name: p.name,
      position: p.position,
      team: p.team,
      opponent: p.opponent,
      salary: p.salary,
      projection: p.projection, // Standard projection
      value: p.value,           // Value metric
      site_id: p.site_id        // FanDuel internal ID
    }));
  }

}

// ESPN FUNCTIONS
const espnBaseAPI = 'https://lm-api-reads.fantasy.espn.com/apis/v3/games/ffl/seasons/';
const espnScoreboard = 'https://site.web.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard';

//------------------------------------------------------------------------
// FETCH CURRENT YEAR OR WEEK
function current(query) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let index, values;
  try {
    query = query.toUpperCase();
  }
  catch (err) {
    Logger.log('Blank (or invalid) input to function \'current\', fetching week by default');
  }
  if (query == 'WEEK'){
    index = 1;
  } else if (query == 'WEEKS') {
    index = 2;
  } else if (query == 'YEAR') {
    index = 0;
  } else {
    query = 'WEEK';
    index = 1;
    // query is defaulted to 'week'
  }
  try {
    let value = ss.getRangeByName(query).getValue();
    if ( value == null || value == undefined ) {
      values = yearWeekFetch();
      value = ss.getRangeByName(query).setValue(values[index]);
      return values[index];
    } else {
      return value;
    }
  }
  catch (err) {
    values = yearWeekFetch();
    return values[index];
  }
}

//------------------------------------------------------------------------
// YEAR,WEEK,WEEKS - Logs some values for easy fetching to reduce total API pulls
function yearWeekFetch(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  
  var urlText = UrlFetchApp.fetch(espnScoreboard).getContentText();
  var obj = JSON.parse(urlText);
  var week = 1;
  var weeks = Object.keys(obj.leagues[0].calendar[1].entries).length;
  var year = obj.season.year;

  if(obj.events[0].season.slug != 'preseason'){
    week = obj.week.number;
  }

  var sheet = ss.getSheetByName('YEAR&WEEK');
  if (!sheet) {
    ss.insertSheet('YEAR&WEEK');
    sheet = ss.getSheetByName('YEAR&WEEK');
  }

  var yearRange = sheet.getRange(1,1);
  var weekRange = sheet.getRange(2,1);
  var weeksRange = sheet.getRange(3,1);
  var maxCols = sheet.getMaxColumns();
  var maxRows = sheet.getMaxRows();
  
  if (maxCols > 1) {
    sheet.deleteColumns(2,maxCols-1);
  }
  if (maxRows > 3) {
    sheet.deleteRows(4,maxRows-3);
  }
  yearRange.setValue(year);
  weekRange.setValue(week);
  weeksRange.setValue(weeks);
  ss.setNamedRange('YEAR',yearRange);
  ss.setNamedRange('WEEK',weekRange);
  ss.setNamedRange('WEEKS',weeksRange);
  range = sheet.getRange(1,1,3,1);
  range.setHorizontalAlignment('center');
  range.setVerticalAlignment('middle');
  range.setFontFamily('Montserrat');
  sheet.setColumnWidth(1,120);
  sheet.setRowHeight(1,120);
  range.setFontSize(40)
  sheet.hideSheet();

  Logger.log('Set year value to ' + year + ' and week value to ' + week);
  return [year,week,weeks];
}

//------------------------------------------------------------------------
// ESPN TEAMS - Fetches the ESPN-available API data on NFL teams
function fetchTeamsESPN(year) {
  year = year || seasonInfo('year');
  try {
    const year = current('YEAR'); // First array value is year
    return JSON.parse(UrlFetchApp.fetch(`${espnBaseAPI}${year}?view=proTeamSchedules`).getContentText()).settings.proTeams;
  }
  catch (err) {
    Logger.log('ESPN API issue currently');
  }
}

//------------------------------------------------------------------------
// ESPN BYE WEEKS - Fetches the ESPN-available API data on bye weeks
function nflByeWeeksESPN(year) {
  year = year || seasonInfo('year');
  let data = {}, nfl = fetchTeamsESPN(year);
  Object.keys(nfl).forEach(team => {
    data[nfl[team].abbrev.toUpperCase()] = nfl[team].byeWeek;
  });
  // delete data['FA'];
  return data; 
}

//------------------------------------------------------------------------
// ESPN DATA For Fetching object of notable values
function nflDataESPN(year) {
  if (year == undefined) {
    year = current('YEAR');
  }
  //let headers = ['id','abbrev','location','name','full','byeWeek']
  const obj = fetchTeamsESPN(year);
  let arr = [], data = {};
  for (let team = 0; team < obj.length; team++) {
    data[obj[team].id] = 
    {
      'abbrev': obj[team].abbrev.toUpperCase(),
      'location': obj[team].location,
      'name': obj[team].name,
      'bye': obj[team].byeWeek
    }
  }
  return data;
}

//------------------------------------------------------------------------
// ESPN DATA For Fetching object of notable values
function nflDataFullESPN(year) {
  year = year || seasonInfo('year');
  //let headers = ['id','abbrev','location','name','full','byeWeek']
  const obj = fetchTeamsESPN(year);
  let arr = [], data = {};
  for (let team = 0; team < obj.length; team++) {
    if (obj[team].id != 0) {
      let matchups = [];
      let index = 1;
      Object.keys(obj[team].proGamesByScoringPeriod).forEach(match => {
        if (match = index.toString()) {
          try {
            if (obj[team].proGamesByScoringPeriod[match][0].awayProTeamId == obj[team].id) {
              matchups.push(obj[team].proGamesByScoringPeriod[match][0].homeProTeamId);
            } else {
              matchups.push(obj[team].proGamesByScoringPeriod[match][0].awayProTeamId);
            }
          }
          catch(err) {
            matchups.push("BYE");
          }
        } else {
          matchups.push("BYE");
        }
        index++;
      });
      data[obj[team].id] = 
      {
        'abbrev': obj[team].abbrev.toUpperCase(),
        'location': obj[team].location,
        'name': obj[team].name,
        'bye': obj[team].byeWeek,
        'matchups':matchups
      }
    }
  }
  Object.keys(data).forEach(team => {
    for (let a = 0 ; a < data[team].matchups.length; a++) {
      try{
        data[team].matchups[a] = data[data[team].matchups[a]].abbrev;
      } catch (err) {
        // Logger.log('Bye week found for ' + data[team].name + ' in week ' + (a+1));
      }
    }
  });
  return data;
}

//------------------------------------------------------------------------
// ESPN OVERVIEW DATA SHEET LOGGING - Outputs a sheet based on the input from 'nflDataESPN' that is in the format of columns for ['id','abbrev','location','name','full','byeWeek']
function nflOverviewSheetESPN(year) {
  year = year || seasonInfo('year');

  // Establish headers and data set
  let headers = ['id','abbrev','location','name','full','byeWeek']
  const obj = nflDataESPN(year);
  let arr = [], data = [];
  
  Object.keys(obj).forEach(team => {
    if (team != '0') {
      data.push([team,obj[team].abbrev == "WSH" ? "WAS" : obj[team].abbrev,obj[team].location,obj[team].name,(obj[team].location + ' ' + obj[team].name),obj[team].bye]);
    }
  });
  Logger.log(data);
  
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('NFL_OVERVIEW');
  if (sheet == null) {
    ss.insertSheet('NFL_OVERVIEW');
    sheet = ss.getSheetByName('NFL_OVERVIEW');
  }
  // Remove protections
  let protections = sheet.getProtections(SpreadsheetApp.ProtectionType.SHEET);
  for (let a = 0; a < protections.length; a++) {
    protections[a].remove();
  }

  // Prep sheet, set values, set named ranges, reduce rows/cols, set formatting
  sheet.clear;
  sheet.clearFormats;
  let headerRange = sheet.getRange(1,1,1,data[0].length);
  headerRange.setFontFamily('Nunito')
    .setFontSize(10)
    .setBackground('#000000')
    .setFontColor('#FFFFFF')
    .setFontWeight('bold')
    .setValues([headers]);
  let dataRange = sheet.getRange(2,1,data.length,data[0].length);
  dataRange.setFontFamily('Nunito')
    .setFontSize(10)
    .setVerticalAlignment('middle')
    .setHorizontalAlignment('left')
    .setValues(data);
  ss.setNamedRange('NFL',dataRange);
  ss.setNamedRange('NFL_ID',sheet.getRange(2,headers.indexOf('id')+1,data.length-1,1));
  ss.setNamedRange('NFL_ABBR',sheet.getRange(2,headers.indexOf('abbrev')+1,data.length-1,1));
  ss.setNamedRange('NFL_LOCATION',sheet.getRange(2,headers.indexOf('location')+1,data.length-1,1));
  ss.setNamedRange('NFL_TEAM',sheet.getRange(2,headers.indexOf('name')+1,data.length-1,1));
  ss.setNamedRange('NFL_FULL',sheet.getRange(2,headers.indexOf('full')+1,data.length-1,1));
  ss.setNamedRange('NFL_BYE',sheet.getRange(2,headers.indexOf('byeWeek')+1,data.length-1,1));
  
  adjustRows(sheet,data.length+1);
  adjustColumns(sheet,data[0].length);
  
  sheet.autoResizeColumns(1,data[0].length);
  sheet.setColumnWidth(headers.indexOf('id')+1,30);
  sheet.clearConditionalFormatRules();
  sheet.protect().setDescription('Protected NFL Team Overview Data');
  ss.toast('Updated, reformatted, and protected NFL team and schedule data');
}

//------------------------------------------------------------------------
// ESPN FULL DATA SHEET LOGGING - Outputs a sheet based on the input from 'nflDataESPN' that is in the format of columns for ['id','abbrev','location','name','full','byeWeek']
function nflOverviewMatchupSheetESPN(year) {
  year = year || seasonInfo('year');
  
  // Establish headers and data set
  let headers = ['abbrev','id','location','name','full','byeWeek'];
  let obj = nflDataFullESPN(year);
  obj = JSON.parse(JSON.stringify(obj).replaceAll('WSH', 'WAS'));
  let weeks = Array.from({length:Object.values(obj)[0].matchups.length}, (_,x) => (x+1))

  let data = [];
  Object.keys(obj).forEach(team => {
    if (team != '0') {
      data.push([obj[team].abbrev,team,obj[team].location,obj[team].name,(obj[team].location + ' ' + obj[team].name),obj[team].bye,...obj[team].matchups]);
    }
  });

  headers = headers.concat(weeks);

  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('NFL');
  if (sheet == null) {
    ss.insertSheet('NFL');
    sheet = ss.getSheetByName('NFL');
  }
  // Remove protections
  let protections = sheet.getProtections(SpreadsheetApp.ProtectionType.SHEET);
  for (let a = 0; a < protections.length; a++) {
    protections[a].remove();
  }

  // Prep sheet, set values, set named ranges, reduce rows/cols, set formatting
  sheet.clear;
  sheet.clearFormats;
  let headerRange = sheet.getRange(1,1,1,data[0].length);
  headerRange.setFontFamily('Nunito')
    .setFontSize(10)
    .setBackground('#000000')
    .setFontColor('#FFFFFF')
    .setFontWeight('bold')
    .setValues([headers]);
  let dataRange = sheet.getRange(2,1,data.length,data[0].length);
  dataRange.setFontFamily('Nunito')
    .setBackground('#FFFFFF')
    .setFontColor('#000000')
    .setFontSize(10)
    .setVerticalAlignment('middle')
    .setHorizontalAlignment('left')
    .setValues(data);
  
  // BYE Week background/font color
  for (let a = 0; a < data.length; a++) {
    let col = data[a][headers.indexOf('byeWeek')]+headers.indexOf(1);
    // Logger.log(data[a][3] + ' on bye in week ' + data[a][headers.indexOf('byeWeek')] + ' marking col ' + col);
    sheet.getRange(a+2,col)
      .setBackground('#bababa')
      .setFontColor('#575757');
  }
  
  // Named ranges
  ss.setNamedRange('NFL',dataRange);
  ss.setNamedRange('NFL_ID',sheet.getRange(2,headers.indexOf('id')+1,data.length,1));
  ss.setNamedRange('NFL_ABBR',sheet.getRange(2,headers.indexOf('abbrev')+1,data.length,1));
  ss.setNamedRange('NFL_LOCATION',sheet.getRange(2,headers.indexOf('location')+1,data.length,1));
  ss.setNamedRange('NFL_TEAM',sheet.getRange(2,headers.indexOf('name')+1,data.length,1));
  ss.setNamedRange('NFL_FULL',sheet.getRange(2,headers.indexOf('full')+1,data.length,1));
  ss.setNamedRange('NFL_BYE',sheet.getRange(2,headers.indexOf('byeWeek')+1,data.length,1));
  ss.setNamedRange('NFL_MATCHUPS',sheet.getRange(2,headers.indexOf(1)+1,data.length,weeks.length));
  
  adjustRows(sheet,data.length+1);
  adjustColumns(sheet,data[0].length);
  
  sheet.autoResizeColumns(1,data[0].length);
  sheet.setColumnWidth(headers.indexOf('id')+1,30);
  sheet.setColumnWidths(headers.indexOf(1),weeks.length,40);
  sheet.clearConditionalFormatRules();
  sheet.protect().setDescription('Protected NFL Team Overview Data');
  ss.toast('Updated, reformatted, and protected NFL team and schedule data');
}
//------------------------------------------------------------------------
// NFL BETTING LINES - Gathers betting line values for matchups during the given week based on scoreboard API
function nflBettingLines() {
  const response = UrlFetchApp.fetch(espnScoreboard);
  const json = JSON.parse(response.getContentText());
  const events = json.events || [];
  
  let arr = [];
  const headers = ['week', 'matchup_id', 'teams', 'location', 'overUnder', 'team', 'opponent', 'line', 'impliedTotal'];

  for (let a = 0; a < events.length; a++) {
    const event = events[a];
    const weekNum = event.week ? event.week.number : null;
    const shortName = (event.shortName || '').replace(/\s+/g, '').replace(/WSH/g, 'WAS');
    const competitions = event.competitions || [];

    competitions.forEach(comp => {
      const odds = comp.odds || [];
      odds.forEach(bets => {
        if (!bets.awayTeamOdds || !bets.homeTeamOdds) return;

        const overUnder = parseFloat(bets.overUnder) || 0;
        const spread = parseFloat(bets.spread) || 0;
        const awayAbbr = (bets.awayTeamOdds.team?.abbreviation || '').replace(/WSH/g, 'WAS');
        const homeAbbr = (bets.homeTeamOdds.team?.abbreviation || '').replace(/WSH/g, 'WAS');

        // Away
        const awayLine = bets.awayTeamOdds.favorite ? -Math.abs(spread) : Math.abs(spread);
        const awayImplied = parseFloat(((overUnder + (bets.awayTeamOdds.favorite ? Math.abs(spread) : -Math.abs(spread))) / 2).toFixed(2));
        
        arr.push([
          weekNum, a + 1, shortName, 'away',
          overUnder, awayAbbr, homeAbbr, awayLine, awayImplied
        ]);

        // Home
        const homeLine = bets.homeTeamOdds.favorite ? -Math.abs(spread) : Math.abs(spread);
        const homeImplied = parseFloat(((overUnder + (bets.homeTeamOdds.favorite ? Math.abs(spread) : -Math.abs(spread))) / 2).toFixed(2));
        
        arr.push([
          weekNum, a + 1, shortName, 'home',
          overUnder, homeAbbr, awayAbbr, homeLine, homeImplied
        ]);
      });
    });
  }

  return [headers, arr];
}

//------------------------------------------------------------------------
// NFL BETTING LINES RECORDING - Records betting line values to the appropriate sheet and gives a named range
function nflBettingLinesRecord() {
  const [headers, arr] = nflBettingLines();

  if (!arr || arr.length === 0) {
    SpreadsheetApp.getActiveSpreadsheet().toast('No betting lines data found to record.');
    return;
  }

  const week = arr[0][0];
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // 1. Ensure sheet exists
  let sheet = ss.getSheetByName('BETS');
  if (!sheet) {
    sheet = ss.insertSheet('BETS');
  }

  // 2. Ensure headers exist
  if (sheet.getLastRow() === 0 || sheet.getRange(1, 1).getValue() === '') {
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setValues([headers])
               .setBackground('black')
               .setFontColor('white')
               .setFontWeight('bold')
               .setHorizontalAlignment('center');
    ss.setNamedRange('BETS_H', headerRange);
  }

  // 3. Clean up any existing named ranges for this week to avoid sizing conflicts
  const namedRanges = ss.getNamedRanges();
  namedRanges.forEach(nr => {
    const name = nr.getName();
    if (name === 'BETS_' + week || name === 'BETS_' + week + '_TEAM') {
      nr.remove();
    }
  });

  // 4. Determine target row and handle gaps/replacements
  const lastRow = sheet.getLastRow();
  let targetRow = 2; // Default if sheet only has headers

  if (lastRow > 1) {
    const col1Values = sheet.getRange(2, 1, lastRow - 1, 1).getValues().map(r => r[0]);
    const matchingRowIndices = [];
    let insertBeforeIndex = -1;

    for (let i = 0; i < col1Values.length; i++) {
      const rowWeek = Number(col1Values[i]);
      if (!isNaN(rowWeek) && rowWeek > 0) {
        if (rowWeek === Number(week)) {
          matchingRowIndices.push(i + 2); // 1-based sheet row
        } else if (rowWeek > Number(week) && insertBeforeIndex === -1) {
          insertBeforeIndex = i + 2;
        }
      }
    }

    if (matchingRowIndices.length > 0) {
      // Data for this week already exists: delete old rows first
      const startDeleteRow = matchingRowIndices[0];
      sheet.deleteRows(startDeleteRow, matchingRowIndices.length);
      targetRow = startDeleteRow;
      
      // If we are replacing inside existing data, insert fresh rows
      if (targetRow <= sheet.getLastRow()) {
        sheet.insertRows(targetRow, arr.length);
      }
    } else if (insertBeforeIndex !== -1) {
      // Future week exists: insert blank rows before it so we don't overwrite
      targetRow = insertBeforeIndex;
      sheet.insertRows(targetRow, arr.length);
    } else {
      // Append at the bottom
      targetRow = sheet.getLastRow() + 1;
    }
  }

  // 5. Expand sheet if appending exceeds max rows
  const neededRows = (targetRow + arr.length - 1) - sheet.getMaxRows();
  if (neededRows > 0) {
    sheet.insertRowsAfter(sheet.getMaxRows(), neededRows);
  }

  // 6. Write data
  const dataRange = sheet.getRange(targetRow, 1, arr.length, headers.length);
  dataRange.setValues(arr)
           .setBackground('white')
           .setFontColor('black')
           .setHorizontalAlignment('center')
           .setVerticalAlignment('middle');

  // 7. Set named ranges
  const teamColIdx = headers.indexOf('team') + 1;
  const teamRange = sheet.getRange(targetRow, teamColIdx, arr.length, 1);
  
  ss.setNamedRange('BETS_' + week, dataRange);
  ss.setNamedRange('BETS_' + week + '_TEAM', teamRange);

  sheet.setColumnWidths(1, headers.length, 80);

  if (typeof adjustColumns === 'function') adjustColumns(sheet);
  if (typeof adjustRows === 'function') adjustRows(sheet);

  ss.toast('Imported week ' + week + ' betting lines and projected team totals');
}

// ESPN NFL FULL SCHEDULE - script to fetch all NFL data for teams // NOT THE SAME AS PICK 'EMS SCRIPT!) 
// [date,day,hour,minute,dayName,awayTeam,homeTeam,awayTeamLocation,awayTeamName,homeTeamLocation,homeTeamName]
function fetchSchedule(year) {
  if (year == undefined) {
    year = current('YEAR');
  }
  const sheetName = 'NFL_SCHEDULE';
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let abbr, name;
  const objTeams = fetchTeamsESPN(year);
  const teamsLen = objTeams.length;
  let arr = [], nfl = [], espnId = [], espnAbbr = [], espnName = [], espnLocation = [], location = [];  
  
  for (let a = 0 ; a < teamsLen ; a++ ) {
    arr = [];
    if(objTeams[a].id != 0 ) {
      abbr = objTeams[a].abbrev.toUpperCase();
      name = objTeams[a].name;
      location = objTeams[a].location;
      espnId.push(objTeams[a].id);
      espnAbbr.push(abbr);
      espnName.push(name);
      espnLocation.push(location);
      arr = [objTeams[a].id,abbr,location,name,objTeams[a].byeWeek];
      nfl.push(arr);
    }
  }
  
  let sheet, range, ids = [], abbrs = [];
  for (let a = 0 ; a < espnId.length ; a++ ) {
    ids.push(espnId[a].toFixed(0));
    abbrs.push(espnAbbr[a]);
  }
  // Declaration of variables
  let schedule = [], home = [], dates = [], allDates = [], hours = [], allHours = [], minutes = [], allMinutes = [], byeIndex, id, date, hour, minute;
  let weeks = Object.keys(objTeams[0].proGamesByScoringPeriod).length;
  if ( objTeams[0].byeWeek > 0 ) {
    weeks++;
  }

  location = [];
  
  for (let a = 0 ; a < teamsLen ; a++ ) {
    
    arr = [];
    home = [];
    dates = [];
    hours = [];
    minutes = [];
    byeIndex = objTeams[a].byeWeek.toFixed(0);
    if ( byeIndex != 0 ) {
      id = objTeams[a].id.toFixed(0);
      arr.push(abbrs[ids.indexOf(id)]);
      home.push(abbrs[ids.indexOf(id)]);
      dates.push(abbrs[ids.indexOf(id)]);
      hours.push(abbrs[ids.indexOf(id)]);
      minutes.push(abbrs[ids.indexOf(id)]);
      for (let b = 1 ; b <= weeks ; b++ ) {
        if ( b == byeIndex ) {
          arr.push('BYE');
          home.push('BYE');
          dates.push('BYE');
          hours.push('BYE');
          minutes.push('BYE');
        } else {
          if ( objTeams[a].proGamesByScoringPeriod[b][0].homeProTeamId.toFixed(0) === id ) {
            arr.push(abbrs[ids.indexOf(objTeams[a].proGamesByScoringPeriod[b][0].awayProTeamId.toFixed(0))]);
            home.push(1);
            date = new Date(objTeams[a].proGamesByScoringPeriod[b][0].date);
            dates.push(date);
            hour = date.getHours();
            hours.push(hour);
            minute = date.getMinutes();
            minutes.push(minute);
          } else {
            arr.push(abbrs[ids.indexOf(objTeams[a].proGamesByScoringPeriod[b][0].homeProTeamId.toFixed(0))]);
            home.push(0);
            date = new Date(objTeams[a].proGamesByScoringPeriod[b][0].date);
            dates.push(date);
            hour = date.getHours();
            hours.push(hour);
            minute = date.getMinutes();
            minutes.push(minute);
          }
        }
      }
      schedule.push(arr);
      location.push(home);
      allDates.push(dates);
      allHours.push(hours);
      allMinutes.push(minutes);
    }
  }
  
  // This section creates a nice table to be used for lookups and queries about NFL season
  let week, awayTeam, awayTeamName, awayTeamLocation, homeTeam, homeTeamName, homeTeamLocation, mnf, day, dayName;
  let formData = [], weekArr = [];
  arr = [];
  for (let b = 0; b < (teamsLen - 1); b++ ) {
    for ( let c = 1; c <= weeks; c++ ) {
      if (location[b][c] == 1) {
        week = c;
        awayTeam = schedule[b][c];
        awayTeamName = espnName[espnAbbr.indexOf(awayTeam)];
        awayTeamLocation = espnLocation[espnAbbr.indexOf(awayTeam)];
        homeTeam = schedule[b][0];
        homeTeamName = espnName[espnAbbr.indexOf(homeTeam)];
        homeTeamLocation = espnLocation[espnAbbr.indexOf(homeTeam)];
        date = allDates[b][c];
        hour = allHours[b][c];
        minute = allMinutes[b][c];
        day = date.day();
        mnf = 0;
        if ( day == 1 ) {
          mnf = 1;
          dayName = 'Monday';
        } else if ( day == 0 ) {
          dayName = 'Sunday';
        } else if ( day == 4 ) {
          day = -3;
          dayName = 'Thursday';
        } else if ( day == 5 ) {
          day = -2;
          dayName = 'Friday';
        } else if ( day == 6 ) {
          day = -1;
          dayName = 'Saturday';
        }        
        arr = [week, date, day, hour, minute, dayName, awayTeam, homeTeam, awayTeamLocation, awayTeamName, homeTeamLocation, homeTeamName];
        formData.push(arr);
        weekArr.push(week);
      }
    }
  }
  let headers = ['week','date','day','hour','minute','dayName','awayTeam','homeTeam','awayTeamLocation','awayTeamName','homeTeamLocation','homeTeamName'];
  let rows = formData.length + 1;
  let columns = formData[0].length;
  
  sheet = ss.getSheetByName(sheetName);  
  if (sheet == null) {
    ss.insertSheet(sheetName,0);
    sheet = ss.getSheetByName(sheetName);
  }

  adjustRows(sheet,rows);
  adjustColumns(sheet,columns);
  
  sheet.setColumnWidths(1,columns,30);
  sheet.setColumnWidth(2,60);
  sheet.setColumnWidth(6,60);
  sheet.setColumnWidths(9,4,80);
  sheet.clear();
  range = sheet.getRange(1,1,1,columns);
  range.setValues([headers]);
  ss.setNamedRange('NFL_SCHEDULE_HEADERS',range);
 
  range = sheet.getRange(1,1,rows,columns);
  range.setFontSize(8);
  range.setVerticalAlignment('middle');  
  range = sheet.getRange(2,1,formData.length,columns);
  range.setValues(formData);

  ss.setNamedRange(sheetName,range);
  range.setHorizontalAlignment('left');
  range.sort([{column: 1, ascending: true},{column: 2, ascending: true},{column: 4, ascending: true},
              {column:  5, ascending: true},{column: 6, ascending: true},{column: 8, ascending: true}]); 
  sheet.getRange(1,3).setNote('-3: Thursday, -2: Friday, -1: Saturday, 0: Sunday, 1: Monday, 2: Tuesday');
  
  // Fetches sorted data
  formData = range.getValues();
  weekArr = sheet.getRange(2,1,rows-1,1).getValues().flat();
  // Sets named ranges for weekly home and away teams to compare for survivor status
  awayTeam = headers.indexOf('awayTeam')+1;
  homeTeam = headers.indexOf('homeTeam')+1;
  for (let a = 1; a <= weeks; a++) {
    let start = weekArr.indexOf(a)+2;
    let end = weekArr.indexOf(a+1)+2;
    if (a == weeks) {
      end = rows+1;
    }
    let len = end - start;
    ss.setNamedRange('NFL_AWAY_'+a,sheet.getRange(start,awayTeam,len,1));
    ss.setNamedRange('NFL_HOME_'+a,sheet.getRange(start,homeTeam,len,1));
  }
  sheet.protect().setDescription(sheetName);
  try {
    sheet.hideSheet();
  }
  catch (err){
    // Logger.log('fetchSchedule hiding: Couldn\'t hide sheet as no other sheets exist');
  }
  ss.toast('Imported all NFL schedule data');
}

// ESPN NFL GAMES - checks if data exists, if not pulls in the data and then returns it for a specific week
function fetchGames(week) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  if (week == null) {
    week = current('week');
  }
  try {
    const nfl = ss.getRangeByName('NFL_SCHEDULE').getValues();
    let games = [];
    for (let a = 0; a < nfl.length; a++) {
      if (nfl[a][0] == week) {
        games.push(nfl[a].slice(1));
      }
    }
    return games;
  }
  catch (err) {
    let text = 'Attempted to fetch NFL matches for week ' + week + ' but no NFL data exists, fetching now...';
    Logger.log(text);
    ss.toast(text);
    fetchSchedule();
    return fetchGames(week);
  }
}

// ESPN NFL LEAGUE LOGOS - Saves URLs to logos to a Script Property variable named "logos" and returns them as an object
function fetchLogos(){
  let obj = {};
  let logos = {};
  try{
    obj = JSON.parse(UrlFetchApp.fetch(scoreboard));
  }
  catch (err) {
    Logger.log(err.stack);
    ui.alert('ESPN API isn\'t responding currently, try again in a moment.',ui.ButtonSet.OK);
    throw new Error('ESPN API issue, try later');
  }
  
  if (Object.keys(obj).length > 0) {
    let games = obj.events;
    // Loop through games provided and creates an array for placing
    for (let a = 0; a < games.length; a++){
      let competitors = games[a].competitions[0].competitors;
      let teamOne = competitors[0].team.abbreviation;
      let teamTwo = competitors[1].team.abbreviation;
      let teamOneLogo = competitors[0].team.logo;
      let teamTwoLogo = competitors[1].team.logo;
      logos[teamOne] = teamOneLogo;
      logos[teamTwo] = teamTwoLogo;
    }
    const scriptProperties = PropertiesService.getScriptProperties();
    try {
      let logoProp = scriptProperties.getProperty('logos');
      let tempObj = JSON.parse(logoProp);
      if (Object.keys(tempObj).length < nflTeams) {
        scriptProperties.setProperty('logos',JSON.stringify(logos));
      }
    }
    catch (err) {
      Logger.log('Error fetching logo object, creating one now');
      scriptProperties.setProperty('logos',JSON.stringify(logos));
    }
  }
  return logos;
}

// ATTEMPT TO GET SEARCH RESULTS VIA AOL
function searchAolForIdESPN(input) {
  let url = "https://search.aol.com/aol/search?q="+encodeURIComponent(input);//+"&num=1&start=1";
  var options = {
    'muteHttpExceptions' : true
  };
  var searchResults = UrlFetchApp.fetch(url, options);
  var urlExp = /(id\/[0-9]+)/g;
  try {
    let titleResults = searchResults.getContentText().match(urlExp);
    let id = null;
    let regex = new RegExp(/\/[0-9]{5,7}$/,'g');
    for (let a = 0; a < titleResults.length; a++) {
      if (regex.test(titleResults[a])) {
        id = titleResults[a].match(/[0-9]{5,7}$/g)[0];
      }
    }
    if (id == null) {
      throw new Error('No match found for ' + input);
    }
    return id;
  } catch (err) {
    Logger.log(err.stack);
    return (err + ' ' + url);
  }
}

// ESPN Player ID Function for attempting to get IDs
function espnPlayerIDSearch(input) {
  arr = input.split(" ");
  first = arr[0];
  last = arr[arr.length-1];
  if (last.length <= 3){
    last = arr[arr.length-2];
  }
  var lower = [];
  arr.forEach(element => {
    lower.push(element.toLowerCase());
  });
  full = lower.join('-');
  var url = "http://www.espn.com/nfl/players?search="+encodeURIComponent(last);//+"&num=1&start=1";
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var options = {
    'muteHttpExceptions' : true
  };
  var searchResults = UrlFetchApp.fetch(url, options);
  var urlExp = new RegExp("[0-9]+(?=\/"+full+")","g");
  try {
    var titleResults = searchResults.getContentText().match(urlExp);
    // return the first match
    return titleResults[0];
  } catch (err) {
    return (url);
  }
}

// SEARCH RESULTS TESTING - DuckDuckGo
function searchDDGForIdESPN(input) {
  var url = "https://duckduckgo.com/?q="+encodeURIComponent(input);//+"&num=1&start=1";
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var options = {
    'muteHttpExceptions' : true
  };
  var searchResults = UrlFetchApp.fetch(url, options);
  var urlExp = /(\<a\ href\=\"http([A-Za-z0-9\.\:\/\_\-\"]+))/gi;
  var titleResults = searchResults.getContentText().match(urlExp);
  // return the first match
  return titleResults;
}


// FANTASY PROS URL Fetching - Simplified Version
// Options for Object fetching: let ecrData, sosData, adpData, expertGroupsData;
/**
 * FANTASY PROS URL GENERATOR
 * Creates the URL based on inputs to fetch positional data
 * @param {string} type - weekly/draft/ros
 * @param {string} position - overall/qb/rb/wr/te/flex/superflex/k/def/idp/dl/lb/db
 * @param {string} format - standard/half/full (optional, default to 'half');
 * @return {string} url
 */
function fantasyProsUrl(type, position, format) {
  
  position = !position ? 'overall' : position;
  format = !format ? 'half' : format;

  const fpUrlBase = 'https://www.fantasypros.com/nfl/rankings';
  const types = ['weekly', 'draft', 'ros'];
  const formats = ['standard', 'half', 'full'];
  const positions = ['overall', 'qb', 'rb', 'wr', 'te', 'flex', 'superflex', 'k', 'dst', 'idp', 'dl', 'lb', 'db'];
  const disallowed = {
    draft: ['flex'],
    ros: ['superflex']
  };

  // Positions that get scoring prefix
  const prefixApplied = ['overall', 'rb', 'wr', 'te', 'flex', 'superflex'];

  // Only override the special cases that don't follow the pattern
  const overrides = {
    draft: {
      standard: {
        overall: 'consensus-cheatsheets',
        superflex: 'superflex-cheatsheets'
      }
    }
  };

  // Validate inputs
  if (types.indexOf(type) === -1) {
    if (!type) {
      Logger.log(`Required input of 'type' is missing, expected one of [${types}]`);
    } else {
      Logger.log(`Expected one of [${types}] for 'type'`);
    }
    return null;
  }
  if (positions.indexOf(position) === -1) {
    Logger.log(`Expected one of [${positions}] for 'position'`);
    return null;
  }
  if (formats.indexOf(format) === -1) {
    Logger.log(`Expected one of [${formats}] for 'format'`);
    return null;
  }
  if (disallowed[type] && disallowed[type].indexOf(position) !== -1) {
    Logger.log(`There are no valid URL endpoints for the combination of ${position.toUpperCase()} ${type} rankings`);
    return null;
  }

  // Check for custom override first
  const custom = overrides[type]?.[format]?.[position];
  if (custom) {
    return `${fpUrlBase}/${custom}.php`;
  }

  // Build filename using pattern-based approach
  const buildFilename = (type, format, position) => {
    const needsScoringPrefix = prefixApplied.includes(position);
    const scoringPrefix = format === 'standard' ? '' : 
                         format === 'half' ? 'half-point-ppr-' : 'ppr-';
    
    // Build the base filename: [scoring-prefix][position]
    const baseFilename = (needsScoringPrefix ? scoringPrefix : '') + position;
    
    // Add type-specific prefixes/suffixes
    if (type === 'draft') {
      // Special case for draft + overall + half/full scoring
      if (position === 'overall' && format !== 'standard') {
        return scoringPrefix + 'cheatsheets';
      }
      return baseFilename + '-cheatsheets';
    } else if (type === 'ros') {
      return 'ros-' + baseFilename;
    } else {
      // weekly type - no additional prefix/suffix
      return baseFilename;
    }
  };

  const filename = buildFilename(type, format, position);
  return `${fpUrlBase}/${filename}.php`;
}

function fetchFantasyProsDraftObject() {
  const positions = ['qb', 'rb', 'wr', 'te', 'k', 'dst', 'dl', 'lb', 'db'];
  let arr = [];
  for (const pos in positions) {
    const obj = fantasyProsObject(fantasyProsUrl('draft',positions[pos],'half'),'ecrData');
    arr = arr.length == 0 ? obj.players : arr.concat(obj.players);
  }
  return arr;
}

function fetchFantasyProsWeeklyObject() {
  const positions = ['qb', 'rb', 'wr', 'te', 'k', 'dst', 'dl', 'lb', 'db'];
  let arr = [];
  for (const pos in positions) {
    const obj = fantasyProsObject(fantasyProsUrl('weekly',positions[pos],'half'),'ecrData');
    arr = arr.length == 0 ? obj.players : arr.concat(obj.players);
  }
  return arr;
}

/**
 * FANTASY PROS URL GENERATOR
 * Creates the URL based on inputs to fetch positional data
 * @param {string} type - weekly/draft/ros
 * @param {string} position - overall/qb/rb/wr/te/flex/superflex/k/def/idp/dl/lb/db
 * @param {string} format - standard/half/full (optional, default to 'half');
 * @return {string} url
 */
function fantasyProsObject(url,request) {
  request = !request ? 'ecrData' : request;
  if (!url) {
    Logger.log('No URL provided, exiting...');
    return null;
  } else {
    try {
      const response = UrlFetchApp.fetch(url, { muteHttpExceptions: true }); //

      // Check if the request was successful
      if (response.getResponseCode() !== 200) { //
        Logger.log(`Error fetching URL: ${url}, Status Code: ${response.getResponseCode()}`); //
        return null;
      }

      const htmlContent = response.getContentText(); //

      // Construct a regular expression to find the JSON object by its name
      // This looks for 'request = { ... };' or 'request: { ... }'
      const regex = new RegExp(`${request}\\s*=\\s*(\\{[\\s\\S]*?\\});|${request}:\\s*(\\{[\\s\\S]*?\\})`);
      const match = htmlContent.match(regex);

      if (match) {
        // Prioritize the '=' assignment match (group 1).
        // If group 1 is null, it means the ':' assignment matched (group 2).
        let jsonString = match[1] || match[2];

        try {
          return JSON.parse(jsonString);
        } catch (jsonError) {
          Logger.log(`Error parsing JSON for object "${request}": ${jsonError}`); //
          return null;
        }
      } else {
        Logger.log(`Object "${request}" not found on the page.`); //
        return null;
      }
    } catch (error) {
      Logger.log(`Error fetching or processing URL: ${error}`); //
      return null;
    }
  }
}

/**
 * FANTASY PROS LOOKUP MAPS
 * Creates the three distinct arrays for managing lookups for the Fantasy Pros IDs
 * @param {array} fantasyProsPlayers - takes in an array of all players
 * @return {object} { exactNameMap, positionTeamMap, lastNameMap } - all three map arrays
 */
function fantasyProsLookupMaps(fantasyProsPlayers) {
  const exactNameMap = {},positionTeamMap = {}, lastNameMap = {};
  
  fantasyProsPlayers.forEach(player => {
    const normalizedName = normalizeName(player.player_name);
    const normalizedShortName = normalizeName(player.player_short_name);
    const position = player.player_position_id?.toUpperCase();
    let team = player.player_team_id?.toUpperCase();
    const teamAbbrev = {"JAC":"JAX","WSH":"WAS"}; // Align to Sleeper team abbreviations
    if (teamAbbrev.hasOwnProperty(team)) {
      team = teamAbbrev[team];
    }
    // Exact name mapping
    exactNameMap[normalizedName] = player;
    if (normalizedShortName && normalizedShortName !== normalizedName) {
      exactNameMap[normalizedShortName] = player;
    }
    
    // Position + Team mapping
    const posTeamKey = `${position}|${team}`;
    if (!positionTeamMap.hasOwnProperty(posTeamKey)) {
      positionTeamMap[posTeamKey] = [];
    }
    positionTeamMap[posTeamKey].push(player);
    
    // Last name mapping (with and without suffix)
    const nameParts = normalizedName.split(' ');
    if (nameParts.length > 1) {
      const lastName = nameParts[nameParts.length - 1];
      const lastNameNoSuffix = removeSuffix(lastName);
      
      if (!lastNameMap.hasOwnProperty(lastName)) {
        lastNameMap[lastName] = [];
      }
      lastNameMap[lastName].push(player);
      
      if (lastNameNoSuffix !== lastName) {
        if (!lastNameMap.hasOwnProperty(lastNameNoSuffix)) {
          lastNameMap[lastNameNoSuffix] = [];
        }
        lastNameMap[lastNameNoSuffix].push(player);
      }
    }
  });
  // Logger.log(JSON.stringify({ exactNameMap, positionTeamMap, lastNameMap }));
  return { exactNameMap, positionTeamMap, lastNameMap };
}

/**
 * FANTASY PROS MATCH PLAYER
 * Process match for player via name matching from Sleeper information with a tiered approach
 * @param {Object} searchPlayer - Player to search for
 * @param {string} searchPlayer.firstName - First name
 * @param {string} searchPlayer.lastName - Last name  
 * @param {string} searchPlayer.position - Position
 * @param {string} searchPlayer.team - Team
 * @param {Object} lookupMaps - Pre-built lookup maps
 * @return {Object|null} Match result
 */
function fantasyProsPlayerMatch(searchPlayer, lookupMaps, details) {
  const { exactNameMap, positionTeamMap, lastNameMap } = lookupMaps;
  
  const firstName = searchPlayer.first_name?.trim() || '';
  const lastName = searchPlayer.last_name?.trim() || '';
  const position = searchPlayer.position?.toUpperCase();
  const team = searchPlayer.team?.toUpperCase();
  const id = searchPlayer.id;
  
  if (!firstName || !lastName) return null;
  
  // TIER 1: Exact full name match
  const fullName = normalizeName(`${firstName} ${lastName}`);
  const fullNameNoSuffix = normalizeName(removeSuffix(`${firstName} ${lastName}`));
  
  let match = exactNameMap[fullName];
  if (match) {
    if (details) {
      return { match, tier: 1, method: 'exact_full_name' };
    } else {
      return match;
    }
  }
  
  match = exactNameMap[fullNameNoSuffix];
  if (match) {
    if (details) {
      return { match, tier: 1, method: 'exact_full_name_no_suffix' };
    } else {
      return match;
    }
  }
  
  // TIER 2: Position + Team filtered, then first initial + last name
  if (position && team) {
    const posTeamKey = `${position}|${team}`;
    const filteredPlayers = positionTeamMap[posTeamKey] || [];
    
    if (filteredPlayers.length > 0) {
      const firstInitial = firstName ? firstName.charAt(0).toUpperCase() : '';
      const normalizedLastName = normalizeName(lastName);
      const normalizedLastNameNoSuffix = normalizeName(removeSuffix(lastName));
      
      // Try first initial + last name
      for (const player of filteredPlayers) {
        const playerName = normalizeName(player.player_name);
        const playerShortName = normalizeName(player.player_short_name);
        const playerNameParts = playerName.split(' ');
        
        if (playerNameParts.length > 1) {
          const playerFirstInitial = playerNameParts[0].charAt(0).toUpperCase();
          const playerLastName = playerNameParts[playerNameParts.length - 1];
          const playerLastNameNoSuffix = normalizeName(removeSuffix(playerLastName));
          
          // Check first initial + last name match
          if (playerFirstInitial === firstInitial && 
              (playerLastName === normalizedLastName || 
               playerLastNameNoSuffix === normalizedLastNameNoSuffix)) {
            if (details) {
              return { match: player, tier: 2, method: 'initial_lastname_filtered' };
            } else {
              return player;
            }
          }
        }
        
        // Also check short name format (e.g., "S. Vaki")
        if (playerShortName.includes('.')) {
          const shortNameParts = playerShortName.split(' ');
          if (shortNameParts.length > 1) {
            const shortFirstInitial = shortNameParts[0].charAt(0).toUpperCase();
            const shortLastName = normalizeName(shortNameParts[shortNameParts.length - 1]);
            
            if (shortFirstInitial === firstInitial && 
                (shortLastName === normalizedLastName || 
                 shortLastName === normalizedLastNameNoSuffix)) {
              if (details) {
                return { match: player, tier: 2, method: 'initial_lastname_short_filtered' };
              } else {
                return player;
              }
            }
          }
        }
      }
    }
  }
  
  // TIER 3: Last name only (with position/team filter if available)
  const normalizedLastName = normalizeName(lastName);
  const normalizedLastNameNoSuffix = normalizeName(removeSuffix(lastName));
  
  let lastNameCandidates = lastNameMap[normalizedLastName] || [];
  if (normalizedLastNameNoSuffix !== normalizedLastName) {
    const suffixCandidates = lastNameMap[normalizedLastNameNoSuffix] || [];
    lastNameCandidates = [...lastNameCandidates, ...suffixCandidates];
  }
  
  if (lastNameCandidates.length > 0) {
    // If we have position and team, filter candidates
    if (position && team) {
      const filtered = lastNameCandidates.filter(player => 
        player.player_position_id?.toUpperCase() === position &&
        player.player_team_id?.toUpperCase() === team
      );
      
      if (filtered.length === 1) {
        if (details) {
          return { match: filtered[0], tier: 3, method: 'lastname_only_filtered' };
        } else {
          return filtered[0];
        }
      } else if (filtered.length > 1) {
        // Multiple matches - could implement additional logic here
        if (details) {
          return { match: filtered[0], tier: 3, method: 'lastname_only_filtered_multiple' };
        } else {
          return filtered[0];
        }
      }
    }
    
    // If only one candidate with this last name, use it
    if (lastNameCandidates.length === 1) {
      if (details) {
        return { match: lastNameCandidates[0], tier: 3, method: 'lastname_only_unique' };
      } else {
        return lastNameCandidates[0];
      }
    }
  }  
  return null;
}

/**
 * FANTASY PROS BATCH MATCH
 * Batch process multiple players via name matching from Sleeper information
 * @param {Array} searchPlayers - Players to match
 * @param {Array} fantasyProsPlayers - Fantasy Pros "ecrData" and "players" array within object provided
 * @return {Array} Match results
 */
function fantasyProsPlayerBatchMatch(details) {
  const fantasyProsPlayers = fetchFantasyProsDraftObject();
  // Logger.log(fantasyProsPlayers);
  const lookupMaps = fantasyProsLookupMaps(fantasyProsPlayers);
  const results = [];
  
  const sleeperPlayers = sleeperPlayerSimpleObject();
  const ids = {};
  for (const searchPlayer of sleeperPlayers) {
    const result = fantasyProsPlayerMatch(searchPlayer, lookupMaps, details);
    
    if (result) {
      if (result.player_id) {
        ids[searchPlayer.id] = result.player_id;
        if (details) {
          results.push({
            searchPlayer,
            match: result?.match || null,
            tier: result?.tier || null,
            method: result?.method || null,
            matched: result !== null
          });
        }
      }
    }
  }
  if (details) {
    return {ids, results};
  } else {
    return ids;
  }
}

/**
 * FANTASY PROS WEEKLY PROJECTIONS
 * Batch process multiple players via name matching from Sleeper information
 * @param {Array} searchPlayers - Players to match
 * @param {Array} fantasyProsPlayers - Fantasy Pros "ecrData" and "players" array within object provided
 * @return {Array} Match results
 */
function fantasyProsWeeklyProjections(details) {
  const fantasyProsPlayers = fetchFantasyProsWeeklyObject();
  const lookupMaps = fantasyProsLookupMaps(fantasyProsPlayers);
  const results = [];
  
  const sleeperPlayers = sleeperPlayerSimpleObject();
  const obj = {};
  for (const searchPlayer of sleeperPlayers) {
    const result = fantasyProsPlayerMatch(searchPlayer, lookupMaps, details);
    
    if (result) {
      if (result.player_id) {
        obj[searchPlayer.id] = result.r2p_pts;
        if (details) {
          results.push({
            searchPlayer,
            match: result?.match || null,
            tier: result?.tier || null,
            method: result?.method || null,
            matched: result !== null
          });
        }
      }
    }
  }
  if (details) {
    return {obj, results};
  } else {
    return obj;
  }
}

//-------------------------------------------------------------
// FUNCTION TO FETCH A TABLE OF THE FP MATCHUP CALENDAR
function fantasyProsMatchupFetch(NAMES_TO_SLEEPER_ID,format) {
  if (!NAMES_TO_SLEEPER_ID) {
    SpreadsheetApp.getActiveSpreadsheet().toast(`Please provide name finder variable in script!`);
    return null;
  }
  if (format == undefined){
    format = 'HALF';
  } else if (format == 'FULL'){
    format = 'PPR';
  }
  const playersObj = JSON.parse(UrlFetchApp.fetch('https://api.sleeper.app/v1/players/nfl'));
  let playersNames = [];
  let playersIds = [];
  Object.keys(playersObj).forEach(key => {
    pos = playersObj[key]['fantasy_positions'];
    if (pos == 'DEF') {
      playersNames.push(playersObj[key]['first_name'] + ' ' + playersObj[key]['last_name']);
      playersIds.push(playersObj[key]['player_id']);
    } else if ( pos == 'QB' ||  pos == 'RB' ||  pos == 'WR' ||  pos == 'TE' ) {
      playersNames.push(playersObj[key]['first_name'] + ' ' + playersObj[key]['last_name']);
      if (playersObj[key]['first_name'] + ' ' + playersObj[key]['last_name'] == "Brandon Johnson") {
        playersIds.push(8756);
      } else {
        playersIds.push(playersObj[key]['player_id']);
      }
    }
  });
  const resNames = new RegExp(/(?<=fp\-player\-name\=\")[^\"]+/,'g');
  const resDiff = new RegExp(/(BYE|(?<=data\-rank\=\")[^\"]+)/,'g');
  let data = [];
  let arr = [];
  let url, table, count, name, id, len;
  let baseUrl = 'https://www.fantasypros.com/nfl/matchups'
  let positionList = ['qb', 'rb', 'wr', 'te', 'dst']
  for (let a = 0 ; a < positionList.length ; a++) {
    //Logger.log('Fetching values for ' + positionList[j]);
    let pos = positionList[a].toUpperCase();
    pos == 'DST' ? pos = 'DEF' : null;
    url = (baseUrl+'/'+positionList[a]+'.php');
    table = (UrlFetchApp.fetch(url).getContentText().split('<tbody>'))[1];
    
    let rows = table.split('<tr class=');
    for (let b = 0; b < rows.length; b++) {
      
      let row = rows[b].match(resDiff);
      
      try {
        row.unshift(pos);
        row.unshift(rows[b].match(resNames)[0]);
        data.push(row);
      } catch (err) {
      }
           
    }
    //resTeams = new RegExp(/(?<=\<\/a\>\ )[^\<]+(?=\ \<a\ href)/,'g');
    //teams = table.match(resTeams);
    for (let b = 0 ; b < data.length; b++) {
      id = null;
      //if (teams[b] == 'JAC') {
      //  teams[b] = 'JAX';
      //}
      let index = playersNames.indexOf(data[b][0]);
      id = playersIds[index];
      if ( id == null){
        id = NAMES_TO_SLEEPER_ID[data[b][0]];
      }
      if ( id != null && data[b][1] != null){
        data[b][0] = id;
        arr.push(data[b]);
      }
    }
  }
  return arr;
}

//-------------------------------------------------------------
// GENERAL WRITE FUNCTION BASED ON FETCHED MATCHUP TABLE
function fantasyProsMatchupLogging(NAMES_TO_SLEEPER_ID) {
  const platform = 'FP';
  let ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(platform + '_MATCHUP');
  if (sheet==null){
    ss.insertSheet(platform + '_MATCHUP');
    sheet = ss.getSheetByName(platform + '_MATCHUP');
  }
  sheet.getRange(1,1).setValue(platform);
  let data = fantasyProsMatchupFetch(NAMES_TO_SLEEPER_ID,'HALF');

  sheet.clear();

  sheet.getRange(2,1,data.length,1).setHorizontalAlignment('left');
  let weeks = ['id','pos'];
  for(let a = 1; a <= 18; a++) {
    weeks.push(a);
  }
  sheet.getRange(1,1,1,weeks.length).setValues([weeks]);
  sheet.getRange(2,1,data.length,data[0].length).setValues(data)
    .setHorizontalAlignment('right');
  sheet.setColumnWidths(1,19,50)
  let lastRow = sheet.getLastRow();

  ss.setNamedRange(platform+'_MATCHUP',sheet.getRange(2,1,lastRow-1,sheet.getLastColumn()));
  ss.setNamedRange(platform+'_MATCHUP_ID',sheet.getRange(2,1,lastRow-1,1));
  ss.setNamedRange(platform+'_MATCHUP_POS',sheet.getRange(2,2,lastRow-1,1));


  adjustRows(sheet);
  adjustColumns(sheet);

  ss.toast('Imported updated matchup difficulties');
}

//---------//-------------------------------------------------------------
// FUNCTION TO FETCH POINTS ALLOWED TABLE FROM FP
function fantasyProsPointsAllowed(NAMES_TO_SLEEPER_ID) {
  try {
    // First, try to get data from the spreadsheet
    const sheetData = getPointsAllowedFromSheet(NAMES_TO_SLEEPER_ID);
    if (sheetData) {
      return sheetData;
    }
    
    // If no sheet data, fall back to web scraping
    Logger.log('🚫 No spreadsheet data found, fetching from web...');
    SpreadsheetApp.getActiveSpreadsheet().toast('Fetching data from FantasyPros website...', '💻 Web Fetch');
    
    const url = 'https://www.fantasypros.com/nfl/points-allowed.php';
    const html = UrlFetchApp.fetch(url).getContentText();
    
    // ... rest of your existing web scraping code ...
    const numberRegex = />\s*(\d+\.?\d*)\s*</g;
    
    const theadMatch = html.match(/<thead>([\s\S]*?)<\/thead>/);
    if (!theadMatch) throw new Error('Could not find table header');
    
    const headerHtml = theadMatch[1];
    const positions = [];
    const posMatches = headerHtml.matchAll(/<th[^>]*>([A-Z]+)<\/th>/g);
    for (const match of posMatches) {
      let pos = match[1];
      if (pos === 'DST') pos = 'DEF';
      if (['QB', 'RB', 'WR', 'TE', 'K', 'DEF'].includes(pos)) {
        positions.push(pos);
      }
    }
    
    if (positions.length === 0) throw new Error('No valid positions found in header');
    
    const tbodyMatch = html.match(/<tbody>([\s\S]*?)<\/tbody>/);
    if (!tbodyMatch) throw new Error('Could not find table body');
    
    const rows = tbodyMatch[1].split(/<tr>/i).filter(row => row.includes('player-label'));
    
    let data = [['team', 'position', 'rank', 'pa', 'pct', 'stdev']];
    let sets = {};
    positions.forEach(pos => {
      sets[pos] = {ranks: [], values: [], pct: [], devs: [], stdev: null};
    });
    let teams = [];
    
    for (const row of rows) {
      const hrefMatch = row.match(/href="[^"]*\/([a-z-]+)\.php"/);
      if (!hrefMatch) continue;
      
      const urlSlug = hrefMatch[1];
      const teamName = urlSlug.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      
      let sleeperId = NAMES_TO_SLEEPER_ID[teamName];
      
      if (!sleeperId) {
        sleeperId = NAMES_TO_SLEEPER_ID[teamName.replace('Los Angeles ', '')];
      }
      if (!sleeperId) {
        sleeperId = NAMES_TO_SLEEPER_ID[urlSlug];
      }
      
      if (!sleeperId) {
        Logger.log(`⚠️ Warning: Team "${teamName}" not found in mapping`);
        continue;
      }
      
      teams.push(sleeperId);
      
      const numbers = [...row.matchAll(numberRegex)].map(m => m[1]);
      
      let numIndex = 1;
      for (let i = 0; i < positions.length && numIndex < numbers.length - 1; i++) {
        const pos = positions[i];
        const rank = numbers[numIndex];
        const value = numbers[numIndex + 1];
        
        if (rank && value) {
          sets[pos].ranks.push(rank);
          sets[pos].values.push(parseFloat(value));
        }
        numIndex += 2;
      }
    }
    
    Object.keys(sets).forEach(pos => {
      const arr = sets[pos].values;
      if (arr.length === 0) return;
      
      const min = Math.min(...arr);
      const max = Math.max(...arr);
      const mean = arr.reduce((sum, val) => sum + val, 0) / arr.length;
      
      const variance = arr.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / arr.length;
      sets[pos].stdev = Math.sqrt(variance);
      
      for (let i = 0; i < arr.length; i++) {
        const pct = max === min ? 0.5 : (arr[i] - min) / (max - min);
        sets[pos].pct.push(parseFloat(pct.toFixed(3)));
        
        const dev = sets[pos].stdev === 0 ? 0 : (arr[i] - mean) / sets[pos].stdev;
        sets[pos].devs.push(parseFloat(dev.toFixed(2)));
      }
    });
    
    for (let i = 0; i < teams.length; i++) {
      positions.forEach(pos => {
        if (sets[pos].values[i] !== undefined) {
          data.push([
            teams[i],
            pos,
            sets[pos].ranks[i],
            sets[pos].values[i],
            sets[pos].pct[i],
            sets[pos].devs[i]
          ]);
        }
      });
    }
    
    return data;
    
  } catch (err) {
    const text = `Issue fetching fantasy points allowed. | ERROR: ${err.message || err.stack}`;
    Logger.log('⚠️ ' + text);
    SpreadsheetApp.getActiveSpreadsheet().toast(text, `⚠️ FP PA ISSUE!`);
    return null;
  }
}

//-------------------------------------------------------------
// FUNCTION TO GET POINTS ALLOWED FROM SHEET
function getPointsAllowedFromSheet(NAMES_TO_SLEEPER_ID) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const rawRange = ss.getRangeByName('FP_PA_RAW');
    
    if (!rawRange) {
      Logger.log('🚫 Named range FP_PA_RAW not found');
      return null;
    }
    
    const rawData = rawRange.getValues();
    
    if (!rawData || rawData.length < 2) {
      Logger.log('🚫 No data found in FP_PA_RAW');
      return null;
    }
    
    SpreadsheetApp.getActiveSpreadsheet().toast('Using data from spreadsheet (FP_PA_RAW)', '✓ Using Raw Data');
    Logger.log('🔄 Processing data from spreadsheet');
    
    // Expected column order: Team, Rank, QB, Rank, RB, Rank, WR, Rank, TE, Rank, K, Rank, DST
    const positions = ['QB', 'RB', 'WR', 'TE', 'K', 'DEF'];
    
    let data = [['team', 'position', 'rank', 'pa', 'pct', 'stdev']];
    let sets = {};
    positions.forEach(pos => {
      sets[pos] = {ranks: [], values: [], pct: [], devs: [], stdev: null};
    });
    let teams = [];
    
    // Skip header row, process data rows
    for (let i = 1; i < rawData.length; i++) {
      const row = rawData[i];
      const teamName = row[0];
      
      if (!teamName) continue;
      
      let sleeperId = NAMES_TO_SLEEPER_ID[teamName];
      
      if (!sleeperId) {
        Logger.log(`⚠️ Warning: Team "${teamName}" not found in mapping`);
        continue;
      }
      
      teams.push(sleeperId);
      
      // Parse positions: QB (col 2,3), RB (4,5), WR (6,7), TE (8,9), K (10,11), DST (12,13)
      const positionColumns = [
        {pos: 'QB', rankCol: 2, valueCol: 3},
        {pos: 'RB', rankCol: 4, valueCol: 5},
        {pos: 'WR', rankCol: 6, valueCol: 7},
        {pos: 'TE', rankCol: 8, valueCol: 9},
        {pos: 'K', rankCol: 10, valueCol: 11},
        {pos: 'DEF', rankCol: 12, valueCol: 13}
      ];
      
      positionColumns.forEach(({pos, rankCol, valueCol}) => {
        const rank = row[rankCol];
        const value = parseFloat(row[valueCol]);
        
        if (rank && !isNaN(value)) {
          sets[pos].ranks.push(rank);
          sets[pos].values.push(value);
        }
      });
    }
    
    // Calculate statistics
    Object.keys(sets).forEach(pos => {
      const arr = sets[pos].values;
      if (arr.length === 0) return;
      
      const min = Math.min(...arr);
      const max = Math.max(...arr);
      const mean = arr.reduce((sum, val) => sum + val, 0) / arr.length;
      
      const variance = arr.reduce((sum, val) => sum + Math.pow(val - mean, 2), 0) / arr.length;
      sets[pos].stdev = Math.sqrt(variance);
      
      for (let i = 0; i < arr.length; i++) {
        const pct = max === min ? 0.5 : (arr[i] - min) / (max - min);
        sets[pos].pct.push(parseFloat(pct.toFixed(3)));
        
        const dev = sets[pos].stdev === 0 ? 0 : (arr[i] - mean) / sets[pos].stdev;
        sets[pos].devs.push(parseFloat(dev.toFixed(2)));
      }
    });
    
    // Build output data
    for (let i = 0; i < teams.length; i++) {
      positions.forEach(pos => {
        if (sets[pos].values[i] !== undefined) {
          data.push([
            teams[i],
            pos,
            sets[pos].ranks[i],
            sets[pos].values[i],
            sets[pos].pct[i],
            sets[pos].devs[i]
          ]);
        }
      });
    }
    
    Logger.log(`✅ Successfully processed ${teams.length} teams from spreadsheet`);
    return data;
    
  } catch (err) {
    Logger.log(`⚠️ Error reading from sheet: ${err.message}`);
    return null;
  }
}

//-------------------------------------------------------------
// WRITE FUNCTION OF THE POINTS ALLOWED TABLE FROM FP
function fantasyProsPointsAllowedLogging(NAMES_TO_SLEEPER_ID) {
  const platform = 'FP';
  let ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(platform + '_PA');
  if (sheet==null){
    ss.insertSheet(platform + '_PA');
    sheet = ss.getSheetByName(platform + '_PA');
  }
  sheet.getRange(1,1).setValue(platform);
  let data = fantasyProsPointsAllowed(NAMES_TO_SLEEPER_ID);

  sheet.clear();

  sheet.getRange(1,1,data.length,data[0].length).setValues(data)
    .setHorizontalAlignment('center');
  sheet.getRange(1,1,data.length,2).setHorizontalAlignment('left');
  sheet.setColumnWidths(1,data[0].length,40)
  let lastRow = sheet.getLastRow();

  let ranges = ['FP_PA_TEAM','FP_PA_POS','FP_PA_RNK','FP_PA','FP_PA_PCT','FP_PA_STD'];
  for (let a = 0; a < ranges.length; a++) {
    ss.setNamedRange(ranges[a],sheet.getRange(2,a+1,lastRow-1,1));
  }

  adjustRows(sheet);
  adjustColumns(sheet);
  
  ss.toast('Imported updated points allowed table raw data from FP_PA_RAW range', '📥  Fantasy Pros Points Against Imported');
}

// FANTASY CALC
/**
 * The base URL for the FantasyCalc API.
 */
const FANTASY_CALC_API_URL = 'https://api.fantasycalc.com/values/current';

/**
 * A generic function to fetch player values from the FantasyCalc API for a specific configuration.
 *
 * @param {boolean} isDynasty - True for Dynasty values, false for Redraft.
 * @param {number} numQbs - The number of starting QBs (1 for standard, 2 for Superflex).
 * @param {number} numTeams - The number of teams in the league.
 * @param {number} ppr - The PPR scoring value (e.g., 0, 0.5, 1).
 * @returns {Object|null} The parsed JSON object of players, or null if an error occurs.
 */
function fantasyCalcFetchData(isDynasty, numQbs, numTeams, ppr) {
  try {
    const url = `${FANTASY_CALC_API_URL}?isDynasty=${isDynasty}&numQbs=${numQbs}&numTeams=${numTeams}&ppr=${ppr}`;
    const response = UrlFetchApp.fetch(url, { 'muteHttpExceptions': true });
    const responseCode = response.getResponseCode();
    
    if (responseCode === 200) {
      return JSON.parse(response.getContentText());
    } else {
      Logger.log(`API request failed for url: ${url} | Response Code: ${responseCode}`);
      return null;
    }
  } catch (err) {
    Logger.log(`Error fetching or parsing API data from FantasyCalc | ERROR: ${err.stack}`);
    return null;
  }
}

/**
 * Main wrapper function to fetch, process, and record all specified FantasyCalc value variations.
 * This function will clear the target sheet and rebuild it with consolidated data.
 */
function fantasyCalcUpdateAllValues() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('FAN_CALC') || ss.insertSheet('FAN_CALC');

  // --- CONFIGURATION ---
  const teamConfigs = [8, 10, 12];
  const qbConfigs = [1, 2]; // 1=Standard, 2=Superflex
  const pprVal = 0.5;
  // ---------------------

  const playerData = new Map();
  let dynamicHeaders = [];

  ss.toast('🚀 Starting FantasyCalc data update...');
  
  // 1. LOOP AND FETCH DATA FOR ALL CONFIGURATIONS
  for (const teams of teamConfigs) {
    for (const qbs of qbConfigs) {
      const qbLabel = qbs === 1 ? '1QB' : 'SF';
      ss.toast(`🔄 Fetching data for ${teams}-Team, ${qbLabel}...`);

      const formats = [
        { name: 'RD', isDynasty: false }, // Redraft
        { name: 'DN', isDynasty: true }   // Dynasty
      ];

      for (const format of formats) {
        const apiData = fantasyCalcFetchData(format.isDynasty, qbs, teams, pprVal);

        if (apiData) {
          
          let tail = `${teams}T${qbs > 1 ? '_SPFLX' : ''}`;
          if (format.isDynasty == true) {
            tail += '_DN';
          }
          const valueHeader = `VAL_${tail}`;
          const trendHeader = `TREND_${tail}`;
          if (dynamicHeaders.indexOf(valueHeader) === -1) {
             dynamicHeaders.push(valueHeader, trendHeader);
          }

          for (const playerKey in apiData) {
            const p = apiData[playerKey];
            const sleeperId = p.player.sleeperId;
            
            // If we haven't seen this player before, store their static info
            if (!playerData.has(sleeperId)) {
              playerData.set(sleeperId, {
                name: p.player.name,
                position: p.player.position,
                team: p.player.maybeTeam,
                // Add empty placeholders for all possible dynamic columns
                ...dynamicHeaders.reduce((acc, h) => ({...acc, [h]: null}), {})
              });
            }
            
            // Add or update the values for the current format
            const existingPlayer = playerData.get(sleeperId);
            existingPlayer[valueHeader] = p.value;
            existingPlayer[trendHeader] = p.trend30Day;
          }
        } else {
            ss.toast(`⚠️ Failed to fetch data for ${teams}-Team, ${qbLabel}, ${format.name}`);
        }
      }
    }
  }

  // 2. PREPARE THE CONSOLIDATED DATA FOR THE SHEET
  ss.toast('🥣 Consolidating all player data...');
  const staticHeaders = ['sleeperID', 'name', 'position', 'team'];
  const allHeaders = [...staticHeaders, ...dynamicHeaders];
  const outputArray = [allHeaders];
  
  // Sort players by a default value before writing, e.g., 12-Team Superflex Dynasty Value
  const defaultSortKey = 'VAL_12T';
  const sortedPlayerIds = Array.from(playerData.keys()).sort((a, b) => {
    const valA = playerData.get(a)[defaultSortKey] || 0;
    const valB = playerData.get(b)[defaultSortKey] || 0;
    return valB - valA; // Sort descending
  });

  for (const sleeperId of sortedPlayerIds) {
    const pData = playerData.get(sleeperId);
    const row = [
      sleeperId,
      pData.name,
      pData.position,
      pData.team
    ];
    for (const header of dynamicHeaders) {
      row.push(pData[header] || null); // Ensure value exists, otherwise push null
    }
    outputArray.push(row);
  }
  
  // 3. WRITE DATA AND CREATE NAMED RANGES
  ss.toast(`✍️ Writing data for ${outputArray.length - 1} players...`);
  sheet.clear();
  
  const numRows = outputArray.length - 1;
  
  adjustColumns(sheet,allHeaders.length);
  adjustRows(sheet,numRows+1);

  sheet.getRange(1, 1, outputArray.length, allHeaders.length).setValues(outputArray);
  sheet.getRange(1, 1, 1, allHeaders.length).setFontWeight('bold');
  sheet.setFrozenRows(1);

  if (numRows > 0) {
    allHeaders.forEach((header, index) => {
      if (header.includes('VAL') || header.includes('TREND')) {
        const col = index + 1;
        // Sanitize header for named range (removes underscores, etc.)
        const rangeName = `FAN_CALC_${header}`;
        
        const range = sheet.getRange(2, col, numRows, 1);
        ss.setNamedRange(rangeName, range);
      }
    });
    ss.setNamedRange('FAN_CALC_SLPR_ID',sheet.getRange(2, 1, numRows, 1));
  }

  Logger.log(`Completed fetch of Fantasy Calc values. Created ${allHeaders.length} named ranges for ${numRows} players.`);
  ss.toast(`Updated all FantasyCalc values.`, '✅ COMPLETE', 10);
}

// HARRIS Fantasy Football

const harrisBaseSite = 'https://www.harrisfootball.com/';
const harrisDraftSite = 'https://www.harrisfootball.com/top-160-ranks-draft';

function harrisRanksImport(format) {
  const prefix = 'HARRIS';
  const sheetname = prefix + '_RANKS';
  const weeks = 18;
  format = format || 'half';
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  let sheet = ss.getSheetByName(sheetname);
  if (sheet == null) {
    sheet = ss.insertSheet(sheetname);
  }
 
  let data = harrisRanks();
  if (!data) {
    ss.toast("Failed to import Harris ranks. Data object was null.");
    return;
  }
  const week = data.week;
  const missed = data.missed;
  delete data.week;
  delete data.missed;

  if (missed.length > 0) {
    Logger.log("The following players were not matched: " + missed);
  }
  
  let headers = ['id', 'name', 'pos', ...Array.from({ length: weeks }, (_, i) => i + 1)];
  // Ensure the header row is always present and correct
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]).setBackground('black').setFontColor('white');

  const lastRow = sheet.getLastRow();
  let existingPlayers = {}; // Use an object for faster lookups
  let newPlayers = [];

  // Read existing data if the sheet has any players
  if (lastRow > 1) {
    const range = sheet.getRange(2, 1, lastRow - 1, headers.length);
    const values = range.getValues();
    values.forEach((row, index) => {
      const id = row[0];
      if (id) {
        // Store the row index (relative to the sheet, e.g., 2, 3, 4) and the data
        existingPlayers[id] = { rowIndex: index + 2, data: row };
      }
    });
  }

  // Iterate through the new data and sort players into "update" or "new"
  Object.keys(data).forEach(pos => {
    Object.keys(data[pos]).forEach(playerId => {
      const player = pos !== 'DST' ? parseInt(playerId) : playerId;
      const playerData = data[pos][playerId];
      
      if (existingPlayers[player]) {
        // Player exists, update their rank for the current week
        const weekColumnIndex = headers.indexOf(week);
        sheet.getRange(existingPlayers[player].rowIndex, weekColumnIndex + 1).setValue(playerData[format]);
      } else {
        // Player is new, add them to a list to be appended later
        let newRow = Array(headers.length).fill(''); // Create an empty array of the correct length
        newRow[0] = player;
        newRow[1] = playerData.name;
        newRow[2] = pos;
        newRow[headers.indexOf(week)] = playerData[format];
        newPlayers.push(newRow);
      }
    });
  });

  // Append all new players to the sheet in a single operation
  if (newPlayers.length > 0) {
    sheet.getRange(sheet.getLastRow() + 1, 1, newPlayers.length, headers.length).setValues(newPlayers);
  }

  // Final formatting and sorting
  const fullRange = sheet.getRange(2, 1, sheet.getLastRow() - 1, headers.length);
  fullRange
    .sort([{column: headers.indexOf('pos') + 1, ascending: true}, {column: headers.indexOf(week) + 1, ascending: true}])
    .setBackground('white')
    .setFontColor('black')
    .setHorizontalAlignment('left');
  
  sheet.getRange(2, headers.indexOf(1) + 1, sheet.getLastRow() - 1, weeks).setHorizontalAlignment('right');
  sheet.setColumnWidth(1, 50);
  sheet.setColumnWidth(2, 150);
  sheet.setColumnWidths(3, weeks + 1, 50);
  
  ss.toast('Harris ranks imported successfully.', '✅ COMPLETE', 10);
}

// ==============================================
// HARRIS RANKS OBJECT FETCH
// Dependencies: none
// Gathers the rankings found on all the Harris Football site pages for specific players (supplied in the array below)
function harrisRanks() {
  const pages = ['ranks', 'rb-ranks', 'wr-ranks', 'te-ranks', 'def-ranks'];
  const pos = ['QB', 'RB', 'WR', 'TE', 'DST'];
  const content = UrlFetchApp.fetch(`${harrisBaseSite}ranks`).getContentText();
  const weekMatch = content.match(/Week\s(\d{1,2})/);
  if (!weekMatch) {
    Logger.log("Could not determine the week from the main ranks page.");
    return null;
  }
  const week = parseInt(weekMatch[1]);

  if (week) {
    let obj = { week, missed: [] };
    for (let i = 0; i < pages.length; i++) {
      let ranks = [];
      let missed = [];
      let content = UrlFetchApp.fetch(`${harrisBaseSite}${pages[i]}`).getContentText();
      const tables = content.split('publishsource="Excel">');
      tables.shift(); // Remove content before the first table

      const regex = /<td[^>]*>(.*?)<\/td>/g;

      let parsedTables = tables.map(tableHtml => {
        let playerRanks = {};
        const rows = tableHtml.split('<tr');
        for (let j = 1; j < rows.length; j++) { // Start at 2 to skip headers
          const cells = rows[j].match(regex);
          if (cells && cells.length >= 2) {
            const rank = parseInt(cells[0].replace(/<[^>]*>/g, '').trim());
            const name = cells[1].replace(/<[^>]*>/g, '').trim();
            if (name && !isNaN(rank)) {
              playerRanks[name] = rank;
            }
          }
        }
        return playerRanks;
      });

      let mergedRanks = {};
      if (parsedTables.length > 0) {
        Object.keys(parsedTables[0]).forEach(name => {
          mergedRanks[name] = { std: parsedTables[0][name], ppr: null };
        });
        if (parsedTables.length > 1) {
          Object.keys(parsedTables[1]).forEach(name => {
            if (mergedRanks[name]) {
              mergedRanks[name].ppr = parsedTables[1][name];
            } else {
              mergedRanks[name] = { std: null, ppr: parsedTables[1][name] };
            }
          });
        }
      }

      Object.keys(mergedRanks).forEach(name => {
        const nameFound = NAMES_TO_SLEEPER_ID[name];
        if (!nameFound) {
          missed.push(name);
        } else {
          let stdRank = mergedRanks[name].std;
          let pprRank = mergedRanks[name].ppr;

          // --- THIS IS THE FIX ---
          // If a player only has one rank (from a single table), use it for both.
          if (stdRank && !pprRank) {
            pprRank = stdRank;
          } else if (pprRank && !stdRank) {
            stdRank = pprRank;
          }

          const totalPlayers = Object.keys(mergedRanks).length + 1;
          stdRank = stdRank || totalPlayers;
          pprRank = pprRank || totalPlayers;

          const halfPpr = ((stdRank + pprRank) / 2).toFixed(1);
          ranks.push([nameFound, name, stdRank, pprRank, halfPpr]);
        }
      });

      if (missed.length > 0) {
        obj.missed.push(...missed);
      }
      
      obj[pos[i]] = ranks.reduce((acc, [key, name, std, ppr, half]) => {
        acc[key] = { name, std, ppr, half };
        return acc;
      }, {});
    }
    Logger.log(JSON.stringify(obj));
    return obj;
  }
  return null;
}
function harrisHalfDraft(NAMES_TO_SLEEPER_ID) {
  const prefix = 'HARRIS';
  const harrisSheet = prefix+'_DRAFT';
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  let sheet = ss.getSheetByName(harrisSheet);
  if (sheet == null) {
    ss.insertSheet(harrisSheet)
    sheet = ss.getSheetByName(harrisSheet);
  }
  
  let count, arr = [], output = [], ranks = [], values = [], missed = [], name, id, team, points, len, maxRows, maxCols, range;

  let content = UrlFetchApp.fetch(harrisDraftSite).getContentText();
  let tableOne = content.split('publishsource="Excel">')[1].split('</table>')[0];
  let tableTwo = content.split('publishsource="Excel">')[2].split('</table>')[0];

  const regex = new RegExp(/\>[\d\w\.\ \''\-]+\</,'g');
  
  let arrays = [];
  let tables = [tableOne,tableTwo];
  for (let a = 0; a < 2; a++) {
    let table = tables[a].split('<tr height=20');
    arrays[a] = [];
    for (let b = 0; b < table.length; b++) {
      try {
        let subArray = table[b].match(regex);

        for (let c = 0; c < subArray.length; c++) {
          subArray[c] = subArray[c].replace('<','').replace('>','');
        }
        arrays[a].push(subArray);
      }
      catch (err) {
        // Logger.log('Issue with index ' + b + ' of loop ' + a);
        // Logger.log(err.stack)
      }
    }
  }
  for (let a = 0; a < arrays[0].length; a++) {
    ranks[a] = [arrays[0][a][1],arrays[0][a][0]];
    for (let b = 0; b < arrays[1].length; b++) {
      if (arrays[0][a][1] == arrays[1][b][1]) {
        ranks[a].push(arrays[1][b][0]);
        break;
      }
    }
  }
  for (let a = 0; a < arrays[1].length; a++) {
    let found = 0;
    for (let b = 0; b < ranks.length; b++) { 
      if (arrays[1][a][1] == ranks[b][0]) {
        found = 1;
        break;
      }
    }
    if (found == 0) {
      ranks.push([arrays[1][a][1],'',arrays[1][a][0]]);
      // Logger.log('Added ' + arrays[1][a][1] + ' at rank ' + arrays[1][a][0]);
    }
  }
  ranks.shift();
  

  let columns = ranks[0].length;
  for (let a = 1; a < ranks.length; a++) {
    columns = columns < ranks[a].length ? ranks[a].length : columns;
  }
  for (let a = 0; a < ranks.length; a++) {
    if (ranks[a].length < columns) {
      for (let b = ranks[a].length-1; b < (columns-1); b++) {
        ranks[a].push('');
      }
    }
    let std = parseInt(ranks[a][1] < 1 ? 160 : ranks[a][1]);
    let ppr = parseInt(ranks[a][2] < 1 ? 160 : ranks[a][2]);
    ranks[a].push(((std + ppr) / 2).toFixed(1));
    let name = ranks[a][0];
    let skip = false;
    nameFound = NAMES_TO_SLEEPER_ID[name];
    if ( nameFound == null ) {
        missed.push(name);
        skip = true;
        ranks[a].unshift('');
    } else {
      ranks[a].unshift(nameFound);
    }
  }

  if (missed.length > 0) {
    Logger.log("The following players were not matched: " + missed);
  }

  let headers = ['player_id','player_name','std','ppr','half'];
  range = sheet.getRange(1,1,1,headers.length);
  range.setValues([headers]);
  range = sheet.getRange(2,1,ranks.length,headers.length);
  range.setValues(ranks);
  range.sort(5);
  range.setHorizontalAlignment('left');
  sheet.setColumnWidth(1,50);
  sheet.setColumnWidth(2,150);
  sheet.setColumnWidths(3,3,50);
  adjustRows(sheet,null,true);
  adjustColumns(sheet,null,true);
  
  ss.setNamedRange(prefix+'_ID',sheet.getRange(2,1,ranks.length-1,1));
  ss.setNamedRange(prefix+'_NAME',sheet.getRange(2,2,ranks.length-1,1));
  ss.setNamedRange(prefix+'_STD_RANK',sheet.getRange(2,3,ranks.length-1,1));
  ss.setNamedRange(prefix+'_PPR_RANK',sheet.getRange(2,4,ranks.length-1,1));
  ss.setNamedRange(prefix+'_HALF_RANK',sheet.getRange(2,5,ranks.length-1,1));
  ss.toast('Harris ranks imported successfully.\r\n\r\nThese players were not found:\r\n' + missed);
}

// DRAFT KICK FUNCTIONS

// DRAFT KICK DUMP - runs through both Offense and Defense of the CSV content and records them all
function draftKickDump() {
  const all = ['offense','defense'];
  for (const value in all) {
    const pos = all[value];
    Logger.log(`Attempting to write ${pos} values to 'DK-${pos.substring(0,3).toUpperCase()}'`);
    try {
      draftKickWrite(pos);
    } catch (err) {
      Logger.log(`Failed to write ${pos} values: ${err.stack}`);
    } finally {
      Logger.log(`Successfully wrote ${pos} values`);
    }
  }
}

// DRAFT KICK WRITE - records the CSV file to a sheet with the uppercase, three-letter start to the position group, assigns a named range for the headers and content
function draftKickWrite(pos,ss) {
  ss = fetchSpreadsheet(ss);
  if (pos) {
    const data = Utilities.parseCsv(draftKickPull(pos));
    const abbr = `${pos.substring(0,3).toUpperCase()}`;
    const sheet = ss.getSheetByName(`DK_${abbr}`) ? ss.getSheetByName(`DK_${abbr}`) : ss.insertSheet(`DK_${abbr}`);
    if(sheet) {
      const fullBlock = sheet.getRange(1, 1, data.length, data[0].length);
      fullBlock.setValues(data);
      const dataBlock = sheet.getRange(2, 1, data.length-1, data[0].length);
      const headerBlock = sheet.getRange(1, 1, 1, data[0].length);
      ss.setNamedRange(`DK_${abbr}_HEADERS`,headerBlock);
      ss.setNamedRange(`DK_${abbr}`,dataBlock);
    }

  }else {
    Logger.log('‼️ Please provide the CSV content from source data to parse and record');
  }
}

// DRAFT KICK PULL - gets the csv for the respective position groups
// Viable entries are "offense", "defense", and "kickers"
function draftKickPull(positionGroup) {
  const draftKickData = 'https://football.draftkick.com/data/';
  positionGroup = !positionGroup ? 'offense' : positionGroup;
  const content = UrlFetchApp.fetch(`${draftKickData}${positionGroup[0].toUpperCase()}${positionGroup.slice(1,positionGroup.length)}.csv`);
  return content;
}

// DRAFT KICK PARSE CSV - this is an unused but helpful tool that simply joins all the content (provide either defense or offense) and creates a usable JSON object of key/value pairs for each player/defense
function draftKickParseCsv(content) {

  const data = Utilities.parseCsv(content);
  const headers = data[0]; // Assuming the first row contains headers.

  const groupedData = {};

  // Define the list of possible categories that should trigger nested objects.
  const categories = ['Sleeper', 'Yahoo', 'ESPN', 'CBS', 'FFToday', 'Footballguys', 'The BLITZ'];

  // Iterate over each row, starting from the second row (skipping headers).
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    const leagueId = row[0]; // The 'sleeper_id' is the first column.

    if (!groupedData[leagueId]) {
      groupedData[leagueId] = {};
    }

    // Populate the sub-keys under the current sleeper_id.
    for (let j = 1; j < headers.length; j++) { // Iterate from the second column (skipping sleeper_id).
      const header = headers[j];

      const parts = header.split('_');
      let category = null;
      let subKey = header;

      // Check if the last part of the header is in the 'categories' array.
      if (parts.length > 1 && categories.indexOf(parts[parts.length - 1]) !== -1) {
        category = parts.pop(); // The last part is the category.
        subKey = parts.join('_'); // The remaining parts form the sub-key.
      }

      // If a category exists, create a nested object.
      if (category) {
        if (!groupedData[leagueId][category]) {
          groupedData[leagueId][category] = {};
        }
        groupedData[leagueId][category][subKey] = row[j];
      } else {
        // Otherwise, add it directly under the sleeper_id.
        groupedData[leagueId][subKey] = row[j];
      }
    }
  }

  // Convert the JavaScript object to a JSON string.
  return groupedData; 
}

// First Down Studios Scraping

/**
 * Fetches the dynamic player props data from FirstDown.studio.
 * Returns the raw JSON object (Array of Players).
 */
function firstDownProjectionFetch(ppr,points) {
  ppr = ppr || 0.5;
  formats = {0:'non',0.5:'half',1:'full'};
  const format = formats[ppr];
  Logger.log(`Fetching ${format}-ppr ${points ? 'player projected points' : 'player data'}`);

  const FIRST_DOWN_BASE_URL = "https://www.firstdown.studio";
  const FIRST_DOWN_ENTRY_URL = "https://www.firstdown.studio/rankings/qb"; // Endpoint will fetch object with all projections, not just QB
  const FIRST_DOWN_STAT_MAP = {
    "name":"full_name",
    "position":"pos",

    "passing_yards":"pass_yd",
    "passing_touchdowns":"pass_td",
    "interceptions":"pass_int",
    
    "rushing_yards":"rush_yd",
    "receptions":"rec",
    "receiving_yards":"rec_yd",
    "expected_touchdowns":"td",

    "standard":"points_non",
    "halfppr":"points_half",
    "ppr":"points_full",
    "standard_erc":"ecr_non",
    "halfppr_erc":"ecr_half",
    "ppr_erc":"ecr_full",
    "standard_ecr":"ecr_non", // Additional Versions if ERC => ECR (correction)
    "halfppr_ecr":"ecr_half",
    "ppr_ecr":"ecr_full",

    "game_details":"delete",
    "projected_fields":"delete"
  }

  // 1. Fetch Main Page to find the script map
  const html = fetchUrl(FIRST_DOWN_ENTRY_URL);
  if (!html) throw new Error("Could not fetch main page.");

  // 2. Locate the "Logic Script"
  const logicScriptData = findLogicScript(html, FIRST_DOWN_BASE_URL);
  if (!logicScriptData) throw new Error("Could not find the API logic script.");

  // 3. Extract the Fallback ID and Filename
  const fallbackFilename = getFallbackFilename(logicScriptData, FIRST_DOWN_BASE_URL);
  if (!fallbackFilename) throw new Error("Could not find the static data filename.");

  // 4. Fetch the Data Chunk
  const dataUrl = `${FIRST_DOWN_BASE_URL}/_next/static/chunks/${fallbackFilename}`;
  Logger.log(`Fetching data from: ${dataUrl}`);
  const chunkContent = fetchUrl(dataUrl);
  if (!chunkContent) throw new Error("Failed to download data chunk.");

  // 5. Extract and Parse the Data using specific string markers
  const rawData = extractDataFromChunk(chunkContent);
  let data = {};
  let unfound = [];
  let targetKey;
  if (points) {
    targetKey = getKeyByValue(FIRST_DOWN_STAT_MAP,`points_${format}`);
  }
  Object.keys(rawData).forEach(player => {
    
    const entry = rawData[player];
    const id = NAMES_TO_SLEEPER_ID[entry.name];
    if (id) {
      if (points) {
        data[id] = entry[targetKey];
      } else {
        Object.keys(FIRST_DOWN_STAT_MAP).forEach(key => {
          const newKey = FIRST_DOWN_STAT_MAP[key];
          if (entry[key]) {
            if (newKey == "delete") {
              delete entry[key];
            } else {
              entry[newKey] = entry[key];
              delete entry[key];
            }
            if ((/^(ecr\_|points\_)/).test(newKey)) {
              if (newKey === `points_${format}`) {
                entry.points = entry[newKey];
              } else if (newKey === `ecr_${format}`) {
                entry.ecr = entry[newKey];
              }
              delete entry[newKey];
            }
          }
        });
        data[id] = entry;
      }
    } else {
      unfound.push(entry.name);
    }
  });
  if (unfound.length > 0) Logger.log(`Encountered some unmatched players: ${unfound}`);
  return data;
}

// ------------------------------------------------------------------
// HELPER FUNCTIONS
// ------------------------------------------------------------------

function extractDataFromChunk(content) {
  // We use the markers you identified.
  // Start: JSON.parse('
  // End: ')  <-- This is the closing quote and paren of the parse command
  
  const startMarker = "JSON.parse('";
  const startIndex = content.indexOf(startMarker);
  
  // We search for the *last* occurrence of the closing sequence to ensure we get the whole blob.
  // This avoids stopping early if a player name contains a ')' character.
  const endIndex = content.lastIndexOf("')");

  if (startIndex === -1 || endIndex === -1) {
    throw new Error("Could not find 'JSON.parse' start or end markers in the file.");
  }

  // We want to capture the full string: JSON.parse('...STUFF...')
  // endIndex points to the `'`, so we add 2 to include the `'` and the `)`
  const fullStatement = content.substring(startIndex, endIndex + 2);

  try {
    Logger.log("Evaluating extracted JSON string...");
    // eval() is perfect here because it handles the un-escaping of the string literal
    // inside the JSON.parse command automatically.
    const jsonData = eval(fullStatement);
    Logger.log(`Success! Extracted ${jsonData.length} records.`);
    return jsonData;
  } catch (e) {
    Logger.log("Extraction error: " + e.message);
    // Debugging: Log the last 50 chars to see if we cut it off correctly
    Logger.log("End of string was: " + fullStatement.slice(-50));
    throw new Error("Failed to parse the extracted string.");
  }
}

function findLogicScript(html, baseUrl) {
  const scriptRegex = /src="(\/_next\/static\/chunks\/[^"]+\.js)"/g;
  let match;
  while ((match = scriptRegex.exec(html)) !== null) {
    const fullUrl = baseUrl + match[1];
    const content = fetchUrl(fullUrl);
    if (content && content.includes('Failed to fetch player props')) {
      return content;
    }
  }
  return null;
}

function getFallbackFilename(scriptContent, baseUrl) {
  const idMatch = scriptContent.match(/catch\s*\(.*?\)\s*\{.*?await\s+\w+\.\w+\((\d+)\)/);
  if (!idMatch) return null;
  const fallbackId = idMatch[1];
  
  const fileRegex = new RegExp(`${fallbackId},e=>.*?static/chunks/([^"]+\\.js)`);
  const fileMatch = scriptContent.match(fileRegex);
  return fileMatch ? fileMatch[1] : null;
}

function fetchUrl(url) {
  try {
    const params = { muteHttpExceptions: true };
    const response = UrlFetchApp.fetch(url, params);
    if (response.getResponseCode() !== 200) return null;
    return response.getContentText();
  } catch (e) {
    Logger.log(`Fetch error for ${url}: ${e}`);
    return null;
  }
}
