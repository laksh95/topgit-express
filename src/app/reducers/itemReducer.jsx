const foodItems = {
	foodItems:[]
}
const addItems = (state=foodItems, action) =>{
	console.log('items', action.payload)
	switch(action.type){
		case 'FOODITEMS_FULFILLED':
			state={
				foodItems:action.payload
			}
			break
		default: return state
	}
	return state
}
export default addItems