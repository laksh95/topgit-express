const foodItems = {
	foodItems:[]
}
const addItems = (state=foodItems, action) =>{
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