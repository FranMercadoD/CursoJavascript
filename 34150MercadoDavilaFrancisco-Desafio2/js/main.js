/*Se desea desarrollar un turnero para pacientes de un consultorio ingresando la cantidad de consultas y el precio, 
en una primer instancia; luego cuando se este mas avanzado se procedera a utilizar funciones de fecha para 
que pueda seleccionar el dia y horario si es que esta disponible
*/
/*
 
//Funcion de saludo
function ingresarNombre() {
  let ingresarNombre = prompt("Ingresa nombre");
  alert("hola " + ingresarNombre);
}

// llamo a la funcion para que salude
ingresarNombre();

//Ingreso la cantidad de pacientes
let pacientes = prompt("Ingrese cantidad de pacientes: ");
console.log("La cantidad de pacientes es : " + pacientes);
// se utiliza un bucle for, ya que conozco la cantidad de repeticiones
for (let i = 1; i <= pacientes; i++) {
  ingresamos la cantidad de consultas a realizar
  let cantConsultas = prompt("Ingresa cantidad de  consultas: ");
  alert("Cantidad Consultas: " + cantConsultas);
  console.log("Cantidad Consultas: " + cantConsultas);

  //ingresamos el precio de la consulta
  let precio = prompt("Ingresa precio de consulta: ");
  precio = parseFloat(precio);
  // declaramos una variable calcular el total de las consultas
  let total = precio * cantConsultas;
  console.log("El total es : " + total);
}

function ingresarNombre() {
     
  let cNombre = prompt("Ingrese nombre de paciente: ");
console.log(cNombre);
let cApellido = prompt("ingrese apellido: ");
console.log(cApellido);

  alert("hola !! " + cNombre +"  "+ cApellido);
}



const servicios =  [
  {  nombre: "Consulta general",
  id: 'consulta general',
  precio: 3000},
  {  nombre: "Estudio",
  id: 'Estudio',
  precio: 10000},
  {  nombre: " Especialidad",
  id: 'Especialidad',
  precio: 6000}
  
  
  ]
  precioConsulta= 1000;

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
    console.log("selecciono Consulta General");
    precioConsulta +=3000;
    
    break;
    case "2":
      console.log("selecciono Estudio");
       precioConsulta += 4000;
       console.log(precioConsulta);
      break;
      case "3":
        console.log("selecciono Especialidad");
        precioConsulta += 10000;
        console.log(precioConsulta);
        break;
  default:
    console.log("selecciono un dato invalido");
    break;
    

}


  }
*/
function tipoConsultaSel()
{
  let t=document.getElementById("tipoconsulta");
  let mostrarTipoConsulta= t.options[t.selectedIndex].text;
 console.log(mostrarTipoConsulta);
}



//let total = precioConsulta * cantConsultas;
  //console.log("El total es : " + total);
 

/* Ingreso datos del paciente, luego el tipo de consulta, la fecha,hora  y si dispone de obra social.
El costo de la consulta muestra junto con la solicitud del turno





 
 



  class Paciente{
  constructor(cNombre,cApellido,precioConsulta  ) {
  this.cNombre=cNombre;
  this.cApellido=cApellido;
  this.precioConsulta= precioConsulta;
  }
    }
  */
    class ui {

      addTurno()
    {

    }}

    //DOM
    document.getElementById('formulario').addEventListener('submit',function(){
     const cNombre = document.getElementById('nombre').value;
     const cApellido = document.getElementById('apellido').value;




    })
    


  NuevoPaciente = new Paciente(cNombre,cApellido,precioConsulta );
  console.log(NuevoPaciente);

  
  














 
/*
function capturar(){

function Paciente(cantConsultas,cantPacientes,precioConsulta ){
this.cantConsultas=cantConsultas;
this.cantPacientes=cantPacientes;
this.precioConsulta= precioConsulta;
 
}

let cantConsultas = document.getElementById("cantConsultas").value;
let cantPacientes = document.getElementById("cantPacientes").value;
let precioConsulta = document.getElementById("precioConsulta").value;
  
 
    NuevoPaciente = new Paciente(cantConsultas,cantPacientes,precioConsulta );
 console.log(NuevoPaciente);
}


let turnos = [
  { "cantConsultas":1,"cantPacientes":12 ,"precioConsulta":11 },
  { "cantConsultas":2,"cantPacientes":33,"precioConsulta":2500 },
  { "cantConsultas": 3 ,"cantPacientes":1, "precioConsulta":490 },
  { "cantConsultas": 3,"cantPacientes":4 ,"precioConsulta":34 },
   { "cantConsultas":90,"cantPacientes":67,"precioConsulta":3} ];
function agregar(){
  turnos.push(NuevoPaciente);
   
  
  
   
}
const TotalPacientes = turnos.reduce((total,turnos)=> total + turnos.cantPacientes,0)
console.log("La cantidad de Pacientes es : ",TotalPacientes);
const PrecioTotal = turnos.reduce((total,turnos)=> total + turnos.precioConsulta,0)
 console.log("El precio total  es : ",PrecioTotal);
 const TotalConsultas = turnos.reduce((total,turnos)=> total + turnos.cantConsultas,0)
 console.log("La cantidad de consultas es : ",TotalConsultas);

  let consultaMedica = []

//Ejemplo con ciclo usando map y reduce
const agregarTurno = (id) => {
  let TurnoEncontrado = turnos.find(turno => turno.Id === id)
  let TurnoEspera = turnos.find(turno => turno.Id === id)
  if ( TurnoEspera === undefined) {
      alert("el Turno " + TurnoEncontrado.cantConsultas + " fue agregado a su carrito")
      consultaMedica.push({
         cantConsultas: 1,
          ...TurnoEncontrado
      })
  } else {
      const turIndex = consultaMedica.findIndex((t => t.Id === id))
      consultaMedica[turIndex].cantConsultas = consultaMedica[turnIndex].cantConsultas + 1
       consultaMedica[turIndex].cantPacientes = consultaMedica[turnIndex].cantPacientes + 1
      consultaMedica[turIndex].precioConsulta = consultaMedica[turnIndex].precioConsulta + TurnoEncontrado.precioConsulta
  }
}
 
 
*/

 
 

 
 
 