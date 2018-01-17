var app = angular.module('toDo',[]);
app.controller('toDoCtrl', function($scope){
	$scope.tasks = [];

	$scope.get_task_class =function (task) {
		return task.done ? 'done' : '';
	}

	$scope.toggle = function (task) {
		task.done = !task.done;
		localStorage.setItem('data',angular.toJson($scope.tasks));
	}

	$scope.chooseAll = function () {
		for(var i in $scope.tasks)
		{
			var el = $scope.tasks[i];
			el.done = true;
		}
		localStorage.setItem('data',angular.toJson($scope.tasks));
	}

	$scope.chooseNone = function () {
		for(var i in $scope.tasks)
		{
			var el = $scope.tasks[i];
			el.done = false;
		}
		localStorage.setItem('data',angular.toJson($scope.tasks));
	}

	$scope.bind = function () {
		var d = JSON.parse(localStorage.getItem('data'));
		if(d == null)
			d = [];
		$scope.tasks = d;
	}

	$scope.getJobCount = function () {
		var count = 0;
		for(var i in $scope.tasks)
		{
			var el = $scope.tasks[i];
			if(el.done == false)
				count++;
		}
		return count;
	}

	$scope.deleteElement = function (i) {
		$scope.tasks.splice(i,1);
		localStorage.setItem('data',angular.toJson($scope.tasks));
	}

	$scope.addTask=function(task){
		$scope.newTask="";
		$scope.tasks.push({
			done: false, 
			task: task
		});
		localStorage.setItem('data',angular.toJson($scope.tasks));
	}
});