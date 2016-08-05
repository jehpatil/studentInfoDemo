var app = angular.module("myApp",[]);
	app.controller("mainController", function($scope) {

	var student_list = [
		{ firstName:"Yogesh", lastName:"Patil", num:8989112345, email:"yop@gmail", city:"Jalgaon"},
		{ firstName:"Rajesh", lastName:"Patel", num:9889867890, email:"raj@gmail", city:"Bhusawal"},
		{ firstName:"Ramesh", lastName:"Mahajan", num:9090123123, email:"ram@gmail", city:"Nasik"},
		{ firstName:"Aakash", lastName:"Rane", num:8099954321, email:"aks@gmail", city:"Pune"},
		{ firstName:"Ajay", lastName:"Mane", num:8009954321, email:"ajy@gmail", city:"Dhule"},
		{ firstName:"Ram", lastName:"patil", num:9696954321, email:"ram@gmail", city:"Mumbai"},
		{ firstName:"Mayur", lastName:"Kasar", num:9898854321, email:"may@gmail", city:"Jalgaon"},
		{ firstName:"Pratik", lastName:"Joshi", num:9612354321, email:"pra@gmail", city:"Dhule"},
		{ firstName:"Pavan", lastName:"Kasar", num:9494454321, email:"pav@gmail", city:"Mumbai"},
		
		];
		
		$scope.student_list = student_list;
});
