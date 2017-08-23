// submit username and pass
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
	
	
	
	var request= new XMLHttpRequest();
	//create the request
	request.onreadystatechange = function(){
	if(request.readyState===XMLHttpRequest.DONE){
	if(request.status===200){

		var names=request.responseText;
	names=JSON.parse(names);
	var list='';
	for(var i=0;i<names.length;i++)
	{
	list +='<li>' + names[i] +'</li>'
	}
	var ul=document.getElementById('namelist');
	ul.innerHTML=list;
	}
}

	};
	//make the request
	var username=document.getElementById('username').value;
	var password=document.getElementById('password').value;
	request.open('POST','http://srilekhakn27.imad.hasura-app.io/submit-name?name='+name,true);
	request.send(JSON.strinfigy({username: username, password: password}));


	
};
	
