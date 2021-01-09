let arrayPaises=[];
let TxtPais;
let TxtUrl;
let BtnEnviar;
let BtnBorrar;
let tblPaises;  
window.onload=()=>{
     TxtPais=document.querySelector('#Pais');
     TxtUrl=document.querySelector('#UrlImagen');
     BtnEnviar=document.querySelector('#Enviar');
     BtnBorarr=document.querySelector('#Borrar');
     tblPaises=document.querySelector('#tabla')  
     BtnEnviar.addEventListener('click',EnviarDatos)  
     BtnBorarr.addEventListener('click',BorrarUltimo)  
     console.log('Cargando....');  
     CargarDatosApiPaises();     
}
let EnviarDatos=()=>{
    arrayPaises.push(
        {
            nombre:TxtPais.value,
            pais:TxtUrl.value
        }
    );
    llenarTabla();
}

let llenarTabla=()=>{
    tblPaises.innerHTML+=`
    <tr>
        <td>${arrayPaises[arrayPaises.length-1].nombre}</td>
        <td><img src='${arrayPaises[arrayPaises.length-1].pais}' /></td>
    </tr>`;
}

let llenarTodaLaTabla=()=>{
    for (let posicion = 0; posicion < arrayPaises.length-1; posicion++) {
        tblPaises.innerHTML+=`
        <tr>
            <td>${arrayPaises[posicion].name}</td>
            <td><img src='${arrayPaises[posicion].flag}' /></td>
        </tr>`;        
    }
    console.log('Cargado.');  
}

let CargarDatosApiPaises=async()=>{
    //realiza una peticion get asincrona
   let respuesta= await fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(data =>  data);
   arrayPaises=respuesta;
   llenarTodaLaTabla();
}
let BorrarUltimo=()=>{
    arrayPaises.pop()
    tblPaises.innerHTML="";
    llenarTodaLaTabla()
}