<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de Registro SCIII</title>
    <link rel="stylesheet" href="style.css">
  
</head>

<body>

<div class="group">
    <form method="POST" action="">
        <h2>Formulario de Registro</h2>
            <label for="nombre">Nombre<span><em>(requerido)</em></span></label>
            <input type="text" id="nombre" name="nombre" class="form-input" required>

            <label for="apellido">Apellido<span><em>(requerido)</em></span></label>
            <input type="text" id="apellido" name="apellido" class="form-input" required>

            <label for="email">Email<span><em>(requerido)</em></span></label>
            <input type="email" id="email" name="email" class="form-input" required>

            <input type="submit" class="form-btn" name="submit" value="Suscribirse">

            <div class="message">

                <?php

                if ($_POST) {

                // Obtener los valores del formulario
                $nombre = $_POST["nombre"];
                $apellido = $_POST["apellido"];
                $email = $_POST["email"];

                //Conexion con PDO
                $servername ="localhost";
                $username = "root";
                $password = "";
                $dbname ="cursosql";

                //Crear coneccion
                    $conn = new mysqli ($servername, $username, $password, $dbname);

                //Check coneccion
                if ($conn->connect_error){
                    die ("Conección fallida: " . $conn->connect_error);
                }

                $sql = "INSERT INTO usuario (nombre, apellido, email)
                VALUES ('$nombre', '$apellido', '$email')";

                if ($conn->query($sql) === TRUE){
                    echo "Nuevo usuario creado correctamente";
                } else {
                    echo "Error: " . $sql . "<br>" . $conn->error;
                }

                $conn->close();

                }

                ?>


    </form>
</div>

<script src="javascript.js"></script>

</body>
</html>