$(function(){
	$("#submit").click(function(){
		var fname=$('#fname').val();
		var lname=$('#lname').val();
		var email=$('#useremail').val();
		var passwd=$('#passwd').val();
		$.ajax({
		url: "http://localhost:3165/api/users/userInfo",
		type:'post',
		data:{
			"fsname":fname,
			"lsname":lname,
			"uemail":email,
			"upasswd":passwd
		},
		success:function(response){
			console.log(response);
		}
	});
	});
	
})