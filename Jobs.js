'use strict';

var Sequelize = require('sequelize');
var sequelize = new Sequelize('CallsheetSQL', 'mysqlAdmin', 'Eraser$17', {
	host: 'mysql-freetier.cvwkw5fvgag8.us-west-2.rds.amazonaws.com',
	port: 3306,
    pool: {
        max: 10,
        min: 1,
        idle: 100
    }
});

var Job = sequelize.define('job', {
  title: Sequelize.STRING,
  lead: Sequelize.STRING,
  location: Sequelize.STRING,
  startDate: Sequelize.DATE
});

module.exports.get = function(id) {
    console.log('JOBS: get command called for jid - ' + id);
	return sequelize.sync().then(function() {
		console.info('JOB: get single job');
		return Job.findById(id).then(function(job) {
			console.info('job found');
			return job.dataValues;
		});
	}).finally(function() {
		//sequelize.close();
	});
};

module.exports.getAll = function(id) {
	return sequelize.sync().then(function() {
		console.info('JOB: get all jobs');
		return Job.findAndCountAll().then(function(result) {
			var jobs = [];
			result.rows.forEach(function(jobRow) {
				jobs.push(jobRow.dataValues);
			});
			return {
				count: result.count,
				jobs: jobs
			};
		}).finally(function() {
			//sequelize.close();
		});
	});
};

module.exports.create = function(json) {
	return sequelize.sync().then(function() {
		console.info('Job: create a new job using JSON provided');
		console.error('need to add json validation to job creation');
		return Job.create(json).then(function(job) {
			console.info('job successfully created');
			return job;
		});
	}).finally(function() {
		//sequelize.close();
	});
};

module.exports.update = function(id, json) {
	return sequelize.sync().then(function() {
		console.info('Job: update a single job using JSON provided');
		console.error('need to add json validation to job update');
		return Job.update(
			{ title: 'Ford Commercial', lead: 'jeffleus' },
			{ where: { id: 1 } }
		).then(function(result) {
			console.info('job successfully updated');
			return result;
		});
	}).finally(function() {
		//sequelize.close();
	});
};

module.exports.delete = function(id) {
	return sequelize.sync().then(function() {
		console.info('Job: delete a job by id');
		return Job.destroy({ where: { id: id } }).then(function(count) {
			console.info(count.toString() + ' jobs successfully deleted');
			return count;
		});
	}).finally(function() {
		//sequelize.close();
	});
};

module.exports.close = function() {
	sequelize.close();
};