function loginPopup(){
	var phoneNumber = $('#phone-number').val(),
		client_id = "id-e0025d35-eb9a-474d-a91b-5eb10a0fbca7",
		//return_url = "http://ec2-184-73-71-236.compute-1.amazonaws.com/callback?phoneNumber=";
		return_url = "http://localhost:3000/callback?phoneNumber=";

	phoneNumber = replaceAll("-", "", phoneNumber);
	if (phoneNumber.length != 10 && !(/^[0-9]+$/.test(phoneNumber))){
		$('#phone-number').val("");
		return;
	}

	var url = 'https://greenbutton.affsys.com/auth/signin.jsp?client_id=' + client_id + '&redirect_uri=' + return_url + phoneNumber;

	window.open(url, "Green Button");

}

function replaceAll(find, replace, str) {
  return str.replace(new RegExp(find, 'g'), replace);
}