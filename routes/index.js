const express = require('express')
const router = express.Router()
const axios = require('axios')

const apiKey = "RGAPI-bbd696aa-7137-42ed-ab59-f9f957afb668"

/*** ENDPOINTS ***/

/* GET SUMMONER INFO */
router.post('/summonerName', async (req, res) => {
  const { user } = req.body
  const summoner = await axios.get(`https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${user}/?api_key=${apiKey}`)
  const matches = await axios.get(`https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/${summoner.data.accountId}/?api_key=${apiKey}`)
  let latestMatches = await matches.data.matches.slice(0, 6)
  res.send(await {
    summoner: summoner.data,
    matches: latestMatches
  })
})

/*  GET SUMMONER INFO (REFRESH) */
router.get('/summoner/:id', async (req, res) => {
  const { id } = req.params
  const summoner = await axios.get(`https://na1.api.riotgames.com/lol/summoner/v3/summoners/by-account/${id}/?api_key=${apiKey}`)
  const matches = await axios.get(`https://na1.api.riotgames.com/lol/match/v3/matchlists/by-account/${summoner.data.accountId}/?api_key=${apiKey}`)
  let latestMatches = await matches.data.matches.slice(0, 6)
  res.send(await {
    summoner: summoner.data,
    matches: latestMatches,
  })
})

/* GET MATCH DETAILS */
router.post('/matchDetails', async (req, res) => {
  const { id } = req.body
  const details = await axios.get(`https://na1.api.riotgames.com/lol/match/v3/matches/${id}/?api_key=${apiKey}`)
  res.send(await {
    details: details.data
  })
})

/*** STATUS CODE 429, TOO MANY REQUESTS ***/

/* CHAMPION DETAILS */
router.post('/champion', async (req, res ) => {
  const { id } = req.body
  const champion = await axios.get(`https://na1.api.riotgames.com/lol/static-data/v3/champions/${id}/?api_key=${apiKey}`)
   res.send(await {
    champion: champion.data
   })
})

/* SPELL DETAILS */
router.post('/spells', async (req, res) => {
  const { id } = req.body
  const spells = await axios.get(`https://na1.api.riotgames.com/lol/static-data/v3/summoner-spells/${id}/?api_key=${apiKey}`)
   res.send(await {
     spells: spells.data
   })
})

/* ITEMS */
router.post('/items', async (req, res) => {
  const { id } = req.body
  const items = await axios.post(`https://na1.api.riotgames.com/lol/static-data/v3/items/${id}/?api_key=${apiKey}`)
    res.send(await {
      items: items.data
    })
})


module.exports = router