const menu = {
	foodGroups:[]
}
/*This reducer will update the state which contains the list of menu options*/
const addMenu = (state=menu,action) => {
	console.log('foodGroups',action.payload)
	switch(action.type){
		case 'MENU_FULFILLED':
			state={
				foodGroups:action.payload
			}
			break
		default: return state
	}
	return state
}
export default addMenu