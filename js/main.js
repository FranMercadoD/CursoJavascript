/*Se desea desarrollar un turnero para pacientes de un consultorio ingresando la cantidad de consultas y el precio, 
en una primer instancia; luego cuando se este mas avanzado se procedera a utilizar funciones de fecha para 
que pueda seleccionar el dia y horario si es que esta disponible
*/


//Funcion de saludo

function ingresarNombre() {

  let cNombre = prompt("Ingrese nombre de paciente: ");
  console.log(cNombre);
  let cApellido = prompt("ingrese apellido: ");
  console.log(cApellido);

  alert("hola !! " + cNombre + "  " + cApellido);
}
//ingresarNombre()



let precioConsulta = 0;

let Cantpacientes = prompt("Ingrese cantidad de pacientes: ");
console.log("La cantidad de pacientes es : " + Cantpacientes);

// se utiliza un bucle for, ya que conozco la cantidad de repeticiones
for (let i = 1; i <= Cantpacientes; i++) {
  ingresarNombre();

  let tconsulta = prompt("Ingrese tipo de consulta  \n1-Consulta General\n2-Estudio\n3-Especialidad ");

  cantConsultas = prompt("Ingresa cantidad de  consultas: ");
  alert("Cantidad Consultas: " + cantConsultas);
  console.log("Cantidad Consultas: " + cantConsultas);




  switch (tconsulta) {

    case "1":
      console.log("selecciono: Consulta General");
      precioConsulta += 3000;

      break;
    case "2":
      console.log("selecciono: Estudio");
      precioConsulta += 4000;
      console.log(precioConsulta);
      break;
    case "3":
      console.log("selecciono: Especialidad");
      precioConsulta += 10000;
      console.log(precioConsulta);
      break;
    default:
      console.log("selecciono un dato invalido");
      break;

  }
  let total = precioConsulta * cantConsultas;
  console.log("El total es : " + total);
}




