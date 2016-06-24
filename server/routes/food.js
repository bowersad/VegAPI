var foods = [
{id:1,name:"Carrot",serving:"1 Cup",calories:"40"},
{id:2,name:"Doughnut",serving:"1 Munchkin",calories:"70"},
{id:3,name:"Whole Wheat Bread",serving:"1 Slice",calories:"110"}
]

exports.findAll = function (req, res) {
	res.send(foods);
}