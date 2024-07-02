<?php
$servername = "localhost";
$user = "root";
$password = "axel24845";
$database = "infinitedungeon";

// Crear conexión
$conn = new mysqli($servername, $user, $password, $database);

// Verificar la conexión
if ($conn->connect_error) {
    die("No se pudo conectar al servidor: " . $conn->connect_error);
} else {
    echo "<b><h3>Conexión exitosa al servidor</h3></b>";
}

// Verificar si se envió el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario y sanitizarlos
    $nombre = mysqli_real_escape_string($conn, $_POST["nombreUS"]);
    $correo = mysqli_real_escape_string($conn, $_POST["correoELEC"]);
    $contraseña = mysqli_real_escape_string($conn, $_POST["contraseña"]);

    // Preparar la consulta SQL para insertar un nuevo registro
    $sql = "INSERT INTO usuarios (nombreUS, correoELEC, contraseña) VALUES ('$nombre', '$correo', '$contraseña')";

    // Ejecutar la consulta
    if ($conn->query($sql) === TRUE) {
        // Redirigir al usuario de vuelta a la página de inicio con un parámetro en la URL para indicar el registro exitoso
        header("Location: index.php?registro=exitoso");
        exit();
    } else {
        echo "Error al insertar el registro: " . $conn->error;
    }
}

// Cerrar la conexión
$conn->close();
?>