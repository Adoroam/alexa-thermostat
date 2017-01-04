const rt = require('./rt-ctrl')

let thermostat = {
  up: '192.168.2.223',
  down: '192.168.2.215',
  getAll: (thermostat) => {
    rt.thermostatGet(thermostat, false)
  },
  getTemp: (thermostat) => {
    rt.thermostatGet(thermostat, 'temp')
  },
  setHold: (thermostat, state) => {
    var val = state
    if (state === true) val = 1
    if (state === false) val = 0
    var postObj = { 'hold': val }
    rt.thermostatSend(thermostat, postObj)
  },
  tempHeat: (thermostat, target) => {
    var postObj = { 'tmode': 1, 't_heat': target, 'hold': 1 }
    rt.thermostatSend(thermostat, postObj)
  },
  tempCool: (thermostat, target) => {
    var postObj = { 'tmode': 2, 't_cool': target, 'hold': 1 }
    rt.thermostatSend(thermostat, postObj)
  },
  changeLED: (thermostat, LED) => {
    var postObj = { 'energy_led': LED }
    rt.thermostatSend(thermostat, postObj, '/tstat/led')
    console.log(`changing led`)
  },
  sendMessage: (thermostat, message) => {
    var postObj = { 'message': message }
    rt.thermostatSend(thermostat, postObj, '/tstat/pma')
  }
}
let active = thermostat.down
thermostat.getAll(active)

// alexa time!

/*
thermostat.setHold(active, true)
thermostat.tempHeat(active, 60)
thermostat.getLock(active)
thermostat.setLock(active, 0)
thermostat.tempCool(active, 58)
thermostat.changeLED(active, 0)
thermostat.sendMessage(active, 'hello world')
thermostat.getAll(active)
*/
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

/* var chair = 141.71
var parts = 86.58
var rebates = 0
var bank = 214.36
var partsHalf = parts / 2
console.log('bank account - chair and half of donna\'s gift: ', bank - (chair + partsHalf))
console.log("enya's half of the parts: ", partsHalf)
console.log('rebates: ', rebates)
console.log('chair and parts', chair + parts) */
