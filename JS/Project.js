let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
}


    //  CONTACT
const scriptURL = 'https://script.google.com/macros/s/AKfycbz9MQhR4nJhttf7AO59AO34GceXrnQwk5bPtReBnegQfZ-oacSs7J6srYgV3ldT73TJng/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
    let arm = document.getElementById('msg');
    setTimeout(()=>{arm.innerHTML='Form Submitted Successfully '},1000)
    setTimeout(()=>{arm.innerHTML=' '

      form.reset();
    },3000)

})



