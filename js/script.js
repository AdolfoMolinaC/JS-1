let savedUser = 'Adolfo';
let savedPass = '8520';


function login() {
    let ingresar = false;

    for (let i = 3; i > 0; i--) {
        let nombreUser = prompt('Ingresa tu Usuario.')
        let passUser = prompt('Ingrese tu contraseña.')
        if (nombreUser === savedUser && passUser === savedPass) {
            alert('Bienvenido/a ' + savedUser);
            ingresar = true;
            break;
        } else {
            alert('Usuario y/o contraseña invalida, te quedan ' + (i - 1) + ' intentos.')
        }
    }
    return ingresar;

}




if (login()) {
    let saldoEnBanco = 20000;
    let opciones = prompt('Elige la opcion que deseas realizar: \n1- Comprar entrada \n2- Comprar en la tienda \n3- Realizar un cambio o devolucion \nPresiona X para salir del sistema')
    while (opciones != 'X' && opciones != 'x') {
        switch (opciones) {
            case '1':
                let opcion = prompt('Elige la Pelicula que deseas ver: \n1- E.T \n2- Jumanji \n3- Tiburon \n4- Rambo \n5- Terminator \nPresiona X para salir del sistema');
                while (opcion != 'X' && opcion != 'x') {
                    switch (opcion) {
                        case '1':
                            alert('Elegiste la pelicula E.T');
                            break;
                        case '2':
                            alert('Elegiste la pelicula Jumanji');
                            break;
                        case '3':
                            alert('Elegiste la pelicula tiburon');
                            break;
                        case '4':
                            alert('Elegiste la pelicula Rambo');
                            break;
                        case '5':
                            alert('Elegiste la pelicula Terminator');
                            break;
                        default:
                            alert('Elegiste un opcion invalida');
                            break;
                    }
                    opcion = prompt('Elige la Pelicula que deseas ver: \n1- E.T \n2- Jumanji \n3- Tiburon \n4- Rambo \n5- Terminator \nPresiona X para salir');
                }
                break;
            case '2':
                let tienda = prompt('Elige tu opcion: \n1- Pochoclos \n2- Gaseosa \n3 Golosinas \nPresiona X para salir');
                while (tienda != 'X' && tienda != 'x') {
                    switch (tienda) {
                        case '1':
                            alert('Elegiste Pochoclos \nprecio 1500');
                            let pochoclos = 1500;
                            if (pochoclos <= saldoEnBanco) {
                                saldoEnBanco -= pochoclos;
                                alert('compraste tus pochoclos y tu saldo en cuenta es de=' + saldoEnBanco);
                            } else {
                                alert('Compra cancelada, saldo insuficiente');
                            }
                            break;
                        case '2':
                            let gaseosa = 1000
                            alert('Elegiste gaseosa son 1000');
                            break;
                        case '3':
                            let golosinas = 850
                            alert('Elegiste golosinas son 850');
                            break;
                        default:
                            alert('Elegiste un opcion invalida');
                            break;
                    }
                    tienda = prompt('Elige tu opcion: \n1- Pochoclos \n2- Gaseosa \n3 Golosinas \nPresiona X para salir');
                }
                break;

            case '3':
                alert('Elegiste la opcion cambio o devolucion');
                break;
            default:
                alert('Elegiste un opcion invalida');
                break;
        }
        opciones = prompt('Elige la opcion que deseas realizar: \n1- Comprar entrada \n2- Comprar en la tienda \n3- Realizar un cambio o devolucion \nPresiona X para salir del sistema')
    }
} else {
    alert('ALERTA!!! \nUsuario bloqueado, solicita restablecer tu contrasena')

}
alert('Adios, hasta la proxima!')