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
	
  Jobs.create(event.body).then(function(job) {
	  console.log('SMS: calling msg service to send sms');
	  var msg = 'VISION: Job created w/ id: ' + job.id + ' and title: ' + job.title;
	  console.log(msg);
	  return SMS.sendText(msg, '+13108771151');
  }).then(function(data) {
      console.log('SMS: successful message send called');
      callback(null, response);
  }).catch(function(err) {
      console.log('SMS: error during message send called');
      console.error(err);
      callback(err);
  }).finally(function() {
      Jobs.close();
  });
};

module.exports.update = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Goodbye for Now! Your function executed successfully!',
      input: event,
    }),
  };
	
  Jobs.update(event.body.id, event.body).then(function(job) {
	  console.log('SMS: calling msg service to send sms');
	  var msg = 'VISION: Job created w/ id: ' + job.id + ' and title: ' + job.title;
	  console.log(msg);
	  return SMS.sendText(msg, '+13108771151');
  }).then(function(data) {
      console.log('SMS: successful message send called');
      callback(null, response);
  }).catch(function(err) {
      console.log('SMS: error during message send called');
      console.error(err);
      callback(err);
  }).finally(function() {
      Jobs.close();
  });
};

module.exports.delete = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Goodbye for Now! Your function executed successfully!',
      input: event,
    }),
  };
	
  Jobs.delete(event.queryStringParameters.jid).then(function(job) {
	  console.log('SMS: calling msg service to send sms');
	  var msg = 'VISION: Job created w/ id: ' + job.id + ' and title: ' + job.title;
	  console.log(msg);
	  return SMS.sendText(msg, '+13108771151');
  }).then(function(data) {
      console.log('SMS: successful message send called');
      callback(null, response);
  }).catch(function(err) {
      console.log('SMS: error during message send called');
      console.error(err);
      callback(err);
  }).finally(function() {
      Jobs.close();
  });
};