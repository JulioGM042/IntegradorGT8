const contenedorHTML = document.getElementById("contenedorCards")
  fetch("./db/database.json")
    .then(response => response.json())
    .then(data => {
        for(product of data){
            contenedorHTML.innerHTML += `
            <div class="cardbody">
              <h4>${product.titulo}</h4>
              <img src="${product.imagen}"/>
              <p>${product.descripcion}</p>
              <p>Ubicacion: <strong>${product.ubicación}</strong></p>
            `
        }
    })
    .catch(error => console.log(error))

    const formularioBusqueda = document.querySelector(".buscador")
    formularioBusqueda.addEventListener("submit", (event) =>{
      event.preventDefault()
    })

    const formularioContacto = document.querySelector(".contacto-form")
    formularioContacto.addEventListener("submit", (event) =>{
      event.preventDefault()
    })
    
    const btnEnvForm = document.getElementById("Enviarbtn")
    btnEnvForm.addEventListener("click", () =>{
      Swal.fire({
        title: 'Muchas gracias. Tu mensaje ha sido enviado',
        icon: 'success',
        color:'#F99417',
        background: '#E8E2E2',
      })
  })

  const emailInpt = document.getElementById("sub-email-area");

  emailInpt.addEventListener("keydown", (event) => {
    if (event.code === "Enter") {
      event.preventDefault();
      Swal.fire({
        title: 'Bienvenido! Recibiras en tu mail todas las novedades',
        icon: 'success',
        color:'#F99417',
        background: '#E8E2E2',
      });
      emailInpt.value = ""; // borra el campo de entrada de correo electrónico
    }
  });
  
  