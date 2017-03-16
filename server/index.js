const express = require('express');
const app = express();
const path = require('path');

const FlightsData = require('./flightsDataModule.js')

const log4js = require('log4js');
log4js.configure('../config/myLog4jsConfig.json')
let logger = log4js.getLogger('index.js');
const logLevel = process.env.logLevel || 'info'
logger.setLevel(logLevel);

app.use(express.static('../client'));

app.get('/api/getFlightsAmount', function (req, res) {
  const company = req.query.company
  const startTime = req.query.startTime
  const endTime = req.query.endTime

  let timeStart = new Date()
  logger.info(`have a req getFlightsAmount from  ${startTime} to ${endTime} by ${company}`)

  FlightsData.getFlightsAmount({company, startTime, endTime})
    .then(function(result){
      let timeUsed = new Date() - timeStart
      logger.info('Time use :', timeUsed)
      // res.json(result)
      res.json(result)
    })
});
app.get('/api/getSeatsAmount', function (req, res) {
  const company = req.query.company
  const startTime = req.query.startTime
  const endTime = req.query.endTime

  let timeStart = new Date()
  logger.info(`have a req getSeatsAmount from  ${startTime} to ${endTime} by ${company}`)

  FlightsData.getSeatsAmount({company, startTime, endTime})
    .then(function(result){
      let timeUsed = new Date() - timeStart
      logger.info('Time use :', timeUsed)
      // res.json(result)
      res.json(result)
    })
});
app.get('/api/getPeopleAmount', function (req, res) {
  const company = req.query.company
  const startTime = req.query.startTime
  const endTime = req.query.endTime

  let timeStart = new Date()
  logger.info(`have a req getPeopleAmount from  ${startTime} to ${endTime} by ${company}`)

  FlightsData.getPeopleAmount({company, startTime, endTime})
    .then(function(result){
      let timeUsed = new Date() - timeStart
      logger.info('Time use :', timeUsed)
      // res.json(result)
      res.json(result)
    })
});
app.get('/api/getStandardImcomeAmount', function (req, res) {
  const company = req.query.company
  const startTime = req.query.startTime
  const endTime = req.query.endTime


  let timeStart = new Date()
  logger.info(`have a req getStandardImcomeAmount from  ${startTime} to ${endTime} by ${company}`)

  FlightsData.getStandardImcomeAmount({company, startTime, endTime})
    .then(function(result){
      let timeUsed = new Date() - timeStart
      logger.info('Time use :', timeUsed)
      // res.json(result)
      res.json(result)
    })
});

app.get('/api/getSeatKMAmount', function (req, res) {
  const company = req.query.company
  const startTime = req.query.startTime
  const endTime = req.query.endTime

  let timeStart = new Date()
  logger.info(`have a req getSeatKMAmount from  ${startTime} to ${endTime} by ${company}`)

  FlightsData.getSeatKMAmount({company, startTime, endTime})
    .then(function(result){
      let timeUsed = new Date() - timeStart
      logger.info('Time use :', timeUsed)
      // res.json(result)
      res.json(result)
    })
});

app.get('/api/getImcomeAmount', function (req, res) {
  const company = req.query.company
  const startTime = req.query.startTime
  const endTime = req.query.endTime
  const allowance = req.query.allowance

  let timeStart = new Date()
  logger.info(`have a req getImcomeAmount from  ${startTime} to ${endTime} by ${company}`)

  FlightsData.getImcomeAmount({company, startTime, endTime, allowance})
    .then(function(result){
      let timeUsed = new Date() - timeStart
      logger.info('Time use :', timeUsed)
      // res.json(result)
      res.json(result)
    })
});

app.get('/api/getFlightTimeAmount', function (req, res) {
  const company = req.query.company
  const startTime = req.query.startTime
  const endTime = req.query.endTime

  let timeStart = new Date()
  logger.info(`have a req getFlightTimeAmount from  ${startTime} to ${endTime} by ${company}`)

  FlightsData.getFlightTimeAmount({company, startTime, endTime})
    .then(function(result){
      let timeUsed = new Date() - timeStart
      logger.info('Time use :', timeUsed)
      // res.json(result)
      res.json(result)
    })
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
