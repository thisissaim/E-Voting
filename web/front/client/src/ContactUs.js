import emailjs from "@emailjs/browser";
import React, { useRef } from 'react';

const ContactUs = () => {
 
		const form = useRef();

		const generateOTP =()=>{
			let OTP="";
			for (let i=0;i<6;i++){
			OTP+=Math.floor(Math.random()*10);
			}
			
			return Number(OTP)
			};
			console.log("generateOTP  ",generateOTP());
	  
		const sendEmail = (e) => {
		  e.preventDefault();
	  
		  emailjs.sendForm('service_d07z4xm', 'template_foagdkh', form.current, 'jFHI6zJ-TkvVdXe-g')
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			}); 
		};
	return (
		<div>
			<form ref={form} 
			onSubmit={sendEmail}  >
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
	  <input type="submit"
	   value="Generate OTP" 
	   onClick={generateOTP} name = "otp"/>	  
	  {/* <button onClick={storeOtP}>Generate OTP</button> */}
	
    </form>

		</div>
	)
}




export default ContactUs