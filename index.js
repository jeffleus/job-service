'use strict';
var Jobs = require('./Jobs');

console.log('this is a test');

//Jobs.update(
//	{ title: 'Ford Commercial', lead: 'jeffleus' },
//	{ where: { id: 1 } }
//).then(function(result) {
//	console.log('job successfully updated.');
//	console.info(result);

//Jobs.delete(2).then(function(count) {
//	console.log(count + ' jobs deleted.');

Jobs.getAll().then(function(result) {
	console.log(result.count + ' jobs found.');
	result.jobs.forEach(function(row) {
		console.info(row);
	});
	
//Jobs.create({
//	title: 'Pepsi-Cola SummerFest',
//	lead: 'Armando',
//	location: 'Greek Amphitheater',
//	startDate: new Date(2017, 4, 3)
//}).then(function(job) {
//	console.log('Job create w/ id: ' + job.id);
}).catch(function(err) {
	console.error(err.message);
}).finally(function() {
	console.log('closing sequelize connection');
	Jobs.close();
});