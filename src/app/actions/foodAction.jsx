const addMenu=()=>{
	return{
		type:'MENU',
		payload: axios.get('http://ec2-54-165-240-14.compute-1.amazonaws.com:3000/api/foodGroup').then((data)=>{
			return data.data
		})
	}
};

export default addMenu
