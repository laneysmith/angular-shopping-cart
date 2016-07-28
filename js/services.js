angular
	.module('shoppingCartApp')
	.service('cart', function() {
		var cart = [{
			id: '55c8ee82152165d244b98300',
      name: 'Bayard stew',
			ingredients: 'concentrated gluten, jewelry, dill, beetle nut, toast',
			qty: 1,
			unitPrice: 1540
		}, {
			id: '55c8ee82152165d244b98307',
			ingredients: 'stuff',
      name: 'Cooking stew',
			qty: 3,
			unitPrice: 6003
		}];
		return {
			getCart: function() {
				return cart;
			},
			getIndexInCart: function(id) {
				var index;
				for (var i = 0; i < cart.length; i++) {
					if (id === cart[i].id) {
						index = i;
					}
				}
				return index;
			},
			addItemToCart: function(item) {
				cart.push(item);
				this.getOrderTotal();
			},
			updateItemQty: function(index, newQty) {
				cart[index].qty = newQty;
				this.getOrderTotal();
			},
			getOrderTotal: function() {
				let total = 0;
				for (let i=0; i < cart.length; i++) {
					total += cart[i].qty * cart[i].unitPrice;
				}
				console.log('total:', total);
				return total
			}
		};
	});
