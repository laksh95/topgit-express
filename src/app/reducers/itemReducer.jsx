const foodItems = {
	foodItems:[]
}
const addItems = (state=foodItems, action) =>{
	switch(action.type){
		case 'ITEMS':
			state={
				foodItems:action.payload
			}
			break
		default: return state
	}
	return state
}
export default addItems