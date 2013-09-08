function confirm(){
	var accessCode = getURLParameter('code'),
		phoneNumber = getURLParameter('phoneNumber'),
		url = "http://ec2-184-73-71-236.compute-1.amazonaws.com/confirm";

	//TODO: convert access code to token
	token = "eyJhbGciOiJSUzI1NiJ9.eyJqdGkiOiI3Ni5hMWJkMjdjNy03OWJiLTQ4MWUtOWE4OC1iYzk4NWIwMmI2ZTQiLCJhdWQiOiJjb21tZXJjZSIsInBybiI6InZlcm5vbkBkYXRhY3VzdG9kaWFuLmNvbSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJ1c2VyIl19fQ.aem1-yXxjJojdxHwNizGzo4V9z_GMKO3hackX7v4dfSiZVWBDZGfwXUVtGTdGtPof9bi9w-960E01Rk3tFP747yqk8VBBvEzRCSvlnAgczZUAJ8HyqBRIcF3kEEFddUmPM7sT1QabIi3SOGJZ-ooU6PtbwMLXXnqCEHmz4oJfyk";

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