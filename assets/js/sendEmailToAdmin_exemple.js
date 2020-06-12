
function sendEmailToAdmin() {

	var templateParams = {
		from_name: "Not-A-Poker",
		to_name: "Dear admin",
		message_html: "Un utilisateur réclame son cadeau !"
	}
	
	emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams) // Insert your service ID and template ID (from EmailJS)
		.then(function(response) {
				console.log("SUCCESS!", response.status, response.text);
			}, function(error) {
				console.log("FAILED...", error);
		})

}