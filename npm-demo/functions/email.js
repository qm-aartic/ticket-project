import emailjs from '@emailjs/browser';

function sendEmail(updatedTicket, loggedUser){
    console.log("This is being called")
    const serviceId = 'service_u2bvn5q';
    const templateId = 'template_wv0j7d8';
    const publicKey ='6sWoVJwPyHfozi86y';

    const params = {
      ticket_type: updatedTicket.category,
      to_name: loggedUser.name,
      ticket_desc: updatedTicket.desc,
      user_email: loggedUser.email,
      ticket_result: updatedTicket.status,
    }

    emailjs.send(serviceId, templateId, params, publicKey)
      .then((response) => {
        console.log('Email sent succesfully!', response)
      })
      .catch((error) => {
        console.log(error)
      })
  };

  
export default sendEmail;
