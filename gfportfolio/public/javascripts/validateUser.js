window.onload = function () {
    // Input fields
    const nameLastname = document.querySelector("#nameLastname");
    const textUserName = document.querySelector('.div-nameLastname-errors')//error message
    const textUserCharacter = document.querySelector(".div-nameLastname-character-errors")//error message

    const email = document.querySelector("#email");
    const textUserEmail = document.querySelector(".div-email-errors")//class
    const textUserRegisterEmailCharacter = document.querySelector(".div-email-character-errors")//class

    const mensaje = document.querySelector("#mesaje");
    const textUserMensaje = document.querySelector(".div-mesaje-errors")//class
    const textUserMensajeCharacter = document.querySelector(".div-mensaje-character-errors")//class

    // Forms
    const form = document.querySelector("#contactForm");
  


    if (form != null) {
    
        form.addEventListener('submit', (e) => {
    
    
          if (nameLastname.value == ''){
            e.preventDefault()
            textUserName.innerHTML = 'Debes ingresar tu nombre y apellido, por favor.'
            //nameLastname.classList.add("input-error");
    
          } else {
            textUserName.innerHTML = ""
            nameLastname.classList.remove("input-error");
          }
    
          if (nameLastname.value != "" && nameLastname.value.length < 2) {
            e.preventDefault()
            textUserCharacter.innerHTML = 'El nombre debe contener mínimo 2 letras'
            //nameLastname.classList.add("input-error-2");
    
          } else {
            textUserCharacter.innerHTML = ""
            nameLastname.classList.remove("input-error-2");
          }
        })
    }
  
  if (form != null) {
    
    form.addEventListener('submit', (e) => {

      if (email.value == '') {
        e.preventDefault()
        textUserEmail.innerHTML =' Debes ingresar un correo electrónico'
        email.classList.add("input-error");
        
      } else {
        textUserEmail.innerHTML = ""
        email.classList.remove("input-error");
      }

      if (email.value != "" && !email.value.includes("@")) {
        e.preventDefault()
        textUserRegisterEmailCharacter.innerHTML ='Debes ingresar un correo electrónico valido'
        email.classList.add("input-error-2");

      } else {
        textUserRegisterEmailCharacter.innerHTML = ""
        email.classList.remove("input-error-2");
      }
    })
  }


    if (form != null) {
    
      form.addEventListener('submit', (e) => {
      if (mensaje.value == "") {
        e.preventDefault()
        textUserMensaje.innerHTML = 'Por favor, ingresa un comentario.Muchas gracias!'
        mensaje.classList.add("input-error");

      } else {
        textUserMensaje.innerHTML = ""
        mensaje.classList.remove("input-error");
      }

      if (mensaje.value != "" && mensaje.value.length < 8) {
        e.preventDefault()
        textUserMensajeCharacter.innerHTML ='Por favor, debe escrbir un mensaje'
        mensaje.classList.add("input-error-2");

      } else {
        textUserMensajeCharacter.innerHTML = ""
        mensaje.classList.remove("input-error-2");
      }

    })
  }
    
  };
  
