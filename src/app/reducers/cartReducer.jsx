const cart={
	foodItems:[]
}
/*
foodItems is the array of objects, 
which contains all the food items 
added into the cart.
any update to the cart, increase or
decrease in the quantity will be handled 
through this array itself.
*/
const updateCart = (state=cart,action) =>{
	let cartItems=cart.foodItems
	switch(action.type){
		case 'ADD_TO_CART':
			let items=action.payload
			let count=0
			cartItems.map((data,index)=> {
                if (data.itemID === items.food_item_id) {
                    count = 1
                    data.quantity += 1
                }
            })
				if(0===count){
					cartItems.push({
						itemID:items.food_item_id,
						itemName:items.food_item_name,
						quantity:1,
						price:items.food_item_price
					})
				}
                state= {
                    foodItems: cartItems
                }
                console.log(state.foodItems)
			break;
		case 'INCREASE':
			items=cart.foodItems
			for(let index in items){
				if(items[index].itemID===action.payload.itemID){
					items[index].quantity=items[index].quantity+1
				}
			}
			state={
				foodItems:items
			}
			break;
		case 'DECREASE':
			 items=cart.foodItems
			for(let index in items){
				if(items[index].itemID===action.payload.itemID){
					if(items[index].quantity>=1)
						items[index].quantity=items[index].quantity-1
					if(items[index].quantity==0)
						items.splice(index,1)
				}
			}
			state={
				foodItems:items
			}
			break;
		default: return state
	}
	return state
}
export default updateCart