'use strict';
//var Jobs = require('./Jobs');
var Sequelize = require('sequelize');
var sequelize = new Sequelize('CallsheetSQL', 'mysqlAdmin', 'Eraser$17', {
	host: 'mysql-freetier.cvwkw5fvgag8.us-west-2.rds.amazonaws.com',
	port: 3306
});

console.log('this is a test');
var event = { queryStringParameters: { pid:13 } };
var id = (event.queryStringParameters) ? event.queryStringParameters.jid : null;
console.log('GET: called with query param - ' + id);

sequelize.authenticate().then(function() {
    console.log('authenticated!');
    return sequelize.sync();
}).catch(function(err) {
    console.error(err);
})


//Jobs.update(
//	{ title: 'Ford Commercial', lead: 'jeffleus' },
//	{ where: { id: 1 } }
//).then(function(result) {
//	console.log('job successfully updated.');
//	console.info(result);

//Jobs.delete(2).then(function(count) {
//	console.log(count + ' jobs deleted.');

//Jobs.get(id).then(function(result) {
//	console.log(result.count + ' jobs found.');
//	result.jobs.forEach(function(row) {
//		console.info(row);
//	});
//	
////Jobs.create({
////	title: 'Pepsi-Cola SummerFest',
////	lead: 'Armando',
////	location: 'Greek Amphitheater',
////	startDate: new Date(2017, 4, 3)
////}).then(function(job) {
////	console.log('Job create w/ id: ' + job.id);
//}).catch(function(err) {
//	console.error(err.message);
//}).finally(function() {
//	console.log('closing sequelize connection');
//	Jobs.close();
//});