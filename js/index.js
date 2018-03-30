var myApp = angular.module('myApp', []);
myApp.controller('checkBoxCtrl', ['$scope', function ($scope) {
	//模拟假数据
	$scope.dataList = [
		{
			"aliasName": "test1",
			"id": "1skhfuiewhioef00",
			"createTime": "2018-01-11 16:54",
			"expireTime": "2018-01-22 16:54"
		},
		{
			"aliasName": "test2",
			"id": "1skhfuiewhioef00",
			"createTime": "2018-01-11 16:54",
			"expireTime": "2018-01-22 16:54"
		},
		{
			"aliasName": "test3",
			"id": "1skhfuiewhioef00",
			"createTime": "2018-01-11 16:54",
			"expireTime": "2018-01-22 16:54"
		}
	];

	//单选/多选
	$scope.selData  = function(data,index){
		if(data.isActive == 1){
			data.isActive=0;
			$scope.isAll = 0;
		}else {
			data.isActive=1;
			for (var i =0; i <$scope.dataList.length; i++) {
				if($scope.dataList[i].isActive==1){
					if(i == $scope.dataList.length-1){
						$scope.isAll = 1;
					}
				}else{
					return false;
				}
			}
		}
	}

	//全选
	$scope.isAll = 0;
	$scope.checkAllFn = function(){
		isAllFn($scope.dataList);
	}
	function isAllFn(item){
		for (var i =0; i <item.length; i++) {
			if(!(item[i].isActive==1)){
				$scope.isAll = 1;
				for (var i =0; i <item.length; i++) {
					item[i].isActive = $scope.isAll ;
				}
				return false;
			}else{
				if(i == item.length-1){
					$scope.isAll = 0;
					for (var i =0; i <item.length; i++) {
						item[i].isActive = $scope.isAll ;
					}
				}
			}
		}
	};

	//确定
	$scope.commitListFn = function(){
		//存放选中数据
		var selArray = [];
		for (var i =0; i <$scope.dataList.length; i++) {
			if($scope.dataList[i].isActive == 1){
				selArray.push($scope.dataList[i]);
				console.log(selArray)
			}
		}
		
	}


}])
