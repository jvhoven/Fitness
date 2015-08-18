var exports = module.exports;

var data = {};
data.title = "Schedules"

/*
* Entry point
*/
exports.indexAction = function(req, res) {
	data.posts = exports.getPosts();
	data.eatingSchedules = exports.getRecentEatingSchedules();
	data.trainingSchedules = exports.getRecentTrainingSchedules();
	
	res.render("index", data);
}

/*
* Retrieve latest posts
*/
exports.getPosts = function() {
	return [
		{
			id: 1, 
			title: "No excuses. Get serious.", 
			image: "banner.jpg",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.					| Duis aute irure dolor 		  in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			action: {
				title: "Get serious",
				link: "/schedule/0"
			}
		},
	 	{
			id: 1, 
			title: "Build muscle quick", 
			image: "banner-2.jpg",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.					| Duis aute irure dolor 		  in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			action: {
				title: "Get serious",
				link: "/schedule/0"
			}
		}
	];
}

/*
* Retrieve recently created schedules
*/
exports.getRecentEatingSchedules = function() {
	return [
		{ id: 1, author: exports.getCreator(1, 'meal'), title: "A new schedule", purpose: "Losing weight", rating: 3 },
		{ id: 2, author: exports.getCreator(2, 'meal'), title: "Another schedule", purpose: "Muscle building", rating: 5 }
	];
}

/*
* Recently created training schedules
*/
exports.getRecentTrainingSchedules = function() {
	return [
		{ id: 3, author: exports.getCreator(1, 'training'), title: "Stronglift 5x5", purpose: "Muscle building", rating: 3 }
	];
}

/*
* Get the user object of the schedule creator
*/ 
exports.getCreator = function(id, type) {
	
	var images = [
		"user.jpg",
		"user-1.jpg",
		"user-2.jpg",
		"user-3.jpg"
	];
	
	return {
		id: 1, name: "Hank", img: images[Math.floor((Math.random() * images.length))]
	}
}