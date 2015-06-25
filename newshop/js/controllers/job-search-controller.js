angular.module('joeShopping')
.controller('JobSearchController', function(){
	var jobs = [{ title: 'waiter', 
		salary: '12.00',
		qualify: true,
		filled: false,
		image: "imgs/workout.jpg",
		description: "serve food",
		employer: "Burger King",
		details: {
			time: "8 hours",
			contact: "BurgerKing@gmail.com"
			},
		reviews: [{
			difficulty: "3",
			comment: "some customers are CHEAP!",
			author: "Petter Pan"
			}]
		},
	{ title: 'programer',
		salary: '35.00',
		qualify: true,
		filled: false,
		image: "imgs/workout1.jpg",
		description: "web development",
		employer: "Huawei",
		details: {
			time: "8 hours",
			contact: "Huawei@gmail.com"
			},
		reviews: [{
			difficulty: "5",
			comment: "World of Coding!",
			author: "Jacky Chan"
			}]
		},
	{ title: 'bodyguard',
		salary: '80.00',
		qualify: true,
		filled: false,
		image: "imgs/workout2.jpg",
		description: "protect VIP"	,
		employer: "Joe Khai",
		details: {
			time: "24 hours",
			contact: "khai0215@gmail.com"
			},
		reviews: [{
			difficulty: "10",
			comment: "I've got a shot!",
			author: "Rock Johnson"
			}]
		},
	{ title: 'manager',
		salary: '55.00',
		qualify: false,
		filled: false,
		image: "imgs/workout3.jpg",
		description: "manage employees",
		employer: "Huawei",
		details: {
			time: "8-10 hours",
			contact: "Huawei@gmail.com"
			},
		reviews: [{
			difficulty: "8",
			comment: "Files! Files! Files!!!",
			author: "Yoon Jung"
			}]
	}
	];
	this.jobs = jobs;

})
;
