var app = angular.module('toDo',[]);
app.controller('toDoCtrl', function($scope){
	$scope.tasks = [];
	$scope.addTask=function(task){
		$scope.newTask="";
		$scope.tasks.push({
			done: false, 
			task: task
		});
	}
	$scope.remove=function(){
		$scope.tasks=$scope.tasks.filter(function(item){
			return !item.done
		});
	}
});