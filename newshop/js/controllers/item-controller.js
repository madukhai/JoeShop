angular.module('joeShopping')
.controller('ItemController',function(){
	var items = [{
		id: 1,
		name: 'phone',
		price: '512.00',
		image: 'imgs/0.png',
		catelog: 'mobile',
		descriptions: {
			size:"5 * 6",
			uses: ["call","play"]
		},
		avg_rate: "4.5",
		reviews: [{
			rate: "3",
			comment: "Galuxy",
			author:"Joe"
		},
		{
			rate: "6",
			comment: "better",
			author: 'khai'
		}
		]},
	{	name: 'computer',
		price: '1200.00',
		catelog: 'computer',
		image: 'imgs/1.png',
		descriptions: {
			
		}
	},
	{	name: 'car',
		price: '30000.00',
		catelog: 'other',
		image: 'imgs/2.png',
		descriptions: {}
	},
	{
		name: 'icon',
		price: '100.00',
		catelog: 'other',
		image: 'imgs/3.ico',
		descriptions: {}
	},
	{	name: 'mushroom',
		price: '2.00',
		catelog: 'other',
		image: 'imgs/5.ico',
		descriptions: {}
	},
	{
		name: 'wine',
		price: '400.00',
		catelog: 'other',
		image: 'imgs/6.ico'
	},
	{
		name: 'bird',
		price: '125.00',
		catelog: 'other',
		image: 'imgs/7.jpg'
	}
	];
	
	
	this.items = items;
});