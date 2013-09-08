function confirm(){
	var accessCode = getURLParameter('code'),
		phoneNumber = getURLParameter('phoneNumber'),
		url = "http://ec2-184-73-71-236.compute-1.amazonaws.com/confirm";

	//TODO: convert access code to token
	token = "";

	$.post(url, {phone : phoneNumber, token : token}).done(function(data){
		if (data.status == 200){
			$.post('http://ec2-184-73-71-236.compute-1.amazonaws.com/analytics', {id: data.id}).done(function(){
					window.close();
			});
		}else{
			alert("An error has occured, please try again!");
		}
	});
}

function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search)||[,""])[1].replace(/\+/g, '%20'))||null
}