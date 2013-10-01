/**
 * Tasks
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */

 module.exports = {

 	attributes: {
 		title: {
 			type: 'string',
 			required: true
 		},
 		body: 'string',
 		status: {
 			type: 'string',
 			required: true,
 			defaultsTo: 'Todo',
 			in: ['Todo', 'Doing', 'Done']
 		},
 		tags: {
 			type: 'array'
 		}
 	}
 };
