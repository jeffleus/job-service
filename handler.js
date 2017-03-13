'use strict';
var Jobs = require('./Jobs');
var SMS = require('./SMS');

module.exports.hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};

module.exports.goodbye = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Goodbye for Now! Your function executed successfully!',
      input: event,
    }),
  };

  callback(null, response);
};

module.exports.create = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Goodbye for Now! Your function executed successfully!',
      input: event,
    }),
  };
	
  Jobs.create({ 
	  title: 'testing new job', lead: 'Jimbo', 
	  location: 'Anywhere, CA', startDate: new Date(2017, 2, 22) 
  }).then(function(job) {
	  console.log('SMS: calling msg service to send sms');
	  var msg = 'VISION: Job created w/ id: ' + job.id + ' and title: ' + job.title;
	  console.log(msg);
	  SMS.sendText(msg, '+13108771151').then(function(data) {
	  	  console.log('SMS: successful message send called');
		  callback(null, response);
	  }).catch(function(err) {
		  console.log('SMS: error during message send called');
		  console.error(err);
		  callback(err);
	  });
  });
};