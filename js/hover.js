const bton2 = document.getElementById('bton2');
const bton1 = bton2.previousElementSibling;
var darkBlue = 'hsl(229, 31%, 21%)';
var whiteocean = 'hsl(231, 69%, 60%)';

bton2.addEventListener('mouseenter',()=>{
    bton2.style.backgroundColor = whiteocean;
    bton2.style.color = '#f0f0f0';
    bton1.style.backgroundColor = '#f0f0f0'
    bton1.style.color = darkBlue;
})
bton2.addEventListener('mouseleave',()=>{
    bton2.style.backgroundColor = '';
    bton2.style.color = '';
    bton1.style.backgroundColor = ''
    bton1.style.color = ''
 })



    // Función para validar el input
function validateInput() {
    const input = document.querySelector('.formulario__input input');
    const value = input.value.trim();
  
    if (value === '' || !isValidEmail(value)) {
      // Si el input está vacío o el email no es válido, añade la clase de error
      input.classList.add('input-error');
    } else {
      // Si no hay error, asegúrate de quitar la clase de error
      input.classList.remove('input-error');
    }
  }
  
  // Función para comprobar si el email es válido
  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  // Agrega un detector de eventos para cuando el formulario intenta ser enviado
  const form = document.querySelector('.formulario');
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío del formulario
    validateInput(); // Valida el input
  });
    


