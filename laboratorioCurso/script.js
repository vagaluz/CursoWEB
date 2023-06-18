$(document).ready(function() {
    $('#myForm').submit(function(event) {
        event.preventDefault();

        // Restablecer mensajes de error
        $('.error-message').remove();
        $('.error').removeClass('error');

        var nombre = $('#nombre').val();
        var apellido1 = $('#apellido1').val();
        var apellido2 = $('#apellido2').val();
        var email = $('#email').val();
        var login = $('#login').val();
        var password = $('#password').val();

        // Validación de caracteres mínimos, solo texto y no números
        var nombreValido = /^[a-zA-Z]+$/.test(nombre);
        var apellido1Valido = /^[a-zA-Z]+$/.test(apellido1);
        var apellido2Valido = /^[a-zA-Z]+$/.test(apellido2);

        // Validación del formato de email
        var emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        // Validación de login (solo texto)
        var loginValido = /^[a-zA-Z]+$/.test(login);

        // Validación de password (al menos una letra y un número)
        var passwordValido = /^(?=.*[a-zA-Z])(?=.*\d).+$/.test(password);

        // Validación general
        var formValido = true;

        if (!nombreValido) {
            $('#nombre').addClass('error');
            $('<div class="error-message">Ingrese un nombre válido.</div>').insertAfter('#nombre');
            formValido = false;
        }

        if (!apellido1Valido) {
            $('#apellido1').addClass('error');
            $('<div class="error-message">Ingrese un primer apellido válido.</div>').insertAfter('#apellido1');
            formValido = false;
        }

        if (!apellido2Valido) {
            $('#apellido2').addClass('error');
            $('<div class="error-message">Ingrese un segundo apellido válido.</div>').insertAfter('#apellido2');
            formValido = false;
        }

        if (!emailValido) {
            $('#email').addClass('error');
            $('<div class="error-message">Ingrese un email válido.</div>').insertAfter('#email');
            formValido = false;
        }

        if (!loginValido) {
            $('#login').addClass('error');
            $('<div class="error-message">Ingrese un login válido.</div>').insertAfter('#login');
            formValido = false;
        }

        if (!passwordValido) {
            $('#password').addClass('error');
            $('<div class="error-message">Ingrese una contraseña válida (al menos una letra y un número).</div>').insertAfter('#password');
            formValido = false;
        }

        if (formValido) {
            $.ajax({
                type: 'POST',
                url: 'submit.php',
                data: $(this).serialize(),
                success: function(response) {
                    $('#message').removeClass('failure').addClass('success').text(response);
                    $('#myForm').hide();
                    $('#consultarDatos').show();
                },
                error: function(xhr, status, error) {
                    $('#message').removeClass('success').addClass('failure').text('Error al añadir los datos.');
                }
            });
        } else {
            $('#message').removeClass('success').addClass('failure').text('Datos incorrectos.');
        }
    });

    $('#consultarDatos').click(function() {
        $.ajax({
            type: 'GET',
            url: 'getdata.php',
            success: function(response) {
                var datos = JSON.parse(response);

                if (datos.length > 0) {
                    $('#tablaDatos tbody').empty();

                    for (var i = 0; i < datos.length; i++) {
                        var row = $('<tr>');
                        row.append($('<td>').text(datos[i].nombre));
                        row.append($('<td>').text(datos[i].apellido1));
                        row.append($('<td>').text(datos[i].apellido2));
                        row.append($('<td>').text(datos[i].email));
                        row.append($('<td>').text(datos[i].login));
                        $('#tablaDatos tbody').append(row);
                    }

                    $('#tablaDatos').show();
                } else {
                    $('#message').text('No hay datos disponibles.');
                }
            }
        });
    });
});


// ...

if (formValido) {
    $.ajax({
        // ...
    });
} else {
    $('#message').removeClass('success').addClass('failure').text('Datos incorrectos.');
}

// ...

if (formValido) {
    $.ajax({
        // ...
    });
} else {
    $('#message').removeClass('success').addClass('failure').text('Datos incorrectos.');
}



// Agregar el evento click al botón "Consultar datos"
$('#consultarDatos').click(function() {
    $.ajax({
        type: 'GET',
        url: 'getdata.php',
        success: function(response) {
            var datos = JSON.parse(response);

            if (datos.length > 0) {
                $('#tablaDatos tbody').empty();

                for (var i = 0; i < datos.length; i++) {
                    var row = $('<tr>');
                    row.append($('<td>').text(datos[i].nombre));
                    row.append($('<td>').text(datos[i].apellido1));
                    row.append($('<td>').text(datos[i].apellido2));
                    row.append($('<td>').text(datos[i].email));
                    row.append($('<td>').text(datos[i].login));
                    $('#tablaDatos tbody').append(row);
                }

                $('#tablaDatos').show();
                $('#myForm').hide(); // Ocultar el formulario
            } else {
                $('#message').text('No hay datos disponibles.');
            }
        },
        error: function(xhr, status, error) {
            console.log('Error al obtener los datos:', error);
        }
    });
});
