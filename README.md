# Send email from JS with EmailJS

EmailJS helps sending emails using client side technologies only. No server is required.  
Just connect EmailJS to one of the supported email services, create an email template, and use our Javascript library to trigger an email.

## Email service
Create a free account on [SendGrid](https://sendgrid.com/).  
Create a [Single Sender Verification](https://sendgrid.com/docs/ui/sending-email/sender-verification/).  
Under the tab `Email API` -> `Integration Guide` choose SMTP Relay and `Create Key`.  

## EmailJS
Create a free account on [EmailJS](https://www.emailjs.com/).  
Under the tab `Email Services` chose SendGrid, past your SendGrid `key` and get your `Service ID`.  
Under the tab `Email Templates` get your `Template ID`.  
Under the tab `Account` -> `API KEYS` get your `User ID`.  

## Install EmailJS SDK in your project folder. This can be done with npm:
`npm install emailjs-com`

## In your html file:
In the `<head>` tag put the following scripts:  
- Load the EmailJS SDK:
```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@2.4.1/dist/email.min.js"></script>
```
- Initialize the SDK with our user ID:
```html
<script type="text/javascript">
	(function(){
		emailjs.init('YOUR_USER_ID'); // Insert your user ID
	})();
</script>
```
Then in the `<body>` tag insert a button to call a js function (sendEmail.js).

## In your js file:
```js
function sendEmail() {

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
```
