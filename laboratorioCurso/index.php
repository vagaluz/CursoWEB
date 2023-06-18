<!DOCTYPE html>
<html>
<head>
    <title>Formulario</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="script.js"></script>
    <link rel="stylesheet" href="style.css">

</head>
<body>
<div class="container">
        <div class="form-box">
            <form id="myForm">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required>

                <label for="apellido1">Primer apellido:</label>
                <input type="text" id="apellido1" name="apellido1" required>

                <label for="apellido2">Segundo apellido:</label>
                <input type="text" id="apellido2" name="apellido2" required>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>

                <label for="login">Login:</label>
                <input type="text" id="login" name="login" required>

                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required>

                <input type="submit" value="Enviar">
                <div id="message"></div>
            </form>

            <button id="consultarDatos" style="display: none;">Consultar datos</button>
            <table id="tablaDatos" style="display: none;">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Primer Apellido</th>
                        <th>Segundo Apellido</th>
                        <th>Email</th>
                        <th>Login</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    </div>
</body>
</html>

