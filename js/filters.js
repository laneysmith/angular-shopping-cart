angular
	.module('shoppingCartApp')
	.filter('allTeaCategories', allTeaCategories)
	.filter('teaPrice', teaPrice);

function allTeaCategories() {
	return function(input) {
		var flattened = [];
		for (var i = 0; i < input.length; i++) {
			var current = input[i].categories;
			flattened = flattened.concat(current)
		}
		var removeDupes = Array.from(new Set(flattened));
		var sortAlpha = removeDupes.sort(function(a, b) {
			if (a < b) return -1;
			if (a > b) return 1;
			return 0;
		})
		return sortAlpha;
	};
}

function teaPrice() {
	return function(num) {
		return '$' + (num / 100).toFixed(2)
	};
}
