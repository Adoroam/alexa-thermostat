// do something with the temp
const radio1 = require('./radio1')
const radio2 = require('./radio2')
module.exports = {
  tempHeat: (thermostat, target) => {
    var postObj = { t_heat: target }
    if (thermostat === '192.168.2.215') radio1.post(postObj)
    if (thermostat === '192.168.2.223') radio2.post(postObj)
  },
  setTemp (thermostat, targetTemp) {
// post request to thermostat

  },
  raiseTemp (increase) {
// get temp
// add increase
// set temp
  }
}
