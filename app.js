let welcome = document.querySelector("h1");
welcome.innerHTML ="Hora del desafio"; 

function consoleButtom(){
    console.log("El botón fue clicado");
}

function promptButtom(){
    let city = prompt("Escriba el nombre de una ciudad de Brasil");
    console.log(`estuve en ${city} y me acordé de ti.`);
}    

function alertButtom(){
    alert("Yo amo JS");
}

function sumaButtom(){
    let var1 = prompt("digite un número");
    let var2 = prompt("digite otro número");
    alert(`La suma de los dos números es: ${parseInt(var1) + parseInt(var2)}`);
}