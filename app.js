(function () {

'use strict';
	
angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject = ['$scope','ShoppingListCheckOffService'];
function ToBuyController($scope,$ShoppingListCheckOffService) {
	$scope.toBuyItems = $ShoppingListCheckOffService.getBuyList();

	$scope.addNewItem = function () {
		$ShoppingListCheckOffService.addItem($scope.newItemName,$scope.newItemQuant);
		// console.log('added');
	};

	$scope.moveItemToBought = function (index) {
		$ShoppingListCheckOffService.moveItemToBought(index);
		// console.log(index);
	}
};

AlreadyBoughtController.$inject = ['$scope','ShoppingListCheckOffService'];
function AlreadyBoughtController($scope,$ShoppingListCheckOffService) {
	$scope.boughtItems = $ShoppingListCheckOffService.getBoughtList();
};

function ShoppingListCheckOffService() {
	var buyList = [	{ name: "cookies", quantity: 1 },
					{ name: "veggies", quantity: 2 },
					{ name: "cakes", quantity: 3 },
					{ name: "chips", quantity: 4 },
					{ name: "biscuits", quantity: 5 }];

	var boughtList = [];

	this.getBuyList = function (argument) {
		return buyList;
	};

	this.getBoughtList = function (argument) {
		return boughtList;
	};

	this.addItem = function (itemName,itemQuant) {
		var newItem = {
			name:itemName, 
			quantity:itemQuant
		};

		buyList.push(newItem);
		// console.log(buyList);
	}

	this.moveItemToBought = function (index) {
		boughtList.push(buyList[index]);

		buyList.splice(index,1);
	}
}

})();