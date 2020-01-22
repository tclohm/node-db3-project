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

function add(schemeData) {
	if(schemeData) {
		return db("schemes").insert(schemeData)
			.then(([id]) => {
				return findById(id);
			});
	}
	return null
}

function addStep(stepData, id) {}

function update(changes, id) {
	if(changes && id) {
		return db("schemes").where("id", id).update(changes);
	}
	return null
}

function remove(id) {
	if(id) {
		return db("schemes").where("id", id).del();
	}
	return null;
}