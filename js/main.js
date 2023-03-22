arreglo= JSON.parse(localStorage.getItem("myArray"))
console.log(typeof(arreglo))
console.log(arreglo)


for( i in arreglo ){
    nombre=(arreglo[i].nombres)+" "+(arreglo[i].apellidos)
    area=(arreglo[i].area)
    usuario=(arreglo[i].usuario)
    email= (arreglo[i].email)
    edad= (arreglo[i].edad)
    console.log(nombre)

    let datostabla= document.getElementById("tabla");
    let nuevafila= datostabla.insertRow(-1)
    let nuevacolumna= nuevafila.insertCell(0)
    nuevacolumna.textContent= area
    
       
    

    nuevacolumna= nuevafila.insertCell(1)
    nuevacolumna.textContent= nombre

     nuevacolumna= nuevafila.insertCell(2)
    nuevacolumna.textContent= usuario

     nuevacolumna= nuevafila.insertCell(3)
    nuevacolumna.textContent= email
    
     nuevacolumna= nuevafila.insertCell(4)
    nuevacolumna.textContent= edad


}








// añadirdatos= function(arreglo){
//     let stringtable= "<tr><th>nombres</th><th>apellidos</th><th>area</th><th>usuario</th><th>edad</th><th>direccion</th><th>email</th></tr>"
//     for (let dato of arreglo){
//         let fila = "<tr> <td>"
//         fila+= dato.nombres
//         fila+= "</td>"

//         fila += "<td>"
//         fila+= dato.apellidos
//         fila+= "</td>"

//         fila += "<td>"
//         fila+= dato.area
//         fila+= "</td>"

//         fila += "<td>"
//         fila+= dato.usuario
//         fila+= "</td>"

//         fila += "<td>"
//         fila+= dato.edad
//         fila+= "</td>"

//         fila += "<td>"
//         fila+= dato.direccion
//         fila+= "</td>"
        
//         fila += "<td>"
//         fila+= dato.email
//         fila+= "</td>"

//         fila+= "</tr>"
//         stringtable+=fila
//         console.log(stringtable)
//     }
//     return stringtable
// }
// document.getElementById("tabla").innerHTML=añadirdatos(arreglo)
// añadirdatos(arreglo)