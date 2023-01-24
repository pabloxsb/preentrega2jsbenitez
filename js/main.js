class CrearCliente {
    constructor(nombre, fecha, horario, servicio) {
            this.nombre = String(nombre);
            this.fecha = Number(fecha);
            this.horario = Number(horario);
            this.servicio = Number(servicio);
        }
        //Metodos
    turnosDado() {
            if (this.horario >= 8 && this.horario <= 20) {
                switch (this.servicio) {
                    case 1:
                        let lavadoExterior = 1200;
                        return (
                            this.datosIngresados() +
                            ("\nEl costo del lavado Exterior es de: $" + lavadoExterior)
                        );

                    case 2:
                        let lavadoInteriorExterior = 1800;
                        return (
                            this.datosIngresados() +
                            ("\nEl costo del lavado Interior e Exterior es de: $" +
                                lavadoInteriorExterior)
                        );

                    case 3:
                        let CompletoConChasis = 2500;
                        return (
                            this.datosIngresados() +
                            ("\nEl costo del lavado Completo Con Chasis es de: $" +
                                CompletoConChasis)
                        );
                }
            }
        }
        //Metodos
    datosIngresados() {
        return (
            "Su nombre es: " +
            this.nombre +
            "\n" +
            "Su turno es el dia: " +
            this.fecha +
            "\n" +
            "En el horario de: " +
            this.horario +
            " hs"
        );
    }
}

// Funcion De Validacion
function validarQueSeaTexto(mensaje) {
    let respuesta = prompt(mensaje);
    while (
        respuesta == null ||
        respuesta.trim() == "" ||
        !isNaN(Number(respuesta))
    ) {
        respuesta = prompt("No puede avanzar sino ingresa un nombre.\n " + mensaje);
    }
    return respuesta;
}
//
function validarQueSeaNumero(mensaje, tipo) {
    //Funcion Para validar Que Sea solo Numero.
    let respuesta = prompt(mensaje);
    while (
        respuesta == null ||
        respuesta.trim() == "" ||
        isNaN(Number(respuesta))
    ) {
        respuesta = prompt("No puede avanzar sino ingresa un numero." + mensaje);
    }

    if (tipo == "hora") {
        //valido si ingresa una hora incorrecta
        while (respuesta < 8 || respuesta > 20) {
            alert("El horario ingresado es incorecto");
            respuesta = prompt("Por favor Ingrese una hora correcta");
        }
        return Number(respuesta);
    } else if (tipo == "servicio") {
        //valido si elije una opcion incorrecta
        while (respuesta < 1 || respuesta > 3) {
            alert("La opcion del servicio ingresado es incorecto");
            respuesta = prompt(
                "Por favor Ingrese una opcion correcta \n\n 1 - Lavado exterior \n 2 - Lavado exterior e interior \n 3 - Lavado completo con chasis"
            );
        }
        return Number(respuesta);
    }
    return Number(respuesta);
}
//funcion que imprime los elementos
function imprimirDatos(elem) {
    if (elem.servicio == 1) {
        console.log(
            "Nombre: " +
            elem.nombre +
            "\nFecha: " +
            elem.fecha +
            "\nHorario: " +
            elem.horario +
            "\nServicio: lavado exterior"
        );
    } else if (elem.servicio == 2) {
        console.log(
            "Nombre: " +
            elem.nombre +
            "\nFecha: " +
            elem.fecha +
            "\nHorario: " +
            elem.horario +
            "\nServicio: lavado exterior e interior"
        );
    } else if (elem.servicio == 3) {
        console.log(
            "Nombre: " +
            elem.nombre +
            "\nFecha: " +
            elem.fecha +
            "\nHorario: " +
            elem.horario +
            "\nServicio: Lavado completo con chasis"
        );
    } else {
        alert("No ingreso una fecha");
    }
}

function filtrarPorFecha(fecha) {
    console.log("Las reservas del dia " + fecha + " son");
    let filtro = clientesIngresados.filter((elem) => elem.fecha == fecha);
    filtro.forEach((elem) => imprimirDatos(elem));
}
// funcion que muestra la lista de clientes
function mostrarListaClientes() {
    clientesIngresados.forEach((cliente) => {
        console.log(cliente.turnosDado());
    });
    lista += clientesIngresados + "\n";
}
//funcion que ingresa al cliente
function ingresarCliente() {
    // solicito los datos
    let nombre = validarQueSeaTexto("Ingrese Nombre");
    let fecha = validarQueSeaNumero("Ingrese un dia");
    //valida primero que sea numero y despues que sea la franja horaria
    let horario = validarQueSeaNumero("Ingrese una hora", "hora");

    //valida primero que sea numero y despues que sea la franja horaria
    let servicio = validarQueSeaNumero(
        "Ingrese un servicio: \n 1 - Lavado Exterior \n 2 - Lavado Exterior y Interior \n 3 - Lavado Completo Con Chasis",
        "servicio"
    );

    // luego de validar creo el cliente
    let cliente = new CrearCliente(nombre, fecha, horario, servicio);

    //muestro por pantalla para asegurarame que esta cargando datos
    alert(cliente.turnosDado());
    //ingresan los datos al array
    clientesIngresados.push(cliente);
}

/* codigo de inicio*/

//inicio vacio
let menu;
let lista = "";

const clientesIngresados = [];

//menu
do {
    menu = Number(
        prompt(
            "Elija una opcion:\n\n\
            1- Ingresar Cliente \n\
            2- Mostrar Lista de Clientes Ingresados \n\
            3- Filtar Cliente Por Fechas \n\
            0- Salir"
        )
    );
    switch (menu) {
        case 1:
            ingresarCliente();
            break;
        case 2:
            mostrarListaClientes();
            break;
        case 3:
            let filtrados = prompt("Ingresa la fecha a filtrar");
            filtrarPorFecha(filtrados);
            break;
        case 0:
            alert("Gracias por tu visita, te esperamos pronto!");
            break;
        default:
            alert("No ingreso ninguna opcion");
            break;
    }
} while (menu != 0);