const addMenu=()=>{
	axios.get('http://ec2-54-165-240-14.compute-1.amazonaws.com:3000/api/foodGroup').then((data)=>{
		console.log(data);
		return{
			type:'MENU',
			payload:data
		}
	})
};
export default addMenu
