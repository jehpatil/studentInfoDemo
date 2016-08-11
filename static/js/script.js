var app = angular.module("myApp",[]);
	app.controller("mainController", function($scope, $http) {
		$http.get('todo.json')
       		 .then(function(res){
          		$scope.student_list = res.data;
        	});
      $scope.marksSlider = 0;
	});

app.filter('searchFilter', function () {
    return function(marks) {
      var list = [];
      var res;
      var str;
      var s = document.getElementById("searchmark").value;
      console.log("Original String: "+s);
      //console.log("result"+res);

      angular.forEach(marks,function(item) {
        res = s.charAt(0);
        console.log("First: "+res);
        if(res == ">")
        {
          str = s.substring(1);
          console.log("marks: "+str);
          console.log("Item P: "+item.marks);

          if(item.marks > str)
          {
          console.log("new: "+item.marks);
            list.push(item);
          }
        } 
        else if(res == "<")
        {
          str = s.substring(1);
          if(item.marks < str)
          {
          console.log("marks: "+str);
            list.push(item);
          }
        }
        else
        {
          if(item.marks >= s)
          {
            list.push(item);
            return list;
          }
        }
      })
      return list;
    }
   
});