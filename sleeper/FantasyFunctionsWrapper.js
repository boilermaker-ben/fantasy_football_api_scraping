/*

USE THIS ID:

1E23Ya_LoiS-q3BNI9vACjQPmJReR33ZqFP-VOezWjh87KXlmzg6KF8Mb

COPY THIS:

/** FANTASY FUNCTIONS - 12.09.2025
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
 * sleeperStats() - All matchup data for the provided leagues (in code) for the specified year/week
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
 * fantasyProsWeeklyProjections(ppr) 
 * 
 * footballersProjectionFetch(ppr)
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
 *  <---PUT BACKSLASH HERE!

function sleeperScoring(ppr) {
  return FantasyFunctions.leagueScoring(ppr);
}

function sleeperScoringSpecific(leagueId) {
  return FantasyFunctions.leagueScoringSpecific(leagueId);
}

function seasonInfo(query){
  return FantasyFunctions.seasonInfo(query);
}

function sleeperLeagueInfo(league,info) {
  return FantasyFunctions.sleeperLeagueInfo(league,info);
}

function leagueByes(league) {
  return FantasyFunctions.leagueByes(league);
}

function sleeperLeagueMembers(league){
  return FantasyFunctions.sleeperLeagueMembers(league);
}

function sleeperPlayerImport(){
  const fantasyProsIds = fantasyProsPlayerBatchMatch();
  return FantasyFunctions.sleeperPlayerImport(fantasyProsIds,FANTASY_PROS_TO_SLEEPER_ID,ESPN_TO_SLEEPER_ID);
}

function sleeperScoreObject(year,week,league,partial) {
  return FantasyFunctions.sleeperScoreObject(year,week,league,partial);
}

function sleeperScoreRecord(year,week,altLeague,complete) {
  return FantasyFunctions.sleeperScoreRecord(year,week,altLeague,complete);
}

function sleeperScoreCalculations(sheet) {
  return FantasyFunctions.sleeperScoreCalculations(sheet);
}

function sleeperScoreBaselines(scoring,players){
  return FantasyFunctions.sleeperScoreBaselines(scoring,players);
}

function sleeperADPImport(year,backedUp){
  return FantasyFunctions.sleeperADPImport(year,backedUp);  
}

function sleeperADPBackup() {
  return FantasyFunctions.sleeperADPBackup();
}

function sleeperExistingTableData(sheetname) {
  return FantasyFunctions.sleeperExistingTableData(sheetname);
}

function sleeperLeagueOverview(league,abbrev,color,regularSeasonOnly,specificLeague) {
  return FantasyFunctions.sleeperLeagueOverview(league,abbrev,color,regularSeasonOnly,specificLeague);
}

function sleeperPlayoffData(league,week,year) {
  return FantasyFunctions.sleeperPlayoffData(league,week,year);
}

function sleeperTrending(){
  return FantasyFunctions.sleeperTrending();
}

function sleeperMatchup(year,week,specificLeague) {
  return FantasyFunctions.sleeperMatchup(year,week,specificLeague);
}

function sleeperStats() {
  return FantasyFunctions.sleeperStats();
}

function sleeperStatsLogging() {
  return FantasyFunctions.sleeperStatsLogging();
}

function sleeperSeasonStatsLogging() {
  return FantasyFunctions.sleeperSeasonStatsLogging();
}

function sleeperStatsPrompt() {
  return FantasyFunctions.sleeperStatsPrompt();
}

function sleeperSeasonStatsPrompt() {
  return FantasyFunctions.sleeperSeasonStatsPrompt();
}

function sleeperWeeklyNFL(year,week,query) {
  return FantasyFunctions.sleeperWeeklyNFL(year,week,query);
}

function sleeperNFL(year,query) {
  return FantasyFunctions.sleeperNFL(year,query);
}

function sleeperTransactions(league, week) {
  return FantasyFunctions.sleeperTransactions(league,week);
}

function sleeperRecordTransactions(league,week) {
  return FantasyFunctions.sleeperRecordTransactions(league,week);
}

function sleeperPriorLeague(league) {
  return FantasyFunctions.sleeperPriorLeague(league);
}

function sleeperKeeperStatus(league) {
  return FantasyFunctions.sleeperKeeperStatus(league);
}

function sleeperAvailableKeepers(league) {
  return FantasyFunctions.sleeperAvailableKeepers(league);
}

function sleeperLoopsMultiple(leagues,abbrev,year,week) {
  return FantasyFunctions.sleeperLoopsMultiple(leagues,abbrev,year,week);
}

function sleeperLoops(leagueId,abbrev,year,week) {
  return FantasyFunctions.sleeperLoops(leagueId,abbrev,year,week);
}

function sleeperPlayerSimpleObject() {
  return FantasyFunctions.sleeperPlayerSimpleObject();
}

// SLEEPER PROJECTIONS =================================================

function projectionLoggingAll(ppr) {
  return FantasyFunctions.projectionLoggingAll(ppr);
}

function projectionLogging(platform,ppr,year,week) {
  return FantasyFunctions.projectionLogging(platform,ppr,year,week);
}

function sleeperSeasonProjections() {
  return FantasyFunctions.sleeperSeasonProjections();
}

function sleeperRestOfSeasonProjections() {
  return FantasyFunctions.sleeperRestOfSeasonProjections();
}

function sleeperRestOfSeasonSumming(week,endWeek) {
  return FantasyFunctions.sleeperRestOfSeasonSumming(week,endWeek);
}

function sleeperProjectionFetch(ppr,year,week) {
  return FantasyFunctions.sleeperProjectionFetch(ppr,year,week);
}

function sleeperProjectionFetchGeneric(format,week,year) {
  return FantasyFunctions.sleeperProjectionFetchGeneric(format,week,year);
}

// OTHER PLATFORM PROJECTION FETCHING =================================================

function espnProjectionFetch(ppr,year,week) {
  return FantasyFunctions.espnProjectionFetch(ppr,year,week);
}

function fantasyProsWeeklyProjections(ppr) {
  return FantasyFunctions.fantasyProsProjectionFetch(ppr);
}

function footballersProjectionFetch(ppr) {
  return FantasyFunctions.footballersProjectionFetch(ppr);
}

function fanduelProjectionFetch() {
  return FantasyFunctions.fanduelProjectionFetch(true);
}

// ESPN =================================================


function current(query) {
  return FantasyFunctions.current(query);
}

function yearWeekFetch() {
  return FantasyFunctions.yearWeekFetch();
}

function fetchTeamsESPN(year) {
  return FantasyFunctions.fetchTeamsESPN(year);
}

function nflByeWeeksESPN(year) {
  return FantasyFunctions.nflByeWeeksESPN(year);
}

function nflDataESPN(year) {
  return FantasyFunctions.nflDataESPN(year);
}

function nflDataFullESPN(year) {
  return FantasyFunctions.nflDataFullESPN(year);
}

function nflOverviewSheetESPN(year) {
  return FantasyFunctions.nflOverviewSheetESPN(year);
}

function nflOverviewMatchupSheetESPN(year) {
  return FantasyFunctions.nflOverviewMatchupSheetESPN(year);
}

function nflBettingLines() {
  return FantasyFunctions.nflBettingLines();
}

function nflBettingLinesRecord() {
  return FantasyFunctions.nflBettingLinesRecord();
}

function fetchSchedule(year) {
  return FantasyFunctions.fetchSchedule(year);
}

function fetchGames(week) {
  return FantasyFunctions.fetchGames(week);
}

function fetchLogos() {
  return FantasyFunctions.fetchLogos();
}

function searchAolForIdESPN(input) {
  return FantasyFunctions.searchAolForIdESPN(input);
}

function espnPlayerIDSearch(input) {
  return FantasyFunctions.espnPlayerIDSearch(input);
}

function searchDDGForIdESPN(input) {
  return FantasyFunctions.searchDDGForIdESPN(input);
}


// FANTASY PROS ===============================================

function fantasyProsUrl(type, position, format) {
  return FantasyFunctions.fantasyProsUrl(type, position, format);
}
function fetchFantasyProsObjects() {
  return FantasyFunctions.fetchFantasyProsObjects();
}

function fantasyProsObject(url,request) {
  return FantasyFunctions.fantasyProsObject(url,request);
}

function fantasyProsLookupMaps(fantasyProsPlayers) {
  return FantasyFunctions.fantasyProsLookupMaps(fantasyProsPlayers);
}

function fantasyProsPlayerMatch(searchPlayer, lookupMaps, details) {
  return FantasyFunctions.fantasyProsPlayerMatch(searchPlayer, lookupMaps, details);
}

function fantasyProsPlayerBatchMatch(details) {
  return FantasyFunctions.fantasyProsPlayerBatchMatch(details);
}

function fantasyProsMatchupFetch(format) {
  return FantasyFunctions.fantasyProsMatchupFetch(NAMES_TO_SLEEPER_ID,format);
}

function fantasyProsMatchupLogging() {
  return FantasyFunctions.fantasyProsMatchupLogging(NAMES_TO_SLEEPER_ID);
}

function fantasyProsPointsAllowedLogging(NAMES_TO_SLEEPER_ID) {
  return FantasyFunctions.fantasyProsPointsAllowedLogging(NAMES_TO_SLEEPER_ID);
}

// FANTASY CALC 

function fantasyCalcUpdateAllValues() {
  return FantasyFunctions.fantasyCalcUpdateAllValues();
}

// HARRIS

function harrisRanksImport(format) {
  return FantasyFunctions.harrisRanksImport(format)
}

function harrisRanks() {
  return FantasyFunctions.harrisRanks()
}

function harrisHalfDraft() {
  return FantasyFunctions.harrisHalfDraft()
}

// DRAFT KICK FUNCTIONS

// DRAFT KICK DUMP - runs through both Offense and Defense of the CSV content and records them all
function draftKickDump() {
  return FantasyFunctions.draftKickDump();
}

// DRAFT KICK WRITE - records the CSV file to a sheet with the uppercase, three-letter start to the position group, assigns a named range for the headers and content
function draftKickWrite(pos,ss) {
  return FantasyFunctions.draftKickWrite(pos,ss);
}

// DRAFT KICK PULL - gets the csv for the respective position groups
// Viable entries are "offense", "defense", and "kickers"
function draftKickPull(positionGroup) {
  return FantasyFunctions.draftKickPull(positionGroup);
}

// DRAFT KICK PARSE CSV - this is an unused but helpful tool that simply joins all the content (provide either defense or offense) and creates a usable JSON object of key/value pairs for each player/defense
function draftKickParseCsv(content) {
  return FantasyFunctions.draftKickParseCsv(content);
}

// FIRST DOWN STUDIO FUNCTION
function firstDownProjectionFetch(ppr) {
  return FantasyFunctions.firstDownProjectionFetch(ppr);
}
*/
