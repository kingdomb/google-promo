//NOTES:
//$(window).on("load", function(){
// Handler when all assets (including images) are loaded
//});
var callback = function(){
  // Handler when the DOM is fully loaded
    const contactLink = document.getElementById('menu-item-003')
    const contactForm = document.querySelector('form')
    const contactWidgets = document.querySelector('.widget-container-container')
    const navbarContact = document.getElementById('nav-menu-item-3')
    const contactFormSubmit = document.getElementById('form-submit')

    contactLink.addEventListener('click', e => {
        e.preventDefault()
        if (e) {
                contactForm.classList.remove('hidden-form'); 
                contactWidgets.classList.add('hidden-widgets')  
            }
    })
    
    navbarContact.addEventListener('click', e => {
        e.preventDefault()
        if (e) {
                contactForm.classList.remove('hidden-form'); 
                contactWidgets.classList.add('hidden-widgets')  
            }
    })
    
    contactFormSubmit.addEventListener('click', e => {
        e.preventDefault()
        if (e) {
                document.querySelector('form').reset()
                contactForm.classList.add('hidden-form')
                contactWidgets.classList.remove('hidden-widgets')  
            }
    })
};

if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  callback();
} else {
  document.addEventListener("DOMContentLoaded", callback);
}




