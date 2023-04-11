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
    
    const btnToast = document.getElementById("Enviarbtn")
    btnToast.addEventListener("click", () =>{
      Swal.fire({
        title: 'Muchas gracias. Tu mensaje ha sido enviado',
        icon: 'success',
        color:'#F99417',
        background: '#E8E2E2',
      })
  })

