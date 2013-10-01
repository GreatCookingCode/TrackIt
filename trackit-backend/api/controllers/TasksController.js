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
 	}
 };
