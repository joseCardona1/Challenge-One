let input = document.getElementById("input");
let btnEncriptar = document.getElementById("encriptar");
let mostrar = document.getElementById("mostrar");
let btnDescriptar = document.getElementById("desencriptar");
let btnCopiar = document.getElementById("copiarBtn");

//Función encriptar texto

let encriptar = (txt) =>{

    let script = '';

    for(let i = 0; i < txt.length; i++){

        //Condicionales

        if(txt[i] === 'a'){
            script += "ai";
        }else if(txt[i] === 'e'){
            script += "enter";
        }else if(txt[i] === 'i'){
            script += "imes";
        }else if(txt[i] === 'o'){
            script += "ober";
        }else if(txt[i] === 'u'){
            script += "ufer";
        }else{
            script += txt[i];
        }
    }

    return script;
}

//Función desencriptar texto
let desencriptar = (txt) =>{
    let desencript = txt.replace(/i|nter|mes|ber|fer\n/g,"");
    return desencript;
}

//Mostrar datos de las funciones

let mostrarEncriptar = () =>{
    let txtMostrar = encriptar(input.value);
    mostrar.value = txtMostrar;
}

let mostrarDesecriptar = () =>{
    let txtDescript = desencriptar(mostrar.value);
    mostrar.value = txtDescript;
}

// Función para Seleccionar el text 

let copiarTxt = () =>{
    let copiar = mostrar.select();
    navigator.clipboard.writeText(mostrar.value);
}


//Eventos al momento de darle click
btnEncriptar.onclick = mostrarEncriptar;
btnDescriptar.onclick = mostrarDesecriptar;
btnCopiar.onclick = copiarTxt;