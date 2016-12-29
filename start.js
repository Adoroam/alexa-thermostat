// const rt = require('./rt-ctrl')
const http = require('http')
const querystring = require('querystring')

// rt.tempHeat(thermostat.up, tempTest)
var thermostatSend = (thermostat, postObj) => {
  var postData = querystring.stringify(postObj, ',', ':')
  var postOptions = {
    host: thermostat,
    path: '/tstat',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(postData)
    }
  }
  var postReq = http.request(postOptions, function (res) {
    res.setEncoding('utf8')
    res.on('data', function (chunk) {
      console.log('Response: ' + chunk)
    })
  })

//  post the data
  postReq.write(postData)
  postReq.end()
}

let thermostat = {
  up: '192.168.2.215',
  down: '192.168.2.223',
  tempHeat: (thermostat, target) => {
    var postObj = { 't_heat': target }
    thermostatSend(thermostat, postObj)
  }
}
thermostat.tempHeat(thermostat.up, 65)
// tempHeat(thermostat.up, 65)

/*
var selected = null

function urlString (thermostat) {
return 'http://' + thermostat + '/tstat'
}
function getData(data){
console.log(data)
}
var req = http.get(urlString(upstairs), (res) => {
res.setEncoding('utf8')
let rawData = ''
res.on('data', (chunk) => {
rawData += chunk
})
res.on('end', () => {
try {
let parsedData = JSON.parse(rawData)
getData(parsedData)
} catch (e) {
console.log(e.message)
}
})
}) */

/*
alexa ac
-which ac would you like to change?
upstairs
okay, upstairs ac selected,
set selected to upstairs
what would you like to do?
set to 78
repeat "did you say set to 78?"
if yes

rt.setTemp(78)

*/
// console.log(rt.getTemp(upstairs))
// rt.getTemp(upstairs)

// get thermostat info
// if (given.)

/*
object template
{
temp: 71,
tmode: 1,
fmode: 0,
override: 1,
hold: 1,
t_heat: 59,
tstate: 0,
fstate: 0,
time: { day: 3, hour: 20, minute: 58 },
t_type_post: 0
}
*/

var chair = 141.71
var parts = 86.58
var rebates = 0
var bank = 214.36
var partsHalf = parts / 2
console.log('bank account - chair and half of donna\'s gift: ', bank - (chair + partsHalf))
console.log("enya's half of the parts: ", partsHalf)
console.log('rebates: ', rebates)
console.log('chair and parts', chair + parts)
