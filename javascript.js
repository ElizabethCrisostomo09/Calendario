let dia = document.getElementById("day");
let mes = document.getElementById("moth");
let año = document.getElementById("year");

let btn_calcular = document.getElementById("btn_calcular");

let resultado = document.getElementById("resultado");


btn_calcular.addEventListener("click", () => {
  
    if (dia.value == "" || mes.value == "" || año.value == "") {
        alert("Todos los campos son obligatorios");
        return;
    }

    if (año.value <= 0) {
        alert("El año debe es mayor a 0");
        return;
    }

    if (mes.value < 1 || mes.value > 12) {
        alert("Solo se puede seleccionar entre  1 al 12 del mes");
        return;
    }

    
    if (dia.value < 1 || dia.value > 31) {
        alert("Solo se puede seleccionar entre 1 al 31 del día");
        return;
    }

    
    let fecha = new Date(año.value, mes.value - 1, dia.value);

    let dia_semana = fecha.getDay();

    let semana = ""; 
    switch (dia_semana) {
        case 0:
            semana = "Domingo";
            break;
        case 1:
            semana = "Lunes";
            break;
        case 2:
            semana = "Martes";
            break;
        case 3:
            semana = "Miércoles";
            break;
        case 4:
            semana = "Jueves";
            break;
        case 5:
            semana= "Viernes";
            break;
        case 6:
            semana = "Sábado";
            break;
    }

    if (dia_semana == 0 || dia_semana == 6) {
        semana += " es día no laboral";
    } else {
        semana += " es día laboral";
    }

    resultado.value = semana;
});