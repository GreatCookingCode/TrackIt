/**
 * TasksController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

 module.exports = {
 	search: function (req, res) {
 		Tasks.find({
 			title: {
 				contains: req.param("q")
 			}
 		}).done(function(err, tasks) {
 			if (err) {
 				res.send(500, {error: 'DB Error'});
 			} else {
 				res.send(tasks);
 			}
 		});
 	},

 	index: function(req, res) {
 		if (req.param("status")) {
 			Tasks.findByStatus(req.param("status")).done(function(err, tasks) {
 				if (err) {
 					return console.log(err);} else {
 						res.send(tasks);
 					}
 				});
 		}
 		else {
 			Tasks.find().done(function(err, tasks) {
 				if (err) {
 					return console.log(err);
 				// res.send(500, {error: 'DB Error'});
 			} else {
 				res.send(tasks);
 			}
 		});
 		}
 	}
 };
