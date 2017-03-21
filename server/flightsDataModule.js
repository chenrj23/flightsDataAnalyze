const Sequelize = require('sequelize')
const sequelize = new Sequelize('FlightsData', 'root', 'y8kyscsy', {
    host: '120.27.5.155',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});
const Flight = sequelize.import('./models/alls.js')

function getFlightsAmount({company, startTime, endTime}){
  return new Promise(function(resolve, reject) {

    Flight.findAll({
      where: {
        公司: company,
        航班日期: {
          '$between': [startTime, endTime]
        }
      }
    }).then(function(data) {
      resolve(data.length)
    })

  });
}
function getSeatsAmount({company, startTime, endTime}){
  return new Promise(function(resolve, reject) {

    Flight.findAll({
      where: {
        公司: company,
        航班日期: {
          '$between': [startTime, endTime]
        }
      },
      attributes: [[sequelize.fn('SUM', sequelize.col('布局24')), 'seatsAmount']]
    }).then(function(data) {
      resolve(data[0].get('seatsAmount'))
    })

  });
}
function getPeopleAmount({company, startTime, endTime}){
  return new Promise(function(resolve, reject) {

    Flight.findAll({
      where: {
        公司: company,
        航班日期: {
          '$between': [startTime, endTime]
        }
      },
      attributes: [[sequelize.fn('SUM', sequelize.col('旅客量8')), 'peopleAmount']]
    }).then(function(data) {
      resolve(data[0].get('peopleAmount'))
    })

  });
}

function getStandardIncomeAmount({company, startTime, endTime}){
  return new Promise(function(resolve, reject) {

    Flight.findAll({
      where: {
        公司: company,
        航班日期: {
          '$between': [startTime, endTime]
        }
      },
      attributes: [[sequelize.fn('SUM', sequelize.col('标准收入')), 'standadIncomeAmount']]
    }).then(function(data) {
      resolve(data[0].get('standadIncomeAmount'))
    })

  });
}

function getSeatKMAmount({company, startTime, endTime}){
  return new Promise(function(resolve, reject) {

    Flight.findAll({
      where: {
        公司: company,
        航班日期: {
          '$between': [startTime, endTime]
        }
      },
      attributes: [[sequelize.fn('SUM', sequelize.col('座公里数20')), 'seatKMAmount']]
    }).then(function(data) {
      resolve(data[0].get('seatKMAmount'))
    })

  });
}

function getIncomeAmount({company, startTime, endTime}){
  return new Promise(function(resolve, reject) {

    Flight.findAll({
      where: {
        公司: company,
        航班日期: {
          '$between': [startTime, endTime]
        }
      },
      attributes: [[sequelize.fn('SUM', sequelize.col('总收入11')), 'imcomeAmount']]
    }).then(function(data) {
      resolve(data[0].get('imcomeAmount')/10000/1.11)
    })

  });
}

function getFlightTimeAmount({company, startTime, endTime}){
  return new Promise(function(resolve, reject) {

    Flight.findAll({
      where: {
        公司: company,
        航班日期: {
          '$between': [startTime, endTime]
        }
      },
      attributes: [[sequelize.fn('SUM', sequelize.col('飞行时间')), 'flightTimeAmount']]
    }).then(function(data) {
      resolve(data[0].get('flightTimeAmount'))
    })

  });
}

function FlightsData(){
  this.name = 'FlightsData'
}

FlightsData.prototype.getFlightsAmount = getFlightsAmount;
FlightsData.prototype.getSeatsAmount = getSeatsAmount;
FlightsData.prototype.getPeopleAmount = getPeopleAmount;
FlightsData.prototype.getStandardIncomeAmount = getStandardIncomeAmount;
FlightsData.prototype.getSeatKMAmount = getSeatKMAmount;
FlightsData.prototype.getIncomeAmount = getIncomeAmount;
FlightsData.prototype.getFlightTimeAmount = getFlightTimeAmount;


module.exports = new FlightsData;

// let option = {
//   company: 'y8',
//   startTime: '2017/2/17',
//   endTime: '2017/2/24'
// }
// getSeatsAmount(option)
//   .then((data)=>{
//     console.log(data);
//   })
