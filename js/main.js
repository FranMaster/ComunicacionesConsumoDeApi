const arrayPaises=[];
let TxtPais;
let TxtUrl;
let BtnEnviar;
let tblPaises;  
window.onload=()=>{
     TxtPais=document.querySelector('#Pais');
     TxtUrl=document.querySelector('#UrlImagen');
     BtnEnviar=document.querySelector('#Enviar');
     tblPaises=document.querySelector('#tabla')  
     BtnEnviar.addEventListener('click',EnviarDatos)    
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