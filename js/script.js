// Obtener todos los elementos de asientos
const asientos = document.getElementsByClassName("asiento");

// Agregar evento de clic a cada asiento
for (let i = 0; i < asientos.length; i++) {
  const asiento = asientos[i];
  asiento.addEventListener("click", function()
  {
    // Alternar la clase 'selected' en el asiento al hacer clic
    asiento.classList.toggle("selected");

    // Verificar si se han seleccionado más de 2 asientos
    const asientosSeleccionados = document.getElementsByClassName("asiento selected");
    
    if (asientosSeleccionados.length > 2) {
      // Si se seleccionaron más de 2 asientos, deseleccionar el último asiento seleccionado
      asientosSeleccionados[0].classList.remove("selected");
    }
  }
  );
}

// Obtener el formulario de reserva
const reservaForm = document.getElementById("reservaForm");

// Array para almacenar los objetos de reserva
const reservas = [];

// Agregar evento de envío del formulario
reservaForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // Obtener los valores del formulario
  const nombre = document.getElementById("nombre").value;
  const pelicula = document.getElementById("pelicula").value;
  const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("hora").value;
  const asientosSeleccionados = Array.from(asientos)
    .filter(function(asiento) {
      return asiento.classList.contains("selected");
    })
    .map(function(asiento) {
      return asiento.textContent;
    });

  // Verificar si se han seleccionado al menos 1 asiento
  if (asientosSeleccionados.length === 0) {
    alert("Debes seleccionar al menos 1 asiento.");
    return;
  }

  // Guardar los valores seleccionados en un objeto de reserva
  const reserva = {
    nombre: nombre,
    pelicula: pelicula,
    fecha: fecha,
    hora: hora,
    asientos: asientosSeleccionados
  };

  // Agregar el objeto de reserva al array
  reservas.push(reserva);

  console.log(reserva);
  console.log("Reservas:", reservas);

  // Reiniciar el formulario
  reservaForm.reset();
  for (let i = 0; i < asientos.length; i++) {
    asientos[i].classList.remove("selected");
  }
});
