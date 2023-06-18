

 <?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cursosql";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Obtener los valores del formulario
$nombre = $_POST['nombre'];
$apellido1 = $_POST['apellido1'];
$apellido2 = $_POST['apellido2'];
$email = $_POST['email'];
$login = $_POST['login'];
$password = $_POST['password'];

// Preparar y ejecutar la consulta SQL para insertar los datos en la tabla
$sql = "INSERT INTO usuarioslaboratorio (nombre, apellido1, apellido2, email, login, password) VALUES ('$nombre', '$apellido1', '$apellido2', '$email', '$login', '$password')";

if ($conn->query($sql) === TRUE) {
    echo "Datos enviados correctamente.";
} else {
    echo "Error al añadir los datos: " . $conn->error;
}

$conn->close();
?>
