angular
	.module('shoppingCartApp')
	.directive('allTeaCategories', function() {
		return {
			template: 'Name: {{customer.name}} Address: {{customer.address}}'
		};
	});
