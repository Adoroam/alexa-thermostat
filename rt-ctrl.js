const rp = require('request-promise')

var rpcallback = (data, thermostat) => {
  var tstat = getTstat(thermostat)
  console.log(`got data from ${tstat}:`, data)
}

function getTstat (tstat) {
  if (tstat === '192.168.2.223') return 'upstairs'
  if (tstat === '192.168.2.215') return 'downstairs'
}

module.exports = {
  thermostatSend: (thermostat, postObj, path) => {
    if (!path) { path = '/tstat' }
    console.log(`post path ${path}`)
    var options = {
      method: 'POST',
      uri: 'http://' + thermostat + path,
      form: postObj,
      json: true,
      headers: {}
    }
    rp(options).then((parsedBody) => {
      var tstat = getTstat(thermostat)
      console.log(parsedBody, tstat, postObj)
    }).catch((err) => {
      console.log('post failed', err)
    })
  },
  thermostatGet: (thermostat, item, path) => {
    if (!path) { path = '/tstat' }
    console.log(`get path ${path}`)
    var options = {
      uri: 'http://' + thermostat + path,
      headers: {'User-Agent': 'Request-Promise'},
      json: true
    }

    rp(options).then((data) => {
      switch (item) {
        case 'temp':
          rpcallback(data.temp, thermostat)
          break
        case 'target':
          if (data.t_heat) rpcallback(data.t_heat, thermostat)
          if (data.t_cool) rpcallback(data.t_cool, thermostat)
          break
        default:
          rpcallback(data, thermostat)
      }
    }).catch((err) => {
      console.log('api failed', err)
    })
  }
}
