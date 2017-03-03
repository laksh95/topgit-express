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
	switch(action.type){
		case 'ADD_TO_CART':
			items=cart.foodItems
			items.push(action.payload)
			state={
				foodItem:items
			}
			break;
		case 'INCREASE':
			items=cart.foodItems
			for(let index in items){
				if(items[index].itemID===action.payload.itemID){
					items[index].quantity=items[index].quantiy+1
				}
			}
			state={
				foodItems:cart 
			}
			break;
		case 'DECREASE':
			let items=cart.foodItems
			for(let index in items){
				if(items[index].itemID===action.payload.itemID){
					if(items[index].quantity>0)
						items[index].quantity=items[index].quantity-1
					else
						items.splice(index,1)
				}
			}j
			state={
				foodItems:cart 
			}
			break;
		default: return state
	}
	return state
}
export default updateCart