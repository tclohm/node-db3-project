const db = require('../data/db-config.js');

module.exports = {
	find,
	findById,
	findSteps,
	add,
	addStep,
	update,
	remove
};

function find() {
	return db('schemes');
}

function findById(id) {
	if(id) {
		return db('schemes').where("id", id).first();
	}
	return null
}

function findSteps(id) {
	if(id){
		return db("steps")
			.join("schemes as sch", "steps.scheme_id", "sch.id")
			.select("steps.id", "sch.scheme_name", "steps.step_number", "steps.instructions");
		}
}

function add(schemeData) {}

function addStep(stepData, id) {}

function update(changes, id) {}

function remove(id)