angular
	.module('shoppingCartApp')
	.controller('HomeController', ['$scope', 'cart', function($scope, cart) {
		$scope.allTeas = teaData;
		$scope.cart = cart.getCart();
		$scope.orderTotal = cart.getOrderTotal();
		$scope.addItemToCart = function() {
			var newItem = {
				id: this.tea._id,
				name: this.tea.name,
				ingredients: this.tea.ingredients,
				qty: this.item.qty,
				unitPrice: this.tea.price
			};
			return cart.addItemToCart(newItem);
		};
		$scope.addOrUpdate = function() {
			var index = cart.getIndexInCart(this.tea._id)
			if (index != undefined) {
				cart.updateItemQty(index, this.item.qty)
			} else {
				this.addItemToCart();
			}
			$scope.orderTotal = cart.getOrderTotal()
		};
	}])

	.controller('CheckoutController', ['$scope', 'cart', function($scope, cart) {
		$scope.cart = cart.getCart();
		$scope.orderTotal = cart.getOrderTotal();
		$scope.removeItem = function() {
			let index = cart.getIndexInCart(this.item.id);
			$scope.cart.splice(index, 1);
			return cart;
		}
	}])
