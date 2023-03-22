class Persona{
    nombres 
    apellidos
    area
    usuario
    edad
    direccion
    email

    constructor(nombres,apellidos,area,usuario,edad,direccion,email){
        this.nombres=nombres
        this.apellidos=apellidos
        this.area=area
        this.usuario=usuario
        this.edad=edad
        this.direccion=direccion
        this.email=email
    }

    
}
function captura(){
    
    nombres=document.getElementById("nombre").value
    apellidos=document.getElementById("apellido").value
    area=document.getElementById("area").value
    usuario=document.getElementById("usuario").value
    edad=document.getElementById("edad").value
    direccion=document.getElementById("direccion").value
    email=document.getElementById("email").value

   

    x=new Persona(nombres,apellidos,area,usuario,edad,direccion,email)
    arreglo.push(x)
    console.log(arreglo)
    localStorage.setItem('myArray', JSON.stringify(arreglo));
    
    
}

let arreglo=[]

const form= document.getElementById("formulario");
    form.addEventListener("submit", function(event){
    event.preventDefault();
    let formularioData= new FormData(form);
})


