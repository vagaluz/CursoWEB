  // Obtener referencia al elemento del mensaje
  const messageElement = document.querySelector('.message');

  // Función para ocultar el mensaje después de 10 segundos
  function hideMessage() {
    messageElement.style.display = 'none';
  }

  // Mostrar el mensaje inicialmente
  messageElement.style.display = 'block';

  // Programar el ocultamiento del mensaje después de 10 segundos
  setTimeout(hideMessage, 5000);
