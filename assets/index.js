//NOTES:
//$(window).on("load", function(){
// Handler when all assets (including images) are loaded
//});

//Ready state callback function for vanilla js (SEE "//Checking the document ready state for loaded content"[BELOW] )
var callback = function(){

    // Handler when the DOM is fully loaded
    const contactLink = document.getElementById('menu-item-003')
    const contactForm = document.querySelector('form')
    const contactWidgets = document.querySelector('.widget-container-container')
    const navbarContact = document.getElementById('nav-menu-item-3')
    const contactFormSubmit = document.getElementById('form-submit')
    
    //Event listener on <section #contact> Contact link 
    contactLink.addEventListener('click', e => {
      e.preventDefault()
      if (e) {
        contactForm.classList.remove('hidden-form'); 
        contactWidgets.classList.add('hidden-widgets')  
      }
    })
    
    //Event listener on the navigation contact link
    navbarContact.addEventListener('click', e => {
      e.preventDefault()
      if (e) {
        contactForm.classList.remove('hidden-form'); 
        contactWidgets.classList.add('hidden-widgets')  
      }
    })
    
    //Event listener on the form submit button
    contactFormSubmit.addEventListener('click', e => {
        e.preventDefault()

        // Save the original content of the form element 
        const originalForm = contactForm.innerHTML

        // Change the styling of the form element to properly display the submit message 
        contactForm.style.fontSize = '8rem'
        contactForm.style.color = 'rgb(135, 135, 182)'
        contactForm.style.marginTop = '4em'

        // Change the content of the form element 
        contactForm.innerHTML = 'Your message was delivered. Someone from our team will contact you shortly. Thanks!';
        
        const submitMessage = _ => {
          if (e) {
                e.preventDefault()
                                
                // Reset the original content of the div 
                contactForm.innerHTML = originalForm;
                // BELOW WAS ALSO USEFUL TO CLEAR THE FORM
                //document.querySelector('form').reset() 
                
                contactForm.classList.add('hidden-form')
                contactWidgets.classList.remove('hidden-widgets') 
            }
        }

        setTimeout(submitMessage, 3000)
        
    })
};

//Checking the document ready state for loaded content
if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  callback();
} else {
  document.addEventListener("DOMContentLoaded", callback);
}




