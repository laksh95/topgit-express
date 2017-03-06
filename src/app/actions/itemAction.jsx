/*This action is used to set the state of all the available food Items*/
const addFoodItems = ()=> {
	return{
		type:'FOODITEMS',
		payload:axios.get('http://ec2-54-165-240-14.compute-1.amazonaws.com:3000/api/foodItem').then((data)=>{
			return data.data
		})
			.catch()
	}
}
export default addFoodItems