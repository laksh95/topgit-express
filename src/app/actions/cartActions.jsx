export function addToCart(data){
	return{
		type:'ADD_TO_CART',
		payload:data
	}
}
export function increaseQuantity(data){
	return{
		type:'INCREASE',
		payload:data
	}
}
export function decreaseQuantity(data){
	return{
		type:'DECREASE',
		payload:data
	}
}