class Paciente {
  constructor(nombre,apellido,edad){
   this.nombre= nombre
    this.apellido= apellido
    //this.dni=dni
    //this.fdNac=fdNac
    this.edad=edad
    //this.telefono=telefono
    //this.email=email
   // this.obrasocial= obrasocial.false

  }
}

const pcte1 = new Paciente("Jorge","Perez",90)
const pcte2 = new Paciente("Pepito","Perales",35)
const pcte2 = new Paciente("Flora","Fauna",12)
const pcte2 = new Paciente("Claudia","Zaravia",28)

const pacientes = []
pacientes.push(pcte1, pcte2)

function agregarPaciente(array){
  let nombre = prompt("Ingrese el nombre del Paciente: ")
  let apellido = prompt("Ingrese el Apellido del Paciente: ")
  let edad = parseInt(prompt("Ingrese edad del Paciente: "))
    
  const nuevoPcte = new Paciente(nombre,apellido,edad)
  array.push(nuevoPcte)
 console.log(array)
}

 

function mostrarPaciente(arr){
    arr.forEach(
       (paciente)=>{
           console.log(`${paciente.nombre} ${paciente.apellido} tiene : ${paciente.edad} de edad`)
       }
   )
}

 

function buscarPorNombre(array){
   let NomBuscado = prompt("Ingrese el nombre del paciente que desea buscar")
   let search = array.find(
              (pcte) => pcte.nombre == NomBuscado 
   )
   if(search == undefined){
       console.log(`${NomBuscado} no se encuentra paciente`)
   }else{
       console.log(search)
   }
}

 
function buscarPorApellido(ar){
   let ApeBuscado = prompt("Ingrese el nombre del Apellido que está buscando:")
   let search = ar.filter(
       (pcte) => pcte.apellido == ApeBuscado
   )
   if(search.length == 0){
       console.log(`Para ${ApeBuscado} no se encuentra ese paciente`)
   }else{
       mostrarPaciente(search)
   }
}


function ordenarMenorMayor(array){
   const menorMayor = [].concat(array)
   menorMayor.sort((param1, param2)=> param1.edad - param2.edad)
   mostrarPaciente(menorMayor)
}

function menu(){
   let salirMenu = false
   do{
       salirMenu = preguntarOpcion(salirMenu)
   }while(!salirMenu)
} 



function preguntarOpcion(salir){
   let ops = parseInt(prompt(`Ingrese la opción deseada
          1 - Agregar Paciente
          2 - Borrar Paciente
          3 - Consultar Pacientes
          4 - Encontrar por Nombre:
          5 - Encontrar por Apellido:
          6 - Ordenar Pacientes:
          0 - Salir del menu`))
   
       switch(ops){
           case 1:
               agregarPaciente(pacientes)
           break
           case 2:
               console.log("Borrar Paciente")
           break
           case 3:
            mostrarPaciente(pacientes)
           break
           case 4:
            buscarPorNombre(pacientes)
           break
           case 5:
               buscarPorApellido(pacientes)
           break
           case 6:
            ordenarMenorMayor(pacientes)
           break
           case 0:
               console.log("gracias por utilizar nuestra app")
               salir = true
               return salir
           break
           default:
               console.log("Ingrese una opción correcta")
           break
       }
}


//código
 menu()

