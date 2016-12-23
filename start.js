//const rt = require('./rt-ctrl');
const http = require('http');
const querystring = require('querystring');
const thermostat = {
	up: '192.168.2.215',
	down: '192.168.2.223'
};

//rt.tempHeat(thermostat.up, tempTest);
function thermostatSend(thermostat, postObj){
	var post_data = querystring.stringify(postObj, ',', ':');
	var postOptions = {
		host: thermostat,
		path: '/tstat',
		method: 'POST',
		headers: {
	        'Content-Type': 'application/x-www-form-urlencoded',
        	'Content-Length': Buffer.byteLength(post_data)
      	}
	};	
	var post_req = http.request(postOptions, function(res) {
		res.setEncoding('utf8');
		res.on('data', function (chunk) {
			console.log('Response: ' + chunk);
		});
	});

	// post the data
	post_req.write(post_data);
	post_req.end();

};

function tempHeat(thermostat, target) {
	var postObj = { t_heat: target };
	thermostatSend(thermostat, postObj);
}


tempHeat(thermostat.up, 65);

/*
var selected = null;

function urlString(thermostat) {
	return 'http://'+thermostat+'/tstat';
};
function getData(data){
	console.log(data);
};
var req = http.get(urlString(upstairs), (res) => {
	res.setEncoding('utf8');
	let rawData = '';
	res.on('data', (chunk) => {
		rawData += chunk;
	});
	res.on('end', () => {
		try {
			let parsedData = JSON.parse(rawData);
		 	getData(parsedData);
		} catch (e) {
			console.log(e.message);
		}
	});
});*/

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
//console.log(rt.getTemp(upstairs));
//rt.getTemp(upstairs);

//get thermostat info
//if (given.)

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