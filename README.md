# League of Legends statistics [SERVER]

REST API created with Node and Express that requests data from Riot Games League of Legends API. Deployed through Heroku.

## LINK
**https://league-stats-api.herokuapp.com/**

### Endpoints

1. `/summonerName`
  - Individual summoner info
  - Latest 6 matches by specific summoner

2. `/summoner/:id`
  - Individual summoner info
  - Latest 6 matches by specific summoner

3. `/matchDetails`
  - Specific match details
  - Name
  - Win [True/False]
  - Game Length
  - Spells used
  - Champion played
  - Champion level
  - KDA
  - Items bought
  - Total Creep Score
  - Creep score per minute