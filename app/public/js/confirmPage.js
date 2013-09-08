function confirm(){
	var accessCode = getURLParameter('code'),
		phoneNumber = getURLParameter('phoneNumber'),
		url = "http://ec2-184-73-71-236.compute-1.amazonaws.com/confirm";

	//TODO: convert access code to token
	token = "eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiI2Mi4xYmIxNzYyNC0yYzhhLTQ4MmYtOTlhYi04ZGM4ZDdiZWZlMGEiLCJhdWQiOiJjb21tZXJjZSIsInBybiI6InZlcm5vbkBkYXRhY3VzdG9kaWFuLmNvbSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJ1c2VyIl19fQ.cklEJ5uITnrpa9wL_5D7fD_txrUJHUNPFMlIPM2x5nKhJ9qeP9IhbvFmMkq8-7mi8hkfpNn232m1FA_HJvddT9_xuCZTJPP1HRNv7m4VOf0kQMRl8oB68v8B8Zjm_6-t37A_UwtA7-7gSU9YB_1z3Qw1kLhpMLEriLCsDVqpvPk";

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