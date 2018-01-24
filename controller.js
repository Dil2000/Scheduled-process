// In Controllers
var schedule = require('node-schedule');

var scheduledProcess = schedule.scheduleJob({hour: 20, minute: 25}, function(){
	// Run the process
});

module.exports = router;